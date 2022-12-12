<script>
    import searchIcon from "../../assets/search.svg"
    import crossIcon from "../../assets/cross.svg"
</script>

<div id="searchModal" class="w-full h-full overflow-hidden bg-wedgewood-900/60 fixed z-[60] top-0 right-0 pt-[160px] px-4">
    <div class="flex flex-shrink-0 w-1/2 mx-auto p-4 rounded-[32px] bg-silver-chalice-50 ">
        <img src="{searchIcon}" width="16" height="16" alt="Search here">
        <input class="w-full bg-transparent" type="text" name="search" id="search">
        <button class="rounded-full w-5 h-5 bg-gray-300 flex items-center justify-center">
            <img src="{crossIcon}" width="10" height="10" alt="Clear text" class="filter-gray">
        </button>
    </div>
</div>