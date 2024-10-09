<script>
  import "./style.css"
  import AboutComponent from "../components/about/aboutComponent.svelte";
  import BannerComponent from "../components/banner/bannerComponent.svelte";
  import Footer from "../components/layout/footer/footer.svelte";  
  import Header from "../components/layout/header/header.svelte";
  import NabvarComponent from "../components/navbar/nabvarComponent.svelte";
  import SkillsComponent from "../components/skills/skillsComponent.svelte";
  import WorksComponent from "../components/works/worksComponent.svelte";
  import {homeStoreData, layoutStoreData } from "../store/store";
  import { SITE_URL } from "../constant/url";
  import {page} from "$app/stores";
  //import {page} from "$app/stores";
  
  

  export let homeData = {}
  export let layoutData = {}
  let lang = $page.params.lang;
  //let lang = $page.params.lang


    homeStoreData.subscribe((data)=>{
        homeData = data
    })

    layoutStoreData.subscribe((data)=>{
        layoutData = data
    })

    let bannerRef;
    let aboutRef;
    let skillsRef;
    let worksRef;
    //let contactRef;

    
 
    

</script>
<svelte:head>
      <title>Abdullah Alvan</title>
      <meta name="description" content={"Abdullah Alvan"}>
      <meta name="og:type" content={"website"}>
      <meta name="og:title" content={"Abdullah Alvan"}>
      <meta name="og:description" content={"Front End Developer"}>
      <meta name="og:url" content={`${SITE_URL}/${lang}`}>
      <link rel="canonical" href={`${SITE_URL}/${lang}`}>  
</svelte:head>
  
<Header headerData={layoutData.header}/>
  
<main>
    <div class="home-rt">
    
        <NabvarComponent  
                        bannerId={homeData.banner.sectionId}
                        aboutId={homeData.about.sectionId}
                        skillsId={homeData.skills.sectionId}
                        worksId={homeData.works.sectionId}
                        
                        
                        aboutRef={aboutRef}
                        skillsRef={skillsRef}
                        worksRef={worksRef}
                        
                                            
        />
        <div class="bnr-rt" bind:this={bannerRef}>
            <BannerComponent  bannerData = {homeData.banner}/>
        </div>
        <div class="abt-rt" bind:this={aboutRef}>
            <AboutComponent aboutData = {homeData.about}/>
        </div>
        <div class="skl-rt" bind:this={skillsRef}>
            <SkillsComponent  skillsData = {homeData.skills}/>
        </div>
        <div class="wrk-rt" bind:this={worksRef}>
            <WorksComponent  worksData = {homeData.works}/>    
        </div> 
        <!--<div class="ctct-rt" bind:this={contactRef}>
            <ContactComponent form={form} contactData={contactData}/>
        </div>  -->
        

    </div>
</main>
  
<Footer/>