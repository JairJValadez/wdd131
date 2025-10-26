const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
]

//Creates the HTML for the article element, using the hard coded one as a 'template'.
function createArticleHtml(article) {

    const articleClass = 'review'
    const figureClass = 'book-cover'
    const readMoreLink = '#';
	
    // This was pretty much the hard coded article (this was interesting to code)
    return `
        <article class="${articleClass}">
            
            <div class="review-info">
                <time datetime="${article.date}">${article.date}</time>
                <p>${article.ages}</p>
                <p>${article.genre}</p>
                <div class="rating" aria-label="Book Quality Rating: ${article.stars.length} out of 5 stars">
                    <span aria-hidden="true">${article.stars}</span>
                </div>
            </div>

            <section class="review-content">
                <h2>${article.title}</h2>
                
                <figure class="${figureClass}">
                    <img 
                        src="${article.imgSrc}" 
                        alt="${article.imgAlt}"
                    >
                    <figcaption>Book Cover Image</figcaption>
                </figure>
                
                <p class="excerpt">${article.description}</p>
                
                <a href="${readMoreLink}" class="read-more-link">Read More...</a>
            </section>
        </article>
    `
}

//Loops through the articles, creates, and appends
function displayArticles(articlesList, container) {
    let theArticles = '';

	articlesList.forEach(article => {
        const articleHtml = createArticleHtml(article)
        theArticles += articleHtml;
    })

	container.innerHTML = theArticles;
}

const articleCreator = document.querySelector('#article-creator');
displayArticles(articles, articleCreator);
