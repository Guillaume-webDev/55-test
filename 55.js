const items = [...document.querySelectorAll(".l-productgrid__item")];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((item) => {
    let name = item.target.querySelector(
      ".c-product__name",

    );
    let price = item.target.querySelector(
      ".c-price__value--current",
    );
    if (item.isIntersecting === true)
      console.log(`Name:${name.innerText}, Price:${price.innerText}`);
  });
});
items.forEach((item) => observer.observe(item));
