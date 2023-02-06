import Car from "./transports/car";
import Hangar from "./hangar";
import Plane from "./transports/plane";
import Transport from "./transports/transport";

enum TransportTabs {
  CarTab = 'carsTab',
  PlaneTab = 'planesTab',
}

class DashboardManager {
  private static activeTab:TransportTabs = TransportTabs.CarTab;
  private static dashBoardElement:HTMLDivElement | null;

  public static setDashboardElement(dashBoardElement:HTMLDivElement){
    DashboardManager.dashBoardElement = dashBoardElement;
  }

  public static changeTab(tabName:string){
    //Строку можно приводить к Enum
    DashboardManager.activeTab = tabName as TransportTabs;

    const dashboardChilds:HTMLDivElement[] = Array.from(DashboardManager.dashBoardElement!.children) as HTMLDivElement[];
    
    dashboardChilds.forEach((node:HTMLDivElement)=>{
      if(node.id === DashboardManager.activeTab){
        node.style.display = 'block';
      }else{
        node.style.display = 'none';
      }
    })
  }

  private static createListItem(transport:Transport):HTMLDivElement{
    const itemElement:HTMLDivElement = document.createElement('div');
    itemElement.classList.add('item');
    
    const deleteButton:HTMLDivElement = document.createElement('div');
    deleteButton.innerText = "x"
    deleteButton.classList.add('delete');
    deleteButton.onclick = ()=>{
      Hangar.removeFromHangar(transport);
      DashboardManager.render();
    }
    itemElement.innerText = transport.getInfo();
    itemElement.appendChild(deleteButton);
    return itemElement;
  }

  public static render(){
    const planesListElement:HTMLDivElement = DashboardManager.dashBoardElement!.querySelector(`#${TransportTabs.PlaneTab} .list`)!;
    const carListElement:HTMLDivElement = DashboardManager.dashBoardElement!.querySelector(`#${TransportTabs.CarTab} .list`)!;
    planesListElement.innerHTML = '';
    carListElement.innerHTML = '';

    Hangar.getPlanes().forEach((plane:Transport)=>{
      planesListElement.appendChild(DashboardManager.createListItem(plane as Plane));
    })

    Hangar.getCars().forEach((car:Transport)=>{
      carListElement.appendChild(DashboardManager.createListItem(car as Car));
    })
  }
}

export default DashboardManager;