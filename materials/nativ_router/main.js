

const pages = document.querySelectorAll('.page');

const handleClick = (event) => {
  event.preventDefault();

  const href = event.target.href;

  pages.forEach(page => {
    const match = page.dataset.match;


    page.hidden = window.location.pathname !== match;
  })

  history.pushState(null, null, event.target.href)
}


const createLinks = () => {
  const links = document.querySelectorAll('.link');

  links.forEach(link => {
    link.addEventListener('click', handleClick);
  });
}

createLinks();


console.log(links, pages);

