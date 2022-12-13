<script>
  import searchIcon from "/assets/search.svg";
  import crossIcon from "/assets/cross.svg";
  import rightIcon from "/assets/right.svg";
  import logoSmall from "/assets/logo-sm.svg"
  import { sharedVariables } from "../../../stores/store";
  function onMouseOpenSearch() {
    sharedVariables.setIsOpenSearch()
    sharedVariables.setIsOpenSidebar()
  }
  function onStateChange(state) {
    return state ? "animate-slideIn" : ""
  }
  $: animationClass = onStateChange($sharedVariables.isOpenSidebar)

  function slideOut(node) {
    return {
      duration: 350,
      css: timer => {
        return `
          transform: translateX(${(timer-1)*1000}px)
        `
      }
    }
  }
</script>

<div id="sidebarOverlay" class="bg-wedgewood-900 h-full w-full fixed z-[60] top-0 right-0">
  <div out:slideOut class="{animationClass} h-full pr-[10px] min-w-full  md:min-w-[454px] fixed bg-white">
    <div class="py-4 h-full pl-5">
      <div class="sidebar-item h-12 md:hidden">
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
        <button on:click={() => sharedVariables.setIsOpenSidebar()} class="w-11 h-11 flex items-center justify-center mr-5"
          ><img
            src={crossIcon}
            width="16"
            height="16"
            alt="Close sidebar button"
          /></button
        >
      </div>
      <div class="h-12 pl-[38px] hidden md:flex">
        <button on:click={() => sharedVariables.setIsOpenSidebar()} class="w-11 h-11 flex items-center justify-center mr-5"
          ><img
            src={crossIcon}
            width="16"
            height="16"
            alt="Close sidebar button"
          /></button
        >
        <img src="{logoSmall}" class="" alt="Page logo in sidebar" height="44">
      </div>
      <div class="mt-5 pr-5 md:pl-[110px] extraMd:pl-[134px]">
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
