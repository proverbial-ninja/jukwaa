<script>
  import SvelteMarkdown from "svelte-markdown";

  export let post;
</script>

<div class="d-flex h-100 align-items-center justify-content-center">
  <img width="800px" src={post.data.link} class="img-fluid" />

  <blockquote class="blockquote">
    <p class="quote"><SvelteMarkdown source={post.body} /></p>
  </blockquote>
</div>

<style>
  @import url("https://fonts.googleapis.com/css?family=Lora:400,400i,700");

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Lora, sans-serif;
    min-height: 100vh;
  }

  .blockquote {
    padding: 20px;
  }

  .quote {
    font-size: 1.4rem;
    max-width: 500px;
    line-height: 1.4;
    font-style: italic;
  }

  .author {
    float: right;
    font-size: 1.1rem;
    font-weight: bold;
  }

  .quote-icon {
    margin-bottom: 10px;
  }

  .blockquote hr {
    margin-top: 50px;
  }
</style>
