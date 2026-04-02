<script setup lang="ts">
const avantages = [
  {
    title: 'Un seul expert, zéro intermédiaire',
    desc: 'Votre freelance Google Ads gère tout : audit, stratégie, création, optimisation. Pas de commercial qui vend, puis un junior qui exécute. Le même spécialiste du début à la fin.',
    icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
  },
  {
    title: 'Tarification transparente',
    desc: 'Honoraires fixes mensuels, séparés du budget publicitaire Google. Pas de pourcentage sur les dépenses média, pas de frais cachés. Vous savez exactement ce que vous payez.',
    icon: 'M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z',
  },
  {
    title: 'Réactivité et flexibilité',
    desc: 'Besoin d\'ajuster une campagne en urgence, de lancer une promotion saisonnière, de couper un budget ? Réponse sous 24 h, action immédiate. Les grandes agences vous font attendre une semaine.',
    icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
  },
  {
    title: 'Spécialisation PME locales',
    desc: 'AdScale travaille exclusivement avec des PME. Nous connaissons les contraintes de budget, les cycles de vente courts, les enjeux de visibilité locale à Poitiers et dans la Vienne.',
    icon: 'M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0a2.99 2.99 0 00.621-1.762L4.014 3.35A1.125 1.125 0 015.133 2.25h13.734a1.125 1.125 0 011.12 1.1l.392 4.237a2.99 2.99 0 00.621 1.762',
  },
]

const process = [
  {
    number: '01',
    title: 'Appel découverte',
    desc: 'Échange de 30 minutes pour comprendre votre activité, vos objectifs et votre budget. Gratuit, sans engagement.',
  },
  {
    number: '02',
    title: 'Audit et recommandation',
    desc: 'Analyse de vos campagnes existantes ou étude de marché. Livrable : un plan d\'action chiffré avec les campagnes recommandées et le budget optimal.',
  },
  {
    number: '03',
    title: 'Mise en place',
    desc: 'Création du compte Google Ads (ou reprise), paramétrage du tracking GA4/GTM, rédaction des annonces, configuration du ciblage géographique.',
  },
  {
    number: '04',
    title: 'Gestion et optimisation',
    desc: 'Suivi hebdomadaire des performances. Ajustement des enchères, mots-clés négatifs, tests A/B. Rapport mensuel clair envoyé avec les KPI essentiels.',
  },
]

const tarifs = [
  {
    nom: 'Essentiel',
    prix: 'à partir de 300',
    unite: '€/mois',
    desc: 'Pour les PME qui débutent avec Google Ads',
    inclus: [
      'Gestion d\'une campagne Search',
      'Ciblage géographique Poitiers / Vienne',
      'Rapport mensuel',
      'Optimisation bimensuelle',
      'Support par e-mail',
    ],
  },
  {
    nom: 'Croissance',
    prix: 'à partir de 500',
    unite: '€/mois',
    desc: 'Pour les PME qui veulent accélérer',
    inclus: [
      'Gestion multi-campagnes (Search + PMax ou Shopping)',
      'Tracking GA4 / GTM complet',
      'Rapport mensuel détaillé',
      'Optimisation hebdomadaire',
      'Support prioritaire',
      'Point mensuel en visio',
    ],
    featured: true,
  },
  {
    nom: 'Premium',
    prix: 'sur devis',
    unite: '',
    desc: 'Pour les comptes complexes ou multi-canaux',
    inclus: [
      'Gestion complète (Search, Shopping, PMax, Display, Meta)',
      'Tracking avancé et attribution',
      'Dashboard personnalisé',
      'Optimisation continue',
      'Support direct illimité',
      'Stratégie trimestrielle',
    ],
  },
]

const faqs = [
  {
    q: 'Pourquoi choisir un freelance Google Ads plutôt qu\'une agence ?',
    a: 'Un freelance offre un contact direct avec l\'expert qui gère vos campagnes. Pas d\'intermédiaire, pas de turnover. Les honoraires sont généralement plus bas car il n\'y a pas de structure à financer. La réactivité est immédiate.',
  },
  {
    q: 'Comment fonctionne la facturation ?',
    a: 'Honoraires mensuels fixes, facturés en début de mois. Le budget publicitaire Google est séparé : vous le payez directement à Google. Aucune commission sur les dépenses média.',
  },
  {
    q: 'Je peux arrêter quand je veux ?',
    a: 'Oui. Pas d\'engagement longue durée. Le préavis est d\'un mois. Votre compte Google Ads vous appartient — vous repartez avec toutes vos données et votre historique.',
  },
  {
    q: 'Travaillez-vous uniquement avec des entreprises de Poitiers ?',
    a: 'Non. AdScale est basé à Poitiers et spécialisé dans les PME de la Vienne (86), mais nous accompagnons aussi des entreprises partout en France. Le travail se fait à distance, avec des points réguliers en visio.',
  },
  {
    q: 'Quels résultats peut-on attendre ?',
    a: 'Les premières conversions arrivent sous deux semaines. Après trois mois d\'optimisation, nos clients constatent en moyenne une réduction de 42 % du coût par lead et un ROAS de 3,2x. Ces chiffres varient selon le secteur et le budget.',
  },
]

