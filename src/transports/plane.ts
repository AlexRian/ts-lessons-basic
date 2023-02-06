import { Format } from "../decorators";
import { IPlaneProps } from "../interfaces";
import Transport from "./transport";

class Plane extends Transport {
  private _maxHeight:number;

  constructor(props:IPlaneProps) {
    super(props);
    this._maxHeight = props.maxHeight;
  }

  @Format
  public getInfo():string{
    return `${super.getInfo()} - ${this._maxHeight} литров`
  }
}

export default Plane;