<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";

  export let href = "";
  export let title = undefined;
  export let text = "";
</script>

<button class="btn" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"
  ><img class="img-fluid" src={href} alt="ok" />
</button>

<div
  class="modal fade"
  id="exampleModalToggle"
  aria-hidden="true"
  aria-labelledby="exampleModalToggleLabel"
  tabindex="-1"
>
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        {#if title}
          <!-- content here -->
          <h1 class="modal-title fs-5" id="exampleModalToggleLabel">{title}</h1>
        {/if}
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <img class="img-fluid" src={href} alt="ok" />
      </div>
    </div>
  </div>
</div>
