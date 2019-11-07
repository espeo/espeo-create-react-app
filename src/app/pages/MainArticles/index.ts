import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';

import MainArticles from './main';
import { fetchArticles, filterArticles } from './store/actions';
// import { MainArticlesState } from './namespace/index';
// import { StateStore } from './../../store/index';

const mapStateToProps = (state: any): any => {
  const { page, topic, sortBy, date, data } = state.articles;

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
  filterArticles,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  injectIntl,
)(MainArticles);
