<script>
  export let post;
  export let posts;
  export let projects;
  import { onMount, onDestroy } from "svelte";
  import SidebarDefault from "./SidebarDefault.svelte";
  import SidebarPosts from "./SidebarPosts.svelte";
  import SidebarProjects from "./SidebarProjects.svelte";
  import SidebarSingleProject from "./SidebarSingleProject.svelte";

  let slug;
  let url;

  const handleHashChange = (z) => {
    url = location.hash.slice(1);
    console.log("url");
    console.log(url);
  };
  window.addEventListener("hashchange", handleHashChange);

  onMount(() => {
    console.log("posts");

    handleHashChange();
  });
  onDestroy(() => {
    window.removeEventListener("hashchange", handleHashChange);
  });
</script>

<div style="max-width: 380px;" class="col col-3 d-inline-block me-4">
  {#if !url}
    <SidebarDefault {post} />
    <!-- content here -->
  {:else if url == "posts"}
    <SidebarPosts {posts} />
  {:else if url == "projects"}
    <SidebarProjects {projects} />
    <!-- else if content here -->
  {:else if url.startsWith("project:")}
    <SidebarSingleProject {url} {projects} {posts} />
    <!-- else content here -->
  {/if}
</div>
