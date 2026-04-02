<script setup lang="ts">
useHead({
  title: 'Consultant Google Ads Poitiers — Expert SEA PME Vienne 86 | AdScale',
  meta: [
    { name: 'description', content: 'AdScale, consultant Google Ads à Poitiers spécialisé PME de la Vienne. Notre méthode en 4 étapes, résultats mesurables. Expert SEA certifié, audit gratuit.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://adscale.poitiers.digital/a-propos', key: 'canonical' },
  ],
})

const steps = [
  {
    number: '01',
    title: 'Audit',
    desc: 'On analyse vos campagnes existantes ou votre marché local — concurrents, mots-clés, opportunités dans la Vienne — pour identifier le potentiel réel avant d\'investir un euro.',
  },
  {
    number: '02',
    title: 'Stratégie',
    desc: 'On construit une stratégie Google Ads sur mesure adaptée à votre secteur, votre zone géographique (Poitiers, Vienne, Nouvelle-Aquitaine) et votre budget.',
  },
  {
    number: '03',
    title: 'Lancement',
    desc: 'Création des campagnes, rédaction des annonces, paramétrage du tracking GA4 et GTM. Chaque détail est vérifié avant la mise en ligne.',
  },
  {
    number: '04',
    title: 'Optimisation',
    desc: 'Suivi hebdomadaire, ajustements continus, rapports clairs. On améliore en permanence pour faire baisser le coût par lead et augmenter le ROAS.',
  },
]

const stats = [
  { value: '50+', label: 'Campagnes gérées', sub: 'PME de la Vienne et alentours' },
  { value: '3.2×', label: 'ROAS moyen', sub: 'Retour sur investissement publicitaire' },
  { value: '86', label: 'Département Vienne', sub: 'Ancrage local Poitiers' },
  { value: '-42%', label: 'Coût par lead moyen', sub: 'Après optimisation à 3 mois' },
]

