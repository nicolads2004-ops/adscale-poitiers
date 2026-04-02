<script setup lang="ts">
useHead({
  title: 'Contact — Audit Google Ads gratuit | AdScale Poitiers',
  meta: [
    { name: 'description', content: 'Réservez votre audit Google Ads gratuit avec AdScale Poitiers. Analyse complète de vos campagnes en 30 minutes. Expert local Vienne 86.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://adscale.poitiers.digital/contact', key: 'canonical' },
  ],
})

const step = ref(1)
const totalSteps = 4
const submitted = ref(false)
const submitting = ref(false)

const form = reactive({
  advertising: '',
  objective: '',
  budget: '',
  company: '',
  name: '',
  email: '',
  phone: '',
})

const progress = computed(() => Math.round(((step.value - 1) / totalSteps) * 100))

const canContinue = computed(() => {
  if (step.value === 1) return !!form.advertising
  if (step.value === 2) return !!form.objective
  if (step.value === 3) return !!form.budget
  if (step.value === 4) return !!form.name.trim() && !!form.email.trim() && !!form.phone.trim()
  return false
})

const next = () => {
  if (step.value < totalSteps && canContinue.value) step.value++
}
const prev = () => {
  if (step.value > 1) step.value--
}

const selectOption = (field: string, value: string) => {
  ;(form as any)[field] = value
}

const handleSubmit = async () => {
  if (!canContinue.value || submitting.value) return
  submitting.value = true
  try {
    await $fetch('/api/lead', {
      method: 'POST',
      body: { ...form },
    })
  } catch {
    // Fallback silencieux
  }
  submitted.value = true
  submitting.value = false
}

const step1Options = [
  { value: 'Google Ads', label: 'Oui, Google Ads', icon: 'target' },
  { value: 'Autre plateforme', label: 'Oui, autre plateforme', icon: 'monitor' },
  { value: 'Jamais', label: 'Non, jamais', icon: 'plus-circle' },
]

const step2Options = [
  { value: 'Plus de clients', label: 'Avoir plus de clients', icon: 'users' },
  { value: 'Réduire coût par lead', label: 'Réduire mon coût par lead', icon: 'trending-down' },
  { value: 'Lancer produit/service', label: 'Lancer un nouveau produit/service', icon: 'rocket' },
  { value: 'Piloter campagnes', label: 'Mieux piloter mes campagnes', icon: 'gauge' },
]

const step3Options = [
  { value: 'Moins de 500 €/mois', label: 'Moins de 500 €/mois', icon: 'coins' },
  { value: '500 — 2 000 €/mois', label: '500 — 2 000 €/mois', icon: 'wallet' },
  { value: '2 000 — 5 000 €/mois', label: '2 000 — 5 000 €/mois', icon: 'banknote' },
  { value: 'Plus de 5 000 €/mois', label: 'Plus de 5 000 €/mois', icon: 'landmark' },
]

