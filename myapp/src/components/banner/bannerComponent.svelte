<script>
 
    import {ASSETS} from "../../constant/path";
    import {DATA_URL} from "../../constant/url";
    import {page} from "$app/stores";

    export let bannerData;
    export let lang;

    
    let url = DATA_URL;    
    let fileName = lang === "en" ? "Abdullah-Alvan-CV-EN.pdf" : "Abdullah-Alvan-CV-TR.pdf";
    
    
    
    
    

</script>


    <div class="bnr-wrpr sf-ar">
        <div class="prf-cntr">
            <svg class="img-prfl" width="334" height="534" viewBox="0 0 334 534" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1_581)">
                <path d="M10 170C10 81.6344 81.6344 10 170 10H330V370C330 458.366 258.366 530 170 530H10V170Z" fill="#292F36"/>
                <path d="M332 10V8H330H170C80.5299 8 8 80.5299 8 170V530V532H10H170C259.47 532 332 459.47 332 370V10Z" stroke="white" stroke-width="4"/>
                </g>
                <defs>
                <filter id="filter0_d_1_581" x="0" y="0" width="334" height="534" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="-4" dy="-4"/>
                <feGaussianBlur stdDeviation="1"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0705882 0 0 0 0 0.968627 0 0 0 0 0.839216 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_581"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_581" result="shape"/>
                </filter>
                </defs>
            </svg>
            <div class="profile">
                <div class="info">
                    <img src={`${ASSETS}/img/Profile.png`} alt="profile">
                    <h3>{bannerData.profile.title}</h3>
                    <span>{bannerData.profile.desc}</span>      
                </div>    
                <div class="contact">
                    <a href="mailto:abdullahalvan2002@gmail.com" title="Gmail">
                        <svg width="14" height="14" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.583331 3.48988C0.583236 3.49564 0.583227 3.50139 0.583302 3.50715V10.5C0.583302 11.4638 1.36947 12.25 2.3333 12.25H11.6666C12.6305 12.25 13.4166 11.4638 13.4166 10.5V3.50721C13.4167 3.50141 13.4167 3.4956 13.4166 3.4898C13.4111 2.53063 12.6271 1.75 11.6666 1.75H2.3333C1.37284 1.75 0.588809 2.53067 0.583331 3.48988ZM1.81214 3.2398C1.90861 3.04904 2.10699 2.91667 2.3333 2.91667H11.6666C11.8929 2.91667 12.0913 3.04904 12.1878 3.2398L6.99997 6.87128L1.81214 3.2398ZM12.25 4.62038V10.5C12.25 10.8195 11.9861 11.0833 11.6666 11.0833H2.3333C2.0138 11.0833 1.74997 10.8195 1.74997 10.5V4.62038L6.66545 8.06122C6.8663 8.20182 7.13363 8.20182 7.33449 8.06122L12.25 4.62038Z" fill="#12F7D6"/>
                        </svg>
                        {bannerData.profile.email}
                    </a>
                    <p>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00008 3.5C5.71142 3.5 4.66675 4.54467 4.66675 5.83333C4.66675 7.122 5.71142 8.16667 7.00008 8.16667C8.28875 8.16667 9.33341 7.122 9.33341 5.83333C9.33341 4.54467 8.28875 3.5 7.00008 3.5ZM5.83341 5.83333C5.83341 5.189 6.35575 4.66667 7.00008 4.66667C7.64441 4.66667 8.16675 5.189 8.16675 5.83333C8.16675 6.47767 7.64441 7 7.00008 7C6.35575 7 5.83341 6.47767 5.83341 5.83333Z" fill="#12F7D6"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.67619 13.9018C6.67636 13.9019 6.67651 13.902 7.00008 13.4167L6.67619 13.9018C6.87213 14.0324 7.12771 14.0327 7.32366 13.902L7.00008 13.4167C7.32366 13.902 7.32349 13.9021 7.32366 13.902L7.32564 13.9007L7.32953 13.8981L7.3429 13.8891C7.35425 13.8813 7.37045 13.8703 7.39117 13.8559C7.43261 13.8272 7.49214 13.7854 7.5672 13.7312C7.71726 13.6228 7.9297 13.4646 8.18377 13.2623C8.69097 12.8584 9.36877 12.275 10.0486 11.5574C11.3843 10.1475 12.8334 8.10947 12.8334 5.83333C12.8334 4.28624 12.2188 2.80251 11.1249 1.70854C10.0309 0.614581 8.54718 0 7.00008 0C5.45299 0 3.96925 0.614581 2.87529 1.70854C1.78133 2.80251 1.16675 4.28624 1.16675 5.83333C1.16675 8.10947 2.6159 10.1475 3.95161 11.5574C4.63139 12.275 5.30919 12.8584 5.81639 13.2623C6.07046 13.4646 6.2829 13.6228 6.43296 13.7312C6.50802 13.7854 6.56756 13.8272 6.60899 13.8559C6.62971 13.8703 6.64591 13.8813 6.65727 13.8891L6.67064 13.8981L6.67452 13.9007L6.67619 13.9018ZM3.70025 2.5335C4.57542 1.65833 5.7624 1.16667 7.00008 1.16667C8.23776 1.16667 9.42474 1.65833 10.2999 2.5335C11.1751 3.40867 11.6667 4.59566 11.6667 5.83333C11.6667 7.64053 10.4909 9.39415 9.20161 10.7551C8.56889 11.4229 7.93419 11.9697 7.45702 12.3497C7.27943 12.4911 7.12432 12.6089 7.00008 12.7007C6.87584 12.6089 6.72073 12.4911 6.54314 12.3497C6.06597 11.9697 5.43127 11.4229 4.79855 10.7551C3.50926 9.39415 2.33341 7.64053 2.33341 5.83333C2.33341 4.59566 2.82508 3.40867 3.70025 2.5335Z" fill="#12F7D6"/>
                        </svg>
                        {bannerData.profile.location}  
                    </p> 
                </div>  
                <div class="topics">
                    {#each bannerData.profile.techs  as item}
                            <span>{item}</span>
                    {/each}
                </div>       
                <a href={`${url}/${fileName}`} download={fileName} class="btn">
                    <span>{bannerData.profile.btn_text}</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V12.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L17.7071 10.7071C18.0976 10.3166 18.0976 9.68342 17.7071 9.29289C17.3166 8.90237 16.6834 8.90237 16.2929 9.29289L13 12.5858V3Z" fill="#292F36"/>
                        <path d="M3 14C3.55228 14 4 14.4477 4 15V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V15C20 14.4477 20.4477 14 21 14C21.5523 14 22 14.4477 22 15V19C22 19.7957 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7957 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7957 2 19V15C2 14.4477 2.44772 14 3 14Z" fill="#292F36"/>
                    </svg>    
                </a>    
            </div>
            
        </div>
        <div class="txt-blk">
            <pre>&lt;h1&gt;</pre>
            {#each bannerData.title as item}
                {@html item}
            {/each}
            <pre class='dsktp-txt'>&lt;/h1&gt;</pre>
        </div>
        <div class="mdl">
            {#each bannerData.modal as item}
            <div class="mdl-itm">
                <span>{item.number}</span>
                {@html item.text}
            </div>
            {/each}
        </div>
    </div>
    
