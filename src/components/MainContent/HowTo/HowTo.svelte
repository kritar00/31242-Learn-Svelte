<script>
    import { dataStore } from "../../../stores/store";
</script>

<h2 class="mb-7 text-2xl font-bold">
        {$dataStore.HowTo.title}
      </h2>
      <div>
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
                  <p class="text-xl mt-[10px] mb-5">{step.paragraphs}</p>
                  <img src={step.image} alt="Picture of recipe" />
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>