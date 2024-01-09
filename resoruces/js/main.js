

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

const gameProductDeals1 = new GameProductDeals("RED DEAD REDEMPTION 2", `R${96.10}`, `${-75}%`, `R${384.39}`, "../resoruces/Gaming/Red Dead  Redemption 2.jpg");
const gameProductDeals2 = new GameProductDeals("SPIDER-MAN REMASTERED", `R${539.40}`, `${-40}%`, `R${899.00}`, "../resoruces/Gaming/Spiderman.jpg");
const gameProductDeals3 = new GameProductDeals("REMNANT II", `R${389.40}`, `${-40}%`, `R${649.00}`, "./resoruces/Gaming/Remnant 2.jpg");
const gameProductDeals4 = new GameProductDeals("CYBERPUNK 2077", `R${273.95}`, `${-60}%`, `R${456.59}`, "./resoruces/Gaming/Cyberpunk.jpg");
const gameProductDeals5 = new GameProductDeals("HOGWARTS LEGACY", `R${399.92}`, `${-20}%`, `R${499.90}`, "./resoruces/Gaming/Hogwarts.jpg");
const gameProductDeals6 = new GameProductDeals("7 DAYS TO DIE", `R${52.56}`, `${-76}%`, `R${219.56}`, "./resoruces/Gaming/Hogwarts.jpg");

gameProductsDealsArray.push(gameProductDeals1,gameProductDeals2,gameProductDeals3,gameProductDeals4,gameProductDeals5,gameProductDeals6)
console.log(gameProductsDealsArray)

function renderDealsItem(){

  let grid = document.querySelector('#grid');
  let divEl = document.createElement("div");
  divEl.classList.add("g-col-4");
  grid.appendChild(divEl)

  gameProductsDealsArray.forEach(element => {
   for (let i = 0; i < gameProductsDealsArray.length; i++) {
    divEl.innerHTML = `
  <div class="row">
    <div class="col">
      <div class="card" style="width: 18rem;">
        <p class="card-text" id="discount">${gameProductDeals1.discount}</p>
        <img src="${gameProductDeals1.image}" class="card-img-top" alt="Red Dead Redemption 2">
        
        <div class="card-body">
          <h5 class="card-title">${gameProductDeals1.title}</h5>
          <p class="card-text" id="price"${gameProductDeals1.price}</p>
          <p class="card-text" id="discountPrice"${gameProductDeals1.discountPrice}</p>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card" style="width: 18rem;">
        <p class="card-text" id="discount">${gameProductDeals2.discount}</p>
        <img src="${gameProductDeals2.image}" class="card-img-top" alt="Red Dead Redemption 2">
        
        <div class="card-body">
          <h5 class="card-title">${gameProductDeals2.title}</h5>
          <p class="card-text" id="price"${gameProductDeals2.price}</p>
          <p class="card-text" id="discountPrice"${gameProductDeals2.discountPrice}</p>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card" style="width: 18rem;">
        <p class="card-text" id="discount">${gameProductDeals3.discount}</p>
        <img src="${gameProductDeals3.image}" class="card-img-top" alt="Red Dead Redemption 2">
        
        <div class="card-body">
          <h5 class="card-title">${gameProductDeals3.title}</h5>
          <p class="card-text" id="price"${gameProductDeals3.price}</p>
          <p class="card-text" id="discountPrice"${gameProductDeals3.discountPrice}</p>
        </div>
      </div>
    </div>

    

  </div>
`
   }
 });
  
  console.log(divEl);
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

const gameProductsFeatured1 = new GameProductFeatured("DIGIMON WORLD: NEXT ORDER", ``, ``, `R${699.00}`, "./resoruces/Gaming/Digimon World next order.jpg");
const gameProductsFeatured2 = new GameProductFeatured("DRAGON'S DOGMA: DARK ARISEN", ``, ``, `R${360.00}`, "./resoruces./Gaming/Dragon Dogma.jpg");
const gameProductsFeatured3 = new GameProductFeatured("CALL OF DUTY MODERN WARFARE III", ``, ``, `R${965.30}`, "./resoruces/Gaming/COD-MW-III-956x528-En.png");
const gameProductsFeatured4 = new GameProductFeatured("MINECRAFT", ``, ``, `R${360.39}`, "../Gaming/Minecraft.jpg");
const gameProductsFeatured5 = new GameProductFeatured("DRAGONBALL XENOVERSE 2", ``, ``, `R${279.50}`, "./resoruces/Gaming/Xenoverse 2.jpg");
const gameProductsFeatured6 = new GameProductFeatured("NARUTO SHIPPUDEN ULIMATE NINJA STORM 4", ``, ``, `R${279.00}`, "./resoruces/Gaming/naruto ninja storm 4.jpg");
const gameProductsFeatured7 = new GameProductFeatured("DAYS GONE", ``, ``, `R${179.75}`, "./resoruces/Gaming/naruto ninja storm 4.jpg");

gameProductsFeaturedArray.push(gameProductsFeatured1,gameProductsFeatured2,gameProductsFeatured3,gameProductsFeatured4,gameProductsFeatured5,gameProductsFeatured6,gameProductsFeatured7)
console.log(gameProductsFeaturedArray);
console.log(gameProductsFeatured1);




