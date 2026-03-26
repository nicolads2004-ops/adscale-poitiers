<script setup lang="ts">
const route = useRoute()

useHead({
  title: 'Article — Blog AdScale Poitiers',
})
</script>

<template>
  <div>
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-3xl">
        <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-primary text-sm font-medium mb-8 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
          Retour au blog
        </NuxtLink>

        <article>
          <header class="mb-10">
            <span class="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary">Guide</span>
            <h1 class="font-heading font-extrabold text-3xl md:text-4xl mt-4 mb-4 text-neutral-900">
              Combien coûte Google Ads pour une PME à Poitiers en 2026 ?
            </h1>
            <div class="flex items-center gap-3 text-sm text-neutral-500">
              <span>18 mars 2026</span>
              <span>&middot;</span>
              <span>5 min de lecture</span>
            </div>
          </header>

          <div class="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-primary">
            <p>Si vous êtes gérant d'une PME à Poitiers et que vous envisagez Google Ads, la première question est toujours la même : <strong>combien ça va me coûter ?</strong></p>

            <h2>Le budget publicitaire minimum</h2>
            <p>Pour une PME locale dans la Vienne, un budget publicitaire de <strong>500€ à 1 500€ par mois</strong> est un bon point de départ. Ce budget couvre les clics sur vos annonces — c'est ce que vous payez directement à Google.</p>
            <p>Le montant exact dépend de votre secteur :</p>
            <ul>
              <li><strong>Artisans BTP</strong> (plombier, électricien, couvreur) : CPC moyen de 3€ à 8€</li>
              <li><strong>Professions libérales</strong> (avocat, comptable) : CPC moyen de 5€ à 15€</li>
              <li><strong>Commerces locaux</strong> (restaurant, boutique) : CPC moyen de 1€ à 4€</li>
              <li><strong>Services B2B</strong> : CPC moyen de 4€ à 12€</li>
            </ul>

            <h2>Le coût de la gestion</h2>
            <p>Au budget publicitaire s'ajoute le coût de gestion de vos campagnes. C'est le travail de création, d'optimisation et de suivi. Les options :</p>
            <ul>
              <li><strong>Le faire soi-même</strong> : gratuit mais chronophage et risqué sans expertise</li>
              <li><strong>Un freelance</strong> : 300€ à 800€/mois</li>
              <li><strong>Une agence locale</strong> : variable selon le prestataire et le niveau de service</li>
            </ul>

            <h2>Le retour sur investissement attendu</h2>
            <p>C'est la seule métrique qui compte vraiment. Un bon prestataire Google Ads devrait vous générer un retour de <strong>3€ à 10€ pour chaque euro investi</strong> (ROAS de 3x à 10x).</p>
            <p>Concrètement, pour un artisan plombier à Poitiers avec un budget de 800€/mois :</p>
            <ul>
              <li>Coût par lead estimé : 25€ à 40€</li>
              <li>Nombre de leads/mois : 20 à 32</li>
              <li>Taux de conversion lead → client : 25% à 40%</li>
              <li>Nouveaux clients/mois : 5 à 13</li>
              <li>Si panier moyen = 300€ → <strong>1 500€ à 3 900€ de CA généré</strong></li>
            </ul>

            <h2>Comment réduire les coûts</h2>
            <p>Les 3 leviers principaux pour optimiser votre budget :</p>
            <ol>
              <li><strong>Ciblage géographique précis</strong> : ne payez que pour les clics de prospects dans votre zone</li>
              <li><strong>Mots-clés négatifs</strong> : bloquez les recherches non pertinentes qui gaspillent du budget</li>
              <li><strong>Optimisation des annonces</strong> : de meilleures annonces = un meilleur Quality Score = des clics moins chers</li>
            </ol>

            <h2>Prochaine étape</h2>
            <p>Chaque business est différent. La meilleure façon de connaître votre budget optimal est de faire un audit personnalisé de votre situation.</p>
          </div>

          <!-- CTA -->
          <div class="mt-12 bg-gradient-brand rounded-xl p-8 text-center text-white">
            <h3 class="font-heading font-bold text-xl mb-3">Vous voulez connaître votre budget optimal ?</h3>
            <p class="text-white/80 mb-6">Réservez votre audit gratuit — on calcule ensemble le budget et le ROI attendu pour votre activité.</p>
            <NuxtLink to="/contact" class="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-lg hover:shadow-lg transition-all">
              Demander mon audit gratuit
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </NuxtLink>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
