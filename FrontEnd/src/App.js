import { Routes, Route } from 'react-router-dom';
import Intro from './Components/Intro/Intro';
import Form from './Components/Form/Form';
import { Provider } from 'react-redux';
import store from './Redux/Store/store';
import UserBoard from './Components/UserBoard/UserBoard';
import CreatePage from './Components/CreatePage/CreatePage';

function App() {
  return (
    <Provider store={store}>
      <Routes>
      <Route path='/' element={<Intro />} ></Route>
      <Route path='/login' element={<Form />} ></Route>
      <Route path='/userpage' element={<UserBoard />} ></Route>
      <Route path='/createpage' element={<CreatePage />}></Route>
    </Routes>
    </Provider>
  );
}

export default App;
