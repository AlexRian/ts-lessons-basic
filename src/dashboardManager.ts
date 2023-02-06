import Car from "./transports/car";
import Hangar from "./hangar";
import Plane from "./transports/plane";
import Transport from "./transports/transport";

enum TransportTabs {
  CarTab = 'carsTab',
  PlaneTab = 'planesTab',
}

class DashboardManager {
  private static _activeTab:TransportTabs = TransportTabs.CarTab;
  private static _dashBoardElement:HTMLDivElement | null;

  public static setDashboardElement(dashBoardElement:HTMLDivElement){
    DashboardManager._dashBoardElement = dashBoardElement;
  }

  public static changeTab(tabName:string){
    DashboardManager._activeTab = tabName as TransportTabs;

    const dashboardChilds:HTMLDivElement[] = Array.from(DashboardManager._dashBoardElement!.children) as HTMLDivElement[];
    
    dashboardChilds.forEach((node:ChildNode)=>{
      const element:HTMLDivElement = (node as HTMLDivElement)
      if(element.id === DashboardManager._activeTab){
        element.style.display = 'block';
      }else{
        element.style.display = 'none';
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
    const planesListElement:HTMLDivElement = DashboardManager._dashBoardElement!.querySelector(`#${TransportTabs.PlaneTab} .list`)!;
    const carListElement:HTMLDivElement = DashboardManager._dashBoardElement!.querySelector(`#${TransportTabs.CarTab} .list`)!;
    planesListElement.innerHTML = '';
    carListElement.innerHTML = '';

    Hangar.getPlanes().forEach((plane:Transport)=>{
      planesListElement.appendChild(DashboardManager.createListItem((plane as Plane)));
    })

    Hangar.getCars().forEach((car:Transport)=>{
      carListElement.appendChild(DashboardManager.createListItem((car as Car)));
    })
  }
}

export default DashboardManager;