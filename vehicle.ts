// Main Class 
class BaseVehicle {
  private type: string;

  constructor(type: string) { 
    this.type = type;
  }

  public control(): void {
    console.log(`The ${this.type} is do something`);
  }

  protected getType(): string {
    return this.type;
  }
}

class Motorbike extends BaseVehicle {
  constructor(type: string) {
    super(type);
  }
  control(): void {
    console.log(`The ${this.getType()} is Riding Forward`);
  }
}

class CarVehicle extends BaseVehicle {
  constructor(type: string) {
    super(type);
  }
  control(): void {
    console.log(`The ${this.getType()} is Driving Forward`);
  }
}

const simpleVehicle = new BaseVehicle('unknown');
const motorbike = new Motorbike('Motorbike');
const car = new CarVehicle('Car');

simpleVehicle.control();
motorbike.control();
car.control();
