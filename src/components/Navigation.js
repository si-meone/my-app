import React from 'react';
import { NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
       <div className="article-nav ">
          <NavLink to="/my-app/?url=https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-1.json">Article1 </NavLink>
          <NavLink to="/my-app/?url=https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-2.json">Article2 </NavLink>
          <NavLink to="/my-app/?url=https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-3.json">Article3 </NavLink>
          <NavLink to="/my-app/?url=https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-4.json">Article4 </NavLink>
          <NavLink to="/my-app/?url=https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-5.json">Article5</NavLink>
       </div>
    );
}

export default Navigation;