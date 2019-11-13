const EQUILATERAL_TRIANGLE = 'Equilateral Triangle';
const ISOSCELES_TRIANGLE = 'Isosceles Triangle';
const SCALENE_TRIANGLE = 'Scalene Triangle';

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  validateSides = () => {
    try {
      if(isNaN(this.side1) || isNaN(this.side2) || isNaN(this.side3)) {
        throw "Only integers are allowed";
      }

      if(this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0) {
        throw "please input valid integer greater than 0";
      }

      if(this.side1 + this.side2 <= this.side3 || this.side2 + this.side3 <= this.side1 ||
         this.side1 + this.side3 <= this.side2) {
        throw "Not a Triangle. Invalid input!";
      }

      return {'status': true, 'msg': ''};
    }
    catch(err) {
      return {'status': false, 'msg': err};
    }
  }

  GetTriangleType = () => {

    var validateStatus = this.validateSides();

    if( ! validateStatus['status'])
      return validateStatus;

    if(this.side1 === this.side2 && this.side2 === this.side3) {
        return {'status': true, 'msg': EQUILATERAL_TRIANGLE};
    }

    if(this.side1 === this.side3 || this.side2 === this.side3 || this.side1 === this.side3) {
      return {'status': true, 'msg': ISOSCELES_TRIANGLE};
    }
    else {
      return {'status': true, 'msg': SCALENE_TRIANGLE};
    }
  }
}
