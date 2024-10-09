import { redirect } from '@sveltejs/kit';
import { getHomeData, getLayoutData } from '../../services/index.js';
import { homeStoreData, layoutStoreData } from '../../store/store.js';


let acceptedLangs= ["tr", "en"]

export const load = async ({params,url}) =>{
    let homeData = null;
    let layoutData = null;

    

    await getHomeData({lang:params.lang}).then((result)=>{
        if(result && result.data && result.data.success){
            homeData = result.data.success[acceptedLangs.indexOf(params.lang) >- 1 ? params.lang : "en"]
            homeStoreData.update(result=>result = homeData);    
        }
    })

    await getLayoutData({lang:params.lang}).then((result)=>{
        if(result && result.data && result.data.success){
            layoutData = result.data.success[acceptedLangs.indexOf(params.lang) >- 1 ? params.lang : "en"]
            layoutStoreData.update(result=> result = layoutData)
        }
    })
  
    
    
    
    return{
        homeData,
        layoutData
        
    }
}