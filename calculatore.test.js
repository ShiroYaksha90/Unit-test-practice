const cal = require('./calculatore')
describe('My calculatore', () => {
    test("Test adding", () => {
        expect(cal.add(2,2)).toBe(4)
    })
    test("Test adding", () => {
        expect(cal.add(2,-2)).toBe(0)
    })
    test("Test adding", () => {
        expect(cal.add(-2,-2)).toBe(-4)
    })
    test("Test adding", () => {
        expect(cal.add(-10,2)).toBe(-8)
    })
    test("Test subtracting", () => {
        expect(cal.sub(2,2)).toBe(0)
    })
    test("Test subtracting", () => {
        expect(cal.sub(2,-2)).toBe(4)
    })
    test("Test subtracting", () => {
        expect(cal.sub(-3,2)).toBe(-5)
    })
    test("Testing multiply", () => {
        expect(cal.multiply(2,3)).toBe(6)
    })
    test("Testing multiply", () => {
        expect(cal.multiply(2,0.5)).toBe(1)
    })
    test("Testing multiply", () => {
        expect(cal.multiply(2,-3)).toBe(-6)
    })
    test("Testing divison", () => {
        expect(cal.divid(4,2)).toBe(2)
    })
    test("Testing divison", () => {
        expect(cal.divid(-4,2)).toBe(-2)
    })
    test("Testing divison", () => {
        expect(cal.divid(2,4)).toBe(0.5)
    })
})
