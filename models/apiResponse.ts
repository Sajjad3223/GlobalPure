import type {MetaData} from "~/models/metaData";

export interface ApiResponse<TData> {
    isSuccess: boolean;
    data: TData | undefined;
    metaData: MetaData;
}