<script>
  import { dataStore, sharedVariables } from "../../stores/store";
  import FaQs from "./FAQs/FAQs.svelte";
  import HowTo from "./HowTo/HowTo.svelte";
  import ContentSections from "../Section/ContentSections.svelte";
  import Slider from "./Slider/Slider.svelte";
</script>

<div class="px-5 pt-[18px] 2xl:container">
  <section>
    <h1 class="text-[32px] font-bold">{@html $dataStore.mainTitle}</h1>
    <p class="text-[16px]">{$dataStore.paragraphs}</p>
  </section>
<ContentSections />
  <section>
    <h2 class="mb-5 mt-14 font-bold text-[32px]">{$dataStore.mealsExamples.title}</h2>
    <div class="grid md:grid-cols-3 gap-5">
      {#each $dataStore.mealsExamples.meals as meal}
        <div class="w-full">
          <img class="w-full" src={meal.image} alt="Meal's image" />
          <p class="text-2xl mt-5 pb-3 font-bold">{meal.name}</p>
          <p>{@html meal.paragraphs}</p>
        </div>
      {/each}
    </div>
  </section>
  <section class="mt-10">
    <HowTo/>
  </section>
  <section class="{$sharedVariables.isExpanded ? "" : "mb-8"}">
    <div class="flex flex-col md:flex-row md:justify-between md:items-center">
      <h2 class="text-4xl font-bold">Frequently Ask Questions</h2>
      <div class="mt-5">
        <button
          on:click={() => sharedVariables.setIsExpanded(true)}
          class="pb-3 font-bold {$sharedVariables.isExpanded
            ? 'border-b-2 border-wedgewood-500 text-wedgewood-500'
            : ''}"
          type="button">Expand All</button
        >
        <button
          on:click={() => sharedVariables.setIsExpanded(false)}
          class="pb-3 font-bold ml-5 {!$sharedVariables.isExpanded
            ? 'border-b-2 border-wedgewood-500 text-wedgewood-500'
            : ''}"
          type="button">Collapse All</button
        >
      </div>
    </div>
    {#if $sharedVariables.isExpanded}
      <FaQs />
    {/if}
  </section>
  <section class="overflow-hidden relative mt-6 mb-5 md:mb:[60px]">
    <Slider />
  </section>
  <section class="justify-between rounded-sm p-8 lg:flex shadow-lg mb-[60px]">
    <div>
      <h2 class="text-2xl font-bold">
        Dr. Berg's Healthy Ketosis Acceptable Foods List
      </h2>
      <p class="text-orange-500 font-bold mt-3 mb-5">
        Download the full list with acceptable foods and foods to avoid
      </p>
    </div>
    <a
      href="https://temp.drberg.com/uploads/opt-pages-docs/healthy-keto-docs-updated.paragraphsdf"
      target="_blank"
      class="bg-orange-500 w-[132px] h-10 rounded-sm flex items-center justify-center gap-2 text-white"
      ><img
        width="15"
        height="15"
        class="filter-white"
        src="/assets/download.svg"
        alt="Download foods list"
      />Download</a
    >
  </section>
</div>

<style>
</style>
