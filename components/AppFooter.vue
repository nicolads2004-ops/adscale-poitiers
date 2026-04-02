<template>
  <footer class="bg-[#0a0a0a] text-[#fafafa]">
    <!-- CTA Banner -->
    <div class="gradient-brand">
      <div class="container mx-auto px-4 max-w-7xl py-12 md:py-16 text-center">
        <h2 class="font-heading font-extrabold text-2xl md:text-4xl mb-4 text-[#0a0a0a]">
          Prêt à multiplier vos clients ?
        </h2>
        <p class="text-[#0a0a0a]/80 text-lg mb-8 max-w-2xl mx-auto">
          Réservez votre audit Google Ads gratuit. En 30 minutes, on identifie vos opportunités de croissance.
        </p>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-2 bg-[#0a0a0a] text-[#FF8C00] font-bold px-8 py-4 rounded-lg hover:shadow-xl hover:shadow-[#FF8C00]/25 transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 will-change-transform text-lg"
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
            <img src="/images/logo-prisme.png" alt="AdScale" class="w-10 h-10 object-contain" style="filter: drop-shadow(0 0 8px rgba(255,140,0,0.5));" />
            <span class="font-heading font-bold text-xl">
              Ad<span class="text-[#FF8C00]">Scale</span>
            </span>
          </div>
          <p class="text-[#a0a0a0] text-sm max-w-sm leading-relaxed">
            Vos clients vous cherchent sur Google. On les amène chez vous. Expert Google Ads pour les PME de la Vienne.
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <h3 class="font-heading font-semibold text-sm uppercase tracking-wider text-[#737373] mb-4">Navigation</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-[#a0a0a0] hover:text-[#FF8C00] transition-colors text-sm">Accueil</NuxtLink></li>
            <li><NuxtLink to="/services" class="text-[#a0a0a0] hover:text-[#FF8C00] transition-colors text-sm">Services</NuxtLink></li>
            <li><NuxtLink to="/a-propos" class="text-[#a0a0a0] hover:text-[#FF8C00] transition-colors text-sm">À propos</NuxtLink></li>
            <li><NuxtLink to="/blog" class="text-[#a0a0a0] hover:text-[#FF8C00] transition-colors text-sm">Blog</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-[#a0a0a0] hover:text-[#FF8C00] transition-colors text-sm">Contact</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-heading font-semibold text-sm uppercase tracking-wider text-[#737373] mb-4">Contact</h3>
          <ul class="space-y-2 text-sm text-[#a0a0a0]">
            <li>Poitiers, Vienne (86)</li>
            <li><a href="tel:+33769801190" class="hover:text-[#FF8C00] transition-colors">07 69 80 11 90</a></li>
            <li><a href="mailto:contact@poitiers.digital" class="hover:text-[#FF8C00] transition-colors">contact@poitiers.digital</a></li>
          </ul>
        </div>
      </div>

      <!-- Divisions -->
      <div class="border-t border-[#333] pt-6 mb-6">
        <p class="text-xs font-semibold uppercase tracking-wider text-[#525252] mb-3">Studio Digital Poitiers — nos divisions</p>
        <div class="flex flex-wrap gap-x-6 gap-y-2">
          <a href="https://poitiers.digital" target="_blank" rel="noopener" class="text-xs text-[#a0a0a0] hover:text-[#FF8C00] transition-colors">&larr; Studio Digital Poitiers</a>
          <a href="https://adscale.poitiers.digital" class="text-xs text-[#FF8C00]">ADSCALE — Google Ads</a>
          <a href="https://rankeo.poitiers.digital" target="_blank" rel="noopener" class="text-xs text-[#a0a0a0] hover:text-[#16A34A] transition-colors">RANKEO — SEO</a>
          <a href="https://nexoma.poitiers.digital" target="_blank" rel="noopener" class="text-xs text-[#a0a0a0] hover:text-[#A855F7] transition-colors">NEXOMA — IA & Automatisation</a>
          <a href="https://nova-studio.poitiers.digital" target="_blank" rel="noopener" class="text-xs text-[#a0a0a0] hover:text-[#F43F5E] transition-colors">NOVA STUDIO — UGC & Contenu</a>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t border-[#333] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-xs text-[#737373]">&copy; {{ new Date().getFullYear() }} AdScale Poitiers. Tous droits réservés.</p>
        <div class="flex items-center gap-4">
          <a href="#" class="text-[#737373] hover:text-[#fafafa] transition-colors text-xs">Mentions légales</a>
          <a href="#" class="text-[#737373] hover:text-[#fafafa] transition-colors text-xs">Politique de confidentialité</a>
        </div>
      </div>
    </div>
  </footer>
</template>
