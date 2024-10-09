

<script>
  import { homeStoreData, layoutStoreData } from "../store/store";


    export let homeData = $$props&& $$props.data ? $$props.data.homeData : {}
    export let layoutData = $$props && $$props.data ? $$props.data.layoutData: {}

   
    homeStoreData.subscribe((data)=>{
        homeData = data
    })
    layoutStoreData.subscribe((data)=>{
        layoutData = data
    })
    

</script>

<main>
    <slot/>
</main>
