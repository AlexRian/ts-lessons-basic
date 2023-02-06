import { IAccountable, ITransportProps } from "../interfaces";

//Дополнив класс интерфейсом IAccountable, мы обязаны реализовать атрибут id в нем
class Transport implements IAccountable{
  id:number = 0;
  private _name:string;
  private _maxSpeed:number;
  private _numberOfSeats:number;

  public get Name() : string {
    return this._name;
  }
  
  constructor(props:ITransportProps) {
    this._name = props.name;
    this._maxSpeed = props.maxSpeed;
    this._numberOfSeats = props.numberOfSeats;
  }

  public getInfo():string{
    return `Имя:${this._name} - Макс скорость:${this._maxSpeed} - Кол.мест:${this._numberOfSeats}`
  }
}

export default Transport;