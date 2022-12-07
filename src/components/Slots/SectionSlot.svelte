<script>
</script>

<div class="mt-10">
  <slot name="sectionTitle" />
  <slot name="paragraph" />
  {#if $$slots.choices}
    <div class="empty:hidden"><slot name="choices" /></div>
  {/if}
  {#if $$slots.image}<div class="empty:hidden"><slot name="image" /></div>{/if}
  {#if $$slots.subSection} 
    <div class="empty:hidden"
    ><slot name="subSection" />
    </div>
  {/if}
</div>
