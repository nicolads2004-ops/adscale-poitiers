<script setup lang="ts">
useHead({
  title: 'Services Google Ads — AdScale Poitiers | Search, Display, Shopping, Performance Max',
  meta: [
    { name: 'description', content: 'Services Google Ads complets pour PME à Poitiers : Search, Display, Shopping, Performance Max, Meta Ads, Tracking GA4/GTM. Audit gratuit.' },
  ],
})

const services = [
  {
    id: 'search',
    title: 'Google Ads Search',
    subtitle: 'Apparaissez quand vos clients vous cherchent',
    desc: 'Vos annonces s\'affichent en haut de Google quand quelqu\'un cherche vos services à Poitiers et alentours. C\'est le levier le plus direct pour générer des appels et des demandes de devis.',
    benefits: [
      'Ciblage géographique précis (Poitiers, Vienne, rayon personnalisable)',
      'Annonces déclenchées par l\'intention d\'achat réelle',
      'Résultats mesurables dès les premiers jours',
      'Optimisation continue des enchères et mots-clés',
    ],
    icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z',
    color: 'primary',
  },
  {
    id: 'display',
    title: 'Google Display',
    subtitle: 'Votre marque partout où sont vos prospects',
    desc: 'Vos bannières publicitaires apparaissent sur les sites web, applications et vidéos que consultent vos prospects. Idéal pour la notoriété locale et le remarketing.',
    benefits: [
      'Couverture massive : des millions de sites et apps partenaires Google',
      'Remarketing : relancez les visiteurs de votre site',
      'Formats visuels impactants (bannières, animations)',
      'Ciblage par centres d\'intérêt et comportement',
    ],
    icon: 'M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z',
    color: 'secondary',
  },
  {
    id: 'shopping',
    title: 'Google Shopping',
    subtitle: 'Vos produits directement dans Google',
    desc: 'Vos produits apparaissent avec photo, prix et nom de boutique directement dans les résultats Google. Le canal roi pour les e-commerçants.',
    benefits: [
      'Vos produits visibles avec photo et prix avant même le clic',
      'Trafic ultra-qualifié : l\'acheteur voit le produit avant de cliquer',
      'Synchronisation avec votre catalogue produit',
      'Optimisation automatique des enchères par produit',
    ],
    icon: 'M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z',
    color: 'accent',
  },
  {
    id: 'pmax',
    title: 'Performance Max',
    subtitle: 'L\'IA de Google au service de votre ROI',
    desc: 'Les campagnes Performance Max utilisent l\'intelligence artificielle de Google pour diffuser vos annonces sur tous les canaux Google simultanément : Search, Display, YouTube, Gmail, Maps.',
    benefits: [
      'Diffusion automatique sur tous les canaux Google',
      'L\'IA optimise en temps réel pour maximiser vos conversions',
      'Un seul budget, une seule campagne, tous les leviers',
      'Idéal pour les entreprises qui veulent maximiser chaque euro',
    ],
    icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    color: 'primary',
  },
  {
    id: 'meta',
    title: 'Meta Ads (Facebook & Instagram)',
    subtitle: 'Touchez votre audience sur les réseaux sociaux',
    desc: 'Complétez votre stratégie Google Ads avec des campagnes Facebook et Instagram. Idéal pour la notoriété, le retargeting et les audiences similaires.',
    benefits: [
      'Ciblage démographique et par centres d\'intérêt très précis',
      'Formats visuels engageants (carrousels, vidéos, stories)',
      'Audiences similaires à vos meilleurs clients',
      'Synergie puissante avec Google Ads',
    ],
    icon: 'M18 18.72a9.094 9.094 0 003.741-6.027 9.098 9.098 0 00-3.741-10.34 9.11 9.11 0 00-11.13.727A9.098 9.098 0 003.86 13.82 9.11 9.11 0 0012 18.72h6z',
    color: 'secondary',
  },
  {
    id: 'tracking',
    title: 'Tracking & Analytics',
    subtitle: 'Mesurez chaque euro investi',
    desc: 'Sans tracking précis, impossible d\'optimiser. On configure GA4, Google Tag Manager et le suivi des conversions pour que chaque action soit mesurée.',
    benefits: [
      'Google Analytics 4 (GA4) configuré sur-mesure',
      'Google Tag Manager pour un tracking flexible',
      'Suivi des appels, formulaires, achats',
      'Tableaux de bord clairs pour prendre les bonnes décisions',
    ],
    icon: 'M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z',
    color: 'accent',
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-neutral-900 text-white py-16 md:py-24 relative overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div class="relative container mx-auto px-4 max-w-7xl">
        <span class="text-sm font-semibold text-secondary uppercase tracking-wider">Nos services</span>
        <h1 class="font-heading font-extrabold text-4xl md:text-5xl mt-3 mb-6 max-w-3xl">
          Des campagnes Google Ads qui
          <span class="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">génèrent du business</span>
        </h1>
        <p class="text-neutral-300 text-lg max-w-2xl">
          Chaque service est pensé pour un seul objectif : vous amener plus de clients qualifiés au meilleur coût.
        </p>
      </div>
    </section>

    <!-- Services List -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-7xl space-y-16 md:space-y-24">
        <div
          v-for="(service, i) in services"
          :key="service.id"
          :id="service.id"
          class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
        >
          <!-- Content (alternating sides) -->
          <div :class="i % 2 === 1 ? 'md:order-2' : ''">
            <div
              class="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              :class="{
                'bg-primary/10': service.color === 'primary',
                'bg-secondary/10': service.color === 'secondary',
                'bg-accent/10': service.color === 'accent',
              }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" :class="{
                'text-primary': service.color === 'primary',
                'text-secondary': service.color === 'secondary',
                'text-accent': service.color === 'accent',
              }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" :d="service.icon" /></svg>
            </div>
            <h2 class="font-heading font-extrabold text-2xl md:text-3xl mb-2 text-neutral-900">{{ service.title }}</h2>
            <p class="text-secondary font-semibold mb-4">{{ service.subtitle }}</p>
            <p class="text-neutral-600 leading-relaxed mb-6">{{ service.desc }}</p>
            <ul class="space-y-3 mb-8">
              <li v-for="b in service.benefits" :key="b" class="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-success shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                <span class="text-neutral-700 text-sm">{{ b }}</span>
              </li>
            </ul>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-2 bg-gradient-cta text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Audit gratuit {{ service.title }}
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </NuxtLink>
          </div>

          <!-- Visual placeholder -->
          <div
            :class="i % 2 === 1 ? 'md:order-1' : ''"
            class="aspect-[4/3] rounded-2xl flex items-center justify-center"
            :style="{
              background: service.color === 'primary' ? 'linear-gradient(135deg, rgba(26,86,219,0.08) 0%, rgba(13,148,136,0.08) 100%)' :
                service.color === 'secondary' ? 'linear-gradient(135deg, rgba(13,148,136,0.08) 0%, rgba(26,86,219,0.08) 100%)' :
                'linear-gradient(135deg, rgba(249,115,22,0.08) 0%, rgba(26,86,219,0.08) 100%)',
            }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 opacity-20" :class="{
              'text-primary': service.color === 'primary',
              'text-secondary': service.color === 'secondary',
              'text-accent': service.color === 'accent',
            }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="0.5"><path stroke-linecap="round" stroke-linejoin="round" :d="service.icon" /></svg>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
