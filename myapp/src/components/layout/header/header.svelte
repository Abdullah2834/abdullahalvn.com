<script>
    export let headerData;
</script>

<div class="hdr-rt">
    <div class="hdr-wrp">
        <div class="hdr-cntr">
            <pre class="html-tag">&lt;H3/&gt;</pre>
            <h3>
               {headerData.title}      
            </h3>
            <div class="nav-blk">
                <span>{headerData.nav_text}</span>
                <!-- <span class="lng">EN</span> -->
            </div>
        </div>
    </div>
</div>
