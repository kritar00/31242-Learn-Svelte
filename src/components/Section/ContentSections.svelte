<script>
  import { dataStore } from "../../stores/store";
  import approvedIcon from "/assets/tick.svg";
</script>

<section>
  <div class="mt-10">
    {#each $dataStore.sections as section}
        <h2 class="text-2xl font-bold">
          {section.title}
        </h2>
        <div class=" mt-5">
          {#if section.paragraphs}
            {#each section.paragraphs as item}
              <p class="mb-5">{@html item}</p>
            {/each}
          {/if}
        </div>
        <div
          >{#if section.choice}<p class="mb-5">{section.choice.caption}</p>
            <ul>
              {#each section.choice.choices as choice}<li
                  class="ml-10 list-disc mb-5"
                >
                  {@html choice}
                </li>{/each}
            </ul>
          {/if}</div
        >
        <div
          >{#if section.image}<img
              src={section.image}
              alt=""
            />{/if}</div
        >
        <div
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
        </div>
    {/each}
    </div>
  </section>