const items = [...document.querySelectorAll(".l-productgrid__item")];

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((item) => {
    let name = item.target.querySelector(".c-product__name");
    let price = item.target.querySelector(".c-price__value--current");
    if (name === null) {
      return;
    }
    if (item.isIntersecting === true) {
      console.log(`Name:${name.innerText}, Price:${price.innerText}`);
      observer.unobserve(item.target);
    }
  });
});
items.forEach((item) => observer.observe(item));

const grid = document.querySelector(".l-productgrid__inner");
const mutationObserver = new MutationObserver((mutationList) => {
  for (let mutation of mutationList) {
    mutation.addedNodes.forEach((item) => observer.observe(item));
  }
});
mutationObserver.observe(grid, { childList: true });
