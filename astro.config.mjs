// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import vue from '@astrojs/vue';

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), vue(), svelte()],

  vite: {
    plugins: [tailwindcss()]
  }
});