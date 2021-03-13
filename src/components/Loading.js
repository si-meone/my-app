import React from 'react';

function Loading(Component) {
  return function LoadingComponent({ loading, ...props }) {
    if (!loading) return <Component {...props} />;
    return (
      <div className='article-loading-text'>Fetching Article please wait....</div>
    );
  };
}
export default Loading;