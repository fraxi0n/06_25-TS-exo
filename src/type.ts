
// ========================================================================
// Exercice 2 : Interfaces des Objets


// ========================================================================
// Objectif : Décrire le type de chaque catégorie de produit.

//transfert dans type.ts soon 


//
// 1. Créez une interface "Book" avec les propriétés correspondantes.

export interface Book  {
    title: string,
    author:string,
    year:number 
}
// 2. Créez une interface "Movie" avec les propriétés correspondantes.
export interface Movie  {
    title: string,
    director:string,
    year:number 
}

// 3. Créez une interface "Album" avec les propriétés correspondantes.
export interface Album  {
    title: string,
    artist:string,
    year:number 
}
// ========================================================================
// Exercice 3 : Interface de l’Objet Global


// ========================================================================
// Objectif : Utilisez les interfaces précédentes pour typer l’objet "data".

 export interface MediaData {
    books : Book[],
    movies: Movie[],
    albums: Album[]
 }

//
// 1. Créez une interface "MediaData" avec trois propriétés :
//    - books : tableau de Book
//    - movies : tableau de Movie
//    - albums : tableau de Album
// 2. Typez la constante `data` contenant les données (plus haut dans le fichier)
//    avec l’interface MediaData.

