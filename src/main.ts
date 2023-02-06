import './style.css';
import Car from './transports/car';
import Hangar from './hangar';
import DashboardManager from './dashboardManager';
import Plane from './transports/plane';

//Генерация дефолтных данных для отрисовки
Hangar.generateDefaultCars();
Hangar.generateDefaultPlanes();

const dashboardElement:HTMLDivElement = document.getElementById('dashboard') as HTMLDivElement;
//getElementsByClassName возвращает HTMLCollection, она нам не нужен. Гораздо удобное работать с массивом типа HTMLDivElement[]
const menuTabs = Array.from(document.getElementsByClassName('tab')) as HTMLDivElement[];
menuTabs.forEach((element:HTMLDivElement) => {
  element.onclick = () => {
    //Ставив восклицательный знак мы говорим компилятору о том, что element.getAttribute('target') не будет равна null
    DashboardManager.changeTab(element.getAttribute('target')!);
  }
});

//Все типы элментов Dom дерева начинаются с HTML... 
const addCarForm = document.querySelector('#carsTab form') as HTMLFormElement;
const addPlaneForm = document.querySelector('#planesTab form') as HTMLFormElement;

addCarForm.onsubmit = (e:SubmitEvent) => {
  e.preventDefault();
  //e.target не возвращает элемент, а EventTarget, необходимо привести к типу чтобы вставить в FormData
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