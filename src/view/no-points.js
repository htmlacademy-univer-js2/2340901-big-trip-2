import AbstractView from '../framework/view/abstract-view';

const createNoPointTemplate = (message) => (
  `<p class="trip-events__msg">${message}</p>`
);

class NoPoint extends AbstractView{
  constructor() {
    super();
    this._message = 'Click New Event to create your first point';
  }

  get template() {
    return createNoPointTemplate(this._message);
  }
}

export default NoPoint;
