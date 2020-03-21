import {DatabaseManager} from "../core/DatabaseManager";
import {Log} from "../utils/Log";
import {DSTModel, DSTModelJson} from "./DSTModel";

export class DSTManager {
    private static TABLE: string = 'data_subject_type';

    public static async getDSTById(dstId: number): Promise<DSTModel> {
        const resultJson = (await DatabaseManager.getInstance().get(DSTManager.TABLE, dstId)) as DSTModelJson;
        const biz = new DSTModel(resultJson);
        return biz;
    }

    public static async getDSTByIndustry(industry_id: number): Promise<DSTModel[]> {
        const resultJson = (await DatabaseManager.getInstance()
            .query(
                `SELECT data_subject_type.id, data_subject_type.title, data_subject_type.description FROM dst_industry_map inner join data_subject_type on dst_industry_map.dst_id = data_subject_type.id where dst_industry_map.industry_id = ${industry_id}`
            )) as DSTModelJson[];
        return resultJson.map((json) => {
            return new DSTModel(json);
        });
    }
}