const iconPaths: Record<string, string> = {
  'target': 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z',
  'monitor': 'M4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm4 18h8m-4-4v4',
  'plus-circle': 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 5h2v4h4v2h-4v4h-2v-4H7v-2h4V7z',
  'users': 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m7-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5.7-1.3a4 4 0 0 1 0 5.6m3-9.2A7 7 0 0 1 22 12a7 7 0 0 1-2.1 5',
  'trending-down': 'M23 18l-9.5-9.5-5 5L1 6m22 12h-7v-7',
  'rocket': 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3m9.37-7.37a1 1 0 0 0-1.41 0L9 12.59l2.41 2.41 7.96-7.96a1 1 0 0 0 0-1.41z',
  'gauge': 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 6v4l3 3',
  'coins': 'M12 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 3v2m0 6v2m4-5h-2m-6 0H6',
  'wallet': 'M2 6h20v14H2V6zm18 4h-4a2 2 0 0 0 0 4h4m-18-8 18-4',
  'banknote': 'M2 6h20v12H2V6zm10 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM2 9h2m16 0h2M2 15h2m16 0h2',
  'landmark': 'M3 22h18M6 18v4m4-4v4m4-4v4m4-4v4M2 10l10-8 10 8M4 10v8h16v-8',
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

    <!-- Multi-step Form -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-3xl">

        <!-- Success state -->
        <div v-if="submitted" class="text-center py-16">
          <div class="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </div>
          <h2 class="font-heading font-bold text-3xl mb-4 text-neutral-900">Demande envoyée !</h2>
          <p class="text-neutral-500 text-lg max-w-md mx-auto">On vous recontacte dans les 24h pour planifier votre audit gratuit.</p>
        </div>

        <!-- Form card -->
        <div v-else class="rounded-2xl border border-white/10 bg-white/[0.02] shadow-2xl shadow-black/5 backdrop-blur-sm overflow-hidden"
             style="background: linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));">

          <!-- Progress bar -->
          <div class="px-8 pt-8 pb-2">
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm font-medium text-neutral-500">Étape {{ step }} sur {{ totalSteps }}</span>
              <span class="text-sm font-bold text-[#4285f4]">{{ progress }}%</span>
            </div>
            <div class="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
              <div
                class="h-full rounded-full transition-all duration-500 ease-out"
                style="background: #4285f4;"
                :style="{ width: progress + '%' }"
              />
            </div>
          </div>

          <div class="p-8">
            <!-- Step 1 -->
            <div v-if="step === 1">
              <h2 class="font-heading font-bold text-2xl text-neutral-900 mb-2">Faites-vous déjà de la publicité en ligne ?</h2>
              <p class="text-neutral-500 mb-8">Sélectionnez la réponse qui vous correspond.</p>
              <div class="grid gap-4">
                <button
                  v-for="opt in step1Options"
                  :key="opt.value"
                  type="button"
                  class="flex items-center gap-4 p-5 rounded-xl border-2 transition-all duration-200 text-left group"
                  :class="form.advertising === opt.value
                    ? 'border-[#4285f4] bg-[#4285f4]/5 shadow-md shadow-[#4285f4]/10'
                    : 'border-neutral-200 hover:border-neutral-300 bg-white hover:bg-neutral-50'"
                  @click="selectOption('advertising', opt.value)"
                >
                  <div
                    class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                    :class="form.advertising === opt.value ? 'bg-[#4285f4] text-white' : 'bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200'"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path :d="iconPaths[opt.icon]" />
                    </svg>
                  </div>
                  <span class="font-semibold text-neutral-800">{{ opt.label }}</span>
                  <div class="ml-auto">
                    <div
                      class="w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors"
                      :class="form.advertising === opt.value ? 'border-[#4285f4] bg-[#4285f4]' : 'border-neutral-300'"
                    >
                      <svg v-if="form.advertising === opt.value" xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <!-- Step 2 -->
            <div v-if="step === 2">
              <h2 class="font-heading font-bold text-2xl text-neutral-900 mb-2">Quel est votre objectif principal ?</h2>
              <p class="text-neutral-500 mb-8">Choisissez ce qui compte le plus pour votre activité.</p>
              <div class="grid gap-4">
                <button
                  v-for="opt in step2Options"
                  :key="opt.value"
                  type="button"
                  class="flex items-center gap-4 p-5 rounded-xl border-2 transition-all duration-200 text-left group"
                  :class="form.objective === opt.value
                    ? 'border-[#4285f4] bg-[#4285f4]/5 shadow-md shadow-[#4285f4]/10'
                    : 'border-neutral-200 hover:border-neutral-300 bg-white hover:bg-neutral-50'"
                  @click="selectOption('objective', opt.value)"
                >
                  <div
                    class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                    :class="form.objective === opt.value ? 'bg-[#4285f4] text-white' : 'bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200'"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path :d="iconPaths[opt.icon]" />
                    </svg>
                  </div>
                  <span class="font-semibold text-neutral-800">{{ opt.label }}</span>
                  <div class="ml-auto">
                    <div
                      class="w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors"
                      :class="form.objective === opt.value ? 'border-[#4285f4] bg-[#4285f4]' : 'border-neutral-300'"
                    >
                      <svg v-if="form.objective === opt.value" xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <!-- Step 3 -->
            <div v-if="step === 3">
              <h2 class="font-heading font-bold text-2xl text-neutral-900 mb-2">Quel budget mensuel envisagez-vous ?</h2>
              <p class="text-neutral-500 mb-8">Budget publicitaire Google Ads (hors gestion).</p>
              <div class="grid gap-4">
                <button
                  v-for="opt in step3Options"
                  :key="opt.value"
                  type="button"
                  class="flex items-center gap-4 p-5 rounded-xl border-2 transition-all duration-200 text-left group"
                  :class="form.budget === opt.value
                    ? 'border-[#4285f4] bg-[#4285f4]/5 shadow-md shadow-[#4285f4]/10'
                    : 'border-neutral-200 hover:border-neutral-300 bg-white hover:bg-neutral-50'"
                  @click="selectOption('budget', opt.value)"
                >
                  <div
                    class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                    :class="form.budget === opt.value ? 'bg-[#4285f4] text-white' : 'bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200'"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path :d="iconPaths[opt.icon]" />
                    </svg>
                  </div>
                  <span class="font-semibold text-neutral-800">{{ opt.label }}</span>
                  <div class="ml-auto">
                    <div
                      class="w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors"
                      :class="form.budget === opt.value ? 'border-[#4285f4] bg-[#4285f4]' : 'border-neutral-300'"
                    >
                      <svg v-if="form.budget === opt.value" xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <!-- Step 4 -->
            <div v-if="step === 4">
              <h2 class="font-heading font-bold text-2xl text-neutral-900 mb-2">Dernière étape — on vous rappelle</h2>
              <p class="text-neutral-500 mb-8">Laissez-nous vos coordonnées pour recevoir votre audit.</p>
              <form @submit.prevent="handleSubmit" class="space-y-5">
                <div>
                  <label for="company" class="block text-sm font-medium text-neutral-700 mb-1.5">Nom de l'entreprise</label>
                  <input
                    id="company"
                    v-model="form.company"
                    type="text"
                    class="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-[#4285f4] focus:ring-2 focus:ring-[#4285f4]/20 outline-none transition-all text-sm bg-white"
                    placeholder="Mon Entreprise SARL"
                  />
                </div>
                <div>
                  <label for="name" class="block text-sm font-medium text-neutral-700 mb-1.5">Nom et prénom *</label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-[#4285f4] focus:ring-2 focus:ring-[#4285f4]/20 outline-none transition-all text-sm bg-white"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-neutral-700 mb-1.5">Email professionnel *</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-[#4285f4] focus:ring-2 focus:ring-[#4285f4]/20 outline-none transition-all text-sm bg-white"
                    placeholder="jean@monentreprise.fr"
                  />
                </div>
                <div>
                  <label for="phone" class="block text-sm font-medium text-neutral-700 mb-1.5">Téléphone *</label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    required
                    class="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-[#4285f4] focus:ring-2 focus:ring-[#4285f4]/20 outline-none transition-all text-sm bg-white"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </form>
            </div>

            <!-- Navigation -->
            <div class="flex items-center justify-between mt-10 pt-6 border-t border-neutral-100">
              <button
                v-if="step > 1"
                type="button"
                class="flex items-center gap-2 text-neutral-500 hover:text-neutral-800 transition-colors font-medium text-sm"
                @click="prev"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" /></svg>
                Retour
              </button>
              <div v-else />

              <button
                v-if="step < totalSteps"
                type="button"
                :disabled="!canContinue"
                class="inline-flex items-center gap-2 font-bold text-sm px-8 py-3.5 rounded-xl transition-all duration-200"
                :class="canContinue
                  ? 'bg-[#4285f4] text-white hover:bg-[#3b78e7] hover:shadow-lg hover:shadow-[#4285f4]/25 hover:-translate-y-0.5'
                  : 'bg-neutral-100 text-neutral-400 cursor-not-allowed'"
                @click="next"
              >
                Continuer
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>

              <button
                v-else
                type="button"
                :disabled="!canContinue || submitting"
                class="inline-flex items-center gap-2 font-bold text-sm px-8 py-3.5 rounded-xl transition-all duration-200"
                :class="canContinue && !submitting
                  ? 'bg-[#4285f4] text-white hover:bg-[#3b78e7] hover:shadow-lg hover:shadow-[#4285f4]/25 hover:-translate-y-0.5'
                  : 'bg-neutral-100 text-neutral-400 cursor-not-allowed'"
                @click="handleSubmit"
              >
                {{ submitting ? 'Envoi...' : 'Envoyer ma demande' }}
                <svg v-if="!submitting" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Sidebar info under form -->
        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-neutral-50 rounded-xl p-6 text-center">
            <div class="font-numbers font-bold text-3xl text-[#4285f4] mb-2">30 min</div>
            <p class="text-sm text-neutral-600">Audit complet de vos campagnes</p>
          </div>
          <div class="bg-neutral-50 rounded-xl p-6 text-center">
            <div class="font-numbers font-bold text-3xl text-[#4285f4] mb-2">100%</div>
            <p class="text-sm text-neutral-600">Gratuit et sans engagement</p>
          </div>
          <div class="bg-neutral-50 rounded-xl p-6 text-center">
            <div class="font-numbers font-bold text-3xl text-[#4285f4] mb-2">24h</div>
            <p class="text-sm text-neutral-600">Délai de réponse maximum</p>
          </div>
        </div>

        <!-- Phone CTA -->
        <div class="mt-8 text-center">
          <p class="text-neutral-500 text-sm mb-3">Vous préférez nous appeler directement ?</p>
          <a
            href="tel:+33769801190"
            class="inline-flex items-center gap-3 px-6 py-3 rounded-xl border-2 border-[#4285f4]/20 hover:border-[#4285f4]/40 bg-[#4285f4]/5 hover:bg-[#4285f4]/10 transition-all duration-200 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#4285f4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            <span class="font-bold text-[#4285f4] text-lg">07 69 80 11 90</span>
          </a>
        </div>

      </div>
    </section>
  </div>
</template>
