import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';
import { activeLang, homeStoreData, layoutStoreData } from '../store/store.js';
import { getHomeData, getLayoutData } from '../services/index.js';
import { redirect } from '@sveltejs/kit';

 

inject({ mode: dev ? 'development' : 'production' });
let acceptedLangs = ["en", "tr"];

export const load = async ({url,params}) =>{
    let lang = acceptedLangs.indexOf(params.lang)>-1 ? params.lang : (url.pathname.indexOf("tr")>-1 ? "tr" : "en");
    activeLang.update(actLang=>actLang=lang)
    let homeData = null;
    let layoutData = null;
   
    if(acceptedLangs.indexOf(params.lang) === -1){
        throw redirect(301,lang)
    }

    await getHomeData({lang:acceptedLangs.indexOf(params.lang) >- 1 ? params.lang : "en"}).then((res)=>{
        if(res && res.data && res.data.success){
            homeData = res.data.success[acceptedLangs.indexOf(params.lang) >-1 ? params.lang : "en"];
            homeStoreData.update(res=>res=homeData)
           
            
        }
    })
    await getLayoutData({lang:acceptedLangs.indexOf(params.lang) >- 1 ? params.lang : "en"}).then((res)=>{
        if(res && res.data && res.data.success){
            layoutData = res.data.success[lang]
            layoutStoreData.update((res)=>res=layoutData)
        }
    })
    
    return{
        homeData,
        layoutData,
    }
    
}

export const prerender = false;
