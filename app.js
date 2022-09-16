const button = document.querySelector('#search-button');
const loader = button.firstElementChild;

const toggleLoading = () => {
    loader.classList.toggle('loading');
}

button.addEventListener('click', toggleLoading);


