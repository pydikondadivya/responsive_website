const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: "₹8,865",
    colors: [
      {
        code: "black",
        img: "https://i.ibb.co/4KyYJDR/air.png",
      },
      {
        code: "darkblue",
        img: "https://i.ibb.co/SKx49yG/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: "₹9,145",
    colors: [
      {
        code: "lightgray",
        img: "https://i.ibb.co/Qn422ss/jordan.png",
      },
      {
        code: "green",
        img: "https://i.ibb.co/2ZZhf02/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: "₹7,750",
    colors: [
      {
        code: "lightgray",
        img: "https://i.ibb.co/M6xvGWk/blazer.png",
      },
      {
        code: "green",
        img: "https://i.ibb.co/2v1pkXy/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: "₹10,450",
    colors: [
      {
        code: "black",
        img: "https://i.ibb.co/Wg4NSC5/crater.png",
      },
      {
        code: "lightgray",
        img: "https://i.ibb.co/NCy6rgN/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: "₹6,500",
    colors: [
      {
        code: "gray",
        img: "https://i.ibb.co/ZSZBhmg/hippie.png",
      },
      {
        code: "black",
        img: "https://i.ibb.co/yppb7N5/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
