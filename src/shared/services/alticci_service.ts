import { axiosInstance } from "../config/axios_instance";

export class AlticciService {

    public async calculate(n: number): Promise<number> {
        const response = await axiosInstance.get(`/alticci/${n}`);
        return parseInt(response.data);
    }
}