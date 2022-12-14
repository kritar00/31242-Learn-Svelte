<script>
  import logoSmall from "/assets/logo-sm.svg";
  import logoLarge from "/assets/logo-lg.svg"
  import searchIcon from "/assets/search.svg";
  import barsIcon from "/assets/bars.svg";
  import dotsIcon from "/assets/dots-menu.svg";
  import { sharedVariables } from "../../stores/store";
  export let duration = "200ms";
  export let offset = 0;
  let headerClass = "show-navbar";
  let y = 0;
  let lastY = 0;
  function deriveClass(y, dy) {
    if (y < offset || dy < 0) {
      return "hide-navbar";
    }
    return "show-navbar";
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
  <div class="flex justify-between py-[17px]">
    <div class="flex pl-12 flex-grow">
      <button class="pr-[16px] xmd:hidden xlg:block xlg:px-[32px] xlg:mr-[36px]" on:click={() => sharedVariables.setIsOpenSidebar()}><img src={barsIcon} alt="" height="24" width="24" /></button>
      <img src={logoSmall} height="44" class="h-11 mr-5 xlg:hidden" alt="logo" />
      <img src={logoLarge} height="44" class="h-11 mr-5 hidden xlg:block" alt="logo" />
      <span
          on:mousedown={() => sharedVariables.setIsOpenSearch()}
          class="hidden sm:flex flex-grow max-w-[640px] h-full bg-silver-chalice-100 px-3 rounded-3xl"
        >
          <img src={searchIcon} width="20" height="20" alt="Search input" />
          <input disabled
            class="p-2 font-normal text-sm w-full bg-transparent"
            type="text"
            placeholder="Search health topics"
          />
        </span>
    </div>
    <div class="flex pr-12 ml-4">
      <button on:click={() => sharedVariables.setIsOpenSearch()} class="mr-10 sm:hidden">
        <img src={searchIcon} alt="click to search" height="24" width="24" />
      </button>
      <button
        ><img src={dotsIcon} alt="more button" height="24" width="24" /></button
      >
    </div>
  </div>
  <div class="xlg:ml-[136px]">
  <div class="items-center hidden xmd:flex px-[30px]">
        <button type='button' class="relative header-item text-wedgewood-500">
          Keto<span class="w-full bg-wedgewood-500 h-[4px] absolute bottom-[-1px] rounded-sm left-0"></span>
        </button>
        <button type='button' class="header-item">
          Video
        </button>
        <button href="/dummy-link" class="header-item">Membership</button>
        <button href="/dummy-link" class="header-item">Quizzes</button>
        <button href="/dummy-link" class="header-item">Recipes</button>
        <button href="/dummy-link" class="header-item">Success Stories</button>
        <button type='button' class="header-item">
          Mini Courses
        </button>
        <button href="/dummy-link" class="header-item">Resources</button>
        <button href="/dummy-link" class="header-item"
          >Shop<span
            class="bg-orange-600 text-white ml-1 py-[2px] px-1 rounded-3xl text-[9px]"
            >SALE</span
          ></button
        >
      </div>
  <hr class="border-t-[2px] w-11/12 mx-auto xlg:ml-[30px] overflow-hidden">
  </div>
</header>
{#if headerClass == 'hide-navbar'}
  <button on:click={() => sharedVariables.setIsOpenSidebar()} class="hidden xlg:block fixed ml-[70px] top-[67px] bg-white z-[60] block p-[10px] border border-silver-chalice-200 rounded-full" type="button"><img src="{barsIcon}" height="24" width="24" alt=""></button>
  {/if}
