class Transport {
  private _name:string;
  private _maxSpeed:number;
  private _numberOfSeats:number;

  constructor(name:string, maxSpeed:number, numberOfSeats:number) {
    this._name = name;
    this._maxSpeed = maxSpeed;
    this._numberOfSeats = numberOfSeats;
  }

  public getInfo():string{
    return `${this._name} - ${this._maxSpeed} - ${this._numberOfSeats}`
  }

}

export default Transport;