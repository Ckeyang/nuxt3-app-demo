import { doGet, doPost, doPut } from "~~/utils/axios/http";
import api from "./api";
const loginApi = {
    login: (params: any) => doPost(api.login, params),
    test: (url: string, method: string, params: any) => {
        let result = null;
        switch (method) {
            case 'GET': result = doGet(url, { params }); break;
            case 'POST': result = doPost(url, params); break;
            case 'PUT': result = doPut(url, params); break;
        }
        return result
    }
}
export default loginApi;