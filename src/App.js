import React, { useEffect, useState } from 'react';
import './App.css';
import Article from './components/Article';
import Loading from './components/Loading';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import UseLocalStorage from './components/LocalStore';


function App() {

  const getLastItem = url => url.substring(url.lastIndexOf('/') + 1);
  const authResult = new URLSearchParams(window.location.search);
  const url = authResult.get('url') ? authResult.get('url') : '';
  if (!authResult.get('url')){
         localStorage.removeItem('article-1.json');
         localStorage.removeItem('article-2.json');
         localStorage.removeItem('article-3.json');
         localStorage.removeItem('article-4.json');
         localStorage.removeItem('article-5.json');
         localStorage.removeItem('article1');
         localStorage.removeItem('article2');
         localStorage.removeItem('article3');
         localStorage.removeItem('article4');
         localStorage.removeItem('article5');
         localStorage.setItem('article-1.json','true');
         localStorage.setItem('article-2.json','false');
         localStorage.setItem('article-3.json','false');
         localStorage.setItem('article-4.json','false');
         localStorage.setItem('article-5.json','false');
  }else{
      localStorage.setItem(getLastItem(url) ,'true');
  }

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

  const [article1, setArticle1] = UseLocalStorage('article1', '');
  const [article2, setArticle2] = UseLocalStorage('article2', '');
  const [article3, setArticle3] = UseLocalStorage('article3', '');
  const [article4, setArticle4] = UseLocalStorage('article4', '');
  const [article5, setArticle5] = UseLocalStorage('article5', '');

  const mySubmitHandler = (event) => {
    if (article1 && article2 && article3 && article4 && article5){
       alert("Summiting the following: article1 = " + article1 +
       "  article2 = " + article2 +
       "  article3 =  " + article3 +
       "  article4 = " + article4 +
       "  article5 = " + article5);
    } else {
       alert("you may not of read or ranked all the articles no submission occured")
       event.preventDefault();
       return
    }
  }

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
    <div>
        <form onSubmit={mySubmitHandler} method="POST" action="/">
          Rate articles:
          <br/>
          {localStorage.getItem('article-1.json') === 'true' ?
          <input type="text" placeholder="Article 1 rank" value={article1} onChange={e => setArticle1(e.target.value)} /> : ''}
          {localStorage.getItem('article-2.json') === 'true' ?
          <input type="text" placeholder="Article 2 rank" value={article2} onChange={e => setArticle2(e.target.value)} /> : ''}
          {localStorage.getItem('article-3.json') === 'true' ?
          <input type="text" placeholder="Article 3 rank" value={article3} onChange={e => setArticle3(e.target.value)} /> : ''}
          {localStorage.getItem('article-4.json') === 'true' ?
          <input type="text" placeholder="Article 4 rank" value={article4} onChange={e => setArticle4(e.target.value)} /> : ''}
          {localStorage.getItem('article-5.json') === 'true' ?
          <input type="text" placeholder="Article 5 rank" value={article5} onChange={e => setArticle5(e.target.value)} /> : ''}
          <br/>
          <button type="submit">Send Ranking!</button>
        </form>


    </div>
      </footer>

    </div>

  );
}
export default App;