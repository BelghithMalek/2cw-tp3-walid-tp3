const commandes = [
    { id: 1, id_client: 1, date_commande: '2024-05-01', total: 249.98 },
    { id: 2, id_client: 2, date_commande: '2024-06-15', total: 399.99 },
    { id: 3, id_client: 3, date_commande: '2024-07-20', total: 79.98 }
];

function trouverCommande(critere) {
    return commandes.filter(commande => commande.id === critere || 
        commande.id_client === critere ||
        new Date(commande.date_commande).toISOString().includes(critere) ||
        commande.total === critere);
}

const idRecherche = 2;
const idClientRecherche = 1;
const dateRecherche = '2024-06-15';
const totalRecherche = 79.98;

const resultatParId = trouverCommande(idRecherche);
const resultatParIdClient = trouverCommande(idClientRecherche);
const resultatParDate = trouverCommande(dateRecherche);
const resultatParTotal = trouverCommande(totalRecherche);

console.log('Résultat de la recherche par ID:', resultatParId);
console.log('Résultat de la recherche par ID Client:', resultatParIdClient);
console.log('Résultat de la recherche par Date:', resultatParDate);
console.log('Résultat de la recherche par Total:', resultatParTotal);
