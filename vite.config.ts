import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/333/', // Базовый путь для правильного отображения по адресу https://podpolkownik.github.io/333/
});
