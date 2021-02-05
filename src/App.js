import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Content from './components/Content';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/about';
import Menu from './pages/menu';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = ()=> setIsOpen(!isOpen);
  useEffect(() => {
    
    const hiddenMenu = ()=>{
      if(window.innerWidth > 768  && isOpen){
        setIsOpen(false);
      }
    }
    window.addEventListener('resize', hiddenMenu)
    return ()=>{
      window.removeEventListener('resize', hiddenMenu);
    }
  })
	return (
		<>
				<Navbar toggle={toggle}/>
        <Dropdown toggle={toggle} isOpen={isOpen}/>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/menu' exact component={Menu}></Route>
          <Route path='/acerca-de' exact component={About}></Route>
        </Switch>
        <Footer/>
		</>
	);
}

export default App;
