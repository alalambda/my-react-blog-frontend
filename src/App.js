import './App.css';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import PostPage from './pages/PostPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/post/:postId' element={<PostPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/create-account' element={<CreateAccountPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
