<script>
  import { dataStore } from "../../stores/store";
  import SectionSlot from "../Slots/SectionSlot.svelte";
  import ingredientsImage from "../../assets/keto-diet-food-ingredients.webp";
  import approvedIcon from "../../assets/tick.svg"
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
              {#each section.choice.choices as choice}<li class="ml-10 list-disc mb-5">
                  {@html choice}
                </li>{/each}
            </ul>
          {/if}</svelte:fragment
        >
        <svelte:fragment slot="image"
          >{#if section.image}<img
              src={ingredientsImage}
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
                  <li class="flex items-center"><span class="rounded-full bg-riptide-400 flex-shrink-0 w-[18px] h-[18px] mr-2"><img class="filter-white w-[18px] h-[18px]" src="{approvedIcon}" alt="approved fats"></span>{@html item}</li>
                {/each}
              </ul>
            {/each}
          {/if}
        </svelte:fragment>
      </SectionSlot>
    {/each}
  </section>
</div>

<style>
  .item-link {
    color: #3d56f4;
  }
  .item-link:hover {
    color: #5d7cf8;
    text-decoration: underline;
  }
</style>