
const loadNews = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayNews(data.data.news_category))
}

const displayNews = newsCategory => {
    const newsContainer = document.getElementById('news-container')
    newsCategory.forEach(category => {
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `
               <a class="navbar-brand p-2" href="#">${category.category_name}</a>
        `;
        newsContainer.appendChild(newsDiv);

    })
}
// const newsDetails = () => {
//     console.log('news details loaded')
// }
/*=================*/

// const loadNewsDetail = (category) => {
//     const url = `https://openapi.programming-hero.com/api/news/category/${category}`
//     fetch(url)
//         .then(res => res.json())
//         .then(category => console.log(category))
// }


/*
const displayCountryDetail = country => {
    const countryDetail = document.getElementById('country-detail')
    countryDetail.innerHTML = `
      <div class="row g-2">
                    <div class="col-md-4">
                        <img src="..." class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
    `;

}

*/
loadNews()

