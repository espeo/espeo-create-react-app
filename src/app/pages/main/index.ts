import { connect } from 'react-redux';

import { Logic } from '@core/namespace';
import { RootStore } from '@core/store';
import { LocalStorageService } from '@core/services';

import { MainComponent } from './main.component';
import { fetchFirst, getFirstData } from '@core/store/first';

interface MainPropsAttrs {
  first: Logic | null;
  localStorageService: LocalStorageService;
}

interface MainPropsActions {
  fetchFirst: typeof fetchFirst;
}

export type MainProps = MainPropsAttrs & MainPropsActions;

const mapStateToProps = (store: RootStore): MainPropsAttrs => ({
  first: getFirstData(store),
  localStorageService: new LocalStorageService(),
});

const mapDispatchToProps: MainPropsActions = {
  fetchFirst,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainComponent);
