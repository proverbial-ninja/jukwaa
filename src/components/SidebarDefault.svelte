<script>
  import { sidebar } from "../lib/store";
  export let post;
</script>

<div class="glowing-text py-3 d-flex justify-content-between w-100">
  <div>
    <span class=""> ///__________<sup>*</sup></span>
  </div>
</div>
<img src="/jukwaa/jukwaa.png" height="200px" alt="cover" />
<div class="jukwaa-yellow-bg p-1 mt-1 text-dark bg-white">
  <strong>Post: </strong>
  {post.data.title}
</div>
<div class="jukwaa-yellow-bg p-1 mt-1 text-dark bg-white">
  <strong>Posted: </strong>
  {post.data.startDate}
</div>
<div class="jukwaa-yellow-bg p-1 mt-1 text-dark bg-white">
  <strong>Author: </strong>
  {post.data.author}
</div>
<hr />
<div>
  <a
    role="button"
    on:click={() => sidebar.set("project:" + post.data.project.slug)}
    class="text-decoration-none"
  >
    <span class="text-white glowing-text"
      >-&gt; Project Details &amp; History</span
    ></a
  >
</div>
<div class="mt-1">
  <a
    role="button"
    on:click={() => sidebar.set("projects")}
    class="text-decoration-none"
  >
    <span class="text-white glowing-text">-&gt; All Projects</span>
  </a>
</div>
<div class="mt-1">
  <a
    role="button"
    on:click={() => sidebar.set("posts")}
    class="text-decoration-none"
  >
    <span class="text-white glowing-text">-&gt; All Posts</span>
  </a>
</div>
