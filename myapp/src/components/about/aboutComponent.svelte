<script>

  import { ASSETS } from "../../constant/path";
  export let aboutData;
  
 
    
</script>

    <div class="abt-wrp sf-ar">
        <div class="scrl-blk">
            <svg width="32" height="44" viewBox="0 0 32 44" fill="#1A1E23" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_55_94)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16V28C32 36.8366 24.8366 44 16 44H14V43.8762C6.10738 42.892 0 36.1592 0 28V16ZM16 40C22.6274 40 28 34.6274 28 28V16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16V28C4 34.6274 9.37258 40 16 40Z" fill="#12F7D6"/>
                <path class="ms-strk" d="M17.3333 9.16675V16.5001H14.6666V9.16675H17.3333Z" fill="#12F7D6"/>
                </g>
                <defs>
                <clipPath id="clip0_55_94">
                <rect width="32" height="44" fill="#1A1E23"/>
                </clipPath>
                </defs>
            </svg>
                 
            <div class="strk">
                <span></span> 
                <span></span> 
                <span></span> 
                <span></span>
                <span></span>
            </div>              
        </div>
        <div class="abt-cntr">
            <div class="txt-blk">
                <h3>{aboutData.title}</h3>
                <div class="txt-box">
                    <pre>&lt;p&gt;</pre>
                   {#each aboutData.text as text}
                      {@html text}
                   {/each}
                    <pre>&lt;/p&gt;</pre>
                </div>
            </div>
            <picture class="img">
                <source media="(min-width: 769px)" 
                    srcset={`${ASSETS}${aboutData.img.substring(0, aboutData.img.lastIndexOf("."))}.png`} 
                    type="image/png">
                <source media="(min-width: 769px)" 
                    srcset={`${ASSETS}${aboutData.img.substring(0, aboutData.img.lastIndexOf("."))}.webp`} 
                    type="image/webp">
                <source media="(max-width: 768px)" 
                    srcset={`${ASSETS}${aboutData.img_mobile.substring(0, aboutData.img_mobile.lastIndexOf("."))}.png, ${ASSETS}${aboutData.img_mobile.substring(0, aboutData.img_mobile.lastIndexOf("."))}_2x.png 2x`}  
                    type="image/png">
                <source media="(max-width: 768px)" 
                srcset={`${ASSETS}${aboutData.img_mobile.substring(0, aboutData.img_mobile.lastIndexOf("."))}.webp, ${ASSETS}${aboutData.img_mobile.substring(0, aboutData.img_mobile.lastIndexOf("."))}_2x.webp 2x`}  
                type="image/webp">        
                <img src={`${ASSETS}${aboutData.img}`} alt="about">
            </picture>
        </div>          
    </div>
