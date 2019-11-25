import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';

import MainArticles from './components/MainArticles/MainArticles.component';
import {
  fetchArticles,
  filterArticles,
  clearArticlesFilters,
} from './store/actions';

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
  clearArticlesFilters,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  injectIntl,
)(MainArticles);
