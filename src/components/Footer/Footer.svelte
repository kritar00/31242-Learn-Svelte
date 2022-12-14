<script>
  import { dataStore, sharedVariables } from "../../stores/store";
</script>

<footer class="mt-5 py-10 px-5 2xl:container">
  <div class="py-5 border-y-[1px]">
    <div on:mousedown={() => sharedVariables.setIsExpandedDisclaimers()} class="flex cursor-pointer">
      <p class="mr-3 py-2">*Disclaimers</p>
      <img
        width="15"
        class="{$sharedVariables.isExpandedDisclaimers ? "rotate-180" : ""} ease-linear duration-300"
        src="/assets/up.svg"
        alt="Open/Close disclaimers"
      />
    </div>
    {#if $sharedVariables.isExpandedDisclaimers}
    {#each $dataStore.disclaimers as item}
      <p class="mb-2">{@html item}</p>
    {/each}
    {/if}
  </div>
  <div>
    <div class="py-8 extraMd:flex items-center">
      <img
        src="/assets/logo-lg.svg"
        alt="Dr. Berg's logo"
        class="h-[44px] mb-5 mr-14"
        height="44"
      />
      <div class="flex space-x-3">
        <img width="32" src="/assets/facebook.svg" alt="" />
        <img width="32" src="/assets/youtube.svg" alt="" />
        <img width="32" src="/assets/twitter.svg" alt="" />
        <img width="32" src="/assets/pinterest.svg" alt="" />
        <img width="32" src="/assets/instagram.svg" alt="" />
      </div>
    </div>
    <div class="grid extraMd:grid-cols-4">
      <div class="mb-5">
        <p class="font-bold">About</p>
        <p>Dr. Berg</p>
        <p>Careers</p>
      </div>
      <div class="mb-5">
        <p class="font-bold">Our network</p>
        <p>Dr. Berg Shop</p>
        <p>Dr. Berg Courses</p>
      </div>
      <div class="mb-5">
        <p class="font-bold">Support</p>
        <p>Hours of operation</p>
        <p>Contact us</p>
        <p>Support Services</p>
      </div>
      <div class="mb-5">
        <p class="font-bold">Legal</p>
        <p>Terms and conditions</p>
        <p>Privacy policy</p>
        <p>Anti-spam</p>
        <p>Acceptable use policy</p>
      </div>
    </div>
    <div class="flex gap-2 pt-[10px] sm:pt-5 pb-[30px]">
      <img src="/assets/appstore.png" alt="Download on Appstore" />
      <img src="/assets/googleplay.png" alt="Download on Google Play" />
    </div>
    <div>
      <div>
        <p>Dr. Berg Nutritionals,</p>
        <p><strong>Address:</strong>4501 Ford Avenue, Alexandria, VA 22302.</p>
        <p><strong>Phone:</strong> 703-354-7336</p>
      </div>
      <p>© Copyright 2022. All rights reserved.</p>
    </div>
  </div>
</footer>
