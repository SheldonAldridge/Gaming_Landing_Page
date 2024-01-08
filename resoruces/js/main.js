

// Slide Show
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slides");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Display the current slide
  slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
  slideIndex += n;

  const slides = document.getElementsByClassName("slides");

  // Reset to the first slide if at the end
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  // Reset to the last slide if at the beginning
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  showSlides();
}

// Change slide every 2 seconds (adjust as needed)
setInterval(function() {
  plusSlides(1);
}, 10000);

/* Game Product Deals contructor */

let gameProductsDealsArray = [];

class GameProductDeals {
  constructor(title, price, discount, discountPrice,image) {
      this.title = title;
      this.price = price;
      this.discount = discount;
      this.discountPrice = discountPrice;
      this.image = image;
  }
}

const gameProductDeals1 = new GameProductDeals("RED DEAD REDEMPTION 2", `R${96.10}`, `${-75}%`, `R${384.39}`, "../Gaming/Red Dead Redemption 2.jpg");
const gameProductDeals2 = new GameProductDeals("SPIDER-MAN REMASTERED", `R${539.40}`, `${-40}%`, `R${899.00}`, "../Gaming/Spiderman.jpg");
const gameProductDeals3 = new GameProductDeals("REMNANT II", `R${389.40}`, `${-40}%`, `R${649.00}`, "../Gaming/Remnant 2.jpg");
const gameProductDeals4 = new GameProductDeals("CYBERPUNK 2077", `R${273.95}`, `${-60}%`, `R${456.59}`, "../Gaming/Cyberpunk.jpg");
const gameProductDeals5 = new GameProductDeals("HOGWARTS LEGACY", `R${399.92}`, `${-20}%`, `R${499.90}`, "../Gaming/Hogwarts.jpg");
const gameProductDeals6 = new GameProductDeals("7 DAYS TO DIE", `R${52.56}`, `${-76}%`, `R${219.56}`, "../Gaming/Hogwarts.jpg");

gameProductsDealsArray.push(gameProductDeals1,gameProductDeals2,gameProductDeals3,gameProductDeals4,gameProductDeals5,gameProductDeals6)
console.log(gameProductsDealsArray)

/* Game Product Featured contructor */

let gameProductsFeaturedArray = [];

class GameProductFeatured {
  constructor(title, price, discount, discountPrice,image) {
      this.title = title;
      this.price = price;
      this.discount = discount;
      this.discountPrice = discountPrice;
      this.image = image;
  }
}

const gameProductsFeatured1 = new GameProductFeatured("DIGIMON WORLD: NEXT ORDER", ``, ``, `R${699.00}`, "../Gaming/Digimon World next order.jpg");
const gameProductsFeatured2 = new GameProductFeatured("DRAGON'S DOGMA: DARK ARISEN", ``, ``, `R${360.00}`, "../Gaming/Dragon Dogma.jpg");
const gameProductsFeatured3 = new GameProductFeatured("CALL OF DUTY MODERN WARFARE III", ``, ``, `R${965.30}`, "../Gaming/COD-MW-III-956x528-En.png");
const gameProductsFeatured4 = new GameProductFeatured("MINECRAFT", ``, ``, `R${360.39}`, "../Gaming/Minecraft.jpg");
const gameProductsFeatured5 = new GameProductFeatured("DRAGONBALL XENOVERSE 2", ``, ``, `R${279.50}`, "../Gaming/Xenoverse 2.jpg");
const gameProductsFeatured6 = new GameProductFeatured("NARUTO SHIPPUDEN ULIMATE NINJA STORM 4", ``, ``, `R${279.00}`, "../Gaming/naruto ninja storm 4.jpg");
const gameProductsFeatured7 = new GameProductFeatured("DAYS GONE", ``, ``, `R${179.75}`, "../Gaming/naruto ninja storm 4.jpg");

gameProductsFeaturedArray.push(gameProductsFeatured1,gameProductsFeatured2,gameProductsFeatured3,gameProductsFeatured4,gameProductsFeatured5,gameProductsFeatured6,gameProductsFeatured7)
console.log(gameProductsFeaturedArray);


let grid = document.getElementsByClassName('grid text-center')

function renderDealsItem(){
  let divEl = document.createElement = "div";
  divEl.classList.add("g-col-4");
  
  console.log(divEl);
}

renderDealsItem()