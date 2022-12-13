<script>
  import { dataStore, sharedVariables } from "../../stores/store";
  import FaQs from "../Slots/FAQs/FAQs.svelte";
  import HowTo from "../Slots/HowTo/HowTo.svelte";
  import SectionSlot from "../Slots/Section/SectionSlot.svelte";
  import Slider from "./Slider/Slider.svelte";
  import approvedIcon from "/assets/tick.svg";
</script>

<div class="px-5 pt-[18px] 2xl:container">
  <section>
    <h1 class="text-[32px] font-bold">{@html $dataStore.mainTitle}</h1>
    <p class="text-[16px]">{$dataStore.p}</p>
  </section>
  <section>
    {#each $dataStore.sections as section}
      <SectionSlot>
        <h2 slot="sectionTitle" class="text-2xl font-bold">
          {section.title}
        </h2>
        <div class=" mt-5" slot="paragraph">
          {#if section.p}
            {#each section.p as item}
              <p class="mb-5">{@html item}</p>
            {/each}
          {/if}
        </div>
        <svelte:fragment slot="choices"
          >{#if section.choice}<p class="mb-5">{section.choice.caption}</p>
            <ul>
              {#each section.choice.choices as choice}<li
                  class="ml-10 list-disc mb-5"
                >
                  {@html choice}
                </li>{/each}
            </ul>
          {/if}</svelte:fragment
        >
        <svelte:fragment slot="image"
          >{#if section.image}<img
              src={section.image}
              alt=""
            />{/if}</svelte:fragment
        >
        <svelte:fragment slot="subSection"
          >{#if section.subSection}
            {#each section.subSection as subSection}
              <h2 class="text-xl font-bold mb-5 mt-5">
                {subSection.subTitle}
              </h2>
              <ul class="grid grid-flow-rows gap-4 grid-cols-2 lg:grid-cols-4">
                {#each subSection.items as item}
                  <li class="flex items-center">
                    <span
                      class="rounded-full bg-riptide-400 flex-shrink-0 w-[18px] h-[18px] mr-2"
                      ><img
                        class="filter-white w-[18px] h-[18px]"
                        src={approvedIcon}
                        alt="approved fats"
                      /></span
                    >{@html item}
                  </li>
                {/each}
              </ul>
            {/each}
          {/if}
        </svelte:fragment>
      </SectionSlot>
    {/each}
  </section>
  <section class="mt-10">
    <HowTo>
      <h2 slot="title" class="mb-7 text-2xl font-bold">
        {$dataStore.HowTo.title}
      </h2>
      <div slot="recipes">
        {#each $dataStore.HowTo.recipes as item}
          <div class="mb-10 md:mb-16">
            <h3 class="text-xl mb-5 font-bold">{item.recipeTitle}</h3>
            <h3 class="text-xl mb-5">INGREDIENTS</h3>
            {#each item.ingredients as ingredient}
              <p class="text-xl">{ingredient}</p>
            {/each}
            <div class="relative ml-10 mt-5">
              <span
                class="left-[-30px] top-[5px] h-full border border-outer-space-800 absolute"
              />
              {#each item.steps as step}
                <div class="relative mt-5">
                  <span
                    class="rounded-full bg-outer-space-900 w-[18px] h-[18px] absolute left-[-38px] top-[5px]"
                  />
                  <h3 class="text-xl font-bold">{step.step}</h3>
                  <p class="text-xl mt-[10px] mb-5">{step.p}</p>
                  <img src={step.image} alt="Picture of recipe" />
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </HowTo>
  </section>
  <section>
    <div class="flex flex-col md:flex-row:justify-between:items-center">
      <h2 class="text-4xl font-bold">Frequently Ask Questions</h2>
      <div class="mt-5">
        <button on:click={() => sharedVariables.setIsExpanded(true)} class="pb-3 font-bold {$sharedVariables.isExpanded ? "border-b-2 border-wedgewood-500 text-wedgewood-500" : ""}" type="button">Expand All</button>
        <button on:click={() => sharedVariables.setIsExpanded(false)} class="pb-3 font-bold ml-5 {!$sharedVariables.isExpanded ? "border-b-2 border-wedgewood-500 text-wedgewood-500" : ""}" type="button">Collapse All</button>
      </div>
    </div>
    {#if $sharedVariables.isExpanded}
    <FaQs>
    <div class="mt-[30px]" slot="FAQ">
      {#each $dataStore.FAQs as faq}
      <div class="mb-5">
        <p class="mb-2 font-bold">{faq.Q}</p>
        <p>{faq.A}</p>
        </div>
      {/each}
      </div>
      </FaQs>
      {:else}
        <div class='mb-8'></div>
    {/if}
  </section>
  <section class="overflow-hidden relative">
    <Slider></Slider>
  </section>
  <section></section>
</div>

<style>
</style>
