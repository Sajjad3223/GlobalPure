import {EPackingType} from "~/models/product/EPackingType";
import type {GSelectData} from "~/models/gSelectData";

export function getEnumValuesForSelect<T>(enumType:any) : GSelectData[] {
    return Object.values<T>(enumType).filter((t:any) => isNaN(t)).map((p:any) => {
        return {
            title: p.replaceAll('_', ' '),
            value: EPackingType[p]
        } as GSelectData;
    });
}

export const getRandomId = (range:number = 100000)=>{
    return Math.floor(Math.random() * range);
}