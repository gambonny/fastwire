import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: ['packages/*'],
    coverage: {
      reportsDirectory: './coverage',
      provider: 'istanbul',
    },
  },
})
