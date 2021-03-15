import React from 'react';
import { NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
       <div className="article-nav">
          <NavLink name="Article1" to="/my-app/?url=https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-1.json">Article1</NavLink>
          <NavLink name="Article2" to="/my-app/?url=https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-2.json">Article2</NavLink>
          <NavLink name="Article3" to="/my-app/?url=https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-3.json">Article3</NavLink>
          <NavLink name="Article4" to="/my-app/?url=https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-4.json">Article4</NavLink>
          <NavLink name="Article5" to="/my-app/?url=https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-5.json">Article5</NavLink>
       </div>
    );
}

export default Navigation;