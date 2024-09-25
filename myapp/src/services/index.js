import axios from "axios";
import { DATA_URL} from "../constant/url";
import * as https from "https";



export const getHomeData = ()=>{
    return axios.get(`${DATA_URL}/home.json`)
}

export const getLayoutData = () => {
    return axios.get(`${DATA_URL}/layout.json`)    
}
