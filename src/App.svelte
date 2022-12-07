<script>
  import Header from "./components/Header/Header.svelte";
  import MainContent from "./components/MainContent/MainContent.svelte";
  import Sidebar from "./components/MainContent/Sidebar.svelte";
  let isOpen = false;
  function toggleSidebar() {
    isOpen = !isOpen;
  }
</script>

<Header toggleSidebar={toggleSidebar} duration="350ms" />
{#if isOpen}
<Sidebar toggleSidebar={toggleSidebar} />
{/if}
<div class="container mx-auto">
  <MainContent />
</div>
