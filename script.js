Product_details = [
  {
    Id: 1,
    Description: "Product1",
    Category: "Mobile",
    Path: "/images/c1.png",
    alt: "Image 1",
    Price: 500,
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

Cart = [];
  function Cartisclicked(id) {
    alert("Product added to cart");
    Cart.append(id);
  }
  Product_page = [];
  function productpageisclicked(id) {
    Product_page.append(id);
  }
  //Product page
  localStorage.setItem("Product_page", JSON.stringify(Product_page));
  localStorage.setItem("Cart_products", JSON.stringify(Cart));
  localStorage.setItem("Product_Image", JSON.stringify(Product_details));
  $(document).ready(function () {
    // Retrieve image data from localStorage 
    const imageData = JSON.parse(localStorage.getItem("Product_Image")) || [];
    //   console.log(imageData);
    //   // Dynamically populate Slick slider with image data
    //   const slickSlider = $("#dynamic-slider");
    //   imageData.forEach((image) => {
    //     slickSlider.append(
    //       `<div><img src="${image.Path}" alt="${image.alt}">
    //           <p>${image.Description} <br>  ${image.Price}</p></div>`
    //     );
    //   });
    //   // Initialize Slick carousel with center mode
    //   slickSlider.slick({
    //     centerMode: false,
    //     slidesToShow: 3, // Number of slides to show
    //     infinite: true,
    //   });
    var carousel = $("#imageCarousel");
    // Add images to the carousel
    imageData.forEach((image) => {
      carousel.append(
        `<div><img src="${image.Path}" alt="${image.alt}"></div>`
      );
    });
    // Initialize Slick Carousel
    carousel.slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      rows: 2,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
          },
        },
      ],
    });
  });




