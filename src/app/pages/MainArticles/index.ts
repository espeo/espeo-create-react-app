import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';

import MainArticles from './main';
import { fetchArticles } from './store/actions';
// import { MainArticlesState } from './namespace/index';
// import { StateStore } from './../../store/index';

const mapStateToProps = (state: any): any => {
  const { page, topic, sortBy, date } = state.articles;
  const { data } = state.articles;

  return {
    page,
    topic,
    sortBy,
    date,
    articles: data,
  };
};

const mapDispatchToProps: any = {
  fetchArticles,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  injectIntl,
)(MainArticles);
