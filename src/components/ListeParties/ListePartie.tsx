import { useContext } from 'react';
import { PartieContext } from '../PartiesContext/PartiesContext';
import LignePartie from '../LignePartie';

function ListePartie() {
  const { listeParties } = useContext(PartieContext);
  return (
    <>
      <h2>Liste des parties</h2>
      {listeParties.map((_partie, index) => (
        <>
          <br />
          <LignePartie id={index}></LignePartie>
        </>
      ))}
    </>
  );
}

export default ListePartie;
