<script>
  import SvelteMarkdown from "svelte-markdown";
  import MarkdownImage from "../MarkdownImage.svelte";
  export let post;
</script>

<div class="p-5">
  <span class="display-6 text-black p-2 bg-white">{post.data.title}</span>

  <div class="sbody p-1">
    <SvelteMarkdown source={post.body} renderers={{ image: MarkdownImage }} />
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
