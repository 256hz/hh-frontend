const constants = require('./constants')

test('Adds 2+2 to equal 4', () => {
  expect(constants.functions.add(2, 2)).toBe(4)
})

test('Filters is an object', () => {
  expect(typeof(constants.filters)).toBe('object') 
})

test('Filters is not a string', () => {
  expect(typeof(constants.filters)).not.toBe('string') 
})

test('filters is the correct list', () => {
  expect(constants.filters).toEqual(['red','orange','yellow','green','cyan','blue','purple','brown','gray'])
})

test('isNull method should return null', () => {
  expect(constants.functions.isNull()).toBeNull()
})

test('isNull method should not return undefined', () => {
  expect(constants.functions.isNull()).not.toBeUndefined()
})

test('isFalsy method should be falsy', () => {
  expect(constants.functions.isFalsy()).toBeFalsy()
})

test('2 + 2 should be <= 4', () => {
  expect(2+2).toBeLessThanOrEqual(4)
})

test('expect no I in TEAM', () => {
  expect('TEAM').not.toMatch(/I/i)
})

test('admin should be in names', () => {
  usernames = ['doug', 'diana', 'admin']
  expect(usernames).toContain('admin')
})

test('API should return something', () => {
  expect.assertions(1);
  return constants.functions.fetchColors().then( data => {
    expect(data).not.toBeFalsy();
  });
});

// test('first response from API should include id, hex, created, updated, family, & relative_color', () => {
//   expect.assertions(6)
//   return constants.functions.fetchColors().then( data => {
//     expect(data.data[0].id).not.toBeFalsy()
//     expect(data.data[0].hex).not.toBeFalsy()
//     expect(data.data[0].created_at).not.toBeFalsy()
//     expect(data.data[0].updated_at).not.toBeFalsy()
//     expect(data.data[0].family).not.toBeFalsy()
//     expect(data.data[0].relative_color).not.toBeFalsy()
//   })
// })

test('first response from API should include id, hex, created, updated, family, & relative_color', async () => {
  expect.assertions(6)
  const data = await constants.functions.fetchColors()
  expect(data.data[0].id).not.toBeFalsy()
  expect(data.data[0].hex).not.toBeFalsy()
  expect(data.data[0].created_at).not.toBeFalsy()
  expect(data.data[0].updated_at).not.toBeFalsy()
  expect(data.data[0].family).not.toBeFalsy()
  expect(data.data[0].relative_color).not.toBeFalsy()
})