import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getNews } from '../store/actions/data-actions';
import { StyledSpinner, StyledContainer } from '../shared/ui/components';
import NewsItem from '../components/news-item';

const News = ({ getNews, news, alert }) => {
  useEffect(() => {
    getNews();
  }, [getNews]);

  if (news === null) {
    if (alert) return <h1>{alert}</h1>;
    return <StyledSpinner>Loading...</StyledSpinner>;
  }

  return (
    <StyledContainer>
      {news.map(newsItem => {
        return <NewsItem newsItem={newsItem} key={newsItem.title} />;
      })}
    </StyledContainer>
  );
};

News.propTypes = {
  getNews: PropTypes.func.isRequired,
  news: PropTypes.array,
  alert: PropTypes.string,
};

News.defaultProps = {
  news: null,
  alert: null,
};

const mapStateToProps = state => ({
  news: state.data.news,
  alert: state.data.alert,
});

export default connect(mapStateToProps, { getNews })(News);
