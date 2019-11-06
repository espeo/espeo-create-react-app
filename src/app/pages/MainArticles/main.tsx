import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { InjectedIntlProps } from 'react-intl';
import { v1 } from 'uuid';
import dayjs from 'dayjs';
import { defaultTheme } from '@core/styles/themes';

import {
  AppWrapper,
  ArticleImage,
  ContentWrapper,
  ArticleDate,
  ArticleAuthor,
  ArticleTitle,
  ArticleDescription,
  Title,
  TitleWrapper,
} from '@core/components';
import { Button } from '@core/components/button/button';
import { ArticlesWrapper, ArticleWrapper } from './components';

interface OwnProps {
  fetchArticles: any;
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
        <TitleWrapper>
          <Title text={intl.formatMessage({ id: 'page.main.title' })} />
        </TitleWrapper>
        <ContentWrapper>
          <ArticlesWrapper>
            {articles[0] &&
              articles[0].map((article: any) => (
                <ArticleWrapper key={article.author + v1()}>
                  <ArticleImage height={230} src={article.urlToImage} />
                  <ArticleDate>
                    {dayjs(article.publishedAt).format('YYYY, MMM DD ')}
                  </ArticleDate>
                  {article.author ? (
                    <ArticleAuthor>{article.author}</ArticleAuthor>
                  ) : (
                    <ArticleAuthor>Author</ArticleAuthor>
                  )}
                  <ArticleTitle>{article.title}</ArticleTitle>
                  <ArticleDescription>{article.description}</ArticleDescription>
                  <Link to="details">
                    <Button
                      type="button"
                      text="Read more"
                      backgroundColor={defaultTheme.colors.nude}
                      borderColor={defaultTheme.colors.darkViolet}
                      color={defaultTheme.colors.darkViolet}
                      clickHandler={() => alert('new page')}
                    />
                  </Link>
                </ArticleWrapper>
              ))}
          </ArticlesWrapper>
        </ContentWrapper>
      </AppWrapper>
    );
  }
}

export default MainArticles;
