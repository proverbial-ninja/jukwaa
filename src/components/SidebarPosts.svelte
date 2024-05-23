<script>
  export let posts;

  import TimeAgo from "javascript-time-ago";

  // English.
  import en from "javascript-time-ago/locale/en";

  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en-US");
</script>

<div class="glowing-text py-3 d-flex justify-content-between w-100">
  <div>
    <span class=""> ///__________<sup>*</sup></span>
  </div>
</div>
<a href="#" class="text-decoration-none glowing-text text-white">&lt;- Back</a>
<hr />

<span><h3>All Posts</h3></span>
<div style="height: 70vh;" class="overflow-auto">
  {#each posts as item}
    <a href="?post={item.slug}" class="text-decoration-none">
      <div class=" border-start border-white mb-2 ps-2">
        <div class="mb-2 pt-2">
          <span class="text-black p-2 bg-white">{item.data.title}</span>
        </div>

        <div class="text-white">{item.data.description}</div>
        <small class="text-white"
          ><i>{timeAgo.format(item.data.startDate)}</i>
        </small>
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
