import { connect } from 'react-redux';

import { RootStore } from '@core/store';

import { fetchStateful, StatefulState } from './stateful-store';
import { StateFulComponent } from './stateful.component';

interface StatefulPropsAttrs {
  isLoading: boolean;
  isSecondLoading: boolean;
}

interface StatefulPropsActions {
  fetchStateful: typeof fetchStateful;
}

export type StatefulProps = StatefulPropsAttrs & StatefulPropsActions;

const mapStateToProps = (store: RootStore & { stateful: StatefulState }): StatefulPropsAttrs => ({
  isLoading: store.stateful.isLoading,
  isSecondLoading: store.second.isLoading,
});

const mapDispatchToProps: StatefulPropsActions = {
  fetchStateful,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StateFulComponent);
