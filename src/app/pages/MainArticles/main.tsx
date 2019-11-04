import React, { PureComponent } from 'react';
import { InjectedIntlProps } from 'react-intl';
import { v1 } from 'uuid';
import { fetchArticles } from './store/actions';

import { Title } from './components/MainTitle/MainTitle';
import { ArticlesWrapper } from './components/ArticlesWrapper/ArticlesWrapper';
import { AppWrapper } from '@core/components/containers/AppWrapper';

interface OwnProps {
  fetchArticles: typeof fetchArticles;
  articles: any;
}

type MainArticlesProps = OwnProps & InjectedIntlProps;

class MainArticles extends PureComponent<MainArticlesProps> {
  public componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles(1, { topic: '', sortBy: '', date: '' });
  }

  render() {
    const { intl, articles } = this.props;
    console.log(articles);

    return (
      <AppWrapper>
        <Title text={intl.formatMessage({ id: 'page.main.title' })} />
        <ArticlesWrapper>
          {articles[0] &&
            articles[0].map((article: any) => (
              <div key={article.author + v1()}>
                <h3>{article.title}</h3>
              </div>
            ))}
        </ArticlesWrapper>
      </AppWrapper>
    );
  }
}

export default MainArticles;
