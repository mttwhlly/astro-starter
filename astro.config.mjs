// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import vue from '@astrojs/vue';

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

import angular from '@analogjs/astro-angular';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), vue(), svelte(), angular(),],

  vite: {
    plugins: [tailwindcss()],
  }
});