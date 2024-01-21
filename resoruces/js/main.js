

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
  constructor(title, price, discount, discountPrice,image,trailer) {
      this.title = title;
      this.discountPrice = discountPrice;
      this.discount = discount;
      this.price = price;
      this.image = image;
      this.trailer = trailer
  }
}

const gameProductDeals1 = new GameProductDeals("RED DEAD REDEMPTION 2", `R${96.10}`, `${-75}%`, `R${384.39}`, "../resoruces/Gaming/Red Dead  Redemption 2.jpg","https://www.youtube.com/watch?v=F63h3v9QV7w&ab_channel=RockstarGames");
const gameProductDeals2 = new GameProductDeals("SPIDER-MAN REMASTERED", `R${539.40}`, `${-40}%`, `R${899.00}`, "../resoruces/Gaming/Spiderman.jpg","https://www.youtube.com/watch?v=CMRBuagwRb4&ab_channel=PlayStation");
const gameProductDeals3 = new GameProductDeals("REMNANT II", `R${389.40}`, `${-40}%`, `R${649.00}`, "../resoruces/Gaming/Remnant 2.jpg","https://www.youtube.com/watch?v=t5-BQi-oi5g&ab_channel=jackfrags");
const gameProductDeals4 = new GameProductDeals("CYBERPUNK 2077", `R${273.95}`, `${-60}%`, `R${456.59}`, "../resoruces/Gaming/Cyberpunk.jpg");
const gameProductDeals5 = new GameProductDeals("HOGWARTS LEGACY", `R${399.92}`, `${-20}%`, `R${499.90}`, "../resoruces/Gaming/Hogwarts.jpg");
const gameProductDeals6 = new GameProductDeals("7 DAYS TO DIE", `R${52.56}`, `${-76}%`, `R${219.56}`, "../resoruces/Gaming/7 Days to die.jpg");

gameProductsDealsArray.push(gameProductDeals1,gameProductDeals2,gameProductDeals3,gameProductDeals4,gameProductDeals5,gameProductDeals6)


function renderDealsItem(){

  let grid = document.querySelector('#grid-deals');
  let divEl = document.createElement("div");
  divEl.classList.add("row");
  grid.appendChild(divEl);
  
  for (let i = 0; i < gameProductsDealsArray.length; i++) {
    
      let gameProductDeals = gameProductsDealsArray[i];

      let divColEl = document.createElement("div");
      divColEl.classList.add("col");
      divEl.appendChild(divColEl);

      let divCard = document.createElement("div");
      divCard.classList.add("card");
      divColEl.appendChild(divCard);

      let Disc = document.createElement("h5");
      Disc.classList.add("card-title");
      Disc.setAttribute('id','discount')
      Disc.innerText = gameProductDeals.discount
      divCard.appendChild(Disc);

      let imagesrc = document.createElement("img");
      imagesrc.classList.add("card-img-top");
      imagesrc.setAttribute("src", gameProductDeals.image);
      divCard.appendChild(imagesrc);

      let cardbod = document.createElement("div");
      cardbod.classList.add("card-body");
      divCard.appendChild(cardbod);

      let headFive = document.createElement("h5");
      headFive.classList.add("card-title");
      headFive.innerText = gameProductDeals.title
      cardbod.appendChild(headFive);

      let cardPara = document.createElement("p");
      cardPara.classList.add("card-text");
      cardPara.innerText = gameProductDeals.price
      cardbod.appendChild(cardPara);

      let cardSpan = document.createElement("span");
      cardSpan.classList.add("card-text");
      cardSpan.setAttribute('id','discount-price')
      cardSpan.innerText = gameProductDeals.discountPrice
      cardPara.appendChild(cardSpan);
      
      if((i + 1) % 3 === 0){
        divEl = document.createElement("div");
        divEl.classList.add("row");
        grid.appendChild(divEl);
      }
  }

  let rows = document.querySelectorAll('.row');

  rows.forEach(row  => {
    if(!row.querySelector('.col')){
      row.remove()
    }
  });
  
}

renderDealsItem()

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

const gameProductsFeatured1 = new GameProductFeatured("DIGIMON WORLD: NEXT ORDER", `R${699.00}`, ``, ``, "../resoruces/Gaming/Digimon World next order.jpg");
const gameProductsFeatured2 = new GameProductFeatured("DRAGON'S DOGMA: DARK ARISEN", `R${360.00}`, ``, ``, "./resoruces/Gaming/Dragon Dogma.jpg");
const gameProductsFeatured3 = new GameProductFeatured("WARFRAME", `FREE`, ``, ``, "./resoruces/Gaming/warframe-metacard.png");
const gameProductsFeatured4 = new GameProductFeatured("MINECRAFT", `R${360.39}`, ``, ``, "./resoruces/Gaming/Minecraft.jpg");
const gameProductsFeatured5 = new GameProductFeatured("DRAGONBALL XENOVERSE 2", `R${279.50}`, ``, ``, "./resoruces/Gaming/Xenoverse 2.jpg");
const gameProductsFeatured6 = new GameProductFeatured("NARUTO SHIPPUDEN ULIMATE NINJA STORM 4", `R${279.00}`, ``, ``, "./resoruces/Gaming/naruto ninja storm 4.jpg");
const gameProductsFeatured7 = new GameProductFeatured("DAYS GONE", `R${179.75}`, ``, ``, "./resoruces/Gaming/Days Gone.jpg");

gameProductsFeaturedArray.push(gameProductsFeatured1,gameProductsFeatured2,gameProductsFeatured3,gameProductsFeatured4,gameProductsFeatured5,gameProductsFeatured6,gameProductsFeatured7)

function renderFeaturedItem(){

  let grid = document.querySelector('#grid-featured');
  console.log(grid)
  let divEl = document.createElement("div");
  divEl.classList.add("row");
  grid.appendChild(divEl);
  
  for (let i = 0; i < gameProductsFeaturedArray.length; i++) {
    
      let gameProductFeatured = gameProductsFeaturedArray[i];
      
      console.log(gameProductFeatured)
      let divColEl = document.createElement("div");
      divColEl.classList.add("col");
      divEl.appendChild(divColEl);

      let divCard = document.createElement("div");
      divCard.classList.add("card");
      divColEl.appendChild(divCard);

      let imagesrc = document.createElement("img");
      imagesrc.classList.add("card-img-top");
      imagesrc.setAttribute("src", gameProductFeatured.image);
      divCard.appendChild(imagesrc);

      let cardbod = document.createElement("div");
      cardbod.classList.add("card-body");
      
      divCard.appendChild(cardbod);

      let headFive = document.createElement("h6");
      headFive.classList.add("card-title");
      
      headFive.innerText = gameProductFeatured.title
      cardbod.appendChild(headFive);

      let cardPara = document.createElement("p");
      cardPara.classList.add("card-text");
      cardPara.setAttribute("id", "featured-paragraph");
      cardPara.innerText = gameProductFeatured.price
      cardbod.appendChild(cardPara);

      
      if((i + 2) % 3 === 0){
        divEl = document.createElement("div");
        divEl.classList.add("row");
        grid.appendChild(divEl);
      }

      if(gameProductFeatured.title = "NARUTO SHIPPUDEN ULIMATE NINJA STORM 4"){
        headFive.style.front="5px !important";
      }
  }

  let rows = document.querySelectorAll('.row');

  rows.forEach(row  => {
    if(!row.querySelector('.col')){
      row.remove()
    }
  });
}

renderFeaturedItem()