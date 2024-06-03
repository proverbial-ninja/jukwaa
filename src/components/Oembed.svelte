<script>
  import { onMount } from "svelte";
  export let url;

  let videoId = url.split("/").pop();
</script>

<div id="tok">
  <!-- svelte-ignore a11y-missing-attribute -->
  <iframe
    src=" https://www.tiktok.com/embed/v2/{videoId}"
    width="100%"
    style="height: 100vh; padding: 0; margin: 0;"
    frameborder="0"
  ></iframe>
</div>
