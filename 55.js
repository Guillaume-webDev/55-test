// spread operator to get everything inside of the productgrid
const items = [...document.querySelectorAll(".l-productgrid__item")];


// handle elements intersecting with the viewport, i.e. being displayed
// this is called by the observer when a product comes on screen
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((item) => {
// the querySelector will get the name and the price of the products
    let name = item.target.querySelector(".c-product__name");
    let price = item.target.querySelector(".c-price__value--current");
// the first time we observe the element, it might still be off-screen.
    if (name === null) {
      return;
    }
    if (item.isIntersecting === true) {
      console.log(`Name:${name.innerText}, Price:${price.innerText}`);
 // once we have displayed the info about that product, stop tracking it
      observer.unobserve(item.target);
    }
  });
});
items.forEach((item) => observer.observe(item));

const grid = document.querySelector(".l-productgrid__inner");
// create the mutation observer to handle new products loading dynamically
const mutationObserver = new MutationObserver((mutationList) => {
  for (let mutation of mutationList) {
    mutation.addedNodes.forEach((item) => observer.observe(item));
  }
});
// start observing the grid for new dynamically loaded products
mutationObserver.observe(grid, { childList: true });
