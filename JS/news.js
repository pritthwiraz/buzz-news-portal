
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
               <a class="navbar-brand p-2" onclick="loadDetailNews('${category.category_id}')" href="#">${category.category_name}</a>
        `;
        newsContainer.appendChild(newsDiv);

    })
}

const loadDetailNews = (category_id) => {

    const url = ` https://openapi.programming-hero.com/api/news/category/${category_id}`

    fetch(url)
        .then(res => res.json())

        .then(data => displayDetailNews(data.data[0]))
}

const displayDetailNews = newsDetail => {
    console.log(newsDetail)
    const detailNews = document.getElementById('detail-news');

    const detailNewsDiv = document.createElement('div');
    detailNewsDiv.innerHTML = `
        <div class="pb-4">
            <div class="row g-0">
            <div class="col-md-4">
                <img src="${newsDetail.thumbnail_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title"><a href="">${newsDetail.title}</a></h5>
                    <p class="card-text">${newsDetail.details}</p>                   
                    <div class="d-flex justify-content-between">
                    <p class="card-text">${newsDetail.author.name}</p>                    
                    <p>Total View: ${newsDetail.total_view}</p>
                    <button>Click</button>
                    </div>
                </div>
            </div>
            </div>
        
    `;
    detailNews.appendChild(detailNewsDiv);

}

loadNews()

