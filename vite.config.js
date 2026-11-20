import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  root: 'dev',
  publicDir: '../public',
  base: command === 'build' ? '/hokkaido-hiver/' : '/',
  server: {
    fs: { allow: ['..'] }
  }
}));
