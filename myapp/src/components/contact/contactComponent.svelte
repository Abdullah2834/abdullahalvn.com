<script>

  import FormComponent from "./form/formComponent.svelte";
  //export let form;
  export let contactData;

</script>



    <div class="ctct-wrp sf-ar">
        <h3>
            {contactData.title}
            <span></span>
        </h3>
        <p>{contactData.desc}</p>
        <h4>{contactData.title2}</h4>
        <!-- <FormComponent form={form} formData={contactData.form}/> -->
    </div>
