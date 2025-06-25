// export {};

// ========================================================================
// Données de Départ
// ========================================================================

//youpi
const data : MediaData = {
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

// ========================================================================
// Exercice 1 : Typage de Constantes Simples
// ========================================================================

console.log("Exercice 1 : ")
console.log("-")



// Objectif : Comprendre et appliquer les types de base en TypeScript.
//
// 1. Créez une constante "appName" de type string contenant le nom de l'application.

const appName : string = "Bocchi the application"

// 2. Créez une constante "isOnline" de type boolean indiquant si l'application est connectée.

const isOnline : boolean = true // a quoi ça sert si c'est une constante ?? plutot une propriété d'objet app.isOnline

// 3. Créez une constante "maxItems" de type number représentant un maximum autorisé.

const maxItems = 42

console.log( appName , isOnline , maxItems )

// ========================================================================
// Exercice 2 : Interfaces des Objets
console.log("Exercice 2 : ")
console.log("-")

// ========================================================================
// Objectif : Décrire le type de chaque catégorie de produit.

//transfert dans type.ts soon 


//
// 1. Créez une interface "Book" avec les propriétés correspondantes.

interface Book  {
    title: string,
    author:string,
    year:number 
}
// 2. Créez une interface "Movie" avec les propriétés correspondantes.
interface Movie  {
    title: string,
    director:string,
    year:number 
}

// 3. Créez une interface "Album" avec les propriétés correspondantes.
interface Album  {
    title: string,
    artist:string,
    year:number 
}
// ========================================================================
// Exercice 3 : Interface de l’Objet Global
console.log("Exercice 3 : ")
console.log("-")

// ========================================================================
// Objectif : Utilisez les interfaces précédentes pour typer l’objet "data".

 interface MediaData {
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

// ========================================================================
// Exercice 4 : Fonction d’Affichage Contextuel
console.log("Exercice 4 : ")
console.log("-")

// ========================================================================
// Objectif : Créez une fonction qui adapte son message selon le type d’objet.
//


// 1. Créez une fonction "displayItemDetails" qui accepte un objet de type
//    Book, Movie ou Album (vous pouvez utiliser un type union).


const displayItemDetails = ( pOeuvre : Movie | Book | Album) => {


   let oeuvreType  =""
   let oeuvreCreator  =""


   if ('author' in pOeuvre)
   {
    oeuvreType = "livre écrit"
    oeuvreCreator = "l'auteur "+pOeuvre.author
   }
   else if ('director' in pOeuvre)
   {
        oeuvreType = "film réalisé"
    oeuvreCreator = "l'auteur "+pOeuvre.director

   }
   else if ('artist' in pOeuvre)
   {
    oeuvreType = "album composé"
    oeuvreCreator = "l'artiste "+pOeuvre.artist
   }
   else {
    alert('wtf error de propriété d objet')
    console.error( 'wtf error de propriété d objet');
   }

   return  "l'oeuvre: "+ pOeuvre.title + " est un "+ oeuvreType +" en "+ pOeuvre.year+" par "+oeuvreCreator

    // console.log ( "l oeuvre: "+ pOeuvre.title + " créé est un "+ oeuvreType +"  en "+ pOeuvre.year+" par "  )
 } 

 displayItemDetails(data.books[1])

 console.log( displayItemDetails(data.movies[0]) )
 console.log( displayItemDetails(data.albums[0]) )
 console.log( displayItemDetails(data.books[0]) )



// 2. La fonction doit afficher un message personnalisé selon le type d'objet.
//    Exemples :
//     - "Livre : The Hobbit par J.R.R. Tolkien (1937)"
//     - "Film : Inception réalisé par Christopher Nolan (2010)"
//     - "Album : Thriller par Michael Jackson (1982)"

// ========================================================================
// Exercice 5 : Boucle sur Tous les Éléments
console.log("Exercice 5 : ")
console.log("-")

// ========================================================================
// Objectif : Utiliser la fonction "displayItemDetails" avec tous les tableaux.
//
// 1. Parcourez tous les tableaux de "data" avec des boucles forEach.
// 2. Appelez "displayItemDetails" pour chaque élément rencontré


for (const pOeuvretype in data ) 
{
    const oeuvreType  = data[pOeuvretype as keyof MediaData]

    console.log(  pOeuvretype , " : " )
    oeuvreType.forEach( pOeuvre => {
        console.log(  displayItemDetails(pOeuvre) )
    });
}
