function getMovies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const movies = [
                { id: 1, title: "InceptiOn", genre: "Sci-Fi", watched: false, releaseYear: 2010 },
                { id: 2, title: "The WhAle", genre: "Drama", watched: true, releaseYear: 2022 },
                { id: 3, title: "ThE Shinning", genre: "Terror", watched: false, releaseYear: 1980 },
                { id: 4, title: "AmAdeUs", genre: "Drama", watched: false, releaseYear: 1984 },
                { id: 5, title: "ThEre WilL Be blooD", genre: "Drama", watched: true, releaseYear: 2007 }
            ];

            const success = true;

            if (success) {
                resolve(movies);
            } else {
                reject("Error al obtener las películas");
            }
        }, 1500);
    });
}

async function initApp() {
    const container = document.getElementById("movies-container");
    container.innerHTML = "<p>Cargando películas...</p>";

    try {
        const movies = await getMovies();
        container.innerHTML = "";

        const normalizedMovies = movies.map((movie) => {
            const normalizedTitle = movie.title
                .toLowerCase()
                .split(" ")
                .map((word) => {
                    return word.charAt(0).toUpperCase() + word.slice(1);
                })
                .join(" ");

            const type = movie.releaseYear < 2000 ? "Classic" : "Modern";

            return {
                ...movie,
                title: normalizedTitle,
                type: type
            };
        });

        normalizedMovies.forEach((movie) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.classList.add(movie.watched ? "watched" : "not-watched");

            const statusText = movie.watched ? "Vista" : "No vista";
            const buttonText = movie.watched ? "Vista" : "Marcar como vista";

            card.innerHTML = `
                <h3>${movie.title}</h3>
                <p><strong>Género:</strong> ${movie.genre}</p>
                <p><strong>Año:</strong> ${movie.releaseYear} (${movie.type})</p>
                <p class="status">Estado: ${statusText}</p>
                <button ${movie.watched ? "disabled" : ""}>
                    ${buttonText}
                </button>
            `;

            const button = card.querySelector("button");
            const statusElement = card.querySelector(".status");

            button.addEventListener("click", () => {
                movie.watched = true;

                card.classList.remove("not-watched");
                card.classList.add("watched");

                statusElement.textContent = "Estado: Vista";
                button.textContent = "Vista";
                button.disabled = true;
            });

            container.appendChild(card);
        });

    } catch (error) {
        container.innerHTML = `<p style="color:red;">${error}</p>`;
    }
}

initApp();
