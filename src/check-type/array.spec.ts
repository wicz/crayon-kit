import { isArray } from './array'

it('Should pass if an array is passed to it', () => {
    const result = isArray([])
    expect(result).toBe(true)
})

it('Should pass if an array is passed to it without isArray', () => {
    (Array as any).isArray = undefined
    const result = isArray([])
    expect(result).toBe(true)
})

it('Should return false if an object is passed to it', () => {
    expect(isArray({})).toBe(false)
    expect(isArray(1)).toBe(false)
    expect(isArray('not array')).toBe(false)
    expect(isArray(true)).toBe(false)
    expect(isArray(1.00)).toBe(false)
    expect(isArray()).toBe(false)
})

it('Should return false if an object is passed to it without isArray', () => {
    (Array as any).isArray = undefined
    expect(isArray({})).toBe(false)
    expect(isArray(1)).toBe(false)
    expect(isArray('not array')).toBe(false)
    expect(isArray(true)).toBe(false)
    expect(isArray(1.00)).toBe(false)
    expect(isArray()).toBe(false)
})