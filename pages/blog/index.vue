<script setup lang="ts">
useHead({
  title: 'Blog Google Ads — Conseils pour PME | AdScale Poitiers',
  meta: [
    { name: 'description', content: 'Conseils Google Ads pour PME locales : guides, astuces, études de cas. Par AdScale Poitiers, expert Vienne 86.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://adscale.poitiers.digital/blog', key: 'canonical' },
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
    image: '/images/blog/blog-adscale-artisans.png',
  },
  {
    slug: 'google-ads-artisan-plombier-electricien-poitiers',
    title: 'Google Ads pour artisans à Poitiers : plombier, électricien, couvreur — guide complet',
    excerpt: 'Comment les artisans de la Vienne utilisent Google Ads pour remplir leur carnet de commandes toute l\'année.',
    date: '20 mars 2026',
    readTime: '6 min',
    category: 'Guide local',
    image: '/images/blog/blog-adscale-artisans.png',
  },
  {
    slug: 'agence-google-ads-poitiers-vs-nationale',
    title: 'Pourquoi choisir une agence Google Ads locale à Poitiers plutôt qu\'une agence nationale ?',
    excerpt: 'Connaissance du marché local, réactivité, tarifs adaptés — les avantages concrets d\'une agence de proximité dans la Vienne.',
    date: '22 mars 2026',
    readTime: '5 min',
    category: 'Conseil',
    image: '/images/blog/blog-adscale-locale-nationale.png',
  },
  {
    slug: 'google-ads-commerce-local-poitiers-centre-ville',
    title: 'Google Ads pour les commerces du centre-ville de Poitiers : attirer des clients locaux en 2026',
    excerpt: 'Boutiques, restaurants, services — comment capter une clientèle de proximité avec Google Ads et Google Maps.',
    date: '24 mars 2026',
    readTime: '4 min',
    category: 'Local',
    image: '/images/blog/blog-adscale-commerce-local.png',
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
    <section class="py-16 md:py-24" style="background-color: #050508;">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NuxtLink
            v-for="post in posts"
            :key="post.slug"
            :to="`/blog/${post.slug}`"
            class="group bg-white/[0.03] rounded-xl border border-white/[0.06] hover:border-[#4285f4]/30 hover:bg-white/[0.05] transition-all duration-300 overflow-hidden"
          >
            <!-- Image -->
            <div class="aspect-[16/9] overflow-hidden bg-white/[0.02]">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#4285f4]/15 text-[#4285f4] border border-[#4285f4]/25">{{ post.category }}</span>
              </div>
              <div class="flex items-center gap-3 text-xs text-slate-500 mb-3">
                <span>{{ post.date }}</span>
                <span>&middot;</span>
                <span>{{ post.readTime }} de lecture</span>
              </div>
              <h2 class="font-heading font-bold text-lg mb-2 text-white group-hover:text-[#4285f4] transition-colors">{{ post.title }}</h2>
              <p class="text-slate-400 text-sm leading-relaxed">{{ post.excerpt }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
