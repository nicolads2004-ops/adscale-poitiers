<script setup lang="ts">
const services = [
  {
    title: 'Campagnes Search',
    desc: 'Annonces textuelles sur les mots-clés que tapent vos prospects. Le levier le plus direct pour capter une intention d\'achat : quand quelqu\'un cherche « plombier Poitiers » ou « boutique vélo Châtellerault », votre annonce apparaît en premier.',
    icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z',
  },
  {
    title: 'Google Shopping',
    desc: 'Vos produits avec photo, prix et avis directement dans les résultats Google. Indispensable pour les e-commerçants de la Vienne qui veulent vendre en ligne sans dépendre uniquement des marketplaces.',
    icon: 'M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z',
  },
  {
    title: 'Performance Max',
    desc: 'Campagnes pilotées par l\'IA de Google qui diffusent sur tous les canaux : Search, Display, YouTube, Gmail, Maps. Un seul budget, une couverture maximale. Particulièrement efficace pour les commerces avec un point de vente physique à Poitiers.',
    icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
  },
  {
    title: 'YouTube Ads',
    desc: 'Publicités vidéo ciblées par intention, centre d\'intérêt ou zone géographique. Format in-stream ou bumper pour développer la notoriété de votre marque dans la Vienne et au-delà.',
    icon: 'M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z',
  },
]

const methode = [
  {
    number: '01',
    title: 'Audit et diagnostic',
    desc: 'Analyse complète de vos campagnes existantes ou étude de marché si vous démarrez. Concurrents, coûts par clic, mots-clés porteurs dans votre secteur à Poitiers.',
  },
  {
    number: '02',
    title: 'Stratégie et recommandations',
    desc: 'Plan d\'action chiffré : types de campagnes adaptés, budget recommandé, objectifs de conversion réalistes, calendrier de déploiement.',
  },
  {
    number: '03',
    title: 'Création et lancement',
    desc: 'Rédaction des annonces, configuration du tracking (GA4, GTM, conversions offline), paramétrage du ciblage géographique Vienne 86. Validation avec vous avant mise en ligne.',
  },
  {
    number: '04',
    title: 'Pilotage et optimisation',
    desc: 'Ajustements hebdomadaires : enchères, mots-clés négatifs, tests A/B, exclusions d\'audiences. Rapport mensuel avec les KPI qui comptent : coût par lead, ROAS, taux de conversion.',
  },
]

const faqs = [
  {
    q: 'Pourquoi choisir une agence Google Ads locale plutôt qu\'une agence nationale ?',
    a: 'Une agence locale connaît le marché de Poitiers et de la Vienne. Elle sait quels quartiers cibler, quelles sont les saisonnalités locales et comment adapter les annonces aux habitudes de recherche des habitants. De plus, vous avez un interlocuteur joignable facilement, pas un centre d\'appels. Chez AdScale, vous parlez directement à l\'expert qui gère vos campagnes — pas à un commercial.',
  },
  {
    q: 'Quel budget prévoir pour Google Ads à Poitiers ?',
    a: 'Pour une PME locale, un budget publicitaire de 500 à 1 500 euros par mois permet d\'obtenir des résultats significatifs sur Search. Le coût par clic à Poitiers est généralement 20 à 40 % inférieur à Paris, ce qui rend Google Ads très rentable pour les entreprises de la Vienne. L\'audit gratuit vous donnera une estimation précise pour votre secteur.',
  },
  {
    q: 'Comment mesurez-vous les résultats ?',
    a: 'Chaque conversion est trackée : appels téléphoniques, formulaires de contact, achats en ligne, visites en magasin via Google Ads offline conversions. Vous recevez un rapport mensuel clair avec le coût par acquisition, le retour sur investissement et les recommandations pour le mois suivant. Zéro jargon — uniquement les chiffres qui comptent pour votre activité.',
  },
  {
    q: 'Suis-je engagé sur une durée minimale ?',
    a: 'Non. Nous recommandons un minimum de 3 mois pour laisser le temps à l\'algorithme de Google d\'optimiser les campagnes, mais il n\'y a aucun engagement contractuel de durée. Vous restez libre de stopper ou de modifier la prestation à tout moment.',
  },
  {
    q: 'AdScale gère-t-elle des campagnes Google Ads pour tous les secteurs à Poitiers ?',
    a: 'Oui. Nous travaillons avec des PME de secteurs variés dans la Vienne : artisans du bâtiment, professions de santé, commerces de détail, services aux entreprises, e-commerce local. Chaque secteur a ses propres mots-clés, sa propre concurrence et ses propres benchmarks CPC — notre audit initial analyse précisément votre marché avant de démarrer.',
  },
  {
    q: 'Qu\'est-ce qui différencie AdScale des autres agences Google Ads à Poitiers ?',
    a: 'Trois choses : la spécialisation exclusive (nous ne faisons que Google Ads, pas de SEO, pas de réseaux sociaux), le nombre limité de clients actifs (ce qui garantit une vraie attention portée à chaque compte), et la transparence totale (le budget publicitaire vous appartient, sans commission sur les clics — vous voyez exactement où va chaque euro).',
  },
]

