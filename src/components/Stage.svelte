<script>
  import Blog from "./post_layouts/Blog.svelte";
  import TikTok from "./post_layouts/TikTok.svelte";
  import Micro from "./post_layouts/Micro.svelte";
  export let post;
  export let projects;
  let post_layout;

  switch (post.data.layout) {
    case "Blog":
      post_layout = Blog;
      break;
    case "TikTok":
      post_layout = TikTok;
      break;
    case "Micro":
      post_layout = Micro;
      break;
    default:
      console.log("No Layout Specified");
      break;
  }
</script>

<svelte:component this={post_layout} {post} />