const zones = [
  'Poitiers', 'Chasseneuil-du-Poitou', 'Buxerolles', 'Mignaloux-Beauvoir',
  'Ligugé', 'Saint-Benoît', 'Montamisé', 'Jaunay-Marigny',
  'Lusignan', 'Civray', 'Châtellerault', 'Vienne (86)',
]
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
        <span class="text-sm font-semibold text-primary uppercase tracking-wider">À propos d'AdScale</span>
        <h1 class="font-heading font-extrabold text-4xl md:text-5xl mt-3 mb-6 max-w-3xl leading-tight">
          Consultant Google Ads à Poitiers —
          <span class="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">au service des PME de la Vienne</span>
        </h1>
        <p class="text-neutral-300 text-lg max-w-2xl leading-relaxed">
          AdScale est une agence Google Ads basée à Poitiers, spécialisée dans la gestion de campagnes publicitaires pour les PME du département 86.
          Notre mission : générer des résultats mesurables avec chaque euro de budget publicitaire.
        </p>
        <div class="mt-8">
          <NuxtLink to="/contact" class="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-primary/90 transition-all">
            Discuter de votre projet
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Notre histoire -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="font-heading font-extrabold text-3xl md:text-4xl mb-8 text-neutral-900">Notre histoire</h2>
        <div class="space-y-5 text-neutral-600 text-lg leading-relaxed">
          <p>
            AdScale est née d'un constat partagé par de nombreux dirigeants de PME à Poitiers et dans la Vienne : les agences Google Ads nationales facturent des honoraires élevés pour un service standardisé, sans réelle connaissance du marché local. Les artisans, commerçants et professionnels libéraux du 86 méritaient mieux.
          </p>
          <p>
            Nous avons fondé AdScale à Poitiers avec une conviction simple — <strong>la proximité géographique est un avantage concurrentiel réel</strong>. Nous connaissons les zones de chalandise, les habitudes de recherche des Poitevins, la saisonnalité du marché local et les secteurs porteurs de la Vienne. Cette connaissance se traduit directement en campagnes Google Ads plus pertinentes et plus rentables.
          </p>
          <p>
            Aujourd'hui, AdScale gère plus de 50 campagnes pour des PME locales — artisans BTP, professionnels de santé, commerces de centre-ville, prestataires de services B2B. Notre spécialisation exclusive sur Google Ads nous permet d'atteindre un niveau d'expertise que les agences généralistes ne peuvent pas égaler.
          </p>
          <p class="font-semibold text-neutral-800">
            Résultat : un ROAS moyen de 3,2× et une réduction de 42% du coût par lead après trois mois d'optimisation. Ce ne sont pas des promesses — ce sont des chiffres issus de campagnes réelles, gérées pour des PME de la Vienne.
          </p>
        </div>
      </div>
    </section>

    <!-- Notre méthode -->
    <section class="bg-neutral-900 text-white py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-14">
          <span class="text-sm font-semibold text-primary uppercase tracking-wider">Notre approche</span>
          <h2 class="font-heading font-extrabold text-3xl md:text-4xl mt-3">
            Une méthode en 4 étapes pour vos campagnes
            <span class="text-primary"> Google Ads à Poitiers</span>
          </h2>
          <p class="text-neutral-400 mt-3 max-w-xl mx-auto">
            Chaque PME de la Vienne est unique. Notre processus s'adapte à votre secteur, votre budget et vos objectifs commerciaux.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="step in steps" :key="step.number" class="bg-neutral-800 rounded-xl p-8 border border-neutral-700 hover:border-primary/40 transition-colors">
            <div class="text-5xl font-extrabold text-primary/20 font-heading mb-4">{{ step.number }}</div>
            <h3 class="font-heading font-bold text-xl mb-3 text-white">{{ step.title }}</h3>
            <p class="text-neutral-400 leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Chiffres clés -->
    <section class="py-16 md:py-24 bg-neutral-50">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-12">
          <h2 class="font-heading font-extrabold text-3xl md:text-4xl text-neutral-900">Des résultats mesurables pour les PME de Poitiers</h2>
          <p class="text-neutral-500 mt-3 max-w-xl mx-auto">Les chiffres ci-dessous reflètent les performances moyennes de nos campagnes Google Ads actives dans la Vienne.</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="stat in stats" :key="stat.value" class="bg-white rounded-xl p-6 text-center border border-neutral-200 shadow-sm">
            <div class="text-4xl font-extrabold font-heading text-primary mb-2">{{ stat.value }}</div>
            <div class="font-semibold text-neutral-800 text-sm mb-1">{{ stat.label }}</div>
            <div class="text-neutral-400 text-xs">{{ stat.sub }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Zone géographique -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-4xl">
        <div class="mb-8">
          <span class="text-sm font-semibold text-primary uppercase tracking-wider">Couverture locale</span>
          <h2 class="font-heading font-extrabold text-3xl md:text-4xl mt-3 mb-4 text-neutral-900">
            Agence Google Ads dans la Vienne — et toute la Nouvelle-Aquitaine
          </h2>
          <p class="text-neutral-600 leading-relaxed">
            Notre expertise en publicité Google couvre l'ensemble du département de la Vienne (86) ainsi que les zones limitrophes de la Nouvelle-Aquitaine.
            Nous intervenons principalement pour des PME de <strong>Poitiers et son agglomération</strong>, mais aussi dans toutes les communes du département où des entrepreneurs souhaitent développer leur visibilité sur Google Ads.
          </p>
        </div>
        <div class="flex flex-wrap gap-3 mt-6">
          <span
            v-for="zone in zones"
            :key="zone"
            class="px-4 py-2 bg-primary/10 text-primary font-medium text-sm rounded-full border border-primary/20"
          >
            {{ zone }}
          </span>
        </div>
        <p class="text-neutral-500 text-sm mt-6">
          Vous êtes en dehors de ces zones ? <NuxtLink to="/contact" class="text-primary hover:underline font-medium">Contactez-nous</NuxtLink> — nous accompagnons des PME partout en France avec la même rigueur locale.
        </p>
      </div>
    </section>

    <!-- CTA final -->
    <section class="py-16 md:py-20 bg-neutral-900">
      <div class="container mx-auto px-4 max-w-3xl text-center">
        <h2 class="font-heading font-extrabold text-3xl md:text-4xl text-white mb-4">
          Votre PME mérite une <span class="text-primary">agence Google Ads locale</span>
        </h2>
        <p class="text-neutral-400 text-lg mb-8 leading-relaxed">
          Audit gratuit de vos campagnes existantes ou de votre potentiel de marché à Poitiers.
          On vous présente une stratégie concrète sous 48 h.
        </p>
        <NuxtLink to="/contact" class="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary/90 transition-all text-lg">
          Demander mon audit gratuit
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
