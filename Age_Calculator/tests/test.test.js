const { isValidDate } = require('./test.js')

test('checking dates date dosn\'t exist', () => {
    expect(isValidDate(31, 4, 1991)).toBe(false)
})

test('checking dates date exist current date', () => {
    expect(isValidDate(14, 10, 2023)).toBe(true)
})

test('checking dates date from the future', () => {
    expect(isValidDate(15, 10, 2023)).toBe(false)
})

test('checking dates date from the future but it\'s a sting', () => {
    expect(isValidDate('00015', '000010', '00002023')).toBe(false)
})

test('checking dates date valid date but it\'s a sting', () => {
    expect(isValidDate('0014', '0010', '0002023')).toBe(true)
})


