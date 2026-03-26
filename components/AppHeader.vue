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
  <header
    class="sticky top-0 z-50 transition-all duration-300"
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
            class="text-sm font-medium text-neutral-700 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- CTA Desktop -->
      <NuxtLink
        to="/contact"
        class="hidden md:inline-flex items-center gap-2 bg-gradient-cta text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
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
      <div v-if="mobileOpen" class="md:hidden bg-white border-t shadow-lg">
        <div class="container mx-auto px-4 py-4 space-y-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="block px-4 py-3 rounded-lg text-neutral-700 font-medium hover:bg-neutral-100 hover:text-primary transition-colors"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="block text-center bg-gradient-cta text-white font-semibold px-4 py-3 rounded-lg mt-3"
            @click="mobileOpen = false"
          >
            Audit gratuit
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>
