import axios from "axios";
import { UrlMambosPlayerTraking } from "../common/models";

const apiSelected =UrlMambosPlayerTraking.development

export const iasApi = axios.create({
       baseURL:apiSelected,
})

