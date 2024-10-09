import { getHomeData, getLayoutData } from '../services/index.js';
import { homeStoreData, layoutStoreData } from '../store/store.js';

let acceptedLangs= ["tr","en"]

export const load = async ({params,url}) =>{
    let homeData = null;
    let layoutData = null
    await getHomeData().then(result=>{
        if(result && result.data && result.data.success){
            homeData = result.data.success;
            homeStoreData.update(result=>result=homeData);    
        }
    })
    await getLayoutData().then(result=>{
        if(result && result.data && result.data.success){
            layoutData = result.data.success;
            layoutStoreData.update(result=>result=layoutData)
        }
    })

    
    return{
        homeData,
        layoutData
    }
}