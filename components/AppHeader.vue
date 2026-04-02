<script setup lang="ts">
const mobileOpen = ref(false)
const scrolled = ref(false)

const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

if (import.meta.client) {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20
  })
}
</script>

<template>
  <div>
  <!-- Top bar with phone -->
  <div class="hidden md:block text-[#a0a0a0] text-xs" style="background: rgba(10,10,10,0.95);">
    <div class="container mx-auto px-4 max-w-7xl flex items-center justify-end h-8 gap-4">
      <a href="tel:+33769801190" class="flex items-center gap-1.5 hover:text-[#FF8C00] transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        07 69 80 11 90
      </a>
      <span class="text-[#333]">|</span>
      <a href="mailto:contact@poitiers.digital" class="hover:text-[#FF8C00] transition-colors">contact@poitiers.digital</a>
    </div>
  </div>

  <header
    class="sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 will-change-[background-color,box-shadow]"
    :class="scrolled ? 'shadow-sm' : 'bg-transparent'"
    :style="scrolled ? 'background: rgba(10, 10, 10, 0.8); backdrop-filter: blur(24px);' : ''"
  >
    <nav class="container mx-auto px-4 max-w-7xl flex items-center justify-between h-16 md:h-20" aria-label="Navigation principale">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 group">
        <img src="/images/logo-prisme.png" alt="AdScale" class="w-10 h-10 object-contain" style="filter: drop-shadow(0 0 8px rgba(255,140,0,0.5));" />
        <span class="font-heading font-bold text-xl text-[#fafafa]">
          Ad<span class="text-[#FF8C00]">Scale</span>
        </span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="text-sm font-medium text-[#a0a0a0] hover:text-[#fafafa] transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#FF8C00] after:transition-[width] after:duration-300 hover:after:w-full"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- CTA Desktop -->
      <div class="hidden md:flex items-center gap-3">
        <a href="tel:+33769801190" class="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-[#fafafa] text-sm font-medium transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          Nous appeler
        </a>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-2 bg-[#FF8C00] hover:bg-[#E07B00] text-[#0a0a0a] font-semibold text-sm px-5 py-2.5 rounded-lg hover:shadow-lg hover:shadow-[#FF8C00]/25 transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 will-change-transform"
        >
          Audit gratuit
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </NuxtLink>
      </div>

      <!-- Mobile Toggle -->
      <button
        class="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-[#fafafa]"
        :aria-expanded="mobileOpen"
        aria-label="Menu de navigation"
        @click="mobileOpen = !mobileOpen"
      >
        <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="md:hidden fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl pt-20 px-6">
        <nav class="flex flex-col gap-6">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-lg text-[#a0a0a0] hover:text-[#fafafa] transition-colors"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="mt-4 text-center py-3 px-6 bg-[#FF8C00] text-[#0a0a0a] rounded-xl font-semibold"
            @click="mobileOpen = false"
          >
            Audit gratuit
          </NuxtLink>
          <a href="tel:+33769801190" class="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#25D366] hover:bg-[#20BD5A] text-[#fafafa] rounded-xl font-semibold transition-colors mt-4" @click="mobileOpen = false">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            Nous appeler
          </a>
        </nav>
      </div>
    </Transition>
  </header>
  </div>
</template>
