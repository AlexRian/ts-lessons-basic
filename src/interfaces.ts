//Интерфейс который говорит о том что класс в который мы имплементриуемый его "подотчетный" (должен иметь идентификациионый номер)
export interface IAccountable {
  id:number,
}

//Здесь мы прописываем интерфейсы которые потом применяем к констуркторам класса
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
  maxHeight:number,
}