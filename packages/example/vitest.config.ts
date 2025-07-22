import { defineProject } from 'vitest/config'

export default defineProject({
  test: {
    name: 'Package: Example',
    globals: true,
    environment: 'node',
  },
})
