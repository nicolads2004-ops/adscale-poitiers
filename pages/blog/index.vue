<script setup lang="ts">
useHead({
  title: 'Blog Google Ads — Conseils pour PME | AdScale Poitiers',
  meta: [
    { name: 'description', content: 'Conseils Google Ads pour PME locales : guides, astuces, études de cas. Par AdScale Poitiers, expert Vienne 86.' },
  ],
})

const posts = [
  {
    slug: 'combien-coute-google-ads-pme-poitiers-2026',
    title: 'Combien coûte Google Ads pour une PME à Poitiers en 2026 ?',
    excerpt: 'Budget minimum, coût par clic moyen, retour sur investissement attendu — tout ce qu\'il faut savoir avant de se lancer.',
    date: '18 mars 2026',
    readTime: '5 min',
    category: 'Guide',
    image: 'https://picsum.photos/seed/adscale1/800/400',
  },
  {
    slug: 'google-ads-vs-seo-levier-pme-locale',
    title: 'Google Ads vs SEO : quel levier pour une PME locale ?',
    excerpt: 'Deux stratégies complémentaires, mais laquelle prioriser quand on a un budget limité ? Analyse détaillée.',
    date: '15 mars 2026',
    readTime: '7 min',
    category: 'Stratégie',
    image: 'https://picsum.photos/seed/adscale2/800/400',
  },
  {
    slug: 'reduire-cout-par-lead-60-pourcent-google-ads',
    title: 'Comment réduire son coût par lead de 60% avec Google Ads',
    excerpt: 'Les 5 techniques d\'optimisation qui font la différence entre une campagne qui gaspille et une campagne qui performe.',
    date: '12 mars 2026',
    readTime: '6 min',
    category: 'Optimisation',
    image: 'https://picsum.photos/seed/adscale3/800/400',
  },
  {
    slug: '5-signes-agence-google-ads-mauvais-travail',
    title: '5 signes que votre agence Google Ads ne fait pas du bon travail',
    excerpt: 'Comment évaluer la qualité de votre prestataire actuel ? Les red flags à surveiller.',
    date: '10 mars 2026',
    readTime: '4 min',
    category: 'Conseil',
    image: 'https://picsum.photos/seed/adscale4/800/400',
  },
  {
    slug: 'google-ads-artisan-plombier-electricien-poitiers',
    title: 'Google Ads pour artisans à Poitiers : plombier, électricien, couvreur — guide complet',
    excerpt: 'Comment les artisans de la Vienne utilisent Google Ads pour remplir leur carnet de commandes toute l\'année.',
    date: '20 mars 2026',
    readTime: '6 min',
    category: 'Guide local',
    image: 'https://picsum.photos/seed/adscale5/800/400',
  },
  {
    slug: 'agence-google-ads-poitiers-vs-nationale',
    title: 'Pourquoi choisir une agence Google Ads locale à Poitiers plutôt qu\'une agence nationale ?',
    excerpt: 'Connaissance du marché local, réactivité, tarifs adaptés — les avantages concrets d\'une agence de proximité dans la Vienne.',
    date: '22 mars 2026',
    readTime: '5 min',
    category: 'Conseil',
    image: 'https://picsum.photos/seed/adscale6/800/400',
  },
  {
    slug: 'google-ads-commerce-local-poitiers-centre-ville',
    title: 'Google Ads pour les commerces du centre-ville de Poitiers : attirer des clients locaux en 2026',
    excerpt: 'Boutiques, restaurants, services — comment capter une clientèle de proximité avec Google Ads et Google Maps.',
    date: '24 mars 2026',
    readTime: '4 min',
    category: 'Local',
    image: 'https://picsum.photos/seed/adscale7/800/400',
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-neutral-900 text-white py-16 md:py-20 relative overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-1/3 -left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div class="relative container mx-auto px-4 max-w-7xl">
        <span class="text-sm font-semibold text-secondary uppercase tracking-wider">Blog</span>
        <h1 class="font-heading font-extrabold text-4xl md:text-5xl mt-3 mb-4">
          Conseils Google Ads pour
          <span class="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">PME locales</span>
        </h1>
        <p class="text-neutral-300 text-lg max-w-xl">
          Guides pratiques, études de cas et astuces pour tirer le maximum de vos campagnes publicitaires.
        </p>
      </div>
    </section>

    <!-- Posts Grid -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NuxtLink
            v-for="post in posts"
            :key="post.slug"
            :to="`/blog/${post.slug}`"
            class="group bg-white rounded-xl border border-neutral-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <!-- Image -->
            <div class="aspect-[16/9] overflow-hidden bg-neutral-100">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary">{{ post.category }}</span>
              </div>
              <div class="flex items-center gap-3 text-xs text-neutral-500 mb-3">
                <span>{{ post.date }}</span>
                <span>&middot;</span>
                <span>{{ post.readTime }} de lecture</span>
              </div>
              <h2 class="font-heading font-bold text-lg mb-2 text-neutral-900 group-hover:text-primary transition-colors">{{ post.title }}</h2>
              <p class="text-neutral-500 text-sm leading-relaxed">{{ post.excerpt }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
