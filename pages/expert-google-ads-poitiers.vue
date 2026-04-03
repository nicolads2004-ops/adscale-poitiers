<script setup lang="ts">
const certifications = [
  {
    title: 'Google Ads Search',
    desc: 'Maîtrise avancée des campagnes sur le réseau de recherche : structure de compte, stratégies d\'enchères, rédaction d\'annonces performantes, ciblage par intention.',
  },
  {
    title: 'Google Ads Display',
    desc: 'Création et optimisation de campagnes display et remarketing. Ciblage contextuel, audiences personnalisées, formats responsives.',
  },
  {
    title: 'Google Ads Shopping',
    desc: 'Configuration de flux produits, optimisation du Merchant Center, stratégies d\'enchères Shopping et Performance Max pour e-commerce.',
  },
  {
    title: 'Google Analytics (GA4)',
    desc: 'Configuration avancée de GA4, création d\'audiences, suivi des conversions cross-device, attribution data-driven.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Diagnostic approfondi',
    desc: 'Audit technique de votre compte Google Ads (ou étude de marché si vous démarrez). Analyse de la concurrence locale, identification des opportunités, estimation du potentiel de conversion dans votre secteur à Poitiers.',
  },
  {
    number: '02',
    title: 'Architecture de compte',
    desc: 'Restructuration ou création du compte selon les meilleures pratiques Google. Hiérarchie propre, segmentation par intention, paramétrage du tracking GA4/GTM avec suivi des micro et macro-conversions.',
  },
  {
    number: '03',
    title: 'Déploiement des campagnes',
    desc: 'Lancement progressif avec des enchères conservatrices. Phase d\'apprentissage surveillée de près, ajustements quotidiens pendant les 2 premières semaines.',
  },
  {
    number: '04',
    title: 'Optimisation et scaling',
    desc: 'Une fois les campagnes stabilisées, optimisation hebdomadaire des enchères, des audiences et des annonces. Scaling du budget sur les campagnes les plus rentables. Rapport mensuel détaillé.',
  },
]

const tarifs = [
  {
    name: 'Starter',
    price: '390',
    desc: 'Pour les PME qui démarrent sur Google Ads',
    features: [
      'Jusqu\'à 2 campagnes actives',
      'Budget publicitaire < 1 500 €/mois',
      'Optimisation hebdomadaire',
      'Rapport mensuel',
      'Support par email',
    ],
  },
  {
    name: 'Growth',
    price: '690',
    desc: 'Pour les entreprises en phase de croissance',
    features: [
      'Jusqu\'à 5 campagnes actives',
      'Budget publicitaire < 5 000 €/mois',
      'Optimisation bi-hebdomadaire',
      'Rapport mensuel + point téléphonique',
      'A/B testing continu',
      'Remarketing inclus',
    ],
    popular: true,
  },
  {
    name: 'Scale',
    price: 'Sur devis',
    desc: 'Pour les comptes à fort volume',
    features: [
      'Campagnes illimitées',
      'Budget publicitaire > 5 000 €/mois',
      'Pilotage quotidien',
      'Dashboard temps réel',
      'Stratégie cross-canal (Search + Shopping + PMax)',
      'Interlocuteur dédié',
    ],
  },
]