useHead({
  title: 'Agence Google Ads Poitiers — Obtenez de nouveaux clients | AdScale',
  meta: [
    { name: 'description', content: 'Agence Google Ads certifiée à Poitiers. Campagnes Search, Shopping et Performance Max pour PME de la Vienne 86. Coût par lead réduit de 35 % en 90 jours. Audit gratuit.' },
    { name: 'robots', content: 'index, follow' },
  ],
  link: [
    { rel: 'canonical', href: 'https://adscale.poitiers.digital/agence-google-ads-poitiers', key: 'canonical' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'LocalBusiness',
            name: 'AdScale — Agence Google Ads Poitiers',
            description: 'Agence Google Ads à Poitiers spécialisée dans la gestion de campagnes publicitaires pour les PME de la Vienne (86).',
            url: 'https://adscale.poitiers.digital/agence-google-ads-poitiers',
            telephone: '+33769801190',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Poitiers',
              addressRegion: 'Nouvelle-Aquitaine',
              postalCode: '86000',
              addressCountry: 'FR',
            },
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'Vienne (86)',
            },
            priceRange: '€€',
          },
          {
            '@type': 'ProfessionalService',
            name: 'AdScale — Agence Google Ads',
            serviceType: 'Gestion de campagnes Google Ads',
            provider: {
              '@type': 'LocalBusiness',
              name: 'AdScale',
            },
            areaServed: {
              '@type': 'City',
              name: 'Poitiers',
            },
            description: 'Agence SEA certifiée Google Partner. Gestion de campagnes Search, Shopping, Performance Max et YouTube pour PME locales.',
          },
          {
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          },
        ],
      }),
    },
  ],
})

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-neutral-900 text-white py-16 md:py-24 relative overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div class="absolute -top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-3xl" />
      </div>
      <div class="relative container mx-auto px-4 max-w-7xl">
        <span class="text-sm font-semibold text-primary uppercase tracking-wider">Agence Google Ads</span>
        <h1 class="font-heading font-extrabold text-4xl md:text-5xl mt-3 mb-6 max-w-3xl leading-tight">
          Agence Google Ads à Poitiers —
          <span class="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">obtenez de nouveaux clients pour votre PME</span>
        </h1>
        <p class="text-white/80 text-lg max-w-2xl leading-relaxed">
          Votre agence SEA locale, certifiée Google Partner. Nous gérons vos campagnes publicitaires avec un objectif simple : chaque euro investi rapporte. Coût par lead réduit de 35 % en 90 jours. Budget transparent, expertise Poitiers et Vienne 86. Audit gratuit sous 48 h.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 mt-8">
          <NuxtLink to="/contact" class="inline-flex items-center justify-center gap-2 bg-gradient-cta text-white font-bold px-8 py-4 rounded-lg hover:shadow-xl hover:shadow-primary/30 transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 will-change-transform text-lg">
            Demander un audit gratuit
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </NuxtLink>
          <NuxtLink to="/services" class="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors duration-300">
            Voir tous les services
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Pourquoi une agence locale -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="font-heading font-extrabold text-3xl md:text-4xl mb-8 text-[#fafafa]">Pourquoi confier vos campagnes Google Ads à une agence locale à Poitiers</h2>
        <div class="space-y-5 text-[#a0a0a0] text-lg leading-relaxed">
          <p>
            Google Ads fonctionne à l'enchère. Chaque clic a un coût, et chaque clic mal ciblé est de l'argent perdu. Le problème, c'est que la plupart des PME de la Vienne n'ont ni le temps ni l'expertise pour gérer correctement leurs campagnes publicitaires.
          </p>
          <p>
            Les agences nationales proposent des formules standardisées. Un chargé de compte à Paris gère 30 ou 40 clients en parallèle. Il ne sait pas que les Poitevins cherchent « artisan plombier centre-ville » plutôt que « plombier 86 », ni que le marché de Noël de Poitiers génère un pic de recherches pour les commerces du centre.
          </p>
          <p>
            <strong>Une agence Google Ads locale connaît ces subtilités.</strong> Chez AdScale, nous sommes implantés à Poitiers. Nous connaissons les zones de chalandise, les habitudes de recherche locales, la concurrence sur chaque secteur d'activité dans la Vienne. Cette connaissance terrain fait la différence entre une campagne qui consomme du budget et une campagne qui génère du chiffre d'affaires.
          </p>
          <p>
            AdScale est une division de <a href="https://poitiers.digital" target="_blank" rel="noopener" class="text-primary hover:underline">Studio Digital Poitiers</a>. Un nombre limité de clients, un suivi rigoureux, des résultats concrets.
          </p>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="bg-[#0a0a0a] py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-12 md:mb-16">
          <span class="text-sm font-semibold text-secondary uppercase tracking-wider">Nos services</span>
          <h2 class="font-heading font-extrabold text-3xl md:text-4xl mt-2 mb-4">
            Les campagnes Google Ads que nous gérons pour vous
          </h2>
          <p class="text-white/60 max-w-2xl mx-auto">
            Chaque type de campagne répond à un objectif commercial précis. Nous recommandons la combinaison adaptée à votre secteur, votre budget et vos priorités.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="s in services" :key="s.title" class="bg-[#1a1a1a] rounded-xl p-8 border border-neutral-700 hover:border-primary/40 transition-colors">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" :d="s.icon" /></svg>
            </div>
            <h3 class="font-heading font-bold text-xl mb-3 text-white">{{ s.title }}</h3>
            <p class="text-white/60 leading-relaxed">{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Méthode -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-12 md:mb-16">
          <span class="text-sm font-semibold text-accent uppercase tracking-wider">Notre méthode</span>
          <h2 class="font-heading font-extrabold text-3xl md:text-4xl mt-2">
            4 étapes pour des campagnes Google Ads rentables à Poitiers
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="step in methode" :key="step.number" class="relative">
            <div class="font-numbers font-bold text-6xl text-primary/10 mb-4">{{ step.number }}</div>
            <h3 class="font-heading font-bold text-xl mb-3 text-[#fafafa]">{{ step.title }}</h3>
            <p class="text-white/60 leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
        <div class="text-center mt-12">
          <NuxtLink to="/contact" class="inline-flex items-center gap-2 bg-gradient-cta text-white font-bold px-8 py-4 rounded-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5">
            Commencer par l'audit gratuit
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Résultats clients -->
    <section class="bg-neutral-900 text-white py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-14">
          <span class="text-sm font-semibold text-primary uppercase tracking-wider">Résultats</span>
          <h2 class="font-heading font-extrabold text-3xl md:text-4xl mt-3">
            Ce que nos clients <span class="text-primary">obtiennent concrètement</span>
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="font-numbers font-bold text-5xl text-primary mb-2">-35 %</div>
            <p class="text-white/60">de coût par lead en moyenne après 90 jours d'optimisation</p>
          </div>
          <div class="text-center">
            <div class="font-numbers font-bold text-5xl text-primary mb-2">x 2,4</div>
            <p class="text-white/60">de retour sur investissement publicitaire moyen (ROAS)</p>
          </div>
          <div class="text-center">
            <div class="font-numbers font-bold text-5xl text-primary mb-2">< 48 h</div>
            <p class="text-white/60">pour recevoir votre audit et votre stratégie personnalisée</p>
          </div>
        </div>
        <p class="text-center text-white/60 text-sm mt-8">
          Résultats moyens constatés sur nos clients PME dans la Vienne. Chaque secteur est différent — l'audit gratuit vous donnera une projection réaliste pour votre activité.
        </p>
      </div>
    </section>

    <!-- Maillage interne -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="font-heading font-extrabold text-3xl md:text-4xl mb-8 text-[#fafafa]">Agence, consultant ou freelance Google Ads : quelle formule choisir ?</h2>
        <div class="space-y-5 text-[#a0a0a0] text-lg leading-relaxed">
          <p>
            Le marché du SEA à Poitiers propose plusieurs formats d'accompagnement. Chacun a ses avantages selon la taille de votre entreprise et la complexité de vos campagnes.
          </p>
          <p>
            Le <NuxtLink to="/consultant-google-ads-poitiers" class="text-primary hover:underline font-medium">consultant Google Ads</NuxtLink> est un expert indépendant qui travaille en direct avec vous. C'est la formule idéale si vous cherchez un interlocuteur unique et réactif. Le <NuxtLink to="/freelance-google-ads" class="text-primary hover:underline font-medium">freelance Google Ads</NuxtLink> offre une flexibilité similaire, souvent avec des tarifs adaptés aux petits budgets.
          </p>
          <p>
            L'agence — c'est notre modèle chez AdScale — combine les avantages des deux : la proximité et la réactivité d'un freelance, avec la structure, les process et la continuité de service d'une agence. Si votre gestionnaire est absent, vos campagnes continuent de tourner.
          </p>
          <p>
            Pour compléter votre stratégie d'acquisition payante, pensez aussi au <a href="https://rankeo.poitiers.digital" target="_blank" rel="noopener" class="text-primary hover:underline">référencement naturel SEO</a> pour capter du trafic organique en parallèle.
          </p>
        </div>
        <div class="flex flex-wrap gap-4 mt-8">
          <NuxtLink to="/consultant-google-ads-poitiers" class="inline-flex items-center gap-2 border border-[#FF8C00]/20 text-[#FF8C00] font-semibold px-6 py-3 rounded-lg hover:bg-[#FF8C00]/5 transition-all">
            Consultant Google Ads
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </NuxtLink>
          <NuxtLink to="/freelance-google-ads" class="inline-flex items-center gap-2 border border-[#262626] text-[#a0a0a0] font-semibold px-6 py-3 rounded-lg hover:bg-[#1a1a1a] transition-all">
            Freelance Google Ads
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-[#0a0a0a] py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-3xl">
        <div class="text-center mb-12">
          <span class="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
          <h2 class="font-heading font-extrabold text-3xl md:text-4xl mt-2">
            Questions fréquentes — Agence Google Ads Poitiers
          </h2>
        </div>
        <div class="space-y-3">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="border border-[#262626] rounded-xl overflow-hidden transition-all duration-200"
            :class="openFaq === i ? 'bg-[#FF8C00]/5 border-[#FF8C00]/20' : 'bg-[#1a1a1a]'"
          >
            <button
              class="w-full flex items-center justify-between px-6 py-4 text-left"
              :aria-expanded="openFaq === i"
              @click="toggleFaq(i)"
            >
              <span class="font-heading font-semibold text-[#fafafa] pr-4">{{ faq.q }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-[#FF8C00] shrink-0 transition-transform duration-300"
                :class="openFaq === i ? 'rotate-180' : ''"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-40"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 max-h-40"
              leave-to-class="opacity-0 max-h-0"
            >
              <div v-if="openFaq === i" class="px-6 pb-4">
                <p class="text-[#a0a0a0] text-sm leading-relaxed">{{ faq.a }}</p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA final -->
    <section class="py-16 md:py-20 bg-neutral-900">
      <div class="container mx-auto px-4 max-w-3xl text-center">
        <h2 class="font-heading font-extrabold text-3xl md:text-4xl text-white mb-4">
          Prêt à rentabiliser vos <span class="text-primary">campagnes Google Ads</span> ?
        </h2>
        <p class="text-white/60 text-lg mb-8 leading-relaxed">
          Audit gratuit de vos campagnes actuelles ou étude de marché pour démarrer. Stratégie personnalisée présentée sous 48 h, sans engagement.
        </p>
        <NuxtLink to="/contact" class="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary/90 transition-all text-lg">
          Demander un audit gratuit
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
