<script>
  import Header from "./components/Header/Header.svelte";
  import MainContent from "./components/MainContent/MainContent.svelte";
  import Sidebar from "./components/MainContent/Sidebar.svelte";
  import Search from "./components/Search/Search.svelte";
  let isOpenSidebar = false;
  let isOpenSearch = false;
  function toggleSidebar() {
    isOpenSidebar = !isOpenSidebar;
  }
  function toggleSearch() {
    isOpenSearch = !isOpenSearch;
  }
  function funnyFunc(event) {
    if(event.target.id == "searchModal")
    toggleSearch()
  }
</script>
<svelte:window on:mousedown={funnyFunc} />
<svelte:head>
  {#if (isOpenSearch || isOpenSidebar)}
    <style>
      body {
        overflow: hidden;
      }
    </style>
  {/if}
</svelte:head>
<Header toggleSidebar={toggleSidebar} toggleSearch={toggleSearch} duration="350ms" />
{#if isOpenSidebar}
<Sidebar toggleSidebar={toggleSidebar} toggleSearch={toggleSearch} />
{/if}
{#if isOpenSearch}
  <Search />
{/if}
<div class="container mx-auto">
  <MainContent />
</div>
