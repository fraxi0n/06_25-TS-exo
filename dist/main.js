// ========================================================================
// Données de Départ
// ========================================================================
const data = {
    books: [
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            year: 1937,
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949,
        },
    ],
    movies: [
        {
            title: "Inception",
            director: "Christopher Nolan",
            year: 2010,
        },
        {
            title: "Parasite",
            director: "Bong Joon-ho",
            year: 2019,
        },
    ],
    albums: [
        {
            title: "Thriller",
            artist: "Michael Jackson",
            year: 1982,
        },
        {
            title: "Back in Black",
            artist: "AC/DC",
            year: 1980,
        },
    ],
};
export {};
// ========================================================================
// Exercice 1 : Typage de Constantes Simples
// ========================================================================
// Objectif : Comprendre et appliquer les types de base en TypeScript.
//
// 1. Créez une constante "appName" de type string contenant le nom de l'application.
// 2. Créez une constante "isOnline" de type boolean indiquant si l'application est connectée.
// 3. Créez une constante "maxItems" de type number représentant un maximum autorisé.
// ========================================================================
// Exercice 2 : Interfaces des Objets
// ========================================================================
// Objectif : Décrire le type de chaque catégorie de produit.
//
// 1. Créez une interface "Book" avec les propriétés correspondantes.
// 2. Créez une interface "Movie" avec les propriétés correspondantes.
// 3. Créez une interface "Album" avec les propriétés correspondantes.
// ========================================================================
// Exercice 3 : Interface de l’Objet Global
// ========================================================================
// Objectif : Utilisez les interfaces précédentes pour typer l’objet "data".
//
// 1. Créez une interface "MediaData" avec trois propriétés :
//    - books : tableau de Book
//    - movies : tableau de Movie
//    - albums : tableau de Album
// 2. Typez la constante `data` contenant les données (plus haut dans le fichier)
//    avec l’interface MediaData.
// ========================================================================
// Exercice 4 : Fonction d’Affichage Contextuel
// ========================================================================
// Objectif : Créez une fonction qui adapte son message selon le type d’objet.
//
// 1. Créez une fonction "displayItemDetails" qui accepte un objet de type
//    Book, Movie ou Album (vous pouvez utiliser un type union).
// 2. La fonction doit afficher un message personnalisé selon le type d'objet.
//    Exemples :
//     - "Livre : The Hobbit par J.R.R. Tolkien (1937)"
//     - "Film : Inception réalisé par Christopher Nolan (2010)"
//     - "Album : Thriller par Michael Jackson (1982)"
// ========================================================================
// Exercice 5 : Boucle sur Tous les Éléments
// ========================================================================
// Objectif : Utiliser la fonction "displayItemDetails" avec tous les tableaux.
//
// 1. Parcourez tous les tableaux de "data" avec des boucles forEach.
// 2. Appelez "displayItemDetails" pour chaque élément rencontré
