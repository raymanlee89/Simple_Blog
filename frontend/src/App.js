import './App.css';
import Home from './containers/Home';
import Edit from './containers/Edit';
import Post from './containers/Post';
import usePage from './hooks/usePage';

function App() {
  const { mode, post, changePage } = usePage();
  return (
    <>
      {(() => {
        switch (mode) {
          case 'Home':
            return <Home changePage={changePage}/>;
          case 'Edit':
            return <Edit changePage={changePage} post={post}/>;
          case 'Post':
            return <Post changePage={changePage} postId={post.postId}/>;
          default :
            return <></>;
        }
      })()}
    </>
  );
}

export default App;
