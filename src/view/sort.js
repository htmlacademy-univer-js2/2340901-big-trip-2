import AbstractView from '../framework/view/abstract-view';

const createSortingItemTemplate = (sort, isChecked) => {
  const {name, sequence} = sort;

  return (
    `<div class="trip-sort__item  trip-sort__item--${name}">
      <input id="sort-${name}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${name}" 
      ${isChecked ? 'checked' : ''}
      ${sequence === null ? 'disabled' : ''}>
      <label class="trip-sort__btn" for="sort-${name}">${name}</label>
    </div>`
  )
}

const createSortTemplate = (sortItems) => {
  const sortingItemsTemplate = sortItems.map((sort, index) => createSortingItemTemplate(sort, index === 3)).join(' ');

  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${sortingItemsTemplate}
    </form>`;
};

class SortView extends AbstractView {
  constructor(sort){
    super()
    this._sort = sort
  }

  get template() {
    return createSortTemplate(this._sort);
  }
}

export default SortView;
