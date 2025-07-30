import { add, Car, sumOfDigits } from "../utils/demo_1";

describe('This is a test suite for demo_1 file', () => { // test suite
    it('Should verify add function', () => { // test case
        expect(add(2, 3)).toBe(5);
        expect(add(-2, 3)).toBe(1);
        expect(add(2, -3)).toBe(-1);
        expect(add(-2, -3)).toBe(-5);
    })
    it('Should verify sumofdigits function', () => { // test case
        expect(sumOfDigits(125)).toBe(8);
        expect(sumOfDigits(111)).toBe(3);
        expect(sumOfDigits(222)).toBe(6);
    })
    it('Should verify addNewCar function', () => { // test case
        let carObj = new Car();
        expect(carObj.cars.length).toBe(2);
        expect(carObj.cars).toEqual(["Tata",'Honda']);
        expect(carObj.cars).toContain('Tata');
        expect(carObj.cars).toContain('Honda');
        expect(carObj.cars).not.toContain('Audi');
        carObj.addNewCar('Maruti')
        expect(carObj.cars.length).toBe(3);
        expect(carObj.cars).toContain('Tata');
        expect(carObj.cars).toContain('Honda');
        expect(carObj.cars).toContain('Maruti');
        expect(carObj.cars).not.toContain('Audi');
    })
});