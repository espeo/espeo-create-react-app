import { connect } from 'react-redux';
import { compose } from 'redux';

import Article from './components/ArticleComponent/Article.component';

export default compose(connect())(Article);
