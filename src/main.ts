import './style.css';
import Car from './transports/car';
import Hangar from './hangar';
import DashboardManager from './dashboardManager';
import Plane from './transports/plane';

Hangar.generateDefaultCars();
Hangar.generateDefaultPlanes();

const dashboardElement:HTMLDivElement = document.getElementById('dashboard') as HTMLDivElement;
const menuTabs = Array.from(document.getElementsByClassName('tab')) as HTMLDivElement[];
menuTabs.forEach((element:HTMLDivElement) => {
  element.onclick = () => {
    DashboardManager.changeTab(element.getAttribute('target')!);
  }
});

const addCarForm = document.querySelector('#carsTab form') as HTMLFormElement;
const addPlaneForm = document.querySelector('#planesTab form') as HTMLFormElement;

addCarForm.onsubmit = (e:SubmitEvent) => {
  e.preventDefault();
  const formElement:HTMLFormElement = e.target as HTMLFormElement;

  const formData = new FormData(formElement);

  const car = new Car({name: formData.get('name') as string, maxSpeed: Number(formData.get('maxSpeed')), 
                      numberOfSeats:Number(formData.get('maxSpeed')), trunkVolume:Number(formData.get('trunkVolume'))});

  Hangar.addToHangar(car);
  DashboardManager.render();
  formElement.reset();
}

addPlaneForm.onsubmit = (e:SubmitEvent) => {
  e.preventDefault();
  const formElement:HTMLFormElement = e.target as HTMLFormElement;

  const formData = new FormData(formElement);
  const plane = new Plane({name: formData.get('name') as string, maxSpeed: Number(formData.get('maxSpeed')), 
                          numberOfSeats:Number(formData.get('maxSpeed')), maxHeight:Number(formData.get('trunkVolume'))});
  Hangar.addToHangar(plane);
  DashboardManager.render();
  formElement.reset();
}

DashboardManager.setDashboardElement(dashboardElement)
DashboardManager.render();