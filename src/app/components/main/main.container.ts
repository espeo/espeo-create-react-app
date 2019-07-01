import { connect } from 'react-redux';

import { Logic } from '@core/domain/logic';

import { RootStore } from '@core/store/index';
import { getFirstData } from '@core/store/first/first.selectors';
import { FetchFirst } from '@core/store/first/first.actions';

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
