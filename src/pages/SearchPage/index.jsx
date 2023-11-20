import React from 'react';
import { useSelector } from 'react-redux';
import s from './index.module.css';
import ProductCard from '../../components/ProductCard';
import Wrapper from '../../components/UI/Wrapper';
import Title from '../../components/UI/Title';

const SearchPage = () => {
  const searchResults = useSelector(state => state.search.searchResults);
  const productsResults = useSelector(state => state.products);
  const id = useSelector(state => state.search.selectedItemId);
  const buttonClicked = useSelector(state => state.search.buttonClicked);

  const getFilteredResults = () => {
    if (buttonClicked) {
      return searchResults;
    }

    const listId = localStorage.getItem('listId');
    if (listId !== null) {
      return productsResults.filter(el => Number(listId) === el.id);
    }

    const searchResultsJSON = localStorage.getItem('searchResults');
    try {
      const parsedSearchResults = JSON.parse(searchResultsJSON);
      return parsedSearchResults || [];
    } catch (error) {
      console.error('Error parsing search results from localStorage', error);
      return [];
    }
  };

  const filteredResults = getFilteredResults();

  return (
    <Wrapper>
      <Title>Search</Title>
      <div className={s.searchContainer}>
        {filteredResults.map((el) => <ProductCard key={el.id} {...el} />)}
      </div>
    </Wrapper>
  );
};

export default SearchPage;