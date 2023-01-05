const {stringLength, reverseString, cape} = require('./stringLength');
describe ('string Length', () => {
    test('Should return the character count of a given string', () => {
        const resualt = stringLength("string");
        expect(resualt).toBe(6)
    })
    test('Check the string length to be 1-10 characters long', () => {
        const resualt = () => stringLength("");
        expect(resualt).toThrow();
    })
    test('Check the string length to be 1-10 chararcters long', () => {
        const resualt = () => stringLength("string Length");
        expect(resualt).toThrow();
    })
    test("Should show a reversed string", ()=> {
        const resualt = reverseString("hello");
        expect(resualt).toBe("olleh")
    })
    test("Capitalize first character of a string", ()=> {
        const resualt = cape("hello");
        expect(resualt).toBe("Hello")
    })
    test("Should not capitalize first character", ()=> {
        const resualt = cape("World");
        expect(resualt).toBe("World")
    })
})