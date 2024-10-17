import type {BaseDto} from "~/models/baseDto";

export interface SiteData {
    banners: Banner[]
    socialNetworks: SocialNetwork[]
    companyAddress: CompanyAddress
    aboutUsData: AboutUsData
}

export interface Banner extends BaseDto{
    imageName: string
    order: number
}

export interface SocialNetwork extends BaseDto{
    title: string
    link: string
    app: SocialNetworkApp
}

export enum SocialNetworkApp{
    Telegram,
    Instagram,
    Youtube,
    Facebook,
    Whatsapp,
    X,
    Pinterest
}

export interface CompanyAddress {
    address: string
    shortAddress: string
    email: string
    phone: string
    openingHours: string
}

export interface AboutUsData {
    ourStory: string
    imageName: string
    value1: CompanyValue
    value2: CompanyValue
    value3: CompanyValue
}

export interface CompanyValue {
    title: string
    content: string
    overlayImage: string
}