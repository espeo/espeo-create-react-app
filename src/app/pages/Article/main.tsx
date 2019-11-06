import React, { PureComponent } from 'react';
// import { InjectedIntlProps } from 'react-intl';
import {
  AppWrapper,
  TitleWrapper,
  Title,
  ContentWrapper,
} from '@core/components';

interface OwnProps {}

type ArticleProps = OwnProps;

class Article extends PureComponent<ArticleProps> {
  render() {
    // const { intl } = this.props;
    return (
      <AppWrapper>
        <TitleWrapper>
          <Title text="Title" />
        </TitleWrapper>
        <ContentWrapper>
          <span>New Page contenet</span>
        </ContentWrapper>
      </AppWrapper>
    );
  }
}

export default Article;
