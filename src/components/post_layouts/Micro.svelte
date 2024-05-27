<script>
  import SvelteMarkdown from "svelte-markdown";

  export let post;
</script>

<div class="d-flex h-100 align-items-center justify-content-center">
  <blockquote class="blockquote">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="80"
      fill="white"
      title="quote-left"
      class="quote-icon"
    >
      <path
        d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
      />
    </svg>
    <p class="quote"><SvelteMarkdown source={post.body} /></p>
    <p class="author">— {post.data.author}</p>
    <hr />
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
