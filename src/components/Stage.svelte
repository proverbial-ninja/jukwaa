<script>
  import Blog from "./post_layouts/Blog.svelte";
  import TikTok from "./post_layouts/TikTok.svelte";
  import Micro from "./post_layouts/Micro.svelte";
  import Display from "./post_layouts/Display.svelte";
  export let projects;
  export let post;
  let post_layout;

  switch (post.data.layout_type) {
    case "Blog":
      post_layout = Blog;
      break;
    case "TikTok":
      post_layout = TikTok;
      break;
    case "Micro":
      post_layout = Micro;
      break;
    case "Display":
      post_layout = Display;
      break;
    default:
      console.log("No Layout Specified");
      break;
  }
</script>

<svelte:component this={post_layout} {post} />
