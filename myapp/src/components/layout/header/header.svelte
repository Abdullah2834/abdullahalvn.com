<script>
	import { goto } from '$app/navigation';
    import { onDestroy, onMount, beforeUpdate } from "svelte";
    import {page} from "$app/stores"
  import { activeLang } from '../../../store/store';
    export let headerData;

    let lang = ["TR","EN"]
    let currentLang = $page.params.lang.toUpperCase();
    let selectedLang = ""
    let isOpen = false
    let langRef;
    let scrollY;
    let headerRef;

    

    onMount(()=>{
       
       if(typeof window !== "undefined"){
         window.addEventListener("click",osdClick,false)
       }
       
      
       
    })

    onDestroy(()=>{
        if(typeof window !== "undefined"){
         window.removeEventListener("click",osdClick,false)
       }
    })

   
    const toggleLangMenu = ()=>{
        isOpen = !isOpen
        
        
    }

    const changeLang = (item) =>{
        selectedLang = item
        let newLang = selectedLang.toLowerCase()
        goto(newLang,{replaceState: true, noScroll:true})
        activeLang.update(actLang=>actLang = item)
        isOpen = false
       
    }

    const osdClick=(e)=>{
        if(langRef && !langRef.contains(e.target) && isOpen){
            isOpen = false
        }
    }

</script>
<svelte:window bind:scrollY={scrollY}/>

<div class="hdr-rt"  >
    <div class="hdr-wrp" >
        <div class="hdr-cntr" class:sticky={scrollY > 0} >
            <pre class="html-tag">&lt;H3/&gt;</pre>
            <h3>
               {headerData.title}
            </h3>
            <div bind:this={langRef} class="lng-blk" class:active={isOpen}>
                <span class="lng-itm" on:click={toggleLangMenu}>{selectedLang ? selectedLang : currentLang}</span>
                <div class="lng-mn">
                    {#each lang as lng}
                        <span on:click={()=>changeLang(lng)}>{lng}</span>
                    {/each}
                </div>
            </div>
            
        </div>
    </div>
</div>
