<script>
  import { onMount } from "svelte";
  export let url;
  let src = "";

  onMount(() => {
    fetch(`https://www.tiktok.com/oembed?url=${url}`)
      .then((res) => res.json())
      .then((data) => {
        src = data.html;
        document.getElementById("tok").innerHTML = src;
      });
  });
</script>

<div id="tok"></div>
