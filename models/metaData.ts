export interface MetaData {
    message: string;
    appStatusCode: ApiStatusCode;
}

export enum ApiStatusCode{
    Success = 1,
    NotFound,
    BadRequest,
    LogicError,
    UnAuthorize,
    ServerError
}