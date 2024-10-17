import {PriceUnit} from "~/models/commonTypes";
import type {SiteData} from "~/models/site/siteData";
import {GetSiteSettings} from "~/services/site.service";


export const useGlobalStore = defineStore('global',()=> {
    const currentCurrency: Ref<PriceUnit> = ref(PriceUnit.USD);
    const siteSettings:Ref<SiteData | null> = ref(null);

    const setCurrency = (unit:PriceUnit) =>{
        currentCurrency.value = unit;
    }

    const toast = useToast();
    const initSiteSettings = async ()=>{
        const result = await GetSiteSettings();
        if(result.isSuccess){
            siteSettings.value = result.data ?? null;
        }else{
            toast.showError(result.metaData);
        }
    }

    return{
        currentCurrency,
        setCurrency,
        initSiteSettings,
        siteSettings
    }
})