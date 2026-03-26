export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],

  // ISR — cache Vercel
  routeRules: {
    '/**': { isr: true },
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

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'AdScale Poitiers — Expert Google Ads pour PME locales | Vienne 86',
      meta: [
        { name: 'description', content: 'Agence Google Ads à Poitiers spécialisée PME locales. Réduisez votre coût par lead de 60% en 30 jours. Audit gratuit. Expert certifié Vienne 86.' },
        { property: 'og:title', content: 'AdScale Poitiers — Expert Google Ads PME locales' },
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
        { name: 'twitter:description', content: 'Agence Google Ads à Poitiers spécialisée PME locales. Réduisez votre coût par lead de 60% en 30 jours. Audit gratuit. Expert certifié Vienne 86.' },
        { name: 'geo.region', content: 'FR-86' },
        { name: 'geo.placename', content: 'Poitiers' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: 'https://adscale.poitiers.digital/' },
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['LocalBusiness', 'ProfessionalService'],
            name: 'AdScale Poitiers',
            description: 'Agence Google Ads à Poitiers spécialisée PME locales. Réduisez votre coût par lead de 60% en 30 jours. Audit gratuit. Expert certifié Vienne 86.',
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
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700, 800],
      'Space Grotesk': [500, 700],
    },
    display: 'swap',
    preload: true,
  },
  tailwindcss: {
    configPath: 'tailwind.config.ts',
  },
})
