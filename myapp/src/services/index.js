import axios from "axios";
import { DATA_URL} from "../constant/url";



export const getHomeData = ()=>{
    return axios.get(`${DATA_URL}/home.json`)
}

export const getLayoutData = () => {
    return axios.get(`${DATA_URL}/layout.json`)    
}
