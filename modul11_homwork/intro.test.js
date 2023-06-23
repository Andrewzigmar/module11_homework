const {sum} = require('./intro'); 

test('Sum should return sum of two values', () => {
    expect(sum(1,2)).toBe(3)
});
test( 'sum should return value correctly comparing to other', () => {
    expect(sum( 4 , 5)).toBeLessThan(10)
})

test( 'sum should sum 2 float values correctly', () => {
    expect(sum(0.1 , 0.2 )).toBeCloseTo(0.3)
})