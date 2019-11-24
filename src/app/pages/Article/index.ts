import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';

import Article from './Article.component';

export default compose(connect(), injectIntl)(Article);
