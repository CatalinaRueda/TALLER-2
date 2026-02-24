function getMovies() {
    return new Promise(resolve => {
        setTimeout(() => {
            const movies = [ 
                { id: 1, title: "InceptiOn", genre: "Sci-Fi", watched: false, releaseYear: 2010 }, 
                { id: 2, title: "The WhAle", genre: "Drama", watched: true, releaseYear: 2022 }, 
                { id: 3, title: "ThE Shinning", genre: "Terror", watched: false, releaseYear: 1980 }, 
                { id: 4, title: "AmAdeUs", genre: "Drama", watched: false, releaseYear: 1984 }, 
                { id: 5, title: "ThEre WilL Be blooD", genre: "Drama", watched: true, releaseYear: 2007 } 
            ];
            console.log("Películas obtenidas");
            resolve(movies);
        }, 1500);
    });
}

