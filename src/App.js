import React, { useEffect, useState } from 'react';
import './App.css';
import Article from './components/Article';
import Loading from './components/Loading';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  const apiUrl1 = 'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-1.json';
  const apiUrl2 = 'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-2.json';
  const apiUrl3 = 'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-3.json';
  const apiUrl6 = 'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/no_article';

  const ArticleLoading = Loading(Article);
  const [appState, setAppState] = useState({
    loading: false,
    articles: null,
  });

  useEffect((url) => {
    setAppState({ loading: true });
    const apiUrl = apiUrl1;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((articles) => {
        setAppState({ loading: false, articles: articles });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='article-title'>
        <h1>BBC News Articles</h1>
      </div>
      <div className='article-body'>
        <ArticleLoading isLoading={appState.loading} articles={appState.articles} />
      </div>
      <footer>
        <BrowserRouter>
        <Navigation></Navigation>
        </BrowserRouter>
      </footer>

    </div>

  );
}
export default App;