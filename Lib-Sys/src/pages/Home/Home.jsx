import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header.jsx';

const Home = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  )
}

export default Home;