import React from 'react';

const Article = (props) => {
  const { article } = props;
  if (!article || article.length === 0) {
    return (<div className="instructions">Please choose an article above <br/> You can provide a ranking at the end of each article.<br/>
            Once all articles have been ranked you can submit your rankings, <br/> Thank you.</div>);
  }
  return (
    <div>
        {article.body.map((article) => {
          switch (article.type) {
            case 'heading':
              return (
                <div key={article.type} className='list'>
                   <span className='article-text'><h1>{article.model.text}</h1></span>
                </div>
              );
            case 'paragraph':
              return (
                <div key={article.type} className='list'>
                   <span className='article-text'><p>{article.model.text}</p></span>
                </div>
              );
            case 'image':
              return (
                <div key={article.type} className='list'>
                   <span className='article-image'>
                   <img src={article.model.url} alt={article.model.alt} height={article.model.height} width={article.model.width}></img>
                   </span>
                </div>
              );
            case 'list':
              if (article.model.type === 'unordered'){
                return (
                   <ul>
                   {article.model.items.map((item) => (
                       <li className='article-text'>{item}</li>
                    ))
                    }

                   </ul>
                );
              } else {
                return (
                  <div>OL not implemented</div>
                );
              }
            default:
              return (
              <div></div>
              );
          }
        })}
          </div>
  );
};
export default Article;