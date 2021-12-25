const searchKey = decodeURI(location.pathname.split('/').pop());

const searchSpanElement = document.querySelector('#search-key');
searchSpanElement.innerHTML = searchKey;

console.log(location.pathname.split('/')[1])

getProducts(searchKey).then(data => createProductSlider(data , '.card-container'));