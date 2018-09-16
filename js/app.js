const apiKey = 'b32a9c0977654714964a99eb14e45a4d';
const main = document.querySelector('main');

window.addEventListener('load', e => {
	updateNews();

	if ('serviceWorker' in navigator) {
		try {
			navigator.serviceWorker.register('sw.js');
			console.log("sw register");
		} catch (error) {
			console.log("sw error");
		}
	}
});

async function updateNews() {
	const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b32a9c0977654714964a99eb14e45a4d')
	const json = await res.json();
	console.log(json);
	main.innerHTML = json.articles.map(createArticle).join('\n');
}

function createArticle(article){
	return `
		<div class="article">
			<a href="${article.url}">
			<h2>${article.title}</h2>
			<img src="${article.urlToImage}">
			<p>${article.description}</p>
			</a>
		</div>
	`;
}