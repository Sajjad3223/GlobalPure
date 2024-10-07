export interface Price{
    unit: PriceUnit;
    amount: number;
}

export enum PriceUnit{
    CAD,
    USD,
    EUR,
    QAR,
    USDT
}

export const getPriceUnitSymbol = (unit:PriceUnit)=>{
    switch (unit){
        case PriceUnit.CAD: return '$';
        case PriceUnit.USD: return '$';
        case PriceUnit.EUR: return '€';
        case PriceUnit.QAR: return 'ریال';
        case PriceUnit.USDT: return '₮';
    }
}