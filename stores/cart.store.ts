import {
    AddToCart,
    DecreaseCount,
    DeleteAllItems,
    DeleteItem,
    GetPendingOrder,
    IncreaseCount, RemoveDiscount, SetDiscount
} from "~/services/cart.service";
import {
    type Order,
    type OrderItem,
    OrderStatus,
    type SetOrderDiscountCommand
} from "~/models/cart/orderData";
import {ToastType} from "~/composables/useToast";
import {GetProductBySlug} from "~/services/product.service";
import {type Price, PriceUnit} from "~/models/commonTypes";


export const useCartStore = defineStore("cart", () => {
    const PendingOrder: Ref<Order | null | undefined> = ref(null);
    const cartItemsCount = ref(0);
    const cartLoading = ref(false);
    const showAddedToCartModal = ref(false);
    const showCartModal = ref(false);
    const showShippingModal = ref(false);

    const toast = useToast();
    const authStore = useAuthStore();
    //@ts-ignore
    let cartCookie: CookieRef<string | null | undefined> = ref();
    const getCartCookie = () => {
        if (cartCookie.value) return cartCookie.value;
        else {
            cartCookie = useCookie("g-cart", {
                watch: true,
                expires: new Date(new Date().setDate(new Date().getDate() + 30)),
            });
            return cartCookie.value;
        }
    }

    const globalStore = useGlobalStore();
    const getTotalPrice = computed(()=>{
        let prices = PendingOrder.value?.orderItems.map(i=>i.prices.find(p=>p.unit == globalStore.currentCurrency)!.amount * i.quantity) ?? [0];
        const sum = [...prices].reduce((a,b)=>{
            return a + b;
        },0);
        return sum.toFixed(2);
    });

    const getTotalPriceInUnit = (currency:PriceUnit)=>{
        let prices = PendingOrder.value?.orderItems.map(i=>i.prices.find(p=>p.unit == currency)!.amount * i.quantity) ?? [0];
        return [...prices].reduce((a,b)=>{
            return a + b;
        },0);
    }

    const addToCart = async (id: number, slug: string, count: number = 1): Promise<boolean> => {
        let addResult = false;
        if (authStore.isLoggedIn) {
            //If user is logged in request to server for add to Cart
            const result = await AddToCart({productId:id,count});
            if (result.isSuccess) {
                addResult = true;
                toast.showToast(result.metaData.message)
            } else {
                toast.showToast(result.metaData.message, ToastType.error, 0);
            }
        } else {
            // If user is not logged in save items in cookie
            let cartData: Order = getCartCookie();

            if (cartData === null || cartData === undefined) {
                //@ts-ignore
                cartData = {
                    id:1,
                    isActive:true,
                    address:null,
                    discount:null,
                    creationDate:new Date(),
                    orderItems:[],
                    status:OrderStatus.Pending,
                    userId:null,
                    finallyDate:null,
                    fullName:null,
                    transmissionPrice:null
                } as Order;
            }

            const item = cartData.orderItems.find(i => i.productData.id === id);
            if (item != undefined) {
                item.quantity++;
                cartCookie.value = cartData;
                refreshCookie('g-cart');
                addResult = true;
            }
            else {
                const product = await GetProductBySlug(slug);
                if (!product.isSuccess) {
                    toast.showToast('در افزودن محصول به سبد خرید مشکلی پیش آمد', ToastType.error, 0);
                } else {
                    const itemToAdd: OrderItem = {
                        id: cartData.orderItems.length + 1,
                        productData: {
                            title: product.data!.title!,
                            image: product.data!.mainImage!,
                            slug: product.data!.slug!,
                            id: product.data!.id!
                        },
                        quantity: count,
                        orderId: cartData.id,
                        creationDate: new Date(),
                        isActive:true,
                        prices:product.data?.prices.map(p=>{
                            return {unit:p.price.unit, amount:p.price.amount} as Price
                        }) ?? []
                    };
                    cartData.orderItems.push(itemToAdd);

                    cartCookie.value = cartData;
                    refreshCookie('g-cart');
                    addResult = true;

                }
            }
        }

        await refreshCart();
        return addResult;
    }

    /*const showAddedToCart = async (slug: string) => {
        const product = await GetProduct(slug);
        if (product.isSuccess) {
            currentAddedItemData.value = {
                image: product.data?.mainImage,
                title: product.data?.title
            } as AddedItemData;
        }

        showAddedToCartModal.value = true;
    }*/

    const refreshCart = async () => {
        cartLoading.value = true;

        if (authStore.isLoggedIn) {
            const result = await GetPendingOrder();
            if (result.isSuccess) {
                PendingOrder.value = result.data;
                cartItemsCount.value = result.data?.orderItems.length ?? 0;
            }
        } else {
            let cartData: Order = getCartCookie();
            if (!cartData) return;

            PendingOrder.value = cartData;
            cartItemsCount.value = cartData.orderItems.length ?? 0;
            cartCookie.value = cartData;
            refreshCookie('g-cart');
        }

        cartLoading.value = false;
    }

    const increaseCount = async (itemId: number) => {
        cartLoading.value = true;

        if (authStore.isLoggedIn) {
            const result = await IncreaseCount(itemId);
        } else {
            let cartData: Order = getCartCookie();

            if (cartData === undefined || cartData === null) return false;

            const item = cartData.orderItems.find(i => i.id === itemId);
            if (item != undefined) {
                item.quantity++;
                cartCookie.value = cartData;
                refreshCookie('g-cart');
            }
        }
    }
    const decreaseCount = async (itemId: number) => {
        cartLoading.value = true;

        if (authStore.isLoggedIn) {
            const result = await DecreaseCount(itemId);
        } else {
            let cartData: Order = getCartCookie();

            if (cartData === undefined || cartData === null) return false;

            const item = cartData.orderItems.find(i => i.id === itemId);
            if (item != undefined) {
                item.quantity--;
                cartCookie.value = cartData;
                refreshCookie('g-cart');
            }
        }
    }

    const removeItem = async (itemId: number) => {
        cartLoading.value = true;

        if (authStore.isLoggedIn) {
            const result = await DeleteItem(itemId);
        } else {
            let cartData: Order = getCartCookie();

            if (cartData === undefined || cartData === null) return false;

            const item = cartData.orderItems.find(i => i.id === itemId);
            if (item != undefined) {
                const index = cartData.orderItems.indexOf(item);
                if (index > -1)
                    cartData.orderItems.splice(index, 1);

                cartCookie.value = cartData;
                refreshCookie('g-cart');
            }
        }
        await refreshCart();
    }

    const removeAllItems = async () => {
        cartLoading.value = true;
        if (!authStore.isLoggedIn) {
            cartCookie.value = null;
            refreshCookie('g-cart');
        } else {
            const result = await DeleteAllItems();
            if (!result.isSuccess) {
                toast.showToast(result.metaData.message, ToastType.error, 3000, true);
            }
        }
        await refreshCart();
    }

    const setOrderId = (id:number)=>{
        let cartData: Order = getCartCookie();
        if (cartData) {
            cartData.id = id;
            cartCookie.value = cartData;
            refreshCookie('g-cart');
        }
    }

    const setOrderDiscount = async (data: SetOrderDiscountCommand) => {
        cartLoading.value = true;

        if(authStore.isLoggedIn){
            await SetDiscount(data);
        }else {
            let cartData: Order = getCartCookie();
            if (cartData) {
                cartData.discount = {code:data.code,amount:0};
                cartCookie.value = cartData;
                refreshCookie('g-cart');
            }
        }

        cartLoading.value = false;
    }
    const removeDiscount = async () => {
        cartLoading.value = true;

        if(authStore.isLoggedIn){
            await RemoveDiscount();
        }
        else{
            let cartData: Order = getCartCookie();
            if (cartData) {
                cartData.discount = {code: '', amount: 0};
                cartCookie.value = cartData;
                refreshCookie('g-cart');
            }
        }

        cartLoading.value = false;
    }

    const transferOrder = async () => {
        cartLoading.value = true;

        let cartData: Order = getCartCookie();
        if (cartData !== undefined) {
            for (const item of cartData.orderItems) {
                await AddToCart({productId:item.productData.id, count:item.quantity});
            }
            /*if (cartData.discount.code != null)
                await SetDiscount({discountCode: cartData.discount.code, phoneNumber: ''} as SetOrderDiscountCommand);*/
        }
        cartCookie.value = null;
        refreshCookie('g-cart');

        cartLoading.value = false;
    }

    return {
        addToCart,
        refreshCart,
        PendingOrder,
        cartItemsCount,
        setOrderId,
        cartLoading,
        increaseCount,
        decreaseCount,
        removeItem,
        transferOrder,
        removeAllItems,
        showAddedToCartModal,
        showCartModal,
        showShippingModal,
        setOrderDiscount,
        removeDiscount,
        getTotalPrice,
        getTotalPriceInUnit,
    };
})