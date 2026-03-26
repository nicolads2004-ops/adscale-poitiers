<script setup lang="ts">
useHead({
  title: 'À propos — AdScale Poitiers | Expert Google Ads local Vienne 86',
  meta: [
    { name: 'description', content: 'AdScale Poitiers : expert Google Ads local pour les PME de la Vienne. Gestion augmentée par l\'IA, résultats prouvés, transparence totale.' },
  ],
})

const values = [
  {
    icon: 'M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z',
    title: 'Performance mesurable',
    desc: 'Chaque euro investi est justifié par des résultats concrets. Pas de vanity metrics — uniquement ce qui compte pour votre business.',
  },
  {
    icon: 'M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'Transparence totale',
    desc: 'Rapports clairs, dashboards accessibles, pas de jargon. Vous voyez exactement où va chaque euro et ce qu\'il vous rapporte.',
  },
  {
    icon: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z',
    title: 'Proximité locale',
    desc: 'Basés à Poitiers, on connaît le tissu économique de la Vienne. On comprend vos clients parce qu\'on vit ici aussi.',
  },
  {
    icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z',
    title: 'Innovation pragmatique',
    desc: 'On utilise l\'IA et les dernières technologies Google pour optimiser vos campagnes, pas pour faire du buzzword.',
  },
]

const advantages = [
  { us: 'Expert Google Ads dédié', them: 'Ads = 1 service parmi 10' },
  { us: 'Bundles Google + Meta + TikTok', them: 'Un seul canal' },
  { us: 'Tracking avancé GA4 + GTM', them: 'Tracking basique' },
  { us: 'Rapport mensuel actionnable', them: 'Rapports génériques' },
  { us: 'Gestion augmentée par l\'IA', them: 'Gestion manuelle uniquement' },
  { us: 'Prix accessibles PME', them: 'Tarifs agence premium' },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-neutral-900 text-white py-16 md:py-24 relative overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-3xl" />
      </div>
      <div class="relative container mx-auto px-4 max-w-7xl">
        <span class="text-sm font-semibold text-accent uppercase tracking-wider">À propos</span>
        <h1 class="font-heading font-extrabold text-4xl md:text-5xl mt-3 mb-6 max-w-3xl">
          L'expertise Google Ads
          <span class="bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">augmentée par l'IA</span>
        </h1>
        <p class="text-neutral-300 text-lg max-w-2xl">
          On croit que chaque PME mérite des campagnes aussi performantes que celles des grandes entreprises — sans le budget d'une grande entreprise.
        </p>
      </div>
    </section>

    <!-- Story -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-4xl">
        <div class="prose prose-lg max-w-none">
          <h2 class="font-heading font-extrabold text-3xl mb-6 text-neutral-900">Notre histoire</h2>
          <p class="text-neutral-600 leading-relaxed mb-4">
            AdScale est né d'un constat simple : les PME de Poitiers et de la Vienne paient trop cher pour des campagnes Google Ads qui ne rapportent pas assez.
          </p>
          <p class="text-neutral-600 leading-relaxed mb-4">
            D'un côté, des agences nationales facturent des fortunes pour un service standardisé. De l'autre, des freelances débordés qui ne peuvent pas suivre. Entre les deux ? Rien.
          </p>
          <p class="text-neutral-600 leading-relaxed mb-4">
            On a décidé de combler ce vide. Notre approche combine l'expertise humaine pointue en Google Ads avec la puissance de l'intelligence artificielle pour offrir aux PME locales une qualité de gestion habituellement réservée aux grands comptes — à des tarifs qui respectent votre budget.
          </p>
          <p class="text-neutral-700 font-semibold leading-relaxed">
            Le résultat ? Des campagnes qui coûtent moins et rapportent plus. C'est aussi simple que ça.
          </p>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="bg-neutral-100 py-16 md:py-24" aria-labelledby="values-heading">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-12">
          <h2 id="values-heading" class="font-heading font-extrabold text-3xl md:text-4xl">Nos valeurs</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="v in values" :key="v.title" class="bg-white rounded-xl p-6 border border-neutral-200">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" :d="v.icon" /></svg>
            </div>
            <h3 class="font-heading font-bold text-lg mb-2">{{ v.title }}</h3>
            <p class="text-neutral-500 text-sm leading-relaxed">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison -->
    <section class="py-16 md:py-24" aria-labelledby="comparison-heading">
      <div class="container mx-auto px-4 max-w-3xl">
        <div class="text-center mb-12">
          <h2 id="comparison-heading" class="font-heading font-extrabold text-3xl md:text-4xl">Pourquoi nous choisir</h2>
          <p class="text-neutral-500 mt-3">Ce qui nous différencie des autres prestataires</p>
        </div>
        <div class="rounded-xl overflow-hidden border border-neutral-200">
          <div class="grid grid-cols-3 bg-neutral-900 text-white text-sm font-semibold">
            <div class="px-4 py-3">Critère</div>
            <div class="px-4 py-3 text-center bg-primary">AdScale</div>
            <div class="px-4 py-3 text-center">Les autres</div>
          </div>
          <div v-for="(a, i) in advantages" :key="i" class="grid grid-cols-3 text-sm" :class="i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'">
            <div class="px-4 py-3 font-medium text-neutral-700">{{ a.us }}</div>
            <div class="px-4 py-3 text-center text-success font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
            </div>
            <div class="px-4 py-3 text-center text-neutral-400">
              <span>{{ a.them }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
