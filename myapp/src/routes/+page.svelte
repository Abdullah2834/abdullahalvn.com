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

  export let form;

  export let homeData = $$props && $$props.data ? $$props.data.homeData : {}
  export let layoutData = $$props && $$props.data ? $$props.data.layoutData : {}  


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
        <NavbarComponent/>
        <BannerComponent bannerData={bannerData}/>
        <AboutComponent aboutData={aboutData}/>
        <SkillsComponent skillsData={skillsData}/>
        <WorksComponent worksData={worksData}/>
        <!-- <ContactComponent form={form} contactData={contactData}/> -->

    </div>
</main>

<FooterComponent/>