<script>
  import { fade } from "astro:transitions";
  import { onMount } from "svelte";
  import { onDestroy } from "svelte";
  import SideBar from "./SideBar.svelte";
  import SvelteMarkdown from "svelte-markdown";
  import ImageComponent from "./MarkdownImage.svelte";
  import Stage from "./Stage.svelte";
  export let posts;
  import { sidebar } from "../lib/store";
  let post;
  let project;
  export let projects;

  let slug;

  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);
    slug = urlParams.get("post");
    if (slug) {
      post = posts.find((p) => p.slug === slug);
    } else {
      post = posts[0];
    }

    project = projects.find((p) => p.slug === post.data.project.slug);

    //  projects = projects.filter((p) => p.data.project === post.data.project);
  });
</script>

{#if post}
  <!-- content here -->

  <div class="container-fluid">
    <div class="row p-4" style="height: 87vh; ">
      <div class="col col-9 d-inline-block">
        <div class="py-3 d-flex justify-content-between w-100">
          <div>
            <span class="text-dark bg-white jukwaa-yellow-bg p-2"
              ><strong>On Stage</strong> : {project.data.title} // {post.data
                .title}</span
            >
          </div>
          <div>
            <span class=" glowing-text">
              <a
                class="text-decoration-none text-white"
                on:click={() => sidebar.set("project:jukwaa")}>-&gt; About</a
              >
            </span>
          </div>
        </div>
        <div
          style="height: 77vh; "
          class="col col-12 border p-0 d-inline-block overflow-y-hidden overflow-x-auto bg-opacity-75"
        >
          <Stage {post} {projects} />
        </div>
        <div class="d-flex flex-row-reverse w-100 text-white">
          {#if posts.length > 1}
            {#if post.slug !== posts[0].slug}
              <a
                href={`?post=${posts[posts.indexOf(post) - 1].slug}`}
                class="text-decoration-none text-white"
              >
                <span class=" glowing-text">Next</span>
              </a>
            {:else}
              <span class=" text-secondary">Next</span>
            {/if}
            {#if post.slug !== posts[posts.length - 1].slug}
              <a
                href={`?post=${posts[posts.indexOf(post) + 1].slug}`}
                class="text-decoration-none me-3 text-white"
              >
                <span class=" glowing-text">Previous</span>
              </a>
            {:else}
              <span class=" text-secondary me-3">Previous</span>
            {/if}
          {/if}
        </div>
      </div>
      <div
        class="offcanvas offcanvas-end show bg-black text-white"
        tabindex="-1"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        id="offcanvasDark"
        aria-labelledby="offcanvasDarkLabel"
      >
        <div class="offcanvas-header">
          <!-- <h5 class="offcanvas-title" id="offcanvasDarkLabel">Offcanvas</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvasDark"
            aria-label="Close"
          ></button> -->
        </div>
        <div class="offcanvas-body">
          <SideBar {posts} {post} {projects} />
        </div>
      </div>
    </div>
  </div>
{:else}
  <h1>Loading...</h1>
{/if}

<style global>
  .jukwaa-yellow-bg {
    background-color: #fff;
  }
  .glowing-text {
    text-shadow:
      0 0 20px #efe300,
      0 0 30px #fff,
      0 0 40px #d5dc14,
      0 0 70px #fcb708,
      0 0 80px #d5dc14,
      0 0 100px #d5dc14,
      0 0 150px #7f8138;
  }

  .glowing-text:hover {
    color: #000;
    text-shadow:
      0 0 30px #fff,
      0 0 40px #fff,
      0 0 60px #d5dc14,
      0 0 90px #444511,
      0 0 100px #d5dc14,
      0 0 150px #202104,
      0 0 200px #7f8138;
  }
</style>
