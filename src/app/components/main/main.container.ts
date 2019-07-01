import { connect } from 'react-redux';

import { Logic } from '@core/domain';

import { RootStore, getFirstData, FetchFirst } from '@core/store';

import { MainComponent } from './main.component';
import { LocalStorageService } from '../../services/local-storage.service';

interface MainPropsAttrs {
  first: Logic | null;
  localStorageService: LocalStorageService;
}

interface MainPropsActions {
  fetchFirst: () => FetchFirst;
}

export type MainProps = MainPropsAttrs & MainPropsActions;

export default connect(
  (store: RootStore): MainPropsAttrs => ({
    first: getFirstData(store),
    localStorageService: new LocalStorageService(),
  }),
  (dispatch): MainPropsActions => ({
    fetchFirst: () => dispatch({ ...new FetchFirst() }),
  }),
)(MainComponent);
