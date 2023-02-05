import Transport from "./transport";

class Hangar {
  private static _transports:Transport[] = [];
  
  public static get TransportsCount() : number {
    return this._transports.length;
  }

  public static AddToHangar(transport:Transport){
    this._transports.push(transport);
  }
}

export default Hangar;