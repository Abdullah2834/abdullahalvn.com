<script>
  import "./style.css"  
  import BannerComponent from "../components/banner/bannerComponent.svelte"
  import HeaderComponent from "../components/layout/header/header.svelte"
  import FooterComponent from "../components/layout/footer/footer.svelte"
  import AboutComponent from "../components/about/aboutComponent.svelte"
  import SkillsComponent from "../components/skills/skillsComponent.svelte"

</script>

<svelte:head>
    <title>Abdullah Alvan</title>
</svelte:head>

<HeaderComponent/>
<main>
    <div class="home-root">
        <div class="home-wrapper">
           <BannerComponent/>
           <AboutComponent/>
           <SkillsComponent/>
        </div>
    </div>
</main>
<FooterComponent/>