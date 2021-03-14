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
  const articles = ['article-1.json', 'article-2.json', 'article-3.json', 'article-4.json', 'article-5.json']
  const articleKeys = ['article1', 'article2', 'article3', 'article4', 'article5']
  const url = authResult.get('url') ? authResult.get('url') : '';
  if (!authResult.get('url')){
    resetLocalStorageVars();
  }else{
      localStorage.setItem(getLastItem(url) ,'true');
  }

  function resetLocalStorageVars(){
    removeLocalStorageVars(articles);
    removeLocalStorageVars(articleKeys);
    setupLocalStorageVars(articles);
  }

  function removeLocalStorageVars(items){
    items.map((item) => localStorage.removeItem(item));
  }

  function setupLocalStorageVars(items){
    items.map((item) => localStorage.setItem(item,'false'));
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

  const mySubmitHandler = (event) => {
    if (article1 && article2 && article3 && article4 && article5){
       alert("Summiting the following: " +
         "  article1 = " + article1 +
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

  function hasBeenVisited(article){
    return localStorage.getItem(article) === 'true';
   }

  function allArticlesVisited(){
    return articles.every(article => localStorage.getItem(article) === 'true');
  }

  function anyArticleVisited(){
    return articles.some(article => localStorage.getItem(article) === 'true');
  }

  const [article1, setArticle1] = UseLocalStorage('article1', '');
  const [article2, setArticle2] = UseLocalStorage('article2', '');
  const [article3, setArticle3] = UseLocalStorage('article3', '');
  const [article4, setArticle4] = UseLocalStorage('article4', '');
  const [article5, setArticle5] = UseLocalStorage('article5', '');

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
        <form className='rank-form'onSubmit={mySubmitHandler} method="POST" action="/">
          {anyArticleVisited() ? <p>Rank  Articles (1 to 5):</p> : ''}
          {hasBeenVisited(articles[0]) ?
          <>
            <label for={articleKeys[0]}>{articleKeys[0]}: </label>
            <input type="number" placeholder="0" value={article1} id={articleKeys[0]} name={articleKeys[0]} min="1" max="5" onChange={e => setArticle1(e.target.value)} />
            <br/>
          </>
          : ''}
          {hasBeenVisited(articles[1]) ?
          <>
            <label for={articleKeys[1]}>{articleKeys[1]}: </label>
            <input type="number" placeholder="0" value={article2} id={articleKeys[1]} name={articleKeys[1]} min="1" max="5" onChange={e => setArticle2(e.target.value)} />
            <br/>
          </>
          : ''}
          {hasBeenVisited(articles[2]) ?
          <>
            <label for={articleKeys[2]}>{articleKeys[2]}: </label>
            <input type="number" placeholder="0" value={article3} id={articleKeys[2]} name={articleKeys[2]} min="1" max="5" onChange={e => setArticle3(e.target.value)} />
            <br/>
          </>
          : ''}
          {hasBeenVisited(articles[3]) ?
          <>
            <label for={articleKeys[3]}>{articleKeys[3]}: </label>
            <input type="number" placeholder="0" value={article4} id={articleKeys[3]} name={articleKeys[3]} min="1" max="5" onChange={e => setArticle4(e.target.value)} />
            <br/>
          </>
          : ''}
          {hasBeenVisited(articles[4]) ?
          <>
            <label for={articleKeys[4]}>{articleKeys[4]}: </label>
            <input type="number" placeholder="0" value={article5} id={articleKeys[4]} name={articleKeys[4]} min="1" max="5" onChange={e => setArticle5(e.target.value)} />
            <br/>
          </>
          : ''}

          <br/>
          {allArticlesVisited() ? <button type="submit">Send Rankings</button> : ''}
        </form>
      </div>
      </footer>

    </div>

  );
}
export default App;