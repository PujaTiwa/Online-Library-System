/* eslint-disable react/jsx-no-undef */
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import './index.css'
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import BookList from './components/BookList/BookList.jsx'
import BookDetails from './components/BookDetails/BookDetails.jsx'
import { AppProvider } from './context.jsx';

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/about' element={<About />} />
          <Route path='/book' element={<BookList />} />
          <Route path='/book/:id' element={<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>,
  </AppProvider>
)
