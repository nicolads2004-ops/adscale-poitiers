<template>
  <div class="min-h-screen flex flex-col font-body text-neutral-900">
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-primary text-white px-4 py-2 rounded-lg">
      Aller au contenu principal
    </a>
    <AppHeader />
    <main id="main-content" class="flex-1">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>
