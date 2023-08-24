import { Posts } from './components/Posts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Provider } from 'react-redux';
import { AddPost } from './components/AddPost';
import './App.css';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/posts' element={ <Posts />} />
            <Route path='/addpost' element={<AddPost />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
