import Trip from './presenter/trip-presenter.js';
import { render } from './render.js';
import FilterView from './view/filters-view.js';

const tripFilters = document.querySelector('.trip-controls__filters');
const main = document.querySelector('.trip-events');
const tripPresenter = new Trip(main);

render(new FilterView(), tripFilters);

tripPresenter.init();