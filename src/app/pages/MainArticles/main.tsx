import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { InjectedIntlProps } from 'react-intl';
import { v1 } from 'uuid';
import dayjs from 'dayjs';
import { defaultTheme } from '@core/styles/themes';

import {
  AppWrapper,
  ContentWrapper,
  ArticleDate,
  ArticleAuthor,
  ArticleTitle,
  ArticleDescription,
  ArticleImage,
  Title,
  TitleWrapper,
} from '@core/components';
import {
  StyledButton,
  ArticleButton,
  ArticleButtonText,
} from '@core/components/button';
import {
  ArticlesWrapper,
  ArticleWrapper,
  FiltersWrapper,
  FilterWrapper,
  FilterButtonWrapper,
  Select,
} from './components';

interface OwnProps {
  fetchArticles: any;
  filterArticles: any;
  clearArticlesFilters: any;
  articles: any;
  topic: string;
  sortBy: string;
  date: any;
  handleDate: any;
}
const image = require('../../components/image/images/logo_espeo.svg');

type MainArticlesProps = OwnProps & InjectedIntlProps;

class MainArticles extends PureComponent<MainArticlesProps> {
  public componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles(1, { topic: '', sortBy: '', date: '' });
  }

  changeTitle = (title: string) => {
    return title.toLowerCase().replace(/ /g, '-');
  };

  handleDateChange = (event: any) => {
    const { topic, sortBy, date, filterArticles } = this.props;
    const value = event.target.value === date ? '' : event.target.value;
    filterArticles({ topic, date: value, sortBy });
  };

  handleTopicChange = (event: any) => {
    const { topic, sortBy, date, filterArticles } = this.props;
    const value = event.target.value === topic ? '' : event.target.value;
    filterArticles({ topic: value, date, sortBy });
  };

  handleSortChange = (event: any) => {
    const { topic, sortBy, date, filterArticles } = this.props;
    const value = event.target.value === sortBy ? '' : event.target.value;
    filterArticles({ topic, date, sortBy: value });
  };

  render() {
    const {
      intl,
      articles,
      topic,
      sortBy,
      date,
      clearArticlesFilters,
    } = this.props;

    return (
      <AppWrapper>
        <TitleWrapper>
          <Title text={intl.formatMessage({ id: 'page.main.title' })} />
        </TitleWrapper>
        <ContentWrapper>
          <FiltersWrapper>
            <FilterWrapper>
              <Select value={date} onChange={this.handleDateChange}>
                <option value="" />
                <option value="today">Today</option>
                <option value="week">Last week</option>
                <option value="month">Last month</option>
              </Select>
              <Select value={topic} onChange={this.handleTopicChange}>
                <option value="" />
                <option value="sport">Sport</option>
                <option value="fashon">Fashon</option>
                <option value="design">Design</option>
              </Select>
              <Select value={sortBy} onChange={this.handleSortChange}>
                <option value="" />
                <option value="popularity">Popularity</option>
              </Select>
            </FilterWrapper>
            <FilterButtonWrapper>
              <StyledButton
                type="button"
                text="Clear"
                clickHandler={clearArticlesFilters}
                backgroundColor={defaultTheme.colors.darkViolet}
                borderColor={defaultTheme.colors.darkViolet}
                color={defaultTheme.colors.darkViolet}
              />
            </FilterButtonWrapper>
          </FiltersWrapper>
          <ArticlesWrapper>
            {articles[0] &&
              articles[0].map((article: any) => (
                <ArticleWrapper key={article.author + v1()}>
                  <ArticleImage
                    width="100%"
                    height={230}
                    src={article.urlToImage ? article.urlToImage : image}
                  />
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
                  <Link
                    to={{
                      pathname: `/details/:${this.changeTitle(article.title)}`,
                      state: { article },
                    }}
                  >
                    <ArticleButton>
                      <ArticleButtonText>Know more</ArticleButtonText>
                    </ArticleButton>
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
