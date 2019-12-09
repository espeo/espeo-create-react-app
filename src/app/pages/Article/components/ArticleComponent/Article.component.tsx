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
import { ArticleContainer, BackLink, BackLinkText, SourceLink } from './styles';

interface ArticleOwnProps {
  location: {
    state: {
      article: MainArticlesStateData;
    };
  };
}

type ArticleProps = ArticleOwnProps & InjectedIntlProps;

class Article extends PureComponent<ArticleProps> {
  public render() {
    const { intl, location } = this.props;

    const { article } = location.state;

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
        </ContentWrapper>
      </AppWrapper>
    );
  }
}

export default injectIntl(Article);
