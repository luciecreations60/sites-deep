import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/sites-deep/', // Doit correspondre au nom de ton dépôt GitHub
});
