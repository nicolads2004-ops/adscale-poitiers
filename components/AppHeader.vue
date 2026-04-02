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
  <div class="hidden md:block bg-neutral-900 text-white/70 text-xs">
    <div class="container mx-auto px-4 max-w-7xl flex items-center justify-end h-8 gap-4">
      <a href="tel:+33769801190" class="flex items-center gap-1.5 hover:text-white transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        07 69 80 11 90
      </a>
      <span class="text-white/30">|</span>
      <a href="mailto:contact@poitiers.digital" class="hover:text-white transition-colors">contact@poitiers.digital</a>
    </div>
  </div>

  <header
    class="sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 will-change-[background-color,box-shadow]"
    :class="scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'"
  >
    <nav class="container mx-auto px-4 max-w-7xl flex items-center justify-between h-16 md:h-20" aria-label="Navigation principale">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 group">
        <div class="w-9 h-9 rounded-lg bg-gradient-brand flex items-center justify-center">
          <span class="text-white font-heading font-extrabold text-sm">AS</span>
        </div>
        <span class="font-heading font-bold text-xl text-neutral-900">
          Ad<span class="text-primary">Scale</span>
        </span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="text-sm font-medium text-neutral-700 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-[width] after:duration-300 hover:after:w-full"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- CTA Desktop -->
      <NuxtLink
        to="/contact"
        class="hidden md:inline-flex items-center gap-2 bg-gradient-cta text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 will-change-transform"
      >
        Audit gratuit
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </NuxtLink>

      <!-- Mobile Toggle -->
      <button
        class="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
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
      <div v-if="mobileOpen" class="md:hidden fixed inset-0 z-40 bg-[#050508]/95 backdrop-blur-xl pt-20 px-6">
        <nav class="flex flex-col gap-6">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-lg text-white/70 hover:text-white transition-colors"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="mt-4 text-center py-3 px-6 bg-gradient-cta text-white rounded-xl font-semibold"
            @click="mobileOpen = false"
          >
            Audit gratuit
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
  </div>
</template>
