<script setup lang="ts">
const stats = [
  { value: '-60%', label: 'Coût par lead', suffix: 'en moyenne' },
  { value: '30', label: 'Jours', suffix: 'pour voir des résultats' },
  { value: '100%', label: 'Transparent', suffix: 'rapports clairs' },
]

const services = [
  {
    icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z',
    title: 'Google Ads Search',
    desc: 'Apparaissez en haut de Google quand vos clients recherchent vos services à Poitiers et alentours.',
  },
  {
    icon: 'M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z',
    title: 'Google Display',
    desc: 'Vos bannières sur les sites que visitent vos prospects. Notoriété + retargeting pour rester en tête.',
  },
  {
    icon: 'M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z',
    title: 'Google Shopping',
    desc: 'Vos produits directement dans les résultats Google. Idéal pour les e-commerçants locaux.',
  },
  {
    icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    title: 'Performance Max',
    desc: 'L\'IA de Google au service de votre business. Campagnes multi-canaux optimisées automatiquement.',
  },
  {
    icon: 'M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3',
    title: 'Remarketing',
    desc: 'Relancez les visiteurs de votre site qui n\'ont pas converti. Jusqu\'à 70% de conversions en plus.',
  },
  {
    icon: 'M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z',
    title: 'Tracking & Analytics',
    desc: 'GA4, GTM, suivi des conversions. Mesurez chaque euro investi avec précision.',
  },
]

const steps = [
  { num: '01', title: 'Audit gratuit', desc: 'On analyse vos campagnes actuelles (ou votre potentiel) et on identifie les opportunités.' },
  { num: '02', title: 'Stratégie sur-mesure', desc: 'Plan d\'action personnalisé avec objectifs chiffrés, budget recommandé et timeline.' },
  { num: '03', title: 'Résultats mesurables', desc: 'Lancement, optimisation continue et rapports clairs. Vous voyez exactement où va chaque euro.' },
]

const faqs = [
  {
    q: 'Combien coûte Google Ads pour une PME à Poitiers ?',
    a: 'Le budget dépend de votre secteur et de vos objectifs. On voit des PME obtenir d\'excellents résultats avec 500€ à 2 000€/mois de budget publicitaire. L\'audit gratuit vous donne une estimation précise.',
  },
  {
    q: 'En combien de temps voit-on des résultats ?',
    a: 'Les premières conversions arrivent généralement dans les 2 premières semaines. L\'optimisation complète se fait sur 30 à 90 jours pour atteindre le meilleur ROI possible.',
  },
  {
    q: 'Quelle différence avec le SEO ?',
    a: 'Le SEO prend 6 à 12 mois pour des résultats. Google Ads génère des appels et demandes de devis dès le premier jour. L\'idéal est de combiner les deux.',
  },
  {
    q: 'Je n\'ai jamais fait de publicité en ligne, c\'est pour moi ?',
    a: 'Absolument. On gère tout de A à Z : création du compte, rédaction des annonces, ciblage, suivi. Vous n\'avez besoin d\'aucune compétence technique.',
  },
  {
    q: 'Comment je sais si mes campagnes fonctionnent ?',
    a: 'Vous recevez un rapport clair chaque mois : nombre d\'appels, de demandes de devis, coût par contact, retour sur investissement. Tout est mesurable et transparent.',
  },
]

useHead({
  title: 'Agence Google Ads Poitiers — Expert PME locales, Vienne 86 | AdScale',
  meta: [
    { name: 'description', content: 'Agence Google Ads à Poitiers spécialisée PME locales. Audit gratuit de vos campagnes en 30 minutes. Gestion complète : Search, Display, Shopping, Performance Max. Expert certifié Vienne 86.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://adscale.poitiers.digital/', key: 'canonical' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      }),
    },
  ],
})

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }

