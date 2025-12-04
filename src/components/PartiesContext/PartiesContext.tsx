import React, { useState } from 'react';

interface INomJoueur {
  identifiant: string;
  surnom?: string;
}

interface ICauseMort {
  cause: string;
  description?: string;
}

interface IEnnemi {
  nom: string;
  estAggressif: Boolean;
  aGagne: Boolean;
  valeur: number;
}

interface IPartie {
  nom_joueur: INomJoueur;
  nombre_cases: number;
  date_partie: Date;
  ennemis_rencontrés: IEnnemi[];
  score_final: number;
  cause_mort: ICauseMort;
  est_valide: Boolean;
  raison_invalide: string;
}

export type PartieContextType = {
  listeParties: IPartie[];
  rechercherJoueur: (identifiant: String) => void;
  rechercherMort: (mort: String) => void;
  ajouterPartie: (partie: IPartie) => void;
  invaliderPartie: (id: Number, raison: String) => void;
  supprimerPartie: (id: Number) => void;
};

const listeVide: IPartie[] = [
  {
    nom_joueur: {
      identifiant: 'player',
      surnom: 'PLYR',
    },
    nombre_cases: 10,
    date_partie: new Date(Date.now()),
    ennemis_rencontrés: [
      {
        nom: 'Loup',
        estAggressif: true,
        aGagne: true,
        valeur: 0,
      },
    ],
    score_final: 0,
    cause_mort: {
      cause: 'Faim',
    },
    est_valide: false,
    raison_invalide: "Je ne l'aime pas",
  },
  {
    nom_joueur: {
      identifiant: 'melodie',
      surnom: 'MELO',
    },
    nombre_cases: 10,
    date_partie: new Date(Date.now()),
    ennemis_rencontrés: [],
    score_final: 0,
    cause_mort: {
      cause: 'Ennemi',
      description: 'Ours',
    },
    est_valide: true,
    raison_invalide: '',
  },
];

export const PartieContext = React.createContext<PartieContextType>({
  listeParties: listeVide,
  rechercherJoueur: () => {},
  rechercherMort: () => {},
  ajouterPartie: () => {},
  invaliderPartie: () => {},
  supprimerPartie: () => {},
});

export default function PartieProvider(props: any) {
  const [listeParties, setListeParties] = useState(listeVide);

  function rechercherJoueur(identifiant: String) {
    if (identifiant != '') {
      setListeParties(listeVide);
    }
  }

  function rechercherMort(mort: String) {
    if (mort != '') {
    }
  }

  function ajouterPartie(partie: IPartie) {
    if (partie != null) {
    }
  }

  function invaliderPartie(id: Number, raison: String) {
    if (id != -1 && raison != '') {
    }
  }

  function supprimerPartie(id: Number) {
    if (id != -1) {
    }
  }

  const values = {
    listeParties,
    rechercherJoueur,
    rechercherMort,
    ajouterPartie,
    invaliderPartie,
    supprimerPartie,
  };
  return (
    <PartieContext.Provider value={values}>
      {props.children}
    </PartieContext.Provider>
  );
}
