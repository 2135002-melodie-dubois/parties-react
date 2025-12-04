import { Typography } from '@mui/material';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PartieContext } from '../PartiesContext/PartiesContext';

function DetailsPartie() {
  const { id } = useParams();
  const { listeParties } = useContext(PartieContext);

  if (
    id != undefined &&
    parseInt(id) >= 0 &&
    parseInt(id) < listeParties.length
  ) {
    const partie = listeParties[parseInt(id)];
    return (
      <>
        <h2>
          Partie de {partie.nom_joueur.surnom} ({partie.nom_joueur.identifiant})
        </h2>
        <Typography>A survécu {partie.nombre_cases} niveaux</Typography>
        <Typography>
          Est mort(e) de: {partie.cause_mort.cause}
          {partie.cause_mort.description
            ? '(' + partie.cause_mort.description + ')'
            : ''}
        </Typography>
        <Typography>
          Ennemis rencontrés:
          {partie.ennemis_rencontrés.map((e) => (
            <>
              <Typography>
                {e.nom}
                {e.estAggressif ? '(Aggressif)' : ''}
              </Typography>
            </>
          ))}
        </Typography>
        <h2>Score final: XXX</h2>
        <div>Date:XXX</div>
      </>
    );
  } else {
    return (
      <>
        <h1>Cette partie n'existe pas</h1>
      </>
    );
  }
}
export default DetailsPartie;
