import  Header  from './components/partials/Header'
import Footer from './components/partials/Footer'
import Home from './components/pages/Home';
import { Goals, GoalDetails } from './components/pages/Goals';
import { Route, Routes } from 'react-router-dom';
import NotFoud from './components/pages/NotFoud';

const  App = () => {
  return (
    <div className="App">
      <Header />
      <main>
       <Routes>
        <Route index element={<Home />} />

        <Route path='/goals'>
          <Route index element={<Goals />} />
          <Route path=':id' element={<GoalDetails />} />
          </Route>

        <Route path='*' element={<NotFoud />} />

      
        </Routes>
       
      </main>
      <Footer />
      {/* <Link to="/"> Home</Link> */}
    </div>
  );
}

export default App;
