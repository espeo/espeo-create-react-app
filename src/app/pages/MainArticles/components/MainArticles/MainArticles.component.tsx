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
import { MainArticlesStateData } from '../../namespace';

interface StringObject {
  [key: string]: string | number;
}

interface OwnProps {
  fetchArticles(page: number, filters: StringObject): {};
  filterArticles(filters: StringObject): void;
  clearArticlesFilters(): void;
  articles: Array<MainArticlesStateData>;
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

  private changeTitle = (title: string) => {
    if (!title) {
      return '';
    }

    return title.toLowerCase().replace(/ /g, '-');
  };

  private handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
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

  public render() {
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
                <option value="today">
                  {intl.formatMessage({ id: 'mainArticles.filter.today' })}
                </option>
                <option value="week">
                  {intl.formatMessage({ id: 'mainArticles.filter.week' })}
                </option>
                <option value="month">
                  {intl.formatMessage({ id: 'mainArticles.filter.month' })}
                </option>
              </Select>
              <Select
                value={topic}
                onChange={this.handleChange}
                id="select-topic"
                name="topic"
              >
                <option value="" />
                <option value="sport">
                  {intl.formatMessage({ id: 'mainArticles.topic.sport' })}
                </option>
                <option value="fashion">
                  {intl.formatMessage({ id: 'mainArticles.topic.fashion' })}
                </option>
                <option value="design">
                  {intl.formatMessage({ id: 'mainArticles.topic.design' })}
                </option>
                <option value="literature">
                  {intl.formatMessage({ id: 'mainArticles.topic.literature' })}
                </option>
              </Select>
              <Select
                value={sortBy}
                onChange={this.handleChange}
                id="select-sort"
                name="sortBy"
              >
                <option value="" />
                <option value="popularity">
                  {intl.formatMessage({ id: 'mainArticles.sortBy.popularity' })}
                </option>
                <option value="writenIn">
                  {intl.formatMessage({ id: 'mainArticles.sortBy.writenIn' })}
                </option>
                <option value="publishedAt">
                  {intl.formatMessage({
                    id: 'mainArticles.sortBy.publishedAt',
                  })}
                </option>
              </Select>
            </FilterWrapper>
            <FilterButtonWrapper>
              <StyledButton
                type="button"
                text={intl.formatMessage({
                  id: 'mainArticles.filter.buttonClear',
                })}
                clickHandler={clearArticlesFilters}
                backgroundColor={defaultTheme.colors.darkViolet}
                borderColor={defaultTheme.colors.darkViolet}
                color={defaultTheme.colors.light}
              />
            </FilterButtonWrapper>
          </FiltersWrapper>
          <ArticlesWrapper>
            {articles &&
              articles.map((article: MainArticlesStateData) => (
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
                    <ArticleAuthor>
                      {intl.formatMessage({ id: 'mainArticles.author' })}
                    </ArticleAuthor>
                  )}
                  <ArticleTitle>{article.title}</ArticleTitle>
                  <ArticleDescription>{article.description}</ArticleDescription>
                  <ArticleButton
                    to={{
                      pathname: `/details/:${this.changeTitle(article.title)}`,
                      state: { article },
                    }}
                  >
                    {intl.formatMessage({ id: 'mainArticles.knowMore' })}
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
