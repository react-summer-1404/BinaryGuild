import { Outlet } from 'react-router-dom';
import Header from '../common/landing-header/Header';
import Footer from "../common/footer/Footer";

const LandingLayout = () => { 
  return (
    <div className="w-11/12 m-auto flex flex-wrap gap-6">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default LandingLayout;
