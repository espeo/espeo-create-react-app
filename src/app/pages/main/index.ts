import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';

import MainComponent from './main';

import { loadItems } from './store/actions';

interface IDispatchProps {}
interface IMapStateProps {}

// TODO: change any to correct RootStore typing
const mapStateToProps = (state: any): IMapStateProps => ({
  items: state.main.items // TODO: use reselect selector
});

const mapDispatchToProps: IDispatchProps = {
  loadItems,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  injectIntl,
)(MainComponent)