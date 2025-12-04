import { Button, Card, Typography } from '@mui/material';
import { useContext } from 'react';
import { PartieContext } from '../PartiesContext/PartiesContext';

interface ILignePartieProps {
  id: number;
}

function LignePartie(props: ILignePartieProps) {
  const { listeParties } = useContext(PartieContext);
  const partie = listeParties[props.id];
  return (
    <>
      <Card sx={{ padding: '20px' }}>
        <h3>{partie.nom_joueur.surnom}</h3>
        <Typography>Niveaux complétés: {partie.nombre_cases}</Typography>
        <Button variant="contained" component="a" href={'/partie/' + props.id}>
          Détails
        </Button>
      </Card>
    </>
  );
}
export default LignePartie;
