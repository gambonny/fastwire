import { greet } from '.'

describe('text index', () => {
  test('greet() must return Hello, {name}', () => {
    expect(greet('Mundo')).toBe('Hola, Mundo!')
  })
})
