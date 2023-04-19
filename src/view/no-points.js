import { createElement } from '../render';

const createNoPointTemplate = (message) => (
  `<p class="trip-events__msg">${message}</p>`
);

class NoPoint {
  constructor() {
    this._message = 'Click New Event to create your first point';
  }

  get _template() {
    return createNoPointTemplate(this._message);
  }

  get element() {
    if(!this._element) {
      this._element = createElement(this._template);
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

export default NoPoint;
