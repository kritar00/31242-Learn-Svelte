<script>
  import { dataStore } from "../../../stores/store";
  let translate;
  let containerOffsetWidth;
  let isAtStart = false;
  let isAtEnd = true;
  let currentOffset = 0;
  let value = 0;
  const translateOffset = (navigate) => {
    if (navigate == "right") {
      isAtStart = true
      value += 340;
      if (value > 320 * 5 + 20 * 4 - containerOffsetWidth) {
        value = 320 * 5 + 20 * 4 - containerOffsetWidth;
        isAtEnd = !isAtEnd;
      }
    }
    if (navigate == "left") {
      value -= 340;
      isAtEnd = true
      if (value < 0) {
        value = 0;
        isAtStart = !isAtStart;
      }
    }

    return value;
  };

  const handleClickNext = (value) => {
    translate = `transform: translateX(${-translateOffset(value)}px)`;
  };
  const handleClickPrev = (value) => {
    translate = `transform: translateX(${-translateOffset(value)}px)`;
  };
</script>

<h2 class="font-bold text-[32px]">Latest Recipes</h2>
{#if isAtStart}
  <button
    class="absolute left-[20px] top-1/2 z-40 bg-white p-4 rounded-full -translate-y-1/2"
    on:click={() => handleClickPrev("left")}
    ><img
      width="15"
      height="15"
      src="/assets/left.svg"
      alt="To the left"
    /></button
  >
{/if}
<div
  bind:clientWidth={containerOffsetWidth}
  style={translate}
  class="transition my-6 md:mt-8 duration-300 flex items-stretch space-x-5 w-full"
>
  {#each $dataStore.LatestRecipes as item}
    <div class="min-w-[320px] max-w-[320px]">
      <img src={item.image} alt="" />
      <span class="mt-4 mb-6 block">
        <p class="text-wedgewood-400">{item.type}</p>
        <p class="text-xl font-bold">{item.name}</p>
      </span>
    </div>
  {/each}
</div>
{#if isAtEnd}
  <button
    class="absolute right-[20px] top-1/2 z-40 bg-white p-4 rounded-full -translate-y-1/2"
    on:click={() => handleClickNext("right")}
    ><img
      width="15"
      height="15"
      src="/assets/right.svg"
      alt="To the right"
    /></button
  >
{/if}
