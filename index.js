function fetchMovies(){
    return fetch("http://localhost:3000/films")
    .then(res => res.json())
    .then(json => getMovie(json))
}

function getMovie(movie){
    let body = document.querySelector('body')
    let firstMoviePoster = document.createElement('img')
    firstMoviePoster.src = `${movie[0].poster}`
    firstMoviePoster.id = `poster`
    let firstMovieTitle = document.createElement('h2')
    firstMovieTitle.textContent = `${movie[0].title}`
    let firstMovieRuntime = document.createElement('p')
    firstMovieRuntime.textContent = `Runtime: ${movie[0].runtime}`
    let firstMovieShowtime = document.createElement('p')
    firstMovieShowtime.textContent = `Showtime: ${movie[0].showtime}`
    let availableTicketsForFirstMovieCount = movie[0].capacity - movie[0].tickets_sold
    let availableTicketsForFirstMovie = document.createElement('p')
    availableTicketsForFirstMovie.innerHTML = `Available Tickets: <span>${availableTicketsForFirstMovieCount}</span>`
    let buyTicketButtonForFirstMovie = document.createElement('button')
    buyTicketButtonForFirstMovie.type = `button`
    buyTicketButtonForFirstMovie.id = `buy-ticket-button-for-first-movie`
    buyTicketButtonForFirstMovie.textContent = `Buy Ticket`
    buyTicketButtonForFirstMovie.addEventListener('click', () => {
        if (availableTicketsForFirstMovieCount > 1) {
            availableTicketsForFirstMovie.querySelector('span').textContent = --availableTicketsForFirstMovieCount
        }
        else {
            availableTicketsForFirstMovie.querySelector('span').textContent = --availableTicketsForFirstMovieCount
            buyTicketButtonForFirstMovie.textContent = `Sold Out`
            document.querySelector('#buy-ticket-button-for-first-movie').disabled = true
        }
    })
    let movieDetail = document.createElement('div')
    movieDetail.id = "movie-detail"
    body.appendChild(movieDetail)
    movieDetail.appendChild(firstMoviePoster)
    movieDetail.appendChild(firstMovieTitle)
    movieDetail.appendChild(firstMovieRuntime)
    movieDetail.appendChild(firstMovieShowtime)
    movieDetail.appendChild(availableTicketsForFirstMovie)
    movieDetail.appendChild(buyTicketButtonForFirstMovie)

    movie.forEach(movie => {
        let body = document.querySelector('body')
        let moviePoster = document.createElement('img')
        moviePoster.src = `${movie.poster}`
        moviePoster.id = `poster`
        let movieTitle = document.createElement('li')
        movieTitle.id = `title`
        movieTitle.textContent = `${movie.title}`
        let movieTitleDisplay = document.createElement('h2')
        movieTitleDisplay.textContent = `${movie.title}`
        let movieRuntime = document.createElement('p')
        movieRuntime.textContent = `Runtime: ${movie.runtime}`
        let movieShowtime = document.createElement('p')
        movieShowtime.textContent = `Showtime: ${movie.showtime}`
        let availableTicketCount = movie.capacity - movie.tickets_sold
        let availableTickets = document.createElement('p')
        availableTickets.innerHTML = `Available Tickets: <span>${availableTicketCount}</span>`
        let buyTicketButton = document.createElement('button')
        buyTicketButton.type = `button`
        buyTicketButton.id = `buy-ticket-button`
        buyTicketButton.textContent = `Buy Ticket`
        buyTicketButton.addEventListener('click', () => {
            if (availableTicketCount > 1) {
                availableTickets.querySelector('span').textContent = --availableTicketCount
            }
            else {
                availableTickets.querySelector('span').textContent = --availableTicketCount
                buyTicketButton.textContent = `Sold Out`
                document.querySelector('#buy-ticket-button').disabled = true
            }
        })

        body.appendChild(movieTitle)
        movieTitle.addEventListener('click', () => {
            movieDetail.innerHTML = ``
            movieDetail.appendChild(moviePoster)
            movieDetail.appendChild(movieTitleDisplay)
            movieDetail.appendChild(movieRuntime)
            movieDetail.appendChild(movieShowtime)
            movieDetail.appendChild(availableTickets)
            movieDetail.appendChild(buyTicketButton)
        })
    })
}

document.addEventListener('DOMContentLoaded', () => {
    fetchMovies();
})