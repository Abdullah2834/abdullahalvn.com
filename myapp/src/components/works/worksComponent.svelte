<script>
	import { getElementWidth, lazyImage } from './../../helper/index.js';
    import { onDestroy, onMount } from 'svelte';
    import { ASSETS } from './../../constant/path.js';

    export let worksData;
    
    
    let sliderBlock;
    let activeIndex = 0; 
    let translateValue = 0;
    let xDown, yDown, xUp, yUp;
    let card;
    let cardWidth;
    
   


    onMount(()=>{
        lazyImage()
        calculateItem()
        setTranslateValue()
        resize()
        if(typeof window !== "undefined"){
            window.addEventListener("resize", resize,false);
            sliderBlock.addEventListener("touchstart",handleTouchStart,false);
            sliderBlock.addEventListener("toucmove",handleTouchMove,false);
        }
    })

    

    const calculateItem = () =>{
        cardWidth = getElementWidth(card);
        
    }

    const setTranslateValue = () =>{
        calculateItem();
        if(sliderBlock && sliderBlock.children){
            translateValue = activeIndex * cardWidth
            sliderBlock.style.transform = `translateX(-${translateValue}px)`
        }
    }

    const resize=()=>{
        calculateItem()
        setTranslateValue()
    }

    const slideFunc = (direction) =>{
        
        direction === 1 && activeIndex === sliderBlock.children.length - 1 ? 
            activeIndex = 0 : direction === -1 && activeIndex === 0 ?   
                activeIndex = sliderBlock.children.length - 1 : activeIndex = activeIndex + direction
        setTranslateValue()
    }


    const handleTouchStart = (evt) =>{
        xDown = evt.touches[0].clientX
        yDown = evt.touches[0].clientY
    }

    const handleTouchMove = (evt) =>{
        if(!xDown || !yDown){
            return;
        }
        xUp = evt.touches[0].clientX;
        yUp = evt.touches[0].clientY;
        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;
        if(Math.abs(xDiff) + Math.abs(yDiff) > 10){
            if(Math.abs(xDiff) > Math.abs(yDiff)){
            if(xDiff > 0){
                slideFunc(1)
            }else{
                slideFunc(-1)
            } 
            }
            xDown = null;
            yDown = null;
        }
        
    }

    onDestroy(()=>{
        if(typeof window !== "undefined"){
            window.addEventListener("resize", resize,false);
            sliderBlock.removeEventListener("touchstart",handleTouchStart,false);
            sliderBlock.removeEventListener("toucmove",handleTouchMove,false);
        }
    })

    
    
    

</script>


    <h3>
        {worksData.title}
        <span></span>
    </h3>
    <p>{worksData.desc}</p>
    <div class="sld-wrp">
        <span class="btn left" on:click={()=>slideFunc(-1)}>
            <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.85706 12.5L13.6786 3.67852C14.3294 3.02765 14.3294 1.97237 13.6786 1.3215C13.0277 0.670625 11.9724 0.670625 11.3215 1.3215L1.32153 11.3215C0.670656 11.9724 0.670656 13.0276 1.32153 13.6785L11.3215 23.6785C11.9724 24.3294 13.0277 24.3294 13.6786 23.6785C14.3294 23.0276 14.3294 21.9724 13.6786 21.3215L4.85706 12.5Z" fill="white"/>
            </svg>                    
        </span>
        <div class="sld-cntr">
            <div class="sld-blk" bind:this={sliderBlock}>
                {#each worksData.projects as item}
                    <div class="sld-itm" bind:this={card}>
                    {#if item.link}
                        <a href={item.link} target="_blank">
                            {
                                item.title
                            } 
                        </a>
                        {:else}
                        <span>{item.title}</span>
                    {/if}
                        <picture>
                            <source media="(min-width: 769px)" 
                                    srcset={`${ASSETS}${item.img.substring(0, item.img.lastIndexOf("."))}.jpg, 
                                            ${ASSETS}${item.img.substring(0, item.img.lastIndexOf("."))}_2x.jpg 2x`} 
                                    type="image/jpg"/>
                            <source media="(min-width: 769px)" 
                                    srcset={`${ASSETS}${item.img.substring(0, item.img.lastIndexOf("."))}.webp, 
                                            ${ASSETS}${item.img.substring(0, item.img.lastIndexOf("."))}_2x.webp 2x`} 
                                    type="image/webp"/>
                            <source media="(max-width: 768px)" 
                                    srcset={`${ASSETS}${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}.jpg, 
                                            ${ASSETS}${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}_2x.jpg 2x, 
                                            ${ASSETS}${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}_3x.jpg 3x`} 
                                    type="image/jpg" />
                            <source media="(max-width: 768px)" 
                                    srcset={`${ASSETS}${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}.webp, 
                                            ${ASSETS}${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}_2x.webp 2x, 
                                            ${ASSETS}${item.img_mobile.substring(0, item.img_mobile.lastIndexOf("."))}_3x.webp 3x`} 
                                    type="image/webp" />
                            <img src={`${ASSETS}${item.img}`} alt="Honda">
                        </picture>
                    </div>
                {/each}
            </div>
        </div>
        <span class="btn right" on:click={()=>slideFunc(1)}>
            <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.67849 1.3215C3.02762 0.670625 1.97234 0.670625 1.32147 1.3215C0.670594 1.97237 0.670594 3.02765 1.32147 3.67852L10.143 12.5L1.32147 21.3215C0.670594 21.9724 0.670594 23.0276 1.32147 23.6785C1.97234 24.3294 3.02762 24.3294 3.67849 23.6785L13.6785 13.6785C14.3294 13.0276 14.3294 11.9724 13.6785 11.3215L3.67849 1.3215Z" fill="white"/>
            </svg> 
        </span>
    </div>
    
