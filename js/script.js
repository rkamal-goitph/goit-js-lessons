// Import necessary components and the API module.
import LoadMoreBtn from './components/LoadMoreBtn.js';
import NewsApi from './NewsApi.js';

// Get the form and initialize components.
const form = document.getElementById('form');
const loadMoreBtn = new LoadMoreBtn({
  selector: '#loadMoreBtn',
  isHidden: true,
});

const newsApi = new NewsApi();

// Add event listeners for form submission and the load more button.
form.addEventListener('submit', onSubmit);
loadMoreBtn.button.addEventListener('click', fetchNews);

// Handle form submission.
function onSubmit(e) {
  e.preventDefault(); // Prevent the default form submission behavior.

  // Get the search query from the form input, trim it, and set it to the API's search query.
  const form = e.currentTarget;
  newsApi.searchQuery = form.elements.news.value.trim();

  // Clear previous news articles and prepare for a new search.
  clearNewsList();
  newsApi.resetPage(); // Reset pagination.
  loadMoreBtn.show(); // Show the load more button.

  // Fetch news and reset the form afterwards.
  fetchNews().finally(() => form.reset());
}

// Fetch news from the API.
function fetchNews() {
  loadMoreBtn.disable(); // Disable the load more button while fetching.
  return newsApi
    .getNews()
    .then(({ articles }) => {
      if (articles.length === 0) throw new Error('No data'); // Check if there are articles.

      // Generate markup for each article and update the news list.
      let articlesMarkup = '';
      articles.forEach(article => {
        articlesMarkup += createMarkup(article);
      });

      updateNewsList(articlesMarkup);
      loadMoreBtn.enable(); // Re-enable the load more button after updating the list.
    })
    .catch(onError);
}

// Generate HTML markup for a single article.
function createMarkup({ author, title, description, url, urlToImage }) {
  const safeAuthor = author || 'Anonymous'; // Handle null author.
  return `
        <div class="article-card">
            <img src="${urlToImage}" class="article-img">
            <h2 class="article-title">${title}</h2>
            <h3 class="article-author">${safeAuthor}</h3>
            <p class="article-description">${description}</p>
            <a href="${url}" class="article-link" target="_blank">Read more</a>
        </div>
    `;
}

// Clear the news list in the HTML document.
function clearNewsList() {
  document.getElementById('articlesWrapper').innerHTML = '';
}

// Update the news list by adding new articles.
function updateNewsList(markup) {
  document.getElementById('articlesWrapper').insertAdjacentHTML('beforeend', markup);
}

// Handle errors during news fetching.
function onError(err) {
  console.error(err); // Log the error.
  updateNewsList('<p>Articles not found</p>'); // Show an error message.
}
