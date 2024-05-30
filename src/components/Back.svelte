<script>
  import { sidebar } from "../lib/store";

  const back = () => {
    sidebar.set("");
    var _url = new URL(window.location.href);
    _url.searchParams.delete("sidebar");
    window.history.pushState({}, "", _url);
  };
</script>

<a
  role="button"
  on:click={back}
  class="text-decoration-none glowing-text text-white">&lt;- Home</a
>
