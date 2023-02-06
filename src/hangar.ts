import Car from "./transports/car";
import Plane from "./transports/plane";
import Transport from "./transports/transport";

class Hangar {
  private static _transports:Transport[] = [];
  
  public static get TransportsCount() : number {
    return this._transports.length;
  }

  public static addToHangar(transport:Transport){
    this._transports.push(transport);
  }
  
  public static generateDefaultCars(count:number = 5){
    for (let index = 0; index < count!; index++) {
      const car = new Car({name:`Car${index}`, maxSpeed: 100, numberOfSeats:4, trunkVolume:100});
      Hangar.addToHangar(car); 
    }
  }

  public static generateDefaultPlanes(count:number = 5){
    for (let index = 0; index < count!; index++) {
      const plane = new Plane({name:`Plane${index}`, maxSpeed: 100, numberOfSeats:4, maxHeight:100});
      Hangar.addToHangar(plane); 
    }
  }

  public static removeFromHangar(transport:Transport){
    this._transports.splice(this._transports.indexOf(transport), 1);
  }

  public static getCars(): Transport[] {
    return this._transports.filter((transport:Transport) => transport instanceof Car);
  }

  public static getPlanes(): Transport[] {
    return this._transports.filter((transport:any) => transport instanceof Plane);
  }
}

export default Hangar;