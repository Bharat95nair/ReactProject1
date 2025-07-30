export function add(a, b) {
    return a + b;
}

export function sumOfDigits(n) {
    let rem, sum = 0;
    while (n !== 0) {
        rem = n % 10;
        sum = sum + rem;
        n = parseInt(n / 10);
    }
    return sum;
}

export class Car {
    cars = ['Tata','Honda'];
    addNewCar(carName) {
        this.cars.push(carName);
    }
}