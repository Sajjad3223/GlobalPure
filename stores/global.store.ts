import {PriceUnit} from "~/models/commonTypes";


export const useGlobalStore = defineStore('global',()=> {
    const currentCurrency: Ref<PriceUnit> = ref(PriceUnit.USD);

    const setCurrency = (unit:PriceUnit) =>{
        currentCurrency.value = unit;
    }

    return{
        currentCurrency,
        setCurrency
    }
})