<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Audit de votre situation',
    desc: 'Analyse de vos campagnes existantes ou de votre potentiel de marché. Concurrents, mots-clés, coûts par clic dans votre secteur à Poitiers et dans la Vienne.',
  },
  {
    number: '02',
    title: 'Stratégie personnalisée',
    desc: 'Plan d\'action détaillé : choix des campagnes (Search, Shopping, PMax), budget recommandé, objectifs chiffrés, calendrier de déploiement.',
  },
  {
    number: '03',
    title: 'Création et lancement',
    desc: 'Rédaction des annonces, configuration du tracking GA4/GTM, paramétrage du ciblage géographique. Tout est vérifié avant la mise en ligne.',
  },
  {
    number: '04',
    title: 'Optimisation continue',
    desc: 'Ajustements hebdomadaires des enchères, mots-clés négatifs, tests A/B des annonces. Rapport mensuel clair avec les KPI qui comptent.',
  },
]

const differences = [
  {
    title: 'Interlocuteur unique',
    desc: 'Vous échangez directement avec le consultant qui gère vos campagnes. Pas de commercial, pas de chef de projet intermédiaire, pas de junior qui apprend sur votre budget.',
    icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
  },
  {
    title: 'Connaissance du marché local',
    desc: 'Les habitudes de recherche à Poitiers, les zones de chalandise de la Vienne, la saisonnalité locale : ce sont des données que les agences nationales ignorent.',
    icon: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z',
  },
  {
    title: 'Réactivité sous 24 h',
    desc: 'Une question, un problème, une opportunité saisonnière : la réponse arrive dans la journée. Les grandes agences vous mettent en file d\'attente.',
    icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Budget 100 % investi',
    desc: 'Pas de frais cachés, pas de marge sur les clics. Votre budget publicitaire va intégralement dans Google Ads. Les honoraires de gestion sont séparés et transparents.',
    icon: 'M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z',
  },
]

const campagnes = [
  {
    title: 'Google Ads Search',
    desc: 'Annonces textuelles en haut des résultats Google quand vos prospects cherchent vos services. Le levier le plus direct pour générer des appels et des demandes de devis.',
  },
  {
    title: 'Google Shopping',
    desc: 'Vos produits avec photo et prix directement dans Google. Indispensable pour les e-commerçants de la Vienne qui veulent vendre en ligne.',
  },
  {
    title: 'Performance Max',
    desc: 'Campagnes multi-canaux pilotées par l\'IA de Google : Search, Display, YouTube, Gmail, Maps. Un seul budget, tous les leviers activés.',
  },
  {
    title: 'Google Display & Remarketing',
    desc: 'Bannières publicitaires sur les sites que visitent vos prospects. Remarketing pour relancer les visiteurs qui n\'ont pas converti.',
  },
  {
    title: 'Meta Ads',
    desc: 'Campagnes Facebook et Instagram en complément de Google Ads. Ciblage démographique précis, formats visuels engageants.',
  },
  {
    title: 'Tracking & Analytics',
    desc: 'Configuration GA4, Google Tag Manager, suivi des conversions (appels, formulaires, achats). Sans mesure précise, pas d\'optimisation possible.',
  },
]

const faqs = [
  {
    q: 'Quelle est la différence entre un consultant Google Ads et une agence ?',
    a: 'Un consultant travaille en direct avec vous, sans intermédiaire. Vous avez un seul interlocuteur expert qui connaît votre compte dans le détail. En agence, votre compte passe souvent entre plusieurs mains, avec moins de suivi personnalisé.',
  },
  {
    q: 'Combien coûte un consultant Google Ads à Poitiers ?',
    a: 'Les honoraires de gestion dépendent du nombre de campagnes et de la complexité du compte. Comptez entre 300 et 800 euros par mois pour une PME locale. Le budget publicitaire Google est séparé et vous appartient.',
  },
  {
    q: 'Faut-il un budget minimum pour Google Ads ?',
    a: 'Pour obtenir des résultats significatifs à Poitiers, un budget publicitaire de 500 euros par mois minimum est recommandé. Certains secteurs très concurrentiels (serrurier, plombier) nécessitent davantage.',
  },
  {
    q: 'En combien de temps les résultats arrivent-ils ?',
    a: 'Les premières conversions apparaissent généralement dans les deux premières semaines. L\'optimisation complète du compte prend 30 à 90 jours pour atteindre le meilleur retour sur investissement.',
  },
  {
    q: 'Êtes-vous certifié Google ?',
    a: 'Oui. AdScale est Google Partner avec les certifications Google Ads Search, Display, Shopping et Performance Max à jour. Ces certifications garantissent une expertise vérifiée et actualisée.',
  },
]