useHead({
  title: 'Freelance Google Ads & SEA à Poitiers — Gestion campagnes PME | AdScale',
  meta: [
    { name: 'description', content: 'Freelance Google Ads à Poitiers : gestion complète de vos campagnes SEA, tarification transparente, expert certifié PME. Audit gratuit sous 48 h.' },
    { name: 'robots', content: 'index, follow' },
  ],
  link: [
    { rel: 'canonical', href: 'https://adscale.poitiers.digital/freelance-google-ads', key: 'canonical' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'LocalBusiness',
            name: 'AdScale — Freelance Google Ads Poitiers',
            description: 'Freelance Google Ads et SEA à Poitiers. Gestion de campagnes publicitaires pour PME de la Vienne (86).',
            url: 'https://adscale.poitiers.digital/freelance-google-ads',
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
            name: 'AdScale — Freelance Google Ads',
            serviceType: 'Gestion de campagnes Google Ads en freelance',
            provider: {
              '@type': 'LocalBusiness',
              name: 'AdScale',
            },
            areaServed: {
              '@type': 'City',
              name: 'Poitiers',
            },
            description: 'Freelance SEA certifié Google Partner. Gestion flexible de campagnes Search, Shopping, Display, Performance Max pour PME.',
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
        <div class="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div class="absolute -bottom-1/3 left-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-3xl" />
      </div>
      <div class="relative container mx-auto px-4 max-w-7xl">
        <span class="text-sm font-semibold text-secondary uppercase tracking-wider">Freelance Google Ads</span>
        <h1 class="font-heading font-extrabold text-4xl md:text-5xl mt-3 mb-6 max-w-3xl leading-tight">
          Freelance Google Ads à Poitiers —
          <span class="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">vos campagnes gérées par un expert, pas par une usine</span>
        </h1>
        <p class="text-neutral-300 text-lg max-w-2xl leading-relaxed">
          Un freelance SEA certifié Google Partner, basé à Poitiers. Tarification transparente, interlocuteur unique, résultats mesurables. La gestion Google Ads sans les inconvénients de l'agence.
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

    <!-- Intro -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="font-heading font-extrabold text-3xl md:text-4xl mb-8 text-neutral-900">Pourquoi travailler avec un freelance Google Ads</h2>
        <div class="space-y-5 text-neutral-600 text-lg leading-relaxed">
          <p>
            Une agence Google Ads facture entre 15 et 25 % de votre budget média en frais de gestion. Sur un budget de 2 000 euros par mois, cela représente 300 à 500 euros qui ne vont pas dans vos campagnes. Et pour ce prix, votre compte est souvent géré par un profil junior qui applique des templates.
          </p>
          <p>
            Le modèle freelance est différent. <strong>Honoraires fixes, budget publicitaire 100 % investi dans Google, et un expert senior qui gère personnellement votre compte.</strong> Pas de commission cachée, pas de marge sur les clics.
          </p>
          <p>
            AdScale fonctionne sur ce modèle. Basé à Poitiers, spécialisé dans les campagnes Google Ads pour les PME de la Vienne et au-delà. Le même consultant qui vous présente la stratégie est celui qui optimise vos campagnes chaque semaine. AdScale est une division de <a href="https://poitiers.digital" target="_blank" rel="noopener" class="text-primary hover:underline">Studio Digital Poitiers</a>, agence web et digitale dans la Vienne.
          </p>
        </div>
      </div>
    </section>

    <!-- Avantages -->
    <section class="bg-neutral-900 text-white py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-14">
          <span class="text-sm font-semibold text-primary uppercase tracking-wider">Avantages</span>
          <h2 class="font-heading font-extrabold text-3xl md:text-4xl mt-3">
            Ce que vous gagnez avec un <span class="text-primary">freelance SEA</span>
          </h2>
          <p class="text-neutral-400 mt-3 max-w-xl mx-auto">
            Quatre raisons concrètes de confier vos campagnes à un indépendant spécialisé.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="a in avantages" :key="a.title" class="bg-neutral-800 rounded-xl p-8 border border-neutral-700 hover:border-primary/40 transition-colors">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" :d="a.icon" /></svg>
            </div>
            <h3 class="font-heading font-bold text-xl mb-3 text-white">{{ a.title }}</h3>
            <p class="text-neutral-400 leading-relaxed">{{ a.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-12 md:mb-16">
          <span class="text-sm font-semibold text-accent uppercase tracking-wider">Notre process</span>
          <h2 class="font-heading font-extrabold text-3xl md:text-4xl mt-2">
            De l'audit au résultat : comment on travaille
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="step in process" :key="step.number" class="relative">
            <div class="font-numbers font-bold text-6xl text-primary/10 mb-4">{{ step.number }}</div>
            <h3 class="font-heading font-bold text-xl mb-3 text-neutral-900">{{ step.title }}</h3>
            <p class="text-neutral-500 leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tarifs -->
    <section class="bg-neutral-100 py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-12 md:mb-16">
          <span class="text-sm font-semibold text-secondary uppercase tracking-wider">Tarifs</span>
          <h2 class="font-heading font-extrabold text-3xl md:text-4xl mt-2 mb-4">
            Des honoraires clairs, sans surprise
          </h2>
          <p class="text-neutral-500 max-w-2xl mx-auto">
            Le budget publicitaire Google est séparé et vous appartient. Nos honoraires couvrent uniquement la gestion et l'optimisation de vos campagnes.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="t in tarifs"
            :key="t.nom"
            class="rounded-xl p-8 border transition-[box-shadow,transform] duration-300 hover:-translate-y-1 will-change-transform"
            :class="t.featured ? 'bg-white border-primary/30 shadow-lg shadow-primary/10 ring-2 ring-primary/20' : 'bg-white border-neutral-200 hover:shadow-lg'"
          >
            <div v-if="t.featured" class="text-xs font-bold text-primary uppercase tracking-wider mb-3">Le plus choisi</div>
            <h3 class="font-heading font-bold text-xl mb-1 text-neutral-900">{{ t.nom }}</h3>
            <p class="text-neutral-500 text-sm mb-4">{{ t.desc }}</p>
            <div class="mb-6">
              <span class="font-numbers font-bold text-3xl text-primary">{{ t.prix }}</span>
              <span v-if="t.unite" class="text-neutral-500 text-sm ml-1">{{ t.unite }}</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li v-for="item in t.inclus" :key="item" class="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-success shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                <span class="text-neutral-700 text-sm">{{ item }}</span>
              </li>
            </ul>
            <NuxtLink
              to="/contact"
              class="w-full inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              :class="t.featured ? 'bg-gradient-cta text-white hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5' : 'border border-primary/20 text-primary hover:bg-primary/5'"
            >
              Demander un devis
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Lien vers consultant -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="font-heading font-extrabold text-3xl md:text-4xl mb-8 text-neutral-900">Freelance ou consultant Google Ads : même expertise, même exigence</h2>
        <div class="space-y-5 text-neutral-600 text-lg leading-relaxed">
          <p>
            Que vous tapiez « freelance Google Ads » ou « <NuxtLink to="/consultant-google-ads-poitiers" class="text-primary hover:underline font-medium">consultant Google Ads Poitiers</NuxtLink> » dans Google, vous cherchez la même chose : un spécialiste SEA qui prend en charge vos campagnes publicitaires avec sérieux et transparence.
          </p>
          <p>
            Chez AdScale, le titre importe peu. Ce qui compte, c'est la méthode : audit rigoureux, stratégie sur mesure, optimisation continue, reporting clair. Chaque PME accompagnée bénéficie du même niveau d'exigence, que le budget soit de 500 ou de 5 000 euros par mois.
          </p>
          <p>
            Notre ancrage à Poitiers est un atout concret. Nous connaissons les requêtes locales, les zones de chalandise de la Vienne, les secteurs porteurs du département 86. Cette connaissance terrain fait la différence dans le paramétrage et l'optimisation des campagnes. Pour les entreprises qui veulent aller plus loin, l'<a href="https://rankeo.poitiers.digital" target="_blank" rel="noopener" class="text-primary hover:underline">agence SEO Poitiers</a> Rankeo complète efficacement une stratégie Google Ads.
          </p>
        </div>
        <div class="flex flex-wrap gap-4 mt-8">
          <NuxtLink to="/consultant-google-ads-poitiers" class="inline-flex items-center gap-2 border border-primary/20 text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary/5 transition-all">
            Voir l'approche consultant
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
            Questions fréquentes — Freelance Google Ads
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
          Prêt à confier vos campagnes à un <span class="text-primary">freelance Google Ads</span> ?
        </h2>
        <p class="text-neutral-400 text-lg mb-8 leading-relaxed">
          Audit gratuit de votre compte ou de votre potentiel de marché. Proposition concrète sous 48 h, sans engagement.
        </p>
        <NuxtLink to="/contact" class="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary/90 transition-all text-lg">
          Demander mon audit gratuit
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
