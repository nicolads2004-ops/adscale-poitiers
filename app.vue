<script setup lang="ts">
const showStickyCta = ref(false)
onMounted(() => {
  const handleScroll = () => { showStickyCta.value = window.scrollY > 500 }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<template>
  <div class="min-h-screen flex flex-col font-body text-neutral-900">
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-primary text-white px-4 py-2 rounded-lg">
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
      style="background: linear-gradient(to top, white 60%, transparent);"
    >
      <a href="/contact" class="block w-full py-3 px-6 bg-[#4285f4] hover:bg-[#3b78e7] text-white text-center font-semibold rounded-xl transition-colors">
        Audit Google Ads gratuit →
      </a>
    </div>
  </div>
</template>
