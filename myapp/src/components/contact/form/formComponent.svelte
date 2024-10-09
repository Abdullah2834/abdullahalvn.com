<script>
	import { createForm } from 'svelte-forms-lib';
    import { onMount } from "svelte";
    import {enhance,applyAction} from "$app/forms"
    

    export let form;
    export let formData;
    export let lang;
    
    let txtArea;
    let isMailSend = false;
    let params = {};
    
   
    onMount(()=>{
        autoHeightTxtArea()
        
    })

    const{
        handleSubmit,
        handleChange,
        errors
    } = createForm({
        onSubmit: (values) =>{
            params = values 
            async ({result}) =>{
                await applyAction(result)
                result.data.name = ""
                result.data.email = ""
                result.data.message = ""
            }
            isMailSend = true 
            setTimeout(()=>{
                isMailSend = false 
            },2000)
        },

        initialValues:{
            name: "",
            email: "",
            message: ""
        },

        validate:(values)=>{
            let errs = {}
            if(values.name === ""){
                errs["name"] = "please enter your name"
            }
            if(values.email === "" || !/^([a-zA-Z0-9!#$%&'*-`{|}~_.]{1}[a-zA-Z0-9!#$%&'*-`{|}~_.]*)(@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6})$/i.test(values.email)){
               errs["email"] = "please enter your email with correctly" 
            }
            if(values.message === ""){
                errs["message"] = "please enter your message"
            }
            
            return errs
        },
       
    })

    
    

   

    const autoHeightTxtArea = () =>{
       
        
       txtArea.style.height = "26px" 
       txtArea.style.height = (txtArea.scrollHeight) + "px"

       txtArea.scrollHeight > 100 ? txtArea.classList.add("scroll") : txtArea.classList.remove("scroll");

    }

</script>


<form method="POST" class="frm-cntr" class:scss={isMailSend} use:enhance={handleSubmit}>
    <div class="frm-blk">
        <div class={`frm-itm ${$errors.name ? "err": ""} `} >
            <label for="name" >{formData.name_text}</label>
            <input
                name="name" 
                id="name"
                type="text" 
                placeholder= {lang === "tr" ? "Adınızı girin" : "Enter your name"} 
                maxlength="50"
                on:input={handleChange}
            >
            <span class="txt-err">
                {#if lang === "tr"}
                    Adınızı girin!
                    {:else}
                    Enter your name!
                {/if}
              
            </span>
            
        </div>
        <div class={`frm-itm ${$errors.email ? "err": ""} `} >
            <label for="email">{formData.email_text}</label>
            <input 
                on:input={handleChange}
                name="email"
                id="email"
                type="email" 
                placeholder= {lang === "tr" ? "Mail adresinizi girin" : "Enter your email"} 
                maxlength="100"
                autocomplete="off"
                
                >   
                <span class="txt-err">
                    {#if lang === "tr"}
                        Mail adresinizi doğru biçimde girin!
                        {:else}
                        Enter your email with correctly!
                    {/if}
                </span>
        </div>
                
    </div>
    <div class={`frm-txt ${$errors.message ? "err": ""}`} >
        <label for="message" >{formData.msg_text}</label>
        <textarea 
                class="txtArea" 
                on:input={autoHeightTxtArea,handleChange} 
                bind:this={txtArea} 
                id="message"
                name="message" 
                placeholder={lang === "tr" ? "Mesajınızı girin" : "Enter your message"}
                maxlength="10000"
                ></textarea>
                <span class="txt-err">
                    {#if lang === "tr"}
                        Mesajınızı girin!    
                        {:else}
                        Enter your message!
                    {/if}
                </span>
               
    </div>
    <button type="submit" class="btn cyan">
       {formData.btn_text}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7071 1.29292C22.9306 1.5164 23.0262 1.81935 22.9939 2.11081C22.9848 2.19252 22.9657 2.27332 22.9366 2.35121L15.9439 22.3304C15.8084 22.7174 15.4504 22.9825 15.0408 22.9992C14.6311 23.0159 14.2527 22.7808 14.0862 22.4062L10.2424 13.7576L1.59387 9.91384C1.21919 9.74731 0.984122 9.36894 1.00084 8.95926C1.01755 8.54959 1.28265 8.19162 1.66965 8.05617L21.6488 1.06348C21.7272 1.03414 21.8085 1.01497 21.8907 1.00598C21.9511 0.999338 22.0117 0.998262 22.0717 1.00259C22.3032 1.01913 22.5301 1.11591 22.7071 1.29292ZM18.1943 4.3915L4.71108 9.11063L10.7785 11.8073L18.1943 4.3915ZM12.1928 13.2215L19.6085 5.80571L14.8894 19.289L12.1928 13.2215Z" fill="#292F36"/>
        </svg>
    </button>
    {#if isMailSend}
        <div class="scss-msg">
            <span>
                {#if lang === "tr"}
                    Mesajınız gönderildi
                    {:else}
                    Your message has been sent
                {/if}
            </span>
        </div>
    {/if}
  
</form>


