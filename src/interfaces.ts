export interface IAccountable {
  id:number,
}

export interface ITransportProps {
  name:string, 
  maxSpeed:number, 
  numberOfSeats:number
}

export interface ICarProps extends ITransportProps {
  name:string, 
  maxSpeed:number, 
  numberOfSeats:number,
  trunkVolume:number,
}

export interface IPlaneProps extends ITransportProps {
  name:string, 
  maxSpeed:number, 
  numberOfSeats:number,
  maxHeight:number,
}