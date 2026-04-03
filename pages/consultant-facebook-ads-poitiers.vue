<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Audit de votre marché',
    desc: 'Analyse de vos audiences, de votre pixel Meta existant, des campagnes passées et du potentiel de ciblage local à Poitiers et dans la Vienne.',
  },
  {
    number: '02',
    title: 'Stratégie sur-mesure',
    desc: 'Plan d\'action détaillé : choix des objectifs (leads, ventes, notoriété), audiences personnalisées, budget recommandé, calendrier de diffusion.',
  },
  {
    number: '03',
    title: 'Création et lancement',
    desc: 'Conception des créatives (Reels, Stories, Carousel), rédaction des accroches, configuration du pixel et des événements de conversion. Validation avant mise en ligne.',
  },
  {
    number: '04',
    title: 'Optimisation continue',
    desc: 'Tests A/B créatifs et audiences, ajustements quotidiens des enchères, exclusion des audiences non-performantes. Rapport mensuel clair avec ROAS et coût par lead.',
  },
]

const formats = [
  {
    title: 'Reels Ads',
    desc: 'Format vidéo vertical plein écran, le plus performant en 2026. Taux de complétion supérieur de 60 % aux vidéos classiques. Idéal pour capter l\'attention en scroll.',
  },
  {
    title: 'Stories Ads',
    desc: 'Publicités immersives entre les stories de vos prospects. Format éphémère qui crée l\'urgence et génère des clics directs vers votre site ou votre formulaire.',
  },
  {
    title: 'Carousel Ads',
    desc: 'Jusqu\'à 10 images ou vidéos dans une seule annonce. Parfait pour présenter plusieurs produits, étapes d\'un service ou témoignages clients.',
  },
  {
    title: 'Lead Ads (formulaires natifs)',
    desc: 'Formulaires pré-remplis directement dans Facebook. Le prospect n\'a pas besoin de quitter l\'application. Taux de conversion jusqu\'à 3 fois supérieur aux landing pages.',
  },
  {
    title: 'Dynamic Product Ads',
    desc: 'Retargeting automatique de votre catalogue produit. Les utilisateurs voient exactement les articles qu\'ils ont consultés sur votre site.',
  },
  {
    title: 'Lookalike & Custom Audiences',
    desc: 'Ciblage de profils similaires à vos meilleurs clients. Combiné aux audiences personnalisées (site, CRM, engagement), c\'est le levier le plus puissant de Meta Ads.',
  },
]

const differences = [
  {
    title: 'Spécialiste Meta, pas généraliste',
    desc: 'La majorité des agences gèrent Meta Ads en complément de Google Ads. Chez AdScale, votre consultant maîtrise les spécificités de l\'algorithme Meta, des enchères automatiques et des formats créatifs natifs.',
    icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z',
  },
  {
    title: 'Ciblage local Poitiers & Vienne',
    desc: 'Zones de chalandise précises, ciblage par code postal, audiences locales combinées à des intérêts sectoriels. Les campagnes nationales gaspillent du budget — les nôtres le concentrent sur vos vrais prospects.',
    icon: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z',
  },
  {
    title: 'Créatives qui convertissent',
    desc: 'Sur Meta Ads, la créative fait 80 % du résultat. On ne lance jamais une campagne avec un visuel générique. Chaque annonce est pensée pour le scroll, testée en A/B, itérée chaque semaine.',
    icon: 'M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z',
  },
  {
    title: 'Transparence et reporting',
    desc: 'Accès complet au Business Manager. Rapport mensuel avec les KPI qui comptent : ROAS, coût par lead, coût par acquisition, taux de conversion. Pas de vanity metrics.',
    icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
  },
]

const faqs = [
  {
    q: 'Quelle différence entre Facebook Ads et Meta Ads ?',
    a: 'C\'est la même plateforme. Meta Ads (anciennement Facebook Ads) gère les publicités sur Facebook, Instagram, Messenger et le réseau Audience Network. Depuis le rebranding de 2021, le terme officiel est Meta Ads, mais les deux désignent le même outil.',
  },
  {
    q: 'Combien coûte un consultant Facebook Ads à Poitiers ?',
    a: 'Les honoraires de gestion varient selon le volume de campagnes. Pour une PME locale, comptez entre 400 et 900 euros par mois de frais de gestion, auxquels s\'ajoute votre budget publicitaire Meta (séparé et transparent). Le premier audit est gratuit.',
  },
  {
    q: 'Quel budget publicitaire minimum pour Facebook Ads ?',
    a: 'Pour une PME à Poitiers, un budget de 500 euros par mois permet d\'obtenir des résultats significatifs en ciblage local. Les secteurs très concurrentiels (immobilier, restauration, e-commerce) nécessitent souvent 800 à 1 500 euros pour des performances optimales.',
  },
  {
    q: 'Facebook Ads fonctionne-t-il pour les entreprises locales ?',
    a: 'Absolument. Le ciblage géographique de Meta est extrêmement précis (rayon autour d\'une adresse, codes postaux, villes). Combiné au ciblage par intérêts et comportements, c\'est l\'un des leviers les plus rentables pour les commerces et prestataires de Poitiers.',
  },
  {
    q: 'En combien de temps voit-on des résultats ?',
    a: 'Les premières données arrivent sous 48 à 72 heures. L\'algorithme Meta a besoin de 50 événements de conversion par semaine pour sortir de la phase d\'apprentissage. Comptez 2 à 4 semaines pour des performances stabilisées.',
  },
  {
    q: 'Puis-je combiner Facebook Ads et Google Ads ?',
    a: 'C\'est même recommandé. Google Ads capte la demande existante (les gens qui cherchent), Meta Ads crée la demande (les gens qui découvrent). Un consultant qui maîtrise les deux canaux peut orchestrer une stratégie complémentaire avec un budget global optimisé. Découvrez notre offre Google Ads.',
  },
]

