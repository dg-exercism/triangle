//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.sides = [a, b, c];
    this.check = new Set(this.sides);
    this.inequalityCheck = a + b >= c && a + c >= b && b + c >= a;
    this.lengthCheck = this.sides.filter(value => value === 0).length !== 0;
  }

  isEquilateral() {
    return this.check.size > 1 || this.lengthCheck ? false : true;
  }

  isIsosceles() {
    return this.check.size <= 2 && this.inequalityCheck ? true : false;
  }

  isScalene() {
    return this.check.size === 3 && this.inequalityCheck ? true : false;
  }
}
