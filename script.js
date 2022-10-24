fetch('./movies.json')
  .then((response) => response.json())
  .then((movies) => 
  movies.map(movie => {
    let body = document.querySelector(`body`)
    let div = document.createElement(`div`)
    let h2 = document.createElement(`h2`)
    let h3 = document.createElement(`h3`)
    let p = document.createElement(`p`)
    let ul = document.createElement(`ul`)
    let ulInfo = document.createElement(`ul`)
    
    h2.textContent = movie.name
    h3.textContent = `Create year: ${movie.createYear}`
    ul.textContent =  `Rating:`

    createLi(ul, `Vote count: ${movie.rating.voteCount}`)
    createLi(ul, `Vote average: ${movie.rating.voiceAverage}`)
    createLi(ul, `Popularity: ${movie.popularity}`)
    ulInfo.textContent = `Info:`

    createLi(ulInfo, `Director: ${movie.info.director}`)
    createLi(ulInfo, `Writers: ${movie.info.writers}`)
    createLi(ulInfo, `Stars: ${movie.info.stars}`)

    p.textContent = movie.info.description

    body.append(div)
    div.append(h2, h3, ul, ulInfo, p)
  })
 );
 function createLi(ul,movie) {
    let li = document.createElement(`li`)
    li.textContent = movie
    ul.append(li)
 }