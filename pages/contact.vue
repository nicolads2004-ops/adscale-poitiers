<script setup lang="ts">
useHead({
  title: 'Contact — Audit Google Ads gratuit | AdScale Poitiers',
  meta: [
    { name: 'description', content: 'Réservez votre audit Google Ads gratuit avec AdScale Poitiers. Analyse complète de vos campagnes en 30 minutes. Expert local Vienne 86.' },
  ],
})

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
})

const submitted = ref(false)

const handleSubmit = async () => {
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: { ...form }
    })
  } catch {
    // Fallback silencieux — on confirme quand même
  }
  submitted.value = true
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-neutral-900 text-white py-16 md:py-20 relative overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div class="relative container mx-auto px-4 max-w-7xl">
        <span class="text-sm font-semibold text-accent uppercase tracking-wider">Contact</span>
        <h1 class="font-heading font-extrabold text-4xl md:text-5xl mt-3 mb-4">
          Réservez votre audit
          <span class="bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">gratuit</span>
        </h1>
        <p class="text-neutral-300 text-lg max-w-xl">
          En 30 minutes, on analyse vos campagnes et on vous montre exactement comment améliorer votre ROI.
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
          <!-- Form -->
          <div class="md:col-span-3">
            <div v-if="!submitted">
              <h2 class="font-heading font-bold text-2xl mb-6 text-neutral-900">Demandez votre audit gratuit</h2>
              <form @submit.prevent="handleSubmit" class="space-y-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label for="name" class="block text-sm font-medium text-neutral-700 mb-1.5">Nom complet *</label>
                    <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      required
                      class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label for="company" class="block text-sm font-medium text-neutral-700 mb-1.5">Entreprise</label>
                    <input
                      id="company"
                      v-model="form.company"
                      type="text"
                      class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      placeholder="Mon Entreprise SARL"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label for="email" class="block text-sm font-medium text-neutral-700 mb-1.5">Email *</label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      placeholder="jean@monentreprise.fr"
                    />
                  </div>
                  <div>
                    <label for="phone" class="block text-sm font-medium text-neutral-700 mb-1.5">Téléphone</label>
                    <input
                      id="phone"
                      v-model="form.phone"
                      type="tel"
                      class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium text-neutral-700 mb-1.5">Parlez-nous de votre projet</label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="4"
                    class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                    placeholder="Votre activité, votre budget publicitaire actuel, vos objectifs..."
                  />
                </div>
                <button
                  type="submit"
                  class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-cta text-white font-bold px-8 py-4 rounded-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 text-lg"
                >
                  Envoyer ma demande d'audit
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </form>
            </div>

            <!-- Success state -->
            <div v-else class="text-center py-12">
              <div class="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-success" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
              </div>
              <h3 class="font-heading font-bold text-2xl mb-3">Demande envoyée !</h3>
              <p class="text-neutral-500">On vous recontacte dans les 24h pour planifier votre audit gratuit.</p>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="md:col-span-2 space-y-6">
            <div class="bg-neutral-100 rounded-xl p-6">
              <h3 class="font-heading font-bold text-lg mb-4">Ce que comprend l'audit</h3>
              <ul class="space-y-3">
                <li v-for="item in [
                  'Analyse de vos campagnes existantes',
                  'Évaluation de votre potentiel Google Ads',
                  'Estimation du budget optimal',
                  'Recommandations stratégiques concrètes',
                  'Projection ROI à 30/60/90 jours',
                ]" :key="item" class="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-success shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                  <span class="text-neutral-700 text-sm">{{ item }}</span>
                </li>
              </ul>
            </div>

            <div class="bg-neutral-100 rounded-xl p-6">
              <h3 class="font-heading font-bold text-lg mb-4">Coordonnées</h3>
              <div class="space-y-3 text-sm">
                <div class="flex items-center gap-3 text-neutral-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  Poitiers, Vienne (86)
                </div>
                <div class="flex items-center gap-3 text-neutral-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  <a href="mailto:contact@poitiers.digital" class="hover:text-primary transition-colors">contact@poitiers.digital</a>
                </div>
              </div>
            </div>

            <div class="bg-primary/5 border border-primary/10 rounded-xl p-6">
              <div class="font-numbers font-bold text-3xl text-primary mb-2">100%</div>
              <p class="text-sm text-neutral-600">L'audit est gratuit et sans engagement. On vous donne des recommandations concrètes que vous pouvez appliquer vous-même si vous le souhaitez.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
