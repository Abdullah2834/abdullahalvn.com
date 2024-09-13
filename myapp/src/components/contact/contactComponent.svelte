<script>
  import FormComponent from "./form/formComponent.svelte";
 export let form
</script>
<div class="ctct-rt">
    <div class="ctct-wrp sf-ar">
        <h3>
            Contact
            <span></span>
        </h3>
        <p>I’m currently available for freelance work</p>
        <h4>Send Me A Message</h4>
        <FormComponent form={form}/>
    </div>
</div>