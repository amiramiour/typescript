// Importation du module externe fictif
import { alerter, logger } from "../e1/mon-module/index.js";

// Définition des interfaces
interface Etudiant {
  id: number;
  nom: string;
  niveau: string; // Ex: "Licence", "Master"
}

interface Cours {
  code: string;
  titre: string;
  niveau: NiveauCours;
}

interface Professeur {
  id: number;
  nom: string;
  matiere: string;
}

// Enum pour les niveaux de cours
export  enum NiveauCours {
  Debutant,
  Intermediaire,
  Avance,
}

// Classe de gestion des cours
export  class GestionCours {
  private etudiants: Etudiant[] = [];
  private cours: Cours[] = [];
  private inscriptions: { etudiant: Etudiant; cours: Cours }[] = [];

  constructor(coursDisponibles: Cours[]) {
    this.cours = coursDisponibles;
  }

  // Méthode pour rechercher un cours par code
  private trouverCours(code: string): Cours | undefined {
    return this.cours.find((c) => c.code === code);
  }

  // Inscrire un étudiant à un cours
  inscrireEtudiant(coursCode: string, etudiant: Etudiant): void {
    const cours = this.trouverCours(coursCode);
    if (!cours) {
      console.log(`Cours avec le code ${coursCode} non trouvé.`);
      return;
    }
    this.inscriptions.push({ etudiant, cours });
    logger(`${etudiant.nom} a été inscrit au cours ${cours.titre}.`);
    alerter(`${etudiant.nom} est maintenant inscrit à ${cours.titre}.`);
  }

  // Afficher toutes les inscriptions
  afficherInscriptions(): void {
    console.log("Inscriptions aux cours :");
    this.inscriptions.forEach(({ etudiant, cours }) => {
      console.log(`${etudiant.nom} (${etudiant.niveau}) est inscrit à ${cours.titre} (${NiveauCours[cours.niveau]}).`);
    });
  }
}

// utilisation
const coursDisponibles: Cours[] = [
  { code: "TS101", titre: "Introduction à TypeScript", niveau: NiveauCours.Debutant },
  { code: "JS202", titre: "JavaScript Avancé", niveau: NiveauCours.Intermediaire },
];

const gestion = new GestionCours(coursDisponibles);
const etudiant1: Etudiant = { id: 1, nom: "Alice", niveau: "Licence" };
const etudiant2: Etudiant = { id: 2, nom: "Bob", niveau: "Master" };

gestion.inscrireEtudiant("TS101", etudiant1);
gestion.inscrireEtudiant("JS202", etudiant2);
gestion.afficherInscriptions();