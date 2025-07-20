import '@testing-library/jest-dom'

// Mock environment variables for tests
Object.defineProperty(import.meta, 'env', {
  value: {
    VITE_IK_URL_ENDPOINT: 'https://ik.imagekit.io/test',
  },
  writable: true,
})
