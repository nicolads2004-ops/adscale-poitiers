<script setup lang="ts">
const showStickyCta = ref(false)
onMounted(() => {
  const handleScroll = () => { showStickyCta.value = window.scrollY > 500 }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<template>
  <div class="min-h-screen flex flex-col font-body text-[#fafafa]" style="background: #0a0a0a;">
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-[#FF8C00] text-[#0a0a0a] px-4 py-2 rounded-lg font-semibold">
      Aller au contenu principal
    </a>
    <AppHeader />
    <main id="main-content" class="flex-1">
      <NuxtPage />
    </main>
    <AppFooter />

    <!-- Sticky CTA mobile -->
    <div
      class="fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden transition-transform duration-400"
      :class="showStickyCta ? 'translate-y-0' : 'translate-y-full'"
      style="background: linear-gradient(to top, #0a0a0a 60%, transparent);"
    >
      <a href="/contact" class="block w-full py-3 px-6 bg-[#FF8C00] hover:bg-[#E07B00] text-[#0a0a0a] text-center font-semibold rounded-xl transition-colors shadow-orange-glow">
        Audit Google Ads gratuit &rarr;
      </a>
    </div>
  </div>
</template>
