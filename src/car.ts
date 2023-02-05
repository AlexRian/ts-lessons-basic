import Transport from "./transport";

class Car extends Transport {
  private trunkVolume:number;

  constructor(name:string, maxSpeed:number, numberOfSeats:number, trunkVolume:number) {
    super(name, maxSpeed, numberOfSeats);
    this.trunkVolume = trunkVolume;
  }

  public getInfo():string{
    return `${super.getInfo()} - ${this.trunkVolume} литров`
  }
}

export default Car;