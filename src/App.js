import React, { useEffect, useState } from 'react';
import './App.css';
import Article from './components/Article';
import Loading from './components/Loading';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {

  const authResult = new URLSearchParams(window.location.search);
  const url = authResult.get('url') ? authResult.get('url') : 'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-1.json';
//  startURL = 'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-1.json';

//  const apiUrltoLoad = apiUrl1;
  const ArticleLoading = Loading(Article);
  const [appState, setAppState] = useState({
    loading: false,
    article: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    fetch(url)
      .then((res) => res.json())
      .then((article) => {
        setAppState({ loading: false, article: article });
      });
  }, [setAppState]);

//  function refreshPage() {
//    window.location.reload(false);
//  }



  return (
    <div className='App'>
      <div className='article-title'>
        <h1>BBC News</h1>
      </div>
      <div><BrowserRouter forceRefresh>
         <Navigation className="article-nav"></Navigation>
         </BrowserRouter>
      </div>
      <div className='article-body'>
        <ArticleLoading isLoading={appState.loading} article={appState.article} />
      </div>
      <footer>

      </footer>

    </div>

  );
}
export default App;