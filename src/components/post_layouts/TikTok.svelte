<script>
  import SvelteMarkdown from "svelte-markdown";
  import Oembed from "../Oembed.svelte";

  export let post;
</script>

<div class="container">
  <div class="row">
    <div class="col col-6">
      <div class=" align-items-center d-flex align-items-center h-75">
        <div class="p-5">
          <span class="display-6 mb-3 text-black bg-white p-2"
            >{post.data.title}</span
          >
          <hr />
          <p><SvelteMarkdown source={post.body} /></p>
        </div>
      </div>
    </div>

    <div class="col col-6 bg-white" style="height: 100vh;">
      <Oembed url={post.data.link} />
    </div>
  </div>
</div>

<style>
  .sbody {
    column-fill: auto;
    height: 60vh;
    padding-right: 20px;
    column-width: 300px;
    column-gap: 40px;
    text-align: justify;
  }
</style>
