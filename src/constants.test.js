const constants = require('./constants')

test('Filters is an object', () => {
  expect(typeof(constants.filters)).toBe('object') 
})

test('Filters is not a string', () => {
  expect(typeof(constants.filters)).not.toBe('string') 
})

test('filters is the correct list', () => {
  expect(constants.filters).toEqual(['red','orange','yellow','green','cyan','blue','purple','brown','gray'])
})

// Example tests

// test('Adds 2+2 to equal 4', () => {
//   expect(constants.functions.add(2, 2)).toBe(4)
// })

// test('isNull method should return null', () => {
//   expect(constants.functions.isNull()).toBeNull()
// })

// test('isNull method should not return undefined', () => {
//   expect(constants.functions.isNull()).not.toBeUndefined()
// })

// test('isFalsy method should be falsy', () => {
//   expect(constants.functions.isFalsy()).toBeFalsy()
// })

// test('2 + 2 should be <= 4', () => {
//   expect(2+2).toBeLessThanOrEqual(4)
// })

// test('expect no I in TEAM', () => {
//   expect('TEAM').not.toMatch(/I/i)
// })

// test('admin should be in names', () => {
//   usernames = ['doug', 'diana', 'admin']
//   expect(usernames).toContain('admin')
// })
