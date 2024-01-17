Product_details = [
  {
    Id: 1,
    Description: "Product1",
    Category: "Mobile",
    Path: "/images/c1.png",
    alt: "Image 2",
    Price: 600,
  },
  {
    Id: 2,
    Description: "Product2",
    Category: "Mobile",
    Path: "/images/c2.png",
    alt: "Image 2",
    Price: 600,
  },
  {
    Id: 3,
    Description: "Product3",
    Category: "Mobile",
    Path: "/images/c3.png",
    alt: "Image 3",
    Price: 700,
  },
  {
    Id: 4,
    Description: "Product4",
    Category: "Electronics",
    Path: "/images/c4.png",
    alt: "Image 4",
    Price: 500,
  },
  {
    Id: 5,
    Description: "Product5",
    Category: "Electronics",
    Path: "/images/c1.png",
    alt: "Image 5",
    Price: 5040,
  },
  {
    Id: 6,
    Description: "Product6",
    Category: "Electronics",
    Path: "/images/c2.png",
    alt: "Image 6",
    Price: 5060,
  },
  {
    Id: 7,
    Description: "Product7",
    Category: "Electronics",
    Path: "/images/c3.png",
    alt: "Image 7",
    Price: 5070,
  },
  {
    Id: 8,
    Description: "Product8",
    Category: "laptop",
    Path: "/images/c4.png",
    alt: "Image 8",
    Price: 5500,
  },
  {
    Id: 8,
    Description: "Product8",
    Category: "laptop",
    Path: "/images/c1.png",
    alt: "Image 8",
    Price: 5500,
  },
  {
    Id: 8,
    Description: "Product8",
    Category: "laptop",
    Path: "/images/c2.png",
    alt: "Image 8",
    Price: 5500,
  },
];

localStorage.setItem("Product_Image", JSON.stringify(Product_details));
$(document).ready(function () {
  // Retrieve image data from localStorage
  const imageData = JSON.parse(localStorage.getItem("Product_Image")) || [];

  // dboule slide caurosal
  var carousel = $("#imageCarousel");
  // Add images to the carousel
  imageData.forEach((image) => {
    carousel.append(`<div><img src="${image.Path}" alt="${image.alt}"></div>`);
  });
  // Initialize Slick Carousel
  carousel.slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    arrows: false,
    responsive: [
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //     rows: 1,
      //     centerPadding: "50px",
      //     centerMode: true,
      //   },
      // },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1,
          centerPadding: "50px",
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          centerPadding: "50px",
          centerMode: false,
        },
      },
    ],
  });
});

// js for clock
function updateClock() {
  const now = new Date();
  const days = now.getDay().toString().padStart(2, "0");
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const clockElement = document.getElementById("clock");
  // clockElement.textContent = `${days} : ${hours} : ${minutes} : ${seconds}`;
  clockElement.innerHTML = `<div class="main">
      <div class="time-section">
        <div><p>Day</p></div>
        <div>${days} :</div>
      </div>
      <div class="time-section">
        <div><p>Hour</p></div>
        <div>${hours} :</div>
      </div>
      <div class="time-section">
        <div><p>Min</p></div>
        <div>${minutes} :</div>
      </div>
      <div class="time-section">
        <div><p>Sec</p></div>
        <div>${seconds} </div>
      </div>
    </div>`;
}

function startClock() {
  updateClock();
  setInterval(updateClock, 1000);
}

document.addEventListener("DOMContentLoaded", startClock);

// top to scroll button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// Scroll to the top of the page
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Main carousel
let My_product = [
  {
    id: 1,
    title: "game",
    price: 120,
    discount: 5,
    path: "/images/img0 (2).png",
  },
  {
    id: 2,
    title: "game",
    price: 800,
    discount: 10,
    path: "/images/img1.png",
  },
  {
    id: 3,
    title: "KeyBoard",
    price: 50,
    discount: 3,
    path: "/images/img2 (1).png",
  },
  {
    id: 4,
    title: "Television",
    price: 1500,
    discount: 8,
    path: "/images/img3 (1).png",
  },
  {
    id: 5,
    title: "Chair",
    price: 300,
    discount: 50,
    path: "/images/img4 (1).png",
  },
  {
    id: 6,
    title: "RainCourt",
    price: 20,
    discount: 7,
    path: "/images/img5 (1).png",
  },
];
const slickSlider = $("#dynamic-slider");
My_product.forEach((product) => {
  slickSlider.append(
    ` <div class="container  my-5 d-flex justify-content-center">

    <div>
    <div class="GameCard px-2 py-2 rounded-2 mx-2" >
      <div class="d-flex justify-content-between align-items-start ">
        <div class="bg-danger badge py-2"><span style="font-size: 15px;">- ${product.discount}%</span></div>

        <div class="mb-4 w-50 mx-auto mt-4">
          <img class="img-fluid mx-auto d-flex justify-content-center align-items-center" style="min-width: 50px;" width="200px" src="${product.path}" alt="img" onclick=" redirectToDetailPage()"/>
        </div>

        <div class="d-grid float-end">
          <img class="img-fluid" src="/images/Fill Heart (1).png"  alt="Fill Heart" />
          <img class="img-fluid mt-2" src="/images/Fill Eye (1).png"  alt="Fill Eye" />
        </div>
      </div>
      <div>
        <button class="AddButton text-white btn bg-black btn-block addtocart" id=${product.id} >Add To Cart</button>
      </div>
    </div>

    <div class="ms-2">
      <p class="product_space">${product.title}</p>
      <p>
        <span style="color: #db4444">$${product.price}</span>
        <span style="color: grey; text-decoration: line-through">$220</span>
      </p>
    </div>
  </div>


  
  </div>`
  );
});
// Initialize Slick carousel with center mode
slickSlider.slick({
  centerMode: false,
  slidesToShow: 4, // Number of slides to show
  infinite: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 1,
        centerPadding: "50px",
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        rows: 1,
        centerPadding: "50px",
        centerMode: false,
      },
    },
  ],
});

// function to go to cart page
// let Product_cart = [];
let Product_cart = JSON.parse(localStorage.getItem("Product_Cart")) || [];
function redirectToCart(event) {
  window.location.href = "cart.html";
}

function additem_toCart(id) {
  const index = My_product.findIndex((product) => product.id == id);
  Product_cart.push(My_product[index]);
  localStorage.setItem("Product_Cart", JSON.stringify(Product_cart));
  // console.log(id)
  console.log(Product_cart);
}

const addToCartButtons = document.querySelectorAll(".addtocart");

addToCartButtons.forEach(function (addToCartButton) {
  addToCartButton.onclick = function (event) {
    additem_toCart(event.target.id);
    redirectToCart();
  };
});

// delete functionality
function remove_toCart(id) {
  // console.log(id)
  console.log(Product_cart);
}

const removeToCartButtons = document.querySelectorAll(".removeitem");
console.log(removeToCartButtons);

removeToCartButtons.forEach(function (removeToCartButton) {
  removeToCartButton.onclick = function (event) {
    remove_toCart(event.target.id);
    console.log(event.target.id);
  };
});

// function to go to product detailed page
function redirectToDetailPage() {
  window.location.href = "detailpage.html";
}

// fuction redirect to view page
function redirectToViewPage() {
  window.location.href = "viewall.html";
}

// cart products
// const Product_cart = [

// {
//   id: 1,
//   title: "game",
//   price: 120,
//   discount: 5,
//   path: "/images/img0 (2).png",
// },
// ];
