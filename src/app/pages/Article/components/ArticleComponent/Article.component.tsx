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
} from '@styles/components';
import { MainTitle } from '@core/components';
import { ArticleContainer, BackLink, BackLinkText, SourceLink } from './styles';

interface ArticleOwnProps {
  location: any;
  article: string;
}

type ArticleProps = ArticleOwnProps & InjectedIntlProps;

class Article extends PureComponent<ArticleProps> {
  render() {
    const {
      intl,
      location: { state: article },
    } = this.props;

    return (
      <AppWrapper>
        <TitleWrapper>
          <MainTitle text={intl.formatMessage({ id: 'article.mainTitle' })} />
        </TitleWrapper>
        <ContentWrapper>
          <BackLink to="/">
            <BackLinkText>
              {intl.formatMessage({ id: 'article.backToArticles' })}
            </BackLinkText>
          </BackLink>
          <ArticleContainer>
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