useHead({
  title: 'Consultant Google Ads Poitiers — Expert SEA certifié PME Vienne 86 | AdScale',
  meta: [
    { name: 'description', content: 'Consultant Google Ads à Poitiers, expert SEA certifié pour PME de la Vienne 86. Audit gratuit, gestion complète de vos campagnes, résultats mesurables dès 30 jours.' },
    { name: 'robots', content: 'index, follow' },
  ],
  link: [
    { rel: 'canonical', href: 'https://adscale.poitiers.digital/consultant-google-ads-poitiers', key: 'canonical' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'LocalBusiness',
            name: 'AdScale — Consultant Google Ads Poitiers',
            description: 'Consultant Google Ads à Poitiers spécialisé dans la gestion de campagnes SEA pour les PME de la Vienne (86).',
            url: 'https://adscale.poitiers.digital/consultant-google-ads-poitiers',
            telephone: '',
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
            name: 'AdScale — Consultant Google Ads',
            serviceType: 'Gestion de campagnes Google Ads',
            provider: {
              '@type': 'LocalBusiness',
              name: 'AdScale',
            },
            areaServed: {
              '@type': 'City',
              name: 'Poitiers',
            },
            description: 'Consultant SEA certifié Google Partner. Gestion de campagnes Search, Shopping, Display, Performance Max pour PME locales.',
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
        <span class="text-sm font-semibold text-primary uppercase tracking-wider">Consultant Google Ads</span>
        <h1 class="font-heading font-extrabold text-4xl md:text-5xl mt-3 mb-6 max-w-3xl leading-tight">
          Votre consultant Google Ads à Poitiers —
          <span class="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">expert SEA dédié aux PME de la Vienne</span>
        </h1>
        <p class="text-neutral-300 text-lg max-w-2xl leading-relaxed">
          Un interlocuteur unique, certifié Google Partner, qui gère vos campagnes publicitaires avec la rigueur d'un spécialiste et la proximité d'un partenaire local. Résultats mesurables, budget transparent.
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

    <!-- Pourquoi un consultant -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="font-heading font-extrabold text-3xl md:text-4xl mb-8 text-neutral-900">Pourquoi faire appel à un consultant Google Ads à Poitiers</h2>
        <div class="space-y-5 text-neutral-600 text-lg leading-relaxed">
          <p>
            Les PME de la Vienne qui investissent dans Google Ads font face à un choix : confier leurs campagnes à une agence nationale qui gère des dizaines de comptes en parallèle, ou travailler avec un consultant SEA local qui connaît leur marché.
          </p>
          <p>
            Le problème des grandes agences est structurel. Votre compte est géré par un chargé de compte junior, supervisé (en théorie) par un senior. Les décisions prennent du temps, la connaissance du terrain est absente, et votre budget sert parfois à financer l'apprentissage d'un débutant.
          </p>
          <p>
            Un consultant Google Ads à Poitiers travaille différemment. <strong>C'est le même expert qui audite, qui construit la stratégie, qui crée les campagnes et qui optimise chaque semaine.</strong> Il connaît les zones de chalandise de Poitiers, les pics saisonniers de la Vienne, les requêtes locales qui convertissent.
          </p>
          <p class="font-semibold text-neutral-800">
            Chez AdScale, c'est exactement ce modèle. Un consultant senior certifié Google Partner, basé à Poitiers, qui gère un nombre limité de comptes pour garantir un suivi de qualité. AdScale est une division de <a href="https://poitiers.digital" target="_blank" rel="noopener" class="text-primary hover:underline">Studio Digital Poitiers</a>.
          </p>
        </div>
      </div>
    </section>

    <!-- Différences -->
    <section class="bg-neutral-900 text-white py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-14">
          <span class="text-sm font-semibold text-primary uppercase tracking-wider">Nos engagements</span>
          <h2 class="font-heading font-extrabold text-3xl md:text-4xl mt-3">
            Ce qui distingue un <span class="text-primary">consultant SEA local</span>
          </h2>
          <p class="text-neutral-400 mt-3 max-w-xl mx-auto">
            Quatre garanties concrètes pour les PME de Poitiers et de la Vienne.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="diff in differences" :key="diff.title" class="bg-neutral-800 rounded-xl p-8 border border-neutral-700 hover:border-primary/40 transition-colors">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" :d="diff.icon" /></svg>
            </div>
            <h3 class="font-heading font-bold text-xl mb-3 text-white">{{ diff.title }}</h3>
            <p class="text-neutral-400 leading-relaxed">{{ diff.desc }}</p>
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
            4 étapes pour des campagnes Google Ads rentables
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="step in steps" :key="step.number" class="relative">
            <div class="font-numbers font-bold text-6xl text-primary/10 mb-4">{{ step.number }}</div>
            <h3 class="font-heading font-bold text-xl mb-3 text-neutral-900">{{ step.title }}</h3>
            <p class="text-neutral-500 leading-relaxed">{{ step.desc }}</p>
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

    <!-- Types de campagnes -->
    <section class="bg-neutral-100 py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-12 md:mb-16">
          <span class="text-sm font-semibold text-secondary uppercase tracking-wider">Expertise</span>
          <h2 class="font-heading font-extrabold text-3xl md:text-4xl mt-2 mb-4">
            Les campagnes gérées par votre consultant Google Ads
          </h2>
          <p class="text-neutral-500 max-w-2xl mx-auto">
            Chaque type de campagne répond à un objectif précis. Le choix dépend de votre secteur, de votre budget et de vos priorités commerciales.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="c in campagnes" :key="c.title" class="bg-white rounded-xl p-6 hover:shadow-lg transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-1 will-change-transform group border border-transparent hover:border-primary/10">
            <h3 class="font-heading font-bold text-lg mb-2 text-neutral-900">{{ c.title }}</h3>
            <p class="text-neutral-500 text-sm leading-relaxed">{{ c.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Maillage interne + contexte local -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="font-heading font-extrabold text-3xl md:text-4xl mb-8 text-neutral-900">Consultant Google Ads ou freelance SEA : quelle différence ?</h2>
        <div class="space-y-5 text-neutral-600 text-lg leading-relaxed">
          <p>
            Les termes « consultant Google Ads » et « <NuxtLink to="/freelance-google-ads" class="text-primary hover:underline font-medium">freelance Google Ads</NuxtLink> » recouvrent souvent la même réalité : un expert indépendant qui gère vos campagnes publicitaires sans les intermédiaires d'une agence traditionnelle.
          </p>
          <p>
            Chez AdScale, nous combinons les deux approches. La flexibilité et la proximité d'un freelance SEA, avec la structure et les processus d'un cabinet de conseil spécialisé. Chaque PME de Poitiers et de la Vienne bénéficie d'un suivi rigoureux : reporting mensuel, points réguliers, optimisations hebdomadaires.
          </p>
          <p>
            Que vous cherchiez un expert Google Ads à Poitiers, un consultant SEA dans la Vienne ou un spécialiste Adwords certifié, notre approche reste la même : des résultats mesurables, un budget transparent, une expertise locale. Pour une stratégie digitale complète, complétez votre visibilité payante avec du <a href="https://rankeo.poitiers.digital" target="_blank" rel="noopener" class="text-primary hover:underline">référencement naturel SEO</a>.
          </p>
        </div>
        <div class="flex flex-wrap gap-4 mt-8">
          <NuxtLink to="/freelance-google-ads" class="inline-flex items-center gap-2 border border-primary/20 text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary/5 transition-all">
            Voir l'offre freelance Google Ads
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </NuxtLink>
          <NuxtLink to="/a-propos" class="inline-flex items-center gap-2 border border-neutral-200 text-neutral-700 font-semibold px-6 py-3 rounded-lg hover:bg-neutral-50 transition-all">
            En savoir plus sur AdScale
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-neutral-100 py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-3xl">
        <div class="text-center mb-12">
          <span class="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
          <h2 class="font-heading font-extrabold text-3xl md:text-4xl mt-2">
            Questions fréquentes — Consultant Google Ads Poitiers
          </h2>
        </div>
        <div class="space-y-3">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="border border-neutral-200 rounded-xl overflow-hidden transition-all duration-200"
            :class="openFaq === i ? 'bg-primary/5 border-primary/20' : 'bg-white'"
          >
            <button
              class="w-full flex items-center justify-between px-6 py-4 text-left"
              :aria-expanded="openFaq === i"
              @click="toggleFaq(i)"
            >
              <span class="font-heading font-semibold text-neutral-900 pr-4">{{ faq.q }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-primary shrink-0 transition-transform duration-300"
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
                <p class="text-neutral-600 text-sm leading-relaxed">{{ faq.a }}</p>
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
          Votre PME mérite un <span class="text-primary">consultant Google Ads local</span>
        </h2>
        <p class="text-neutral-400 text-lg mb-8 leading-relaxed">
          Audit gratuit de vos campagnes ou de votre potentiel de marché à Poitiers. Stratégie concrète présentée sous 48 h, sans engagement.
        </p>
        <NuxtLink to="/contact" class="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary/90 transition-all text-lg">
          Demander mon audit gratuit
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
