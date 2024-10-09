<script>

    //references
   
    export let aboutRef;
    export let skillsRef;
    export let worksRef;

    //export let contactRef;

    //id's
    export let bannerId;
    export let aboutId;
    export let skillsId;
    export let worksId;
    //export let contactId;

    let data= [
        {
            name: ["<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M3 2C2.44772 2 2 2.44772 2 3V10C2 10.5523 2.44772 11 3 11H10C10.5523 11 11 10.5523 11 10V3C11 2.44772 10.5523 2 10 2H3ZM4 9V4H9V9H4Z' fill='#ffffff'/><path fill-rule='evenodd' clip-rule='evenodd' d='M14 2C13.4477 2 13 2.44772 13 3V10C13 10.5523 13.4477 11 14 11H21C21.5523 11 22 10.5523 22 10V3C22 2.44772 21.5523 2 21 2H14ZM15 9V4H20V9H15Z' fill='#ffffff'/><path fill-rule='evenodd' clip-rule='evenodd' d='M13 14C13 13.4477 13.4477 13 14 13H21C21.5523 13 22 13.4477 22 14V21C22 21.5523 21.5523 22 21 22H14C13.4477 22 13 21.5523 13 21V14ZM15 15V20H20V15H15Z' fill='#ffffff'/><path fill-rule='evenodd' clip-rule='evenodd' d='M3 13C2.44772 13 2 13.4477 2 14V21C2 21.5523 2.44772 22 3 22H10C10.5523 22 11 21.5523 11 21V14C11 13.4477 10.5523 13 10 13H3ZM4 20V15H9V20H4Z' fill='#ffffff'/></svg>"]
        },
        {
            name: ["<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2ZM9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7Z' fill='white'/><path d='M8 14C6.67392 14 5.40215 14.5268 4.46447 15.4645C3.52678 16.4021 3 17.6739 3 19V21C3 21.5523 3.44772 22 4 22C4.55228 22 5 21.5523 5 21V19C5 18.2043 5.31607 17.4413 5.87868 16.8787C6.44129 16.3161 7.20435 16 8 16H16C16.7956 16 17.5587 16.3161 18.1213 16.8787C18.6839 17.4413 19 18.2044 19 19V21C19 21.5523 19.4477 22 20 22C20.5523 22 21 21.5523 21 21V19C21 17.6739 20.4732 16.4021 19.5355 15.4645C18.5979 14.5268 17.3261 14 16 14H8Z' fill='white'/></svg> "]
        },
        {
            name: ["<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8.70711 6.70711C9.09763 6.31658 9.09763 5.68342 8.70711 5.29289C8.31658 4.90237 7.68342 4.90237 7.29289 5.29289L1.29289 11.2929C0.902369 11.6834 0.902369 12.3166 1.29289 12.7071L7.29289 18.7071C7.68342 19.0976 8.31658 19.0976 8.70711 18.7071C9.09763 18.3166 9.09763 17.6834 8.70711 17.2929L3.41421 12L8.70711 6.70711Z' fill='white'/><path d='M16.7071 5.29289C16.3166 4.90237 15.6834 4.90237 15.2929 5.29289C14.9024 5.68342 14.9024 6.31658 15.2929 6.70711L20.5858 12L15.2929 17.2929C14.9024 17.6834 14.9024 18.3166 15.2929 18.7071C15.6834 19.0976 16.3166 19.0976 16.7071 18.7071L22.7071 12.7071C23.0976 12.3166 23.0976 11.6834 22.7071 11.2929L16.7071 5.29289Z' fill='white'/></svg> "]
        },
        {
            name: ["<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M13 18H20C21.6569 18 23 16.6569 23 15V5C23 3.34315 21.6569 2 20 2H4C2.34315 2 1 3.34315 1 5V15C1 16.6569 2.34315 18 4 18H11V20H8C7.44772 20 7 20.4477 7 21C7 21.5523 7.44772 22 8 22H16C16.5523 22 17 21.5523 17 21C17 20.4477 16.5523 20 16 20H13V18ZM4 4C3.44772 4 3 4.44772 3 5V15C3 15.5523 3.44772 16 4 16H20C20.5523 16 21 15.5523 21 15V5C21 4.44772 20.5523 4 20 4H4Z' fill='white'/></svg>"]
        }
        // {
        //     name: ["<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M1.00014 5.98266C0.999973 5.99253 0.999957 6.00239 1.00009 6.01225V18C1.00009 19.6523 2.3478 21 4.00009 21H20.0001C21.6524 21 23.0001 19.6523 23.0001 18V6.01236C23.0002 6.00242 23.0002 5.99247 23 5.98251C22.9906 4.33822 21.6465 3 20.0001 3H4.00009C2.35359 3 1.00953 4.3383 1.00014 5.98266ZM3.10666 5.55395C3.27204 5.22692 3.61212 5 4.00009 5H20.0001C20.3881 5 20.7281 5.22692 20.8935 5.55395L12.0001 11.7793L3.10666 5.55395ZM21.0001 7.92066V18C21.0001 18.5477 20.5478 19 20.0001 19H4.00009C3.45237 19 3.00009 18.5477 3.00009 18V7.92066L11.4266 13.8192C11.7709 14.0603 12.2292 14.0603 12.5735 13.8192L21.0001 7.92066Z' fill='white'/></svg>"]
        // }
    ]

 
    const toggleNavMenu = (index) =>{
        
        
        
        if(typeof window !== "undefined"){
            if(index === bannerId){
                window.scroll({
                    top: "0",
                    left: "0",
                    behavior: "smooth"
                })
            }else if(index === aboutId){
                if(window.innerWidth < 797){
                    aboutRef.scrollIntoView({behavior:"smooth",block: "start", inline: "center"})
                }else{
                    window.scroll({
                       top: aboutRef.offsetTop - 75,
                       bottom: aboutRef.offsetTop,
                       left: "0",
                       behavior: "smooth"
                    })
                }
            }
            else if(index === skillsId){
                skillsRef.scrollIntoView({behavior:"smooth",block: "start", inline: "center"})
                
            }else if(index === worksId){
                worksRef.scrollIntoView({behavior:"smooth",block: "start", inline: "center"})
               
            }
            // else if(index === contactId){
            //     contactRef.scrollIntoView({behavior:"smooth",block: "start", inline: "center"})
            // }
        }

    }


</script>

<div class="nvbr-cntr" >
    {#each data as item,index}
         <div class={`nvbr-itm`} index={index+1} on:click={()=>toggleNavMenu(index+1)}>
            {@html item.name}
         </div>
    {/each}
</div>