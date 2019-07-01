import { connect } from 'react-redux';

import { Logic } from '@core/domain';

import { RootStore, getFirstData, FetchFirst } from '@core/store';

import { MainComponent } from './main.component';

interface MainPropsAttrs {
  first: Logic | null;
}

interface MainPropsActions {
  fetchFirst: () => FetchFirst;
}

export type MainProps = MainPropsAttrs & MainPropsActions;

export default connect(
  (store: RootStore): MainPropsAttrs => ({
    first: getFirstData(store),
  }),
  (dispatch): MainPropsActions => ({
    fetchFirst: () => dispatch(new FetchFirst()),
  }),
)(MainComponent);
