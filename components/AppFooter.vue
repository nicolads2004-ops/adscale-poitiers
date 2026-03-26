<template>
  <footer class="bg-neutral-900 text-white">
    <!-- CTA Banner -->
    <div class="bg-gradient-brand">
      <div class="container mx-auto px-4 max-w-7xl py-12 md:py-16 text-center">
        <h2 class="font-heading font-extrabold text-2xl md:text-4xl mb-4">
          Prêt à multiplier vos clients ?
        </h2>
        <p class="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Réservez votre audit Google Ads gratuit. En 30 minutes, on identifie vos opportunités de croissance.
        </p>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-lg"
        >
          Demandez votre audit gratuit
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </NuxtLink>
      </div>
    </div>

    <!-- Footer Content -->
    <div class="container mx-auto px-4 max-w-7xl py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-9 h-9 rounded-lg bg-gradient-brand flex items-center justify-center">
              <span class="text-white font-heading font-extrabold text-sm">AS</span>
            </div>
            <span class="font-heading font-bold text-xl">
              Ad<span class="text-primary-light">Scale</span>
            </span>
          </div>
          <p class="text-neutral-300 text-sm max-w-sm leading-relaxed">
            Vos clients vous cherchent sur Google. On les amène chez vous. Expert Google Ads pour les PME de la Vienne.
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <h3 class="font-heading font-semibold text-sm uppercase tracking-wider text-neutral-400 mb-4">Navigation</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-neutral-300 hover:text-white transition-colors text-sm">Accueil</NuxtLink></li>
            <li><NuxtLink to="/services" class="text-neutral-300 hover:text-white transition-colors text-sm">Services</NuxtLink></li>
            <li><NuxtLink to="/a-propos" class="text-neutral-300 hover:text-white transition-colors text-sm">À propos</NuxtLink></li>
            <li><NuxtLink to="/blog" class="text-neutral-300 hover:text-white transition-colors text-sm">Blog</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-neutral-300 hover:text-white transition-colors text-sm">Contact</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-heading font-semibold text-sm uppercase tracking-wider text-neutral-400 mb-4">Contact</h3>
          <ul class="space-y-2 text-sm text-neutral-300">
            <li>Poitiers, Vienne (86)</li>
            <li><a href="tel:+33600000000" class="hover:text-white transition-colors">06 00 00 00 00</a></li>
            <li><a href="mailto:contact@adscale.poitiers.digital" class="hover:text-white transition-colors">contact@adscale.poitiers.digital</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-xs text-neutral-500">&copy; {{ new Date().getFullYear() }} AdScale Poitiers. Tous droits réservés.</p>
        <div class="flex items-center gap-4">
          <a href="#" class="text-neutral-500 hover:text-white transition-colors text-xs">Mentions légales</a>
          <a href="#" class="text-neutral-500 hover:text-white transition-colors text-xs">Politique de confidentialité</a>
        </div>
      </div>
    </div>
  </footer>
</template>
