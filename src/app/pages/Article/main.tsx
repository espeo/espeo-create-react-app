import React, { PureComponent } from 'react';
import {
  AppWrapper,
  TitleWrapper,
  Title,
  ContentWrapper,
} from '@core/components';

interface ArticleOwnProps {
  location: any;
  article: string;
}

type ArticleProps = ArticleOwnProps;

class Article extends PureComponent<ArticleProps> {
  render() {
    const { article } = this.props.location.state;
    console.log(article);

    return (
      <AppWrapper>
        <TitleWrapper>
          <Title text="title" />
        </TitleWrapper>
        <ContentWrapper></ContentWrapper>
      </AppWrapper>
    );
  }
}

export default Article;
