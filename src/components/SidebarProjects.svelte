<script>
  export let projects;
  let posts = projects;
  import { sidebar } from "../lib/store";
  import Back from "./Back.svelte";
</script>

<div class="glowing-text py-3 d-flex justify-content-between w-100">
  <div>
    <span class=""> ///__________<sup>*</sup></span>
  </div>
</div>

<Back />
<hr />

<span><h3>All Projects</h3></span>
<div style="height: 70vh;" class="overflow-auto">
  {#each posts as item}
    <a
      role="button"
      on:click={() => sidebar.set("project:" + item.slug)}
      class="text-decoration-none mb-1"
    >
      <div>
        <mark>{item.data.title}</mark>
        <p class="text-white">{item.data.description}</p>
      </div>
    </a>
  {/each}
</div>

<style>
  mark:hover {
    background-color: white;
    color: black;
  }
</style>
