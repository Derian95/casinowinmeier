import axios from "axios";
import { UrlApiIAS } from "../common/models";

const apiSelected =UrlApiIAS.producction

export const iasApi = axios.create({
       baseURL:apiSelected,
    //    baseURL:'http://192.168.1.200:801/IAS',
        // baseURL:'https://grupogladcon.com/ias',
  
})

