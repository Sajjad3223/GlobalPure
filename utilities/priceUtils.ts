export const roundPrice = (price:number,toTooman:boolean = true,roundnessThreshold:number = 10000) => {
    //e.g. 73,546 IRR
    const roundValue = Math.ceil(price / roundnessThreshold) * roundnessThreshold; //73,000 IRR
    return toTooman ? (roundValue / 10) : roundValue;
}
export const getDiscountValue = (price:number,discount:number,toTooman:boolean = true,roundnessThreshold:number = 10000) => {
    const discountedPrice = price * (discount ?? 0 / 100);
    const roundValue = Math.ceil(discountedPrice / roundnessThreshold) * roundnessThreshold;
    return toTooman ? (roundValue / 10) : roundValue;

}
export const calcDiscountPrice = (price:number,discount:number,toTooman:boolean = true,roundnessThreshold:number = 10000) => {
    const discountedPrice = price - (price * (discount / 100));
    const roundValue = Math.ceil(discountedPrice / roundnessThreshold) * roundnessThreshold;
    return toTooman ? (roundValue / 10) : roundValue;
}