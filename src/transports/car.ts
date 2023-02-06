import { ICarProps } from "../interfaces";
import Transport from "./transport";

class Car extends Transport {
  private _trunkVolume:number;

  constructor(props:ICarProps) {
    super(props);
    this._trunkVolume = props.trunkVolume;
  }

  public getInfo():string{
    return `${super.getInfo()} - ${this._trunkVolume} литров`
  }
}

export default Car;