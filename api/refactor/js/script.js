import API from './api.js';

const form = document.getElementById('form');
const articlesWrapper = document.getElementById('articlesWrapper');

form.addEventListener('submit', onSubmit);

async function onSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const inputValue = form.elements.news.value;

  try {
    const articles = await API.getNews(inputValue);

    if (articles.length === 0) throw new Error('No data');

    let markup = '';
    articles.forEach(article => {
      markup += createMarkup(article);
    });

    updateNewsList(markup);
  } catch (err) {
    onError(err);
  } finally {
    form.reset();
  }
}

function createMarkup({ author, title, description, url, urlToImage }) {
  return `
    <div class="article-card">
      <h2 class="article-title">${title}</h2>
      <h3 class="article-author">${author || 'Anonym'}</h3>
      <img src=${urlToImage} class="article-img">
      <p class="article-description">${description}</p>
      <a href=${url} class="article-link" target="_blank">Read more</a>
    </div>
  `;
}

function updateNewsList(markup) {
  articlesWrapper.innerHTML = markup;
}

function handleError(err) {
  console.error(err);
  updateNewsList('<p>Articles not found</p>');
}
