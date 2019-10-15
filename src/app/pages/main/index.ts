import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';

import MainComponent from './main';

import { loadItems } from './store/actions';

interface DispatchProps {}
interface MapStateProps {}

// TODO: change any to correct RootStore typing
const mapStateToProps = (state: any): MapStateProps => ({
  items: state.main.items, // TODO: use reselect selector
});

const mapDispatchToProps: DispatchProps = {
  loadItems,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  injectIntl,
)(MainComponent);
