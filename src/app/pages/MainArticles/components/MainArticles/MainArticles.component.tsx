import React, { ChangeEvent, PureComponent } from 'react';
import dayjs from 'dayjs';
import { InjectedIntlProps } from 'react-intl';
import { v1 } from 'uuid';

import { MainTitle, StyledButton } from '@core/components';
import {
  AppWrapper,
  ArticleAuthor,
  ArticleDate,
  ArticleDescription,
  ArticleImage,
  ArticleTitle,
  ContentWrapper,
  TitleWrapper,
} from '@styles/components';
import { defaultTheme } from '@styles/themes';
import {
  ArticleButton,
  ArticlesWrapper,
  ArticleWrapper,
  FilterButtonWrapper,
  FiltersWrapper,
  FilterWrapper,
  Select,
} from './MainArticles.style';

interface StringObject {
  [key: string]: string | number;
}

interface OwnProps {
  fetchArticles(arg1: number, arg2: StringObject): {};
  filterArticles(arg: StringObject): void;
  clearArticlesFilters(): void;
  articles: Array<any>;
  topic: string;
  sortBy: string;
  date: string;
  handleDate(): void;
}
const fallbackImage = require('@assets/images/logo_espeo.svg');

type MainArticlesProps = OwnProps & InjectedIntlProps;

class MainArticles extends PureComponent<MainArticlesProps> {
  public componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles(1, { topic: '', sortBy: '', date: '' });
  }

  changeTitle = (title: string) => {
    return title.toLowerCase().replace(/ /g, '-');
  };

  handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { filterArticles, topic, sortBy, date } = this.props;
    const { name } = event.target;
    const value = event.target.value === name ? '' : event.target.value;
    if (name === 'topic') {
      filterArticles({ [name]: value, sortBy, date });
    } else if (name === 'sortBy') {
      filterArticles({ [name]: value, topic, date });
    } else if (name === 'date') {
      filterArticles({ [name]: value, topic, sortBy });
    }
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
          <MainTitle text={intl.formatMessage({ id: 'page.main.title' })} />
        </TitleWrapper>
        <ContentWrapper>
          <FiltersWrapper>
            <FilterWrapper>
              <Select
                value={date}
                onChange={this.handleChange}
                id="select-date"
                name="date"
              >
                <option value="" />
                <option value="today">Today</option>
                <option value="week">Last week</option>
                <option value="month">Last month</option>
              </Select>
              <Select
                value={topic}
                onChange={this.handleChange}
                id="select-topic"
                name="topic"
              >
                <option value="" />
                <option value="sport">Sport</option>
                <option value="fashion">Fashion</option>
                <option value="design">Design</option>
                <option value="literature">Literature</option>
              </Select>
              <Select
                value={sortBy}
                onChange={this.handleChange}
                id="select-sort"
                name="sortBy"
              >
                <option value="" />
                <option value="popularity">Popularity</option>
                <option value="writenIn">Written in</option>
                <option value="publishedAt">Published at</option>
              </Select>
            </FilterWrapper>
            <FilterButtonWrapper>
              <StyledButton
                type="button"
                text="Clear"
                clickHandler={clearArticlesFilters}
                backgroundColor={defaultTheme.colors.darkViolet}
                borderColor={defaultTheme.colors.darkViolet}
                color={defaultTheme.colors.light}
              />
            </FilterButtonWrapper>
          </FiltersWrapper>
          <ArticlesWrapper>
            {articles[0] &&
              articles[0].map((article: any) => (
                <ArticleWrapper key={article.author + v1()}>
                  <ArticleImage
                    alt={article.title}
                    src={
                      article.urlToImage
                        ? article.urlToImage.replace('https', 'http')
                        : fallbackImage
                    }
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
                  <ArticleButton
                    to={{
                      pathname: `/details/:${this.changeTitle(article.title)}`,
                      state: { article },
                    }}
                  >
                    Know more
                  </ArticleButton>
                </ArticleWrapper>
              ))}
          </ArticlesWrapper>
        </ContentWrapper>
      </AppWrapper>
    );
  }
}

export default MainArticles;