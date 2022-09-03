
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
        <div class="d-flex justify-content-center">
        <a class="navbar-brand p-2" href="#">${category.category_name}</a>
        `;
        newsContainer.appendChild(newsDiv);

    })
}
loadNews()

/*
<div class="d-flex justify-content-center">
<a class="navbar-brand p-4" href="#">Navbar</a>
*/