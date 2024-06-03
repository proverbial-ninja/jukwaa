<script>
  export let post;
  export let posts;
  export let projects;
  import { onMount, onDestroy } from "svelte";
  import SidebarDefault from "./SidebarDefault.svelte";
  import SidebarPosts from "./SidebarPosts.svelte";
  import SidebarProjects from "./SidebarProjects.svelte";
  import SidebarSingleProject from "./SidebarSingleProject.svelte";
  import { sidebar } from "../lib/store";
  let url;

  const removeUrl = () => {
    if (!url) {
      var _url = new URL(window.location.href);
      _url.searchParams.delete("sidebar");
      window.history.pushState({}, "", _url);
    }
  };
  sidebar.subscribe((value) => {
    console.log("storess");
    url = value;
    if (url) {
      var _url = new URL(window.location.href);
      _url.searchParams.set("sidebar", value);
      window.history.pushState({}, "", _url);
    } else {
      // removeUrl();
    }
    console.log(value);
  });

  let slug;

  onMount(() => {
    url = new URL(window.location).searchParams.get("sidebar");
    sidebar.set(url);
  });
</script>

<div style="max-width: 350px;" class="col d-inline-block me-4">
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
