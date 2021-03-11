import logo from './logo.svg';
import './App.css';
import React from 'react';

class Navbar extends React.Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
        );
    }
}

//function getArticle(url) {
//   return fetch(url)
//   .then((response) => response.json())
//   .then((responseJson) => {
////     console.log(responseJson.title)
//     return responseJson;
//   })
//   .catch((error) => {
//     console.error(error);
//   });
//}

async function getArticle(url) {
  try {
    let response = await fetch(url);
    let responseJson = await response.json();
//    console.log(responseJson.title)
    return responseJson;
   } catch(error) {
    console.error(error);
  }
}

function logger(text) {
  console.log(text)
}

function App() {
 getArticle('https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-1.json')
   .then(res => logger(res)).catch(err => console.log(err));
//  const article1 =  getArticle('https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-1.json');
//  getArticle('https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-2.json');
//  getArticle('https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-3.json');
//  console.log(article1)

   return (
      <div>
        <Navbar/>
        <div>
          [Page content here]
        </div>
      </div>
      );
}

export default App;
