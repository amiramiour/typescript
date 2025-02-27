import { GestionCours, NiveauCours } from "./gestionCours.js";
import { alerter, logger } from "../e1/mon-module/index.js";

// Définition des cours disponibles
const coursDisponibles = [
  { code: "TS101", titre: "Introduction à TypeScript", niveau: NiveauCours.Debutant },
  { code: "JS202", titre: "JavaScript Avancé", niveau: NiveauCours.Intermediaire },
];

// Initialisation du gestionnaire de cours
const gestion = new GestionCours(coursDisponibles);

// Création des étudiants
const etudiant1 = { id: 1, nom: "Alice", niveau: "Licence" };
const etudiant2 = { id: 2, nom: "Bob", niveau: "Master" };

// Inscription des étudiants
gestion.inscrireEtudiant("TS101", etudiant1);
gestion.inscrireEtudiant("JS202", etudiant2);
console.log("--- S6 E2 ---");
// Affichage des inscriptions
gestion.afficherInscriptions();
