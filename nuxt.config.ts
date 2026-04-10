export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts'],

  // SWR — cache Vercel 60s
  routeRules: {
    '/api/**': { swr: false, cache: false },
    '/**': { swr: 60 },
  },

  // Nitro — compression et minification
  nitro: {
    compressPublicAssets: true,
    minify: true,
  },

  // Experimental — payload extraction et JSON payloads
  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
  },

  // @nuxt/fonts — Inter géré localement, pas de requête Google Fonts bloquante
  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700] },
    ],
    defaults: {
      preload: true,
      fontDisplay: 'optional',
      fallbacks: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    configPath: 'tailwind.config.ts',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'fr', style: 'overflow-x:hidden' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Agence Google Ads Poitiers — Expert PME locales, Vienne 86 | AdScale',
      meta: [
        { name: 'description', content: 'Agence Google Ads à Poitiers spécialisée PME locales. Audit gratuit de vos campagnes en 30 minutes. Gestion complète : Search, Display, Shopping, Performance Max. Expert certifié Vienne 86.' },
        { property: 'og:title', content: 'Agence Google Ads Poitiers — Expert PME locales' },
        { property: 'og:description', content: 'Vos clients vous cherchent sur Google. On les amène chez vous. Audit gratuit pour les PME de la Vienne.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:site_name', content: 'AdScale Poitiers' },
        { property: 'og:image', content: 'https://adscale.poitiers.digital/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:url', content: 'https://adscale.poitiers.digital/' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://adscale.poitiers.digital/og-image.jpg' },
        { name: 'twitter:title', content: 'AdScale Poitiers — Expert Google Ads PME locales' },
        { name: 'twitter:description', content: 'Agence Google Ads à Poitiers spécialisée PME locales. Audit gratuit de vos campagnes en 30 minutes. Gestion complète : Search, Display, Shopping, Performance Max. Expert certifié Vienne 86.' },
        { name: 'geo.region', content: 'FR-86' },
        { name: 'geo.placename', content: 'Poitiers' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['LocalBusiness', 'ProfessionalService'],
            name: 'AdScale Poitiers',
            description: 'Agence Google Ads à Poitiers spécialisée PME locales. Audit gratuit de vos campagnes en 30 minutes. Gestion complète : Search, Display, Shopping, Performance Max. Expert certifié Vienne 86.',
            url: 'https://adscale.poitiers.digital/',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Poitiers',
              addressRegion: 'Vienne',
              postalCode: '86000',
              addressCountry: 'FR',
            },
            areaServed: [
              { '@type': 'City', name: 'Poitiers' },
              { '@type': 'City', name: 'Châtellerault' },
              { '@type': 'City', name: 'Niort' },
              { '@type': 'AdministrativeArea', name: 'Vienne 86' },
            ],
          }),
        },
      ],
    },
  },
})
