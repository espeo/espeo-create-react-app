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
  articles: any;
  topic: string;
  sortBy: string;
  date: any;
  handleDate: any;
}

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

  handleClearFilters = () => {
    return alert('cler Filters');
  };

  render() {
    const { intl, articles, topic, sortBy, date } = this.props;

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
              <Button
                type="button"
                text="Clear"
                clickHandler={this.handleClearFilters}
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
                  <Link
                    to={{
                      pathname: `/details/:${this.changeTitle(article.title)}`,
                      state: { article },
                    }}
                  >
                    <Button
                      type="button"
                      text="Read more"
                      backgroundColor={defaultTheme.colors.nude}
                      borderColor={defaultTheme.colors.darkViolet}
                      color={defaultTheme.colors.darkViolet}
                      clickHandler={() => alert('new page')}
                    ></Button>
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
