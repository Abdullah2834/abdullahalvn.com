<script>
  import "./style.css"  
  import BannerComponent from "../components/banner/bannerComponent.svelte";
  import HeaderComponent from "../components/layout/header/header.svelte";
  import FooterComponent from "../components/layout/footer/footer.svelte";
  import AboutComponent from "../components/about/aboutComponent.svelte";
  import SkillsComponent from "../components/skills/skillsComponent.svelte";
  import WorksComponent from "../components/works/worksComponent.svelte";
  import ContactComponent from "../components/contact/contactComponent.svelte";
  import NavbarComponent from "../components/navbar/nabvarComponent.svelte";

  //export let form;

  export let homeData = $$props && $$props.data ? $$props.data.homeData : {}
  export let layoutData = $$props && $$props.data ? $$props.data.layoutData : {}  

  //references

  let bannerRef;
  let aboutRef;
  let skillsRef;
  let worksRef;

  //data
  let bannerData = homeData.banner
  let aboutData = homeData.about
  let skillsData = homeData.skills
  let worksData = homeData.works
  let contactData = homeData.contact
  let headerData = layoutData.header  
  



</script>

<svelte:head>
    <title>Abdullah Alvan</title>
</svelte:head>

<HeaderComponent headerData={headerData}/>

<main>
    <div class="home-rt">
        <NavbarComponent bannerId={bannerData.sectionId}
                         aboutId={aboutData.sectionId}
                         skillsId={skillsData.sectionId}
                         worksId={worksData.sectionId}

                         bannerRef={bannerRef}
                         aboutRef={aboutRef}
                         skillsRef={skillsRef}
                         worksRef={worksRef}
                                           
        />
        <div class="bnr-rt" bind:this={bannerRef}>
            <BannerComponent  bannerData={bannerData}/>
        </div>
        <div class="abt-rt" bind:this={aboutRef}>
            <AboutComponent aboutData={aboutData}/>
        </div>
        <div class="skl-rt" bind:this={skillsRef}>
            <SkillsComponent  skillsData={skillsData}/>
        </div>
        <div class="wrk-rt" bind:this={worksRef}>
            <WorksComponent  worksData={worksData}/>    
        </div>
        <!-- <div class="ctct-rt">
            <ContactComponent form={form} contactData={contactData}/>
        </div> -->
        

    </div>
</main>

<FooterComponent/>