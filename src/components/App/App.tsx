import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BarreHaut from '../BarreHaut';
import './App.css';
import PagePrincipal from '../PagePrincipal';
import ListePartie from '../ListeParties';
import PageBienvenue from '../PageBienvenue';
import DetailsPartie from '../DetailsPartie';
import PartieProvider from '../PartiesContext/PartiesContext';

function App() {
  return (
    <>
      <PartieProvider>
        <BarreHaut />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PagePrincipal />}>
              <Route index element={<PageBienvenue />} />
              <Route path="liste" element={<ListePartie />} />
              <Route path="partie/:id" element={<DetailsPartie />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PartieProvider>
    </>
  );
}

export default App;
