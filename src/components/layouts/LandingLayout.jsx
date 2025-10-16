import { Outlet } from 'react-router-dom';
import Header from '../common/header/Header';
import Footer from "../common/footer/Footer"
import { Button } from '@heroui/button';

const LandingLayout = () => {
  return (
    <div className="w-full">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default LandingLayout;
