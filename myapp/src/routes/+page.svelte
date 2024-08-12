<script>
  import BannerComponent from "../components/banner/bannerComponent.svelte"
  import HeaderComponent from "../components/layout/header/header.svelte"
  import FooterComponent from "../components/layout/footer/footer.svelte"
  import "./style.css"  
  import AboutComponent from "../components/about/aboutComponent.svelte";

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
        </div>
    </div>
</main>
<FooterComponent/>