//Данный декоратор просто модицирует выходящее значение, меняет формат возврата функции
export const Format = (target: Object, method: string, descriptor: PropertyDescriptor) => {
  let originalMethod = descriptor.value;
  descriptor.value = function(...args: any){
    let returnValue:string = originalMethod.apply(this, args);
    return returnValue.replace(/-/g, '/');
  }
}