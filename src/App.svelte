<script>
  import Header from "./components/Header/Header.svelte";
  import MainContent from "./components/MainContent/MainContent.svelte";
  import Sidebar from "./components/MainContent/Sidebar.svelte";
  import Search from "./components/Search/Search.svelte";
  import { sharedVariables } from "./stores/store";
  function onClickOutsideOfModal(event) {
    if(event.target.id == "searchModal")
    sharedVariables.setIsOpenSearch()
    else if (event.target.id == "sidebarOverlay")
    sharedVariables.setIsOpenSidebar()
  }
</script>
<svelte:window on:mousedown={onClickOutsideOfModal} />
<svelte:head>
  {#if ($sharedVariables.isOpenSearch || $sharedVariables.isOpenSidebar)}
    <style>
      body {
        overflow: hidden;
      }
    </style>
  {/if}
</svelte:head>
<Header duration="350ms" />
{#if $sharedVariables.isOpenSidebar}
<Sidebar />
{/if}
{#if $sharedVariables.isOpenSearch}
  <Search />
{/if}
<div class="px-5 mx-auto">
  <MainContent />
</div>
