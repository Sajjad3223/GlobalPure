export const toEnglishDigits = (str:string) => {

    // convert persian digits [۰۱۲۳۴۵۶۷۸۹]
    let e = '۰'.charCodeAt(0);
    str = str.replace(/[۰-۹]/g, (t) => (t.charCodeAt(0) - e).toString());

    // convert arabic indic digits [٠١٢٣٤٥٦٧٨٩]
    e = '٠'.charCodeAt(0);
    str = str.replace(/[٠-٩]/g, (t) => (t.charCodeAt(0) - e).toString());
    return str;
}