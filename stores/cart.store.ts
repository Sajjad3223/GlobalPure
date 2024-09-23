// @ts-nocheck
import {
    AddToCart,
    DecreaseCount,
    GetPendingOrder,
    IncreaseCount,
    RemoveAllItems,
    RemoveItem,
    SetDiscount
} from "~/services/cart.service";
import {type DiscountData, EOrderStatus, type OrderDto, type OrderItem} from "~/models/cart/cartQueries";
import {ToastType} from "~/composables/useToast";
import type {ApiResponse} from "~/models/apiResponse";
import {GetProduct} from "~/services/product.service";
import {ApiStatusCode} from "~/models/metaData";
import {EItemType} from "~/models/EPostType";
import type {Img} from "~/models/image";
import type {SetOrderDiscountCommand} from "~/models/cart/cartCommands";

export interface AddedItemData {
    image: Img;
    title: string;
}

export const useCartStore = defineStore("cart", () => {
    const PendingOrder: Ref<OrderDto | null | undefined> = ref(null);
    const cartItemsCount = ref(0);
    const cartLoading = ref(false);
    const showAddedToCartModal = ref(false);
    const showCartModal = ref(false);
    const showShippingModal = ref(false);
    const currentAddedItemData: Ref<AddedItemData | null | undefined> = ref(null);

    const toast = useToast();
    const authStore = useAuthStore();
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

    const addToCart = async (id: number, slug: string, count: number = 1): Promise<boolean> => {
        let addResult = false;
        if (authStore.isLoggedIn) {
            //If user is logged in request to server for add to Cart
            const result = await AddToCart(id, count);
            if (result.isSuccess) {
                addResult = true;
            } else {
                toast.showToast('در افزودن محصول به سبد خرید مشکلی پیش آمد', ToastType.error, 0);
            }
        } else {
            // If user is not logged in save items in cookie
            let cartData: OrderDto = getCartCookie();

            if (cartData === null || cartData === undefined) {
                cartData = {
                    id: 1,
                    orderItems: [],
                    creationDate: new Date(),
                    totalPrice: 0,
                    discount: {
                        amount: 0,
                        code: ''
                    },
                    finallyDate: null,
                    finallyPrice: 0,
                    fullName: '',
                    getFinalPrice: 0,
                    isActive: true,
                    itemsCount: 0,
                    isFinally: false,
                    orderStatus: EOrderStatus.Pending,
                    userId: 0,
                    referCode: null,
                    persianDate: '',
                    persianTime: ''
                } as OrderDto;
            }

            const item = cartData.orderItems.find(i => i.itemInfo.productId === id);
            if (item != undefined) {
                item.count++;
                item.totalPrice = item.count * item.price;
                cartCookie.value = cartData;
                refreshCookie('g-cart');
                addResult = true;
            } else {
                const product = await GetProduct(slug);
                if (!product.isSuccess) {
                    await toast.showToast('در افزودن محصول به سبد خرید مشکلی پیش آمد', ToastType.error, 0);
                } else {
                    const itemToAdd: OrderItem = {
                        id: cartData.orderItems.length + 1,
                        itemInfo: {
                            productName: product.data!.title!,
                            productImage: product.data!.mainImage!,
                            eItemType: EItemType.Saffron,
                            productSlug: product.data!.slug!,
                            productId: product.data!.id!,
                            packingType: product.data?.packingType!,
                            weight: product.data?.weight!,
                            healthNumber: product.data?.healthNumber!
                        },
                        count: 1,
                        price: product.data!.price!,
                        totalPrice: product.data!.totalPrice!,
                        orderId: cartData.id,
                        creationDate: new Date()
                    };
                    cartData.orderItems.push(itemToAdd);

                    cartCookie.value = cartData;
                    refreshCookie('g-cart');
                    addResult = true;

                }
            }
        }

        await refreshCart();
        if (addResult) {
            showAddedToCart(slug);
        }
        return addResult;
    }

    const showAddedToCart = async (slug: string) => {
        const product = await GetProduct(slug);
        if (product.isSuccess) {
            currentAddedItemData.value = {
                image: product.data?.mainImage,
                title: product.data?.title
            } as AddedItemData;
        }

        showAddedToCartModal.value = true;
    }

    const refreshCart = async () => {
        cartLoading.value = true;

        if (authStore.isLoggedIn) {
            const result = await GetPendingOrder();
            if (result.isSuccess) {
                PendingOrder.value = result.data;
                cartItemsCount.value = result.data?.itemsCount ?? 0;
            }
        } else {
            let cartData: OrderDto = getCartCookie();
            if (!cartData) return;

            cartData.itemsCount = cartData.orderItems.length;
            let cartTotalPrice = 0;
            cartData.orderItems.forEach(i => cartTotalPrice += i.totalPrice);
            cartData.totalPrice = cartTotalPrice;
            cartData.finallyPrice = cartData.totalPrice - (cartData.totalPrice * (cartData.discount.amount / 100));
            cartData.getFinalPrice = cartData.finallyPrice;

            PendingOrder.value = cartData;
            cartItemsCount.value = cartData.itemsCount ?? 0;
            cartCookie.value = cartData;
            refreshCookie('g-cart');
        }

        cartLoading.value = false;
    }

    const increaseCount = async (itemId: number): Promise<boolean> => {
        cartLoading.value = true;

        if (authStore.isLoggedIn) {
            const result = await IncreaseCount(itemId);
            return handleResult(result);
        } else {
            let cartData: OrderDto = getCartCookie();

            if (cartData === undefined || cartData === null) return false;

            const item = cartData.orderItems.find(i => i.id === itemId);
            if (item != undefined) {
                item.count++;
                item.totalPrice = item.count * item.price;
                cartCookie.value = cartData;
                refreshCookie('g-cart');
                return handleResult({
                    isSuccess: true,
                    metaData: {appStatusCode: ApiStatusCode.Success, message: 'عملیات با موفقیت انجام شد'}
                })
            } else {
                return handleResult({
                    isSuccess: false,
                    metaData: {appStatusCode: ApiStatusCode.Success, message: 'محصول یافت نشد'}
                })
            }
        }
    }
    const decreaseCount = async (itemId: number): Promise<boolean> => {
        cartLoading.value = true;

        if (authStore.isLoggedIn) {
            const result = await DecreaseCount(itemId);
            return handleResult(result);
        } else {
            let cartData: OrderDto = getCartCookie();

            if (cartData === undefined || cartData === null) return false;

            const item = cartData.orderItems.find(i => i.id === itemId);
            if (item != undefined) {
                item.count--;
                item.totalPrice = item.count * item.price;
                cartCookie.value = cartData;
                refreshCookie('g-cart');
                return handleResult({
                    isSuccess: true,
                    metaData: {appStatusCode: ApiStatusCode.Success, message: 'عملیات با موفقیت انجام شد'}
                })
            } else {
                return handleResult({
                    isSuccess: false,
                    metaData: {appStatusCode: ApiStatusCode.Success, message: 'محصول یافت نشد'}
                })
            }
        }
    }

    const handleResult = async (result: ApiResponse<any>): Promise<boolean> => {
        if (result.isSuccess) {
            toast.showToast(result.metaData.message, ToastType.success, 1500, true);
        } else {
            toast.showToast(result.metaData.message, ToastType.error, 1500, true);
            return false;
        }

        cartLoading.value = false;
        await refreshCart();
        return true;
    }

    const removeItem = async (itemId: number): Promise<boolean> => {
        cartLoading.value = true;

        if (authStore.isLoggedIn) {
            const result = await RemoveItem(itemId);
            return handleResult(result);
        } else {
            let cartData: OrderDto = getCartCookie();

            if (cartData === undefined || cartData === null) return false;

            const item = cartData.orderItems.find(i => i.id === itemId);
            if (item != undefined) {
                const index = cartData.orderItems.indexOf(item);
                if (index > -1)
                    cartData.orderItems.splice(index, 1);

                cartCookie.value = cartData;
                refreshCookie('g-cart');
                await refreshCart();
                return handleResult({
                    isSuccess: true,
                    metaData: {appStatusCode: ApiStatusCode.Success, message: 'عملیات با موفقیت انجام شد'}
                })
            } else {
                return handleResult({
                    isSuccess: false,
                    metaData: {appStatusCode: ApiStatusCode.Success, message: 'محصول یافت نشد'}
                })
            }
        }
    }

    const removeAllItems = async () => {
        cartLoading.value = true;
        if (!authStore.isLoggedIn) {
            cartCookie.value = null;
            refreshCookie('g-cart');
        } else {
            const result = await RemoveAllItems();
            if (!result.isSuccess) {
                await toast.showToast(result.metaData.message, ToastType.error, 3000, true);
            }
        }
        await refreshCart();
    }

    const setOrderDiscount = (data: DiscountData) => {
        cartLoading.value = true;

        let cartData: OrderDto = getCartCookie();
        if (cartData) {
            cartData.discount = data;
            cartCookie.value = cartData;
            refreshCookie('g-cart');
        }

        cartLoading.value = false;
    }
    const removeDiscount = () => {
        cartLoading.value = true;

        let cartData: OrderDto = getCartCookie();
        if (cartData) {
            cartData.discount = {code: '', amount: 0};
            cartCookie.value = cartData;
            refreshCookie('g-cart');
        }

        cartLoading.value = false;
    }
    const transferOrder = async () => {
        cartLoading.value = true;

        let cartData: OrderDto = getCartCookie();
        if (cartData !== undefined) {
            for (const item of cartData.orderItems) {
                await AddToCart(item.itemInfo.productId, item.count);
            }
            if (cartData.discount.code != null)
                await SetDiscount({discountCode: cartData.discount.code, phoneNumber: ''} as SetOrderDiscountCommand);
        }
        cartCookie.value = null;
        refreshCookie('g-cart');

        cartLoading.value = false;
        //location.reload();
    }

    return {
        addToCart,
        refreshCart,
        PendingOrder,
        cartItemsCount,
        cartLoading,
        increaseCount,
        decreaseCount,
        removeItem,
        transferOrder,
        removeAllItems,
        showAddedToCartModal,
        currentAddedItemData,
        showCartModal,
        showShippingModal,
        setOrderDiscount,
        removeDiscount
    };
})