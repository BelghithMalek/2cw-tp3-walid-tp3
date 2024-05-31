const produits = [
    { id: 1, prix: 99.99, categorie_id: 1 },
    { id: 2, prix: 19.99, categorie_id: 2 },
    { id: 3, prix: 49.99, categorie_id: 3 },
    { id: 4, prix: 29.99, categorie_id: 3 },
    { id: 5, prix: 149.99, categorie_id: 1 }
];

function trouverProduit(critere) {
    return produits.filter(produit => produit.id === critere || 
        produit.prix === critere || 
        produit.categorie_id === critere);
}

const idRecherche = 2;
const prixRecherche = 19.99;
const categorieRecherche = 1;

const resultatParId = trouverProduit(idRecherche);
const resultatParPrix = trouverProduit(prixRecherche);
const resultatParCategorie = trouverProduit(categorieRecherche);

console.log('Résultat de la recherche par ID:', resultatParId);
console.log('Résultat de la recherche par prix:', resultatParPrix);
console.log('Résultat de la recherche par catégorie:', resultatParCategorie);