// Scroll reveal
onMounted(() => {
  const els = document.querySelectorAll('[data-reveal]')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )
  els.forEach((el) => observer.observe(el))
})
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="relative overflow-hidden" style="background: #0a0a0a;">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-[#FF8C00]/10 blur-3xl" />
        <div class="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-[#FF8C00]/5 blur-3xl" />
        <!-- Grid pattern -->
        <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px); background-size: 60px 60px;" />
      </div>

      <div class="relative container mx-auto px-4 max-w-7xl py-20 md:py-32">
        <div class="max-w-3xl">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 bg-[#1a1a1a] backdrop-blur-sm border border-[#333] rounded-full px-4 py-1.5 mb-6">
            <div class="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
            <span class="text-sm font-medium text-[#a0a0a0]">Expert Google Ads — Poitiers, Vienne 86</span>
          </div>

          <h1 data-reveal class="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-[#fafafa]">
            Agence Google Ads à Poitiers.
            <span class="bg-gradient-to-r from-[#FF8C00] to-[#FFA500] bg-clip-text text-transparent">
              On les amène chez vous.
            </span>
          </h1>

          <p class="text-lg md:text-xl text-[#a0a0a0] mb-8 max-w-2xl leading-relaxed">
            Campagnes Google Ads gérées par un expert local, optimisées par l'IA. Plus de clients, moins de gaspillage — résultats dès 30 jours.
          </p>

          <div data-reveal class="flex flex-col sm:flex-row gap-4">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center gap-2 bg-[#FF8C00] hover:bg-[#E07B00] text-[#0a0a0a] font-bold px-8 py-4 rounded-lg hover:shadow-xl hover:shadow-[#FF8C00]/30 transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 will-change-transform text-lg"
            >
              Demandez votre audit gratuit
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </NuxtLink>
            <NuxtLink
              to="/services"
              class="inline-flex items-center justify-center gap-2 border border-[#333] text-[#fafafa] font-semibold px-8 py-4 rounded-lg hover:bg-[#1a1a1a] transition-colors duration-300"
            >
              Découvrir nos services
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="bg-[#141414] border-b border-[#333]">
      <div class="container mx-auto px-4 max-w-7xl py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="font-numbers font-bold text-4xl md:text-5xl text-[#FF8C00] mb-2">{{ stat.value }}</div>
            <div class="font-heading font-semibold text-[#fafafa] mb-1">{{ stat.label }}</div>
            <div class="text-sm text-[#a0a0a0]">{{ stat.suffix }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section class="bg-[#141414] py-16 md:py-24" aria-labelledby="services-heading">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-12 md:mb-16">
          <span class="text-sm font-semibold text-[#FF8C00] uppercase tracking-wider">Nos services</span>
          <h2 id="services-heading" class="font-heading font-extrabold text-3xl md:text-4xl mt-2 mb-4 text-[#fafafa]">
            Tout ce qu'il faut pour dominer Google
          </h2>
          <p class="text-[#a0a0a0] max-w-2xl mx-auto">
            De la recherche au display, du shopping au remarketing — on couvre tous les leviers Google Ads pour maximiser votre ROI.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="service in services"
            :key="service.title"
            class="rounded-xl p-6 transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-1 will-change-transform group border border-[#333] hover:border-[#FF8C00]/25"
            style="background: #1a1a1a;"
          >
            <div class="w-12 h-12 rounded-lg bg-[#FF8C00]/10 flex items-center justify-center mb-4 group-hover:bg-[#FF8C00] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#FF8C00] group-hover:text-[#0a0a0a] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" :d="service.icon" /></svg>
            </div>
            <h3 class="font-heading font-bold text-lg mb-2 text-[#fafafa]">{{ service.title }}</h3>
            <p class="text-[#a0a0a0] text-sm leading-relaxed">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="py-16 md:py-24" style="background: #0a0a0a;" aria-labelledby="process-heading">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-12 md:mb-16">
          <span class="text-sm font-semibold text-[#FF8C00] uppercase tracking-wider">Comment ça marche</span>
          <h2 id="process-heading" class="font-heading font-extrabold text-3xl md:text-4xl mt-2 text-[#fafafa]">
            3 étapes vers plus de clients
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="step in steps" :key="step.num" class="relative">
            <div class="font-numbers font-bold text-6xl text-[#FF8C00]/10 mb-4">{{ step.num }}</div>
            <h3 class="font-heading font-bold text-xl mb-3 text-[#fafafa]">{{ step.title }}</h3>
            <p class="text-[#a0a0a0] leading-relaxed">{{ step.desc }}</p>
            <!-- Connector line -->
            <div v-if="step.num !== '03'" class="hidden md:block absolute top-8 -right-4 w-8 border-t-2 border-dashed border-[#FF8C00]/20" />
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 bg-[#FF8C00] hover:bg-[#E07B00] text-[#0a0a0a] font-bold px-8 py-4 rounded-lg hover:shadow-xl hover:shadow-[#FF8C00]/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Commencer par l'audit gratuit
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="bg-[#141414] py-16 md:py-24" aria-labelledby="testimonials-heading">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-12">
          <span class="text-sm font-semibold text-[#FF8C00] uppercase tracking-wider">Témoignages</span>
          <h2 id="testimonials-heading" class="font-heading font-extrabold text-3xl md:text-4xl mt-2 text-[#fafafa]">
            Ce que disent nos clients
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="rounded-xl p-6 bg-[#1a1a1a] border border-[#333]">
            <div class="flex gap-1 mb-4">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#FF8C00]" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            </div>
            <p class="text-[#a0a0a0] text-sm leading-relaxed mb-4">
              "Avant AdScale, je dépensais 800€/mois sans savoir si ça marchait. Maintenant je reçois 15 appels qualifiés par semaine pour mon entreprise de plomberie."
            </p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full gradient-brand flex items-center justify-center text-[#0a0a0a] font-bold text-sm">JP</div>
              <div>
                <div class="font-semibold text-sm text-[#fafafa]">Jean-Pierre M.</div>
                <div class="text-xs text-[#737373]">Plombier — Poitiers</div>
              </div>
            </div>
          </div>

          <div class="rounded-xl p-6 bg-[#1a1a1a] border border-[#333]">
            <div class="flex gap-1 mb-4">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#FF8C00]" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            </div>
            <p class="text-[#a0a0a0] text-sm leading-relaxed mb-4">
              "Mon coût par devis est passé de 85€ à 32€ en 6 semaines. Le rapport mensuel est super clair, je vois exactement ce que chaque euro me rapporte."
            </p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full gradient-brand flex items-center justify-center text-[#0a0a0a] font-bold text-sm">SL</div>
              <div>
                <div class="font-semibold text-sm text-[#fafafa]">Sophie L.</div>
                <div class="text-xs text-[#737373]">Architecte d'intérieur — Châtellerault</div>
              </div>
            </div>
          </div>

          <div class="rounded-xl p-6 bg-[#1a1a1a] border border-[#333]">
            <div class="flex gap-1 mb-4">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#FF8C00]" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            </div>
            <p class="text-[#a0a0a0] text-sm leading-relaxed mb-4">
              "On a lancé notre boutique en ligne il y a 3 mois. Grâce aux campagnes Shopping d'AdScale, on fait 40 commandes par semaine maintenant."
            </p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full gradient-brand flex items-center justify-center text-[#0a0a0a] font-bold text-sm">MR</div>
              <div>
                <div class="font-semibold text-sm text-[#fafafa]">Marc R.</div>
                <div class="text-xs text-[#737373]">E-commerce artisanal — Poitiers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 md:py-24" style="background: #0a0a0a;" aria-labelledby="faq-heading">
      <div class="container mx-auto px-4 max-w-3xl">
        <div class="text-center mb-12">
          <span class="text-sm font-semibold text-[#FF8C00] uppercase tracking-wider">FAQ</span>
          <h2 id="faq-heading" class="font-heading font-extrabold text-3xl md:text-4xl mt-2 text-[#fafafa]">
            Questions fréquentes
          </h2>
        </div>

        <div class="space-y-3">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="rounded-xl overflow-hidden transition-all duration-200"
            :class="openFaq === i ? 'bg-[#FF8C00]/5 border border-[#FF8C00]/20' : 'border border-[#333] bg-[#141414]'"
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
  </div>
</template>
