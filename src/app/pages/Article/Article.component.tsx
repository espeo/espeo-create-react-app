import React, { PureComponent } from 'react';
import dayjs from 'dayjs';

import {
  AppWrapper,
  TitleWrapper,
  Title,
  ContentWrapper,
  ArticleImage,
  ArticleBDate,
  ArticleBAuthor,
  ArticleBTitle,
  ArticleTitle,
  ArticleContent,
  ArticleBDescription,
} from '@core/components';

import { ArticleContainer, BackLink, BackLinkText, SourceLink } from './styles';

interface ArticleOwnProps {
  location: any;
  article: string;
}

type ArticleProps = ArticleOwnProps;

class Article extends PureComponent<ArticleProps> {
  render() {
    const { article } = this.props.location.state;

    return (
      <AppWrapper>
        <TitleWrapper>
          <Title text="Article Details" />
        </TitleWrapper>
        <ContentWrapper>
          <BackLink to="/">
            <BackLinkText>Back to Articles</BackLinkText>
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
            <SourceLink href={article.url} target="_blank">
              Read more here &gt; Source: {article.source.name}
            </SourceLink>
          </ArticleContainer>
        </ContentWrapper>
      </AppWrapper>
    );
  }
}

export default Article;
