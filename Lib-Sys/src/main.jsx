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
import Contact from './pages/contact/contact.jsx';
import Error from './components/Error.jsx';

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/book' element={<BookList />} />
          <Route path='/book/:id' element={<BookDetails />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>,
  </AppProvider>
)
