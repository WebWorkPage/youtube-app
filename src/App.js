import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element: <MainContainer/>
      },
      {
        path:"watch", //or path:"/watch"
        element: <WatchPage/>
      },
      // {
      //   path:"demo",
      //   element: <>
      //   <Demo/>
      //   {/* <Demo2/> */}
      //   </>
      // }
    ]
  }
],
{
  basename: "/youtube-app"
})

function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        <Head />
        <RouterProvider router={appRouter} /> {/* comp will change here according to RouterProvider - <Body/> will come here*/}
      </div>
    </Provider>
  );
}

export default App;

/**
 * Head
 * Body
 *   sidebar
 *     MneuItems
 *   MainContainer
 *     ButtonsList
 *       Button
 *     VideoContainer
 *       VideoCard
 * 
 * 
 * 
 * 
 * <script>
function doit()
{ // do some stuff
}
</script>
<a href="javascript:doit()"><img src="pic.gif"></a>
 */