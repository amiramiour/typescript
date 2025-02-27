// Importation du module externe fictif
import { alerter, logger } from "../e1/mon-module/index.js";
// Enum pour les niveaux de cours
export var NiveauCours;
(function (NiveauCours) {
    NiveauCours[NiveauCours["Debutant"] = 0] = "Debutant";
    NiveauCours[NiveauCours["Intermediaire"] = 1] = "Intermediaire";
    NiveauCours[NiveauCours["Avance"] = 2] = "Avance";
})(NiveauCours || (NiveauCours = {}));
// Classe de gestion des cours
export class GestionCours {
    constructor(coursDisponibles) {
        this.etudiants = [];
        this.cours = [];
        this.inscriptions = [];
        this.cours = coursDisponibles;
    }
    // Méthode pour rechercher un cours par code
    trouverCours(code) {
        return this.cours.find((c) => c.code === code);
    }
    // Inscrire un étudiant à un cours
    inscrireEtudiant(coursCode, etudiant) {
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
    afficherInscriptions() {
        console.log("Inscriptions aux cours :");
        this.inscriptions.forEach(({ etudiant, cours }) => {
            console.log(`${etudiant.nom} (${etudiant.niveau}) est inscrit à ${cours.titre} (${NiveauCours[cours.niveau]}).`);
        });
    }
}
// utilisation
const coursDisponibles = [
    { code: "TS101", titre: "Introduction à TypeScript", niveau: NiveauCours.Debutant },
    { code: "JS202", titre: "JavaScript Avancé", niveau: NiveauCours.Intermediaire },
];
const gestion = new GestionCours(coursDisponibles);
const etudiant1 = { id: 1, nom: "Alice", niveau: "Licence" };
const etudiant2 = { id: 2, nom: "Bob", niveau: "Master" };
gestion.inscrireEtudiant("TS101", etudiant1);
gestion.inscrireEtudiant("JS202", etudiant2);
gestion.afficherInscriptions();
