import {render} from '../render.js';
import EditPointView from '../view/edit-form-view.js';
import SortView from '../view/sort-view.js';
import NewFormView from '../view/new-form-view.js';
import PointView from '../view/point-view.js';
import TripListView from '../view/trip-list-view.js';

class Trip {
  constructor(container){
    this.tripList = new TripListView();
    this.container = container;
  }

  init () {
    render(new SortView,this.container);

    render(this.tripList, this.container);
    render (new EditPointView, this.tripList.getElement());
    for (let i=0; i<3; i++){
      render(new PointView, this.tripList.getElement());
    }

    render(new NewFormView, this.tripList.getElement());
  }
}

export default Trip;