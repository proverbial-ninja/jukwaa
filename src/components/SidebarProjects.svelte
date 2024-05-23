<script>
  export let projects;
  let posts = projects;
</script>

<div class="glowing-text py-3 d-flex justify-content-between w-100">
  <div>
    <span class=""> ///__________<sup>*</sup></span>
  </div>
</div>

<a href="#" class="text-decoration-none glowing-text text-white">&lt;- Back</a>
<hr />

<span><h3>All Projects</h3></span>
<div style="height: 70vh;" class="overflow-auto">
  {#each posts as item}
    <a href="#project:{item.slug}" class="text-decoration-none mb-1">
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
