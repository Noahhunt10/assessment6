const {shuffleArray} = require('./utils')
let arr = [1,2,3,4,5]
describe('shuffleArray should', () => {
    test('be an object', () => {
        expect(typeof shuffleArray(arr)).toBe('object')
    })
    test('return same length as argument', () => {
        expect(shuffleArray(arr).length).toBe(arr.length)
    })
})