<script>
  import logoSmall from "../../assets/logo-sm.svg";
  import searchIcon from "../../assets/search.svg";
  import barsIcon from "../../assets/bars.svg";
  import dotsIcon from "../../assets/dots-menu.svg";
  export let duration = "200ms";
  export let offset = 0;
  export let toggleSidebar;

  let headerClass = "showNavbar";
  let y = 0;
  let lastY = 0;
  function deriveClass(y, dy) {
    if (y < offset) {
      return "hideNavbar";
    }

    if (dy < 0) {
      return "hideNavbar";
    }

    return "showNavbar";
  }

  function updateClass(y) {
    const dy = lastY - y;
    lastY = y;
    return deriveClass(y, dy);
  }

  function setTransitionDuration(node) {
    node.style.transitionDuration = duration;
  }

  $: headerClass = updateClass(y);
</script>

<svelte:window bind:scrollY={y} />

<header use:setTransitionDuration class="{headerClass} transition-transform w-full sticky top-0 z-50 bg-white">
  <div class="flex justify-center items-center py-[9px] gap-4 bg-tuna-900">
    <p class="text-white font-bold text-2xl">6354</p>
    <p class="text-white">Success stories.</p>
    <a
      class="text-orange-500 underline"
      href="https://devdrbergstorage.z20.web.core.windows.net/success-stories"
      >View stories</a
    >
  </div>
  <div class="flex justify-between py-6">
    <div class="flex pl-12">
      <button on:click={toggleSidebar}><img src={barsIcon} alt="" height="24" width="24" /></button>
      <img src={logoSmall} class="h-11 pl-[16px] sm:pl-10" alt="logo" height="44" />
    </div>
    <div class="flex pr-12">
      <button class="pr-10 sm:hidden">
        <img src={searchIcon} alt="click to search" height="24" width="24" />
      </button>
      <button
        ><img src={dotsIcon} alt="more button" height="24" width="24" /></button
      >
    </div>
  </div>
  <hr class="border-t-[2px] w-11/12 border-silver-chalice-500☻ mx-auto">
</header>
