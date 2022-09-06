
import { Route, Routes } from 'react-router-dom';
import { AppHeader } from './cmps/app-header';
import { ToyDetails } from './cmps/toy-detalis';
import { ToyEdit } from './cmps/toy-edit';
import { ToyApp } from './views/toy-app';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main className='main-app'>

        <Routes>
          <Route path='' element={<ToyApp />}>
            <Route path='toy/:toyId' element={<ToyDetails/>} />
          </Route>

          <Route path='toy/edit/:toyId' element={<ToyEdit />} />
          <Route path='toy/edit' element={<ToyEdit />} />

        </Routes>

      </main>
    </div>
  );
}

export default App;
