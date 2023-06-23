import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    HOME: 'https://dev.42gg.kr/',
    SERVER_ENDPOINT: 'https://dev.api.42gg.kr',
    NORMAL_USERNAME: 'hyungjpa',
    NORMAL_PASSWORD: 'Qwerasdf1234!!',
    ADMIN_USERNAME: 'jeyoon',
    ADMIN_PASSWORD: 'QwertyQwerty1234!',
    GAME_SLOT_TIME: 12000,
    GAME_PENALTY_TIME: 120,
  },
});