const faqs = [
  {
    q: 'Qu\'est-ce qui différencie un expert Google Ads d\'un simple gestionnaire de campagnes ?',
    a: 'Un expert ne se contente pas de paramétrer des campagnes et d\'ajuster les enchères. Il analyse le parcours client complet, configure un tracking précis, structure le compte pour maximiser le Quality Score, et prend des décisions stratégiques basées sur les données. La certification Google valide un socle de compétences, mais c\'est l\'expérience terrain qui fait un vrai expert.',
  },
  {
    q: 'Pourquoi un expert local à Poitiers plutôt qu\'un expert à distance ?',
    a: 'Un expert basé à Poitiers comprend le marché local : les zones de chalandise de la Vienne, les comportements de recherche des Poitevins, les événements saisonniers qui impactent votre activité. Il peut aussi vous rencontrer en personne pour comprendre votre métier en profondeur. Ce n\'est pas obligatoire, mais ça fait une vraie différence.',
  },
  {
    q: 'Les certifications Google sont-elles un gage de qualité ?',
    a: 'Les certifications Google Ads valident des connaissances théoriques et pratiques. Elles sont renouvelées chaque année, ce qui garantit une mise à jour des compétences. Mais elles ne suffisent pas : l\'expérience de gestion de comptes réels, la connaissance de votre secteur et la capacité à interpréter les données sont tout aussi importantes.',
  },
  {
    q: 'Comment se passe la transition si j\'ai déjà un compte Google Ads ?',
    a: 'Nous réalisons un audit complet de votre compte existant. Nous identifions ce qui fonctionne, ce qui gaspille du budget, et les opportunités manquées. La transition se fait sans interruption de vos campagnes. Vous conservez tout l\'historique et les données de votre compte.',
  },
  {
    q: 'Quel retour sur investissement attendre ?',
    a: 'Cela dépend de votre secteur, de votre panier moyen et de votre taux de conversion. En moyenne, nos clients PME à Poitiers obtiennent un ROAS (retour sur dépenses publicitaires) de 2 à 4 après 3 mois d\'optimisation. L\'audit gratuit vous donnera une projection réaliste pour votre activité.',
  },
]