useHead({
  title: 'Consultant Facebook Ads Poitiers — Expert Meta Ads PME Vienne 86 | AdScale',
  meta: [
    { name: 'description', content: 'Consultant Facebook Ads à Poitiers, expert Meta Ads pour PME de la Vienne 86. Campagnes Reels, Stories, Carousel. Ciblage local, ROAS mesurable, audit gratuit.' },
    { name: 'robots', content: 'index, follow' },
  ],
  link: [
    { rel: 'canonical', href: 'https://adscale.poitiers.digital/consultant-facebook-ads-poitiers', key: 'canonical' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'LocalBusiness',
            name: 'AdScale — Consultant Facebook Ads Poitiers',
            description: 'Consultant Facebook Ads et Meta Ads à Poitiers spécialisé dans la gestion de campagnes publicitaires sur Facebook et Instagram pour les PME de la Vienne (86).',
            url: 'https://adscale.poitiers.digital/consultant-facebook-ads-poitiers',
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
            name: 'AdScale — Consultant Facebook Ads',
            serviceType: 'Gestion de campagnes Facebook Ads et Meta Ads',
            provider: {
              '@type': 'LocalBusiness',
              name: 'AdScale',
            },
            areaServed: {
              '@type': 'City',
              name: 'Poitiers',
            },
            description: 'Consultant Meta Ads certifié. Gestion de campagnes Facebook, Instagram, Reels, Stories, Carousel et Lead Ads pour PME locales.',
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
        <span class="text-sm font-semibold text-primary uppercase tracking-wider">Consultant Facebook Ads</span>
        <h1 class="font-heading font-extrabold text-4xl md:text-5xl mt-3 mb-6 max-w-3xl leading-tight">
          Consultant Facebook Ads à Poitiers —
          <span class="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">Campagnes Meta rentables pour PME</span>
        </h1>
        <p class="text-white/80 text-lg max-w-2xl leading-relaxed">
          Un expert Meta Ads dédié à votre entreprise. Ciblage local précis, créatives performantes, résultats mesurables. Les PME de Poitiers et de la Vienne méritent un consultant qui connaît leur marché — pas une agence nationale qui gère 200 comptes.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 mt-8">
          <NuxtLink to="/contact" class="inline-flex items-center justify-center gap-2 bg-gradient-cta text-white font-bold px-8 py-4 rounded-lg hover:shadow-xl hover:shadow-primary/30 transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 will-change-transform text-lg">
            Demander un audit gratuit
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </NuxtLink>
          <NuxtLink to="/consultant-google-ads-poitiers" class="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors duration-300">
            Voir l'offre Google Ads
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Pourquoi Facebook/Meta Ads -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="font-heading font-extrabold text-3xl md:text-4xl mb-8 text-[#fafafa]">Pourquoi investir dans Facebook Ads quand on est une PME à Poitiers</h2>
        <div class="space-y-5 text-[#a0a0a0] text-lg leading-relaxed">
          <p>
            Google Ads capte les gens qui cherchent déjà votre service. Facebook Ads fait l'inverse : il <strong>crée la demande</strong> auprès de personnes qui ne vous connaissent pas encore mais qui correspondent exactement à votre cible.
          </p>
          <p>
            Avec 40 millions d'utilisateurs actifs en France dont 74 % qui se connectent quotidiennement, Meta reste la plateforme publicitaire la plus puissante pour toucher des audiences locales. À Poitiers, cela signifie pouvoir cibler précisément les habitants de la Vienne par tranche d'âge, centres d'intérêt, comportement d'achat — et même par habitudes de consommation locale.
          </p>
          <p>
            Le problème, c'est que la plupart des PME qui essaient Facebook Ads seules commettent les mêmes erreurs : ciblage trop large, créatives inadaptées au format mobile, absence de pixel correctement configuré, pas de stratégie d'entonnoir. Le résultat ? Du budget brûlé et l'impression que « Facebook Ads ne marche pas pour mon secteur ».
          </p>
          <p class="font-semibold text-[#fafafa]">
            Chez AdScale, on gère vos campagnes Meta Ads avec la même rigueur qu'un trader gère un portefeuille : chaque euro investi est suivi, mesuré, optimisé. AdScale est une division de <a href="https://poitiers.digital" target="_blank" rel="noopener" class="text-primary hover:underline">Studio Digital Poitiers</a>.
          </p>
        </div>
      </div>
    </section>

    <!-- Ce qui nous distingue -->
    <section class="bg-neutral-900 text-white py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-14">
          <span class="text-sm font-semibold text-primary uppercase tracking-wider">Nos engagements</span>
          <h2 class="font-heading font-extrabold text-3xl md:text-4xl mt-3">
            Ce qui distingue un <span class="text-primary">consultant Meta Ads local</span>
          </h2>
          <p class="text-white/60 mt-3 max-w-xl mx-auto">
            Quatre garanties concrètes pour les PME de Poitiers et de la Vienne.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="diff in differences" :key="diff.title" class="bg-neutral-800 rounded-xl p-8 border border-neutral-700 hover:border-primary/40 transition-colors">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" :d="diff.icon" /></svg>
            </div>
            <h3 class="font-heading font-bold text-xl mb-3 text-white">{{ diff.title }}</h3>
            <p class="text-white/60 leading-relaxed">{{ diff.desc }}</p>
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
            4 étapes pour des campagnes Facebook Ads rentables
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="step in steps" :key="step.number" class="relative">
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

    <!-- Formats publicitaires -->
    <section class="bg-[#0a0a0a] py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-12 md:mb-16">
          <span class="text-sm font-semibold text-secondary uppercase tracking-wider">Formats</span>
          <h2 class="font-heading font-extrabold text-3xl md:text-4xl mt-2 mb-4">
            Les formats Meta Ads que nous maîtrisons
          </h2>
          <p class="text-white/60 max-w-2xl mx-auto">
            Chaque format a ses spécificités et ses cas d'usage. Le choix dépend de votre objectif, de votre audience et de votre secteur d'activité.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="f in formats" :key="f.title" class="bg-[#1a1a1a] rounded-xl p-6 hover:shadow-lg hover:shadow-black/20 transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-1 will-change-transform group border border-transparent hover:border-[#FF8C00]/10">
            <h3 class="font-heading font-bold text-lg mb-2 text-[#fafafa]">{{ f.title }}</h3>
            <p class="text-[#737373] text-sm leading-relaxed">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Ciblage local -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="font-heading font-extrabold text-3xl md:text-4xl mb-8 text-[#fafafa]">Ciblage local à Poitiers : l'avantage décisif de Meta Ads</h2>
        <div class="space-y-5 text-[#a0a0a0] text-lg leading-relaxed">
          <p>
            L'atout majeur de Facebook Ads pour une PME locale, c'est la granularité du ciblage géographique. On ne parle pas simplement de « Poitiers » en tant que ville — on parle de cibler un rayon de 5 km autour de votre commerce, d'exclure les zones où votre service n'est pas livrable, de cibler spécifiquement les habitants de Châtellerault, Buxerolles, Saint-Benoît ou Mignaloux-Beauvoir.
          </p>
          <p>
            À cela s'ajoute la puissance des audiences personnalisées : on peut cibler les visiteurs de votre site web (retargeting pixel), les contacts de votre fichier client (audiences CRM), ou créer des audiences lookalike qui ressemblent à vos meilleurs acheteurs. En combinant ciblage géographique et audiences similaires, on atteint des prospects hyper-qualifiés à un coût par clic souvent inférieur à Google Ads.
          </p>
          <p>
            Combiner <NuxtLink to="/consultant-google-ads-poitiers" class="text-primary hover:underline font-medium">Google Ads</NuxtLink> et Meta Ads est la stratégie la plus complète. Google capte l'intention existante, Meta crée la demande en amont. Les deux canaux se renforcent mutuellement : un prospect qui a vu votre publicité Facebook convertit mieux quand il vous retrouve en tête des résultats Google.
          </p>
        </div>
        <div class="flex flex-wrap gap-4 mt-8">
          <NuxtLink to="/consultant-google-ads-poitiers" class="inline-flex items-center gap-2 border border-[#FF8C00]/20 text-[#FF8C00] font-semibold px-6 py-3 rounded-lg hover:bg-[#FF8C00]/5 transition-all">
            Voir l'offre Google Ads
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </NuxtLink>
          <NuxtLink to="/services" class="inline-flex items-center gap-2 border border-[#262626] text-[#a0a0a0] font-semibold px-6 py-3 rounded-lg hover:bg-[#1a1a1a] transition-all">
            Tous nos services
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
            Questions fréquentes — Consultant Facebook Ads Poitiers
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
          Vos prospects sont sur Facebook — <span class="text-primary">il est temps de les atteindre</span>
        </h2>
        <p class="text-white/60 text-lg mb-8 leading-relaxed">
          Audit gratuit de votre potentiel Meta Ads à Poitiers. Stratégie concrète présentée sous 48 h, sans engagement. Premier résultat sous 15 jours.
        </p>
        <NuxtLink to="/contact" class="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary/90 transition-all text-lg">
          Demander mon audit gratuit
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
