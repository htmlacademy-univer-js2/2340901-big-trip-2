import { render } from './render';
import FiltersView from './view/filters';
import TripPresenter from './presenter/trip-presenter';
import PointsModel from './model/point-model';


const filtersContainerElement = document.querySelector('.trip-controls__filters');
const tripContainerElement = document.querySelector('.trip-events');
const pointsModel = new PointsModel();
const tripPresenter = new TripPresenter(tripContainerElement, pointsModel);

render(new FiltersView(), filtersContainerElement);
tripPresenter.init();
