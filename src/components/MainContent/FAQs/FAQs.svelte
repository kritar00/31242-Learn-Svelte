<script>
    import { dataStore } from "../../../stores/store";
</script>

<div class="mt-[30px]">
          {#each $dataStore.FAQs as faq}
            <div class="mb-5">
              <p class="mb-2 font-bold">{faq.question}</p>
              <p>{faq.answer}</p>
            </div>
          {/each}
        </div>