import {BusinessModel, BusinessModelJson} from "./BusinessModel";
import {DatabaseManager} from "../core/DatabaseManager";
import {Log} from "../utils/Log";

export class BusinessManager {
    private static TABLE : string = 'business';
    public static async createNewBusiness(json : BusinessModelJson) : Promise<BusinessModel>{
        json.id = await DatabaseManager.getInstance().insert(BusinessManager.TABLE, json);
        const biz = new BusinessModel(json);
        return biz;
    }
    public static async getBusinessById(businessId: number) : Promise<BusinessModel>{
        const resultJson = (await DatabaseManager.getInstance().get(BusinessManager.TABLE, businessId)) as BusinessModelJson;
        const biz = new BusinessModel(resultJson);
        return biz;
    }
}