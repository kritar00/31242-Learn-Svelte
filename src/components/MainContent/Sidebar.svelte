<script>
  import searchIcon from "../../assets/search.svg";
  import crossIcon from "../../assets/cross.svg";
  import rightIcon from "../../assets/right.svg";
  import { slide } from "svelte/transition";
  import { backInOut } from "svelte/easing";
  export let toggleSidebar;
  export let toggleSearch;
  function onMouseOpenSearch() {
    toggleSearch();
    toggleSidebar();
  }
</script>

<div class="bg-wedgewood-900 h-full w-full fixed z-[60] top-0 right-0">
  <div class="animate-slideIn h-full pr-[10px] bg-white">
    <div class="py-4 h-full pl-5">
      <div class="sidebar-item h-12">
        <span
          on:mousedown={onMouseOpenSearch}
          class="flex w-10/12 h-full bg-silver-chalice-100 px-3 rounded-3xl"
        >
          <img src={searchIcon} width="20" height="20" alt="Search input" />
          <input
            class="p-2 font-normal text-sm bg-transparent"
            type="text"
            placeholder="Search health topics"
          />
        </span>
        <button on:click={toggleSidebar} class="w-11 h-11 mr-[7px]"
          ><img
            src={crossIcon}
            width="16"
            height="16"
            alt="Close sidebar button"
          /></button
        >
      </div>
      <div class="mt-5 pr-5">
        <p class="sidebar-item">
          Keto<span class="w-[44px] h-[44px] items-center flex justify-center"
            ><img src={rightIcon} alt="To Keto" /></span
          >
        </p>
        <p class="sidebar-item">
          Video<span class="w-[44px] h-[44px] items-center flex justify-center"
            ><img src={rightIcon} alt="To Video" /></span
          >
        </p>
        <a href="/dummy-link" class="sidebar-link">Membership</a>
        <a href="/dummy-link" class="sidebar-link">Quizzes</a>
        <a href="/dummy-link" class="sidebar-link">Recipes</a>
        <a href="/dummy-link" class="sidebar-link">Success Stories</a>
        <p class="sidebar-item">
          Mini Courses<span
            class="w-[44px] h-[44px] items-center flex justify-center"
            ><img src={rightIcon} alt="To mini courses" /></span
          >
        </p>
        <a href="/dummy-link" class="sidebar-link">Resources</a>
        <a href="/dummy-link" class="sidebar-link"
          >Shop<span
            class="bg-orange-600 text-white ml-1 py-[2px] px-1 rounded-3xl text-[9px]"
            >SALE</span
          ></a
        >
      </div>
    </div>
  </div>
</div>
