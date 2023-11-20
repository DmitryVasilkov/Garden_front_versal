import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchProductsAction, setButtonClicked, setSelectedItemId } from '../../store/reducers/searchReducer';
import { Link } from 'react-router-dom';
import { FcSearch } from 'react-icons/fc'
import s from './index.module.css';

const Search = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.products);

  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  
  const handlerChange = (value) => {
    setSearchQuery(value);
    productsData(value);
  };

  const productsData = (value) => {
    const results = allProducts.filter((el) => {
      return value && el && el.title && el.title.toLowerCase().includes(value);
    });
    setResults(results);
  };

  const onClick = () => {
    setSearchQuery('');
    productsData('');

     // Обновляем listId в Redux-состоянии
    dispatch(setSelectedItemId(results.id));

    // Устанавливаем buttonClicked в false
    dispatch(setButtonClicked(false));
  };

  const handleSearch = () => {
    dispatch(setButtonClicked(true));
    localStorage.removeItem('listId');

    const searchResults = allProducts.filter(el =>
      el.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const searchResultsJSON = JSON.stringify(searchResults);
    localStorage.setItem('searchResults', searchResultsJSON);

    dispatch(searchProductsAction(searchResults));

    setSearchQuery('');
    productsData('');
  };

  return (
    <div className={s.container}>


      <div className={s.search_block}>
        <input
          type="text"
          placeholder="enter search"
          value={searchQuery}
          onChange={(e) => handlerChange(e.target.value)}
        />
        <Link to="./searched_products">
          <FcSearch onClick={handleSearch}>Search</FcSearch>
        </Link>
      </div>


      <div className={s.results_list}>
        {results.map((result, id) => (
          <Link to="./searched_products" 
                className={s.item} 
                onClick={() => localStorage.setItem('listId', result.id) ?? onClick()} 
                key={id}
          >
            {result.title}
          </Link>
        ))}
      </div>


    </div>
  );
};

export default Search;