import React, { PureComponent } from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import dayjs from 'dayjs';
import {
  AppWrapper,
  TitleWrapper,
  ContentWrapper,
  ArticleImage,
  ArticleBDate,
  ArticleBAuthor,
  ArticleBTitle,
  ArticleTitle,
  ArticleContent,
  ArticleBDescription,
} from '@core/styles/components';
import { MainTitle } from '@core/components';
import { MainArticlesStateData } from '@core/pages/MainArticles/namespace';
import { getArticleByTitle } from '@core/services';
import { match as Match } from 'react-router-dom';
import { ArticleContainer, BackLink, BackLinkText, SourceLink } from './styles';

type ArticleProps = {
  location: {
    state: MainArticlesStateData | null;
  };
  match: Match<{ article: string }>;
} & InjectedIntlProps;

type ArticleState = {
  article: MainArticlesStateData | null;
};

class Article extends PureComponent<ArticleProps, ArticleState> {
  state = {
    article: null,
  };

  async componentDidMount() {
    const { location, match } = this.props;
    const articleFromLocationState = location.state;

    if (articleFromLocationState) return;

    const { data } = await getArticleByTitle(match.params.article);

    this.setState({
      article: data.article,
    });
  }

  render() {
    const { intl, location } = this.props;
    const article = location.state || this.state.article;

    return (
      <AppWrapper className="article">
        <TitleWrapper>
          <MainTitle text={intl.formatMessage({ id: 'article.mainTitle' })} />
        </TitleWrapper>
        <ContentWrapper>
          <BackLink to="/">
            <BackLinkText>
              {intl.formatMessage({ id: 'article.backToArticles' })}
            </BackLinkText>
          </BackLink>
          {article && (
            <ArticleContainer className="article-content">
              <ArticleBTitle>{article.title}</ArticleBTitle>
              <ArticleBDescription>{article.description}</ArticleBDescription>
              <ArticleImage alt={article.title} src={article.urlToImage} />
              <ArticleBDate>
                {dayjs(article.publishedAt).format('YYYY, MMM DD ')}
              </ArticleBDate>
              <ArticleBAuthor>{article.author}</ArticleBAuthor>
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleContent>{article.content}</ArticleContent>
              <SourceLink href={article.url} target="_blank" rel="noopener">
                {intl.formatMessage(
                  { id: 'article.sourceLink' },
                  { source: article.source.name },
                )}
              </SourceLink>
            </ArticleContainer>
          )}
        </ContentWrapper>
      </AppWrapper>
    );
  }
}

export default injectIntl(Article);