useHead({
  title: 'Expert Google Ads Poitiers — Certification Google, expertise locale | AdScale',
  meta: [
    { name: 'description', content: 'Expert Google Ads certifié à Poitiers. Gestion de campagnes SEA pour PME de la Vienne 86. Certifications Google Partner, expertise locale, résultats mesurables. Audit gratuit.' },
    { name: 'robots', content: 'index, follow' },
  ],
  link: [
    { rel: 'canonical', href: 'https://adscale.poitiers.digital/expert-google-ads-poitiers', key: 'canonical' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'LocalBusiness',
            name: 'AdScale — Expert Google Ads Poitiers',
            description: 'Expert Google Ads certifié à Poitiers, spécialisé dans la gestion de campagnes SEA pour les PME de la Vienne (86).',
            url: 'https://adscale.poitiers.digital/expert-google-ads-poitiers',
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
            name: 'AdScale — Expert Google Ads',
            serviceType: 'Expertise Google Ads et gestion de campagnes SEA',
            provider: {
              '@type': 'LocalBusiness',
              name: 'AdScale',
            },
            areaServed: {
              '@type': 'City',
              name: 'Poitiers',
            },
            description: 'Expert SEA certifié Google Partner. Gestion et optimisation de campagnes Search, Shopping, Display, Performance Max pour PME locales.',
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
        <span class="text-sm font-semibold text-primary uppercase tracking-wider">Expert Google Ads</span>
        <h1 class="font-heading font-extrabold text-4xl md:text-5xl mt-3 mb-6 max-w-3xl leading-tight">
          Expert Google Ads à Poitiers —
          <span class="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">certification Google, expertise locale</span>
        </h1>
        <p class="text-white/80 text-lg max-w-2xl leading-relaxed">
          Un expert certifié Google Partner qui gère vos campagnes avec la précision d'un spécialiste et la connaissance d'un acteur local. Pas de junior, pas d'intermédiaire : l'expert qui analyse est celui qui optimise.
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

    <!-- Qu'est-ce qu'un expert Google Ads -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="font-heading font-extrabold text-3xl md:text-4xl mb-8 text-[#fafafa]">Qu'est-ce qu'un expert Google Ads et pourquoi en avez-vous besoin ?</h2>
        <div class="space-y-5 text-[#a0a0a0] text-lg leading-relaxed">
          <p>
            Un expert Google Ads n'est pas simplement quelqu'un qui sait créer une campagne. C'est un spécialiste qui comprend l'écosystème publicitaire de Google dans sa globalité : les algorithmes d'enchères, le Quality Score, les stratégies d'audiences, le tracking des conversions, l'attribution multi-touch.
          </p>
          <p>
            La différence entre un compte géré par un expert et un compte géré par un débutant se mesure directement en euros. <strong>Un paramétrage approximatif du ciblage géographique peut gaspiller 30 % de votre budget sur des clics hors zone.</strong> Un tracking mal configuré fausse toutes vos décisions d'optimisation. Des annonces rédigées sans méthode obtiennent des taux de clic médiocres qui font monter vos coûts.
          </p>
          <p>
            Chez AdScale, l'expertise Google Ads est notre métier unique. Nous ne faisons pas de création de sites, pas de community management, pas de SEO. Nous nous concentrons sur ce que nous maîtrisons : faire en sorte que chaque euro investi dans Google Ads génère le maximum de retour pour les PME de Poitiers et de la Vienne.
          </p>
        </div>
      </div>
    </section>

    <!-- Pourquoi un expert local -->
    <section class="bg-neutral-900 text-white py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-14">
          <span class="text-sm font-semibold text-primary uppercase tracking-wider">Expertise locale</span>
          <h2 class="font-heading font-extrabold text-3xl md:text-4xl mt-3">
            Pourquoi un expert <span class="text-primary">basé à Poitiers</span> fait la différence
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-neutral-800 rounded-xl p-8 border border-neutral-700 hover:border-primary/40 transition-colors">
            <h3 class="font-heading font-bold text-xl mb-3 text-white">Connaissance du terrain</h3>
            <p class="text-white/60 leading-relaxed">
              Les zones de chalandise de Poitiers, les quartiers qui convertissent, les villes satellites (Châtellerault, Futuroscope, Lusignan) : un expert local sait où concentrer le budget pour maximiser les résultats.
            </p>
          </div>
          <div class="bg-neutral-800 rounded-xl p-8 border border-neutral-700 hover:border-primary/40 transition-colors">
            <h3 class="font-heading font-bold text-xl mb-3 text-white">Réactivité immédiate</h3>
            <p class="text-white/60 leading-relaxed">
              Un événement local, une opportunité saisonnière, un concurrent qui lance une promo agressive : l'expert local réagit dans la journée. Les prestataires à distance découvrent ces signaux trop tard.
            </p>
          </div>
          <div class="bg-neutral-800 rounded-xl p-8 border border-neutral-700 hover:border-primary/40 transition-colors">
            <h3 class="font-heading font-bold text-xl mb-3 text-white">Rencontres en personne</h3>
            <p class="text-white/60 leading-relaxed">
              Comprendre votre métier en profondeur nécessite parfois une visite sur place. Un expert local peut venir voir votre commerce, votre atelier, votre showroom pour adapter la stratégie à la réalité de votre activité.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-12 md:mb-16">
          <span class="text-sm font-semibold text-accent uppercase tracking-wider">Certifications</span>
          <h2 class="font-heading font-extrabold text-3xl md:text-4xl mt-2">
            Certifications Google Ads à jour
          </h2>
          <p class="text-white/60 max-w-2xl mx-auto mt-4">
            AdScale est Google Partner. Nos certifications sont renouvelées chaque année et couvrent l'ensemble des formats publicitaires Google.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="cert in certifications" :key="cert.title" class="bg-[#1a1a1a] rounded-xl p-6 hover:shadow-lg hover:shadow-black/20 transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-1 will-change-transform group border border-transparent hover:border-[#FF8C00]/10">
            <h3 class="font-heading font-bold text-lg mb-2 text-[#fafafa]">{{ cert.title }}</h3>
            <p class="text-[#737373] text-sm leading-relaxed">{{ cert.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="bg-[#0a0a0a] py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-12 md:mb-16">
          <span class="text-sm font-semibold text-secondary uppercase tracking-wider">Notre process</span>
          <h2 class="font-heading font-extrabold text-3xl md:text-4xl mt-2">
            Comment travaille un expert Google Ads chez AdScale
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="step in processSteps" :key="step.number" class="relative">
            <div class="font-numbers font-bold text-6xl text-primary/10 mb-4">{{ step.number }}</div>
            <h3 class="font-heading font-bold text-xl mb-3 text-[#fafafa]">{{ step.title }}</h3>
            <p class="text-white/60 leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tarifs indicatifs -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-12 md:mb-16">
          <span class="text-sm font-semibold text-primary uppercase tracking-wider">Tarifs</span>
          <h2 class="font-heading font-extrabold text-3xl md:text-4xl mt-2">
            Tarifs indicatifs — gestion Google Ads
          </h2>
          <p class="text-white/60 max-w-2xl mx-auto mt-4">
            Honoraires de gestion mensuels. Le budget publicitaire Google est séparé et vous appartient. Pas de frais cachés, pas de commission sur les clics.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="t in tarifs"
            :key="t.name"
            class="rounded-xl p-8 border transition-colors"
            :class="t.popular ? 'bg-[#FF8C00]/5 border-[#FF8C00]/30' : 'bg-[#1a1a1a] border-[#262626]'"
          >
            <div v-if="t.popular" class="text-xs font-bold uppercase tracking-widest text-[#FF8C00] mb-2">Le plus choisi</div>
            <h3 class="font-heading font-bold text-2xl text-[#fafafa] mb-1">{{ t.name }}</h3>
            <p class="text-[#737373] text-sm mb-4">{{ t.desc }}</p>
            <div class="mb-6">
              <span class="font-numbers font-bold text-4xl text-[#fafafa]">{{ t.price }}</span>
              <span v-if="t.price !== 'Sur devis'" class="text-[#737373] text-sm"> € HT/mois</span>
            </div>
            <ul class="space-y-2">
              <li v-for="f in t.features" :key="f" class="flex items-start gap-2 text-sm text-[#a0a0a0]">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#FF8C00] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
                {{ f }}
              </li>
            </ul>
            <NuxtLink
              to="/contact"
              class="mt-6 block text-center py-3 rounded-lg font-semibold transition-all"
              :class="t.popular ? 'bg-[#FF8C00] hover:bg-[#E07B00] text-white' : 'border border-[#FF8C00]/20 text-[#FF8C00] hover:bg-[#FF8C00]/5'"
            >
              Demander un audit gratuit
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Maillage -->
    <section class="bg-[#0a0a0a] py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="font-heading font-extrabold text-3xl md:text-4xl mb-8 text-[#fafafa]">Expert, consultant ou agence Google Ads : notre positionnement</h2>
        <div class="space-y-5 text-[#a0a0a0] text-lg leading-relaxed">
          <p>
            Chez AdScale, nous combinons l'expertise technique d'un spécialiste certifié avec la structure d'une <NuxtLink to="/agence-google-ads-poitiers" class="text-primary hover:underline font-medium">agence Google Ads locale</NuxtLink>. Que vous cherchiez un <NuxtLink to="/consultant-google-ads-poitiers" class="text-primary hover:underline font-medium">consultant Google Ads à Poitiers</NuxtLink> ou un <NuxtLink to="/freelance-google-ads" class="text-primary hover:underline font-medium">freelance SEA</NuxtLink>, notre approche est la même : un expert dédié, des process rigoureux, des résultats mesurables.
          </p>
          <p>
            Pour une stratégie digitale complète, nous travaillons en synergie avec <a href="https://rankeo.poitiers.digital" target="_blank" rel="noopener" class="text-primary hover:underline">Rankeo</a> pour le référencement naturel SEO. L'acquisition payante et le SEO sont complémentaires : le premier apporte des résultats immédiats, le second construit une visibilité durable.
          </p>
        </div>
        <div class="flex flex-wrap gap-4 mt-8">
          <NuxtLink to="/agence-google-ads-poitiers" class="inline-flex items-center gap-2 border border-[#FF8C00]/20 text-[#FF8C00] font-semibold px-6 py-3 rounded-lg hover:bg-[#FF8C00]/5 transition-all">
            Agence Google Ads Poitiers
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </NuxtLink>
          <NuxtLink to="/blog" class="inline-flex items-center gap-2 border border-[#262626] text-[#a0a0a0] font-semibold px-6 py-3 rounded-lg hover:bg-[#1a1a1a] transition-all">
            Lire le blog
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-3xl">
        <div class="text-center mb-12">
          <span class="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
          <h2 class="font-heading font-extrabold text-3xl md:text-4xl mt-2">
            Questions fréquentes — Expert Google Ads Poitiers
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
          Confiez vos campagnes à un <span class="text-primary">expert certifié</span>
        </h2>
        <p class="text-white/60 text-lg mb-8 leading-relaxed">
          Audit gratuit de votre compte Google Ads ou étude de marché pour votre secteur à Poitiers. Réponse sous 48 h, sans engagement.
        </p>
        <NuxtLink to="/contact" class="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary/90 transition-all text-lg">
          Demander un audit gratuit
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
