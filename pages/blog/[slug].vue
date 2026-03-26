<script setup lang="ts">
const route = useRoute()
useHead({ title: 'Blog Google Ads — AdScale Poitiers' })
</script>

<template>
  <div style="background-color: #050508; min-height: 100vh; color: white;">
    <section class="pt-32 pb-10 px-4 sm:px-6">
      <div class="max-w-3xl mx-auto">
        <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-slate-500 hover:text-white text-sm mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/></svg>
          Retour au blog
        </NuxtLink>
        <div class="mt-16 text-center">
          <p class="text-slate-400 mb-6">Cet article est en cours de rédaction.</p>
          <NuxtLink to="/blog" class="inline-block bg-[#4285f4] hover:bg-[#3367d6] text-white px-6 py-3 rounded-xl font-semibold transition-all">
            Voir tous les articles
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
