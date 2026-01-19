/* products_Category_Slider Start */

$(document).ready(function () {
  $(".products_Page_Category_Carousel").slick({
    slidesToShow: 10,
    slidesToScroll: 3,
    arrows: true,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 0,
    speed: 800,
    // cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: false,

    responsive: [
            {
                breakpoint: 2000,
                settings: {
                slidesToShow: 10,
                slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1500,
                settings: {
                slidesToShow: 10,
                slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1300,
                settings: {
                slidesToShow: 8,
                slidesToScroll: 3,
                },
            },
            {
                breakpoint: 991,
                settings: {
                slidesToShow: 6,
                slidesToScroll: 3,
                },
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                },
            },
        ],
    });
});

/* products_Category_Slider End */




/* Filter */

var Filter = {
  option: {
    click: function (button) {
      var event = "filter:add";

      if (button.getAttribute("aria-pressed") == "true") {
        button.setAttribute("aria-pressed", false);
        event = "filter:remove";
      } else {
        button.setAttribute("aria-pressed", true);
      }

      button.dispatchEvent(
        new CustomEvent(event, {
          bubbles: true,
          detail: { button: button },
        })
      );
    },
  },

  activeFilter: {
    updateVisibility: function () {
      var ActiveFilters = document.getElementById("active-filters");

      if (ActiveFilters.innerHTML.length > 10) {
        Filter.activeFilter.show();
      } else {
        Filter.activeFilter.hide();
      }
    },

    hide: function () {
      var ActiveFiltersTitle = document.getElementById("active-filters-title");
      ActiveFiltersTitle.classList.add("hide");
    },

    show: function () {
      var ActiveFiltersTitle = document.getElementById("active-filters-title");
      ActiveFiltersTitle.classList.remove("hide");
    },

    click: function (button) {
      button.dispatchEvent(
        new CustomEvent("filter:remove", {
          bubbles: true,
          detail: { button: button },
        })
      );
    },

    clear: function () {
      var el = document.getElementById("active-filters");
      el.innerHTML = "";
    },

    add: function (button, data) {
      var ActiveFilters = document.getElementById("active-filters");
      var buttonTemplate = document.getElementById("filter-button");

      button = buttonTemplate.content.cloneNode(true);
      ActiveFilters.appendChild(button);

      button = document.querySelectorAll(
        "#active-filters button:last-child"
      )[0];

      button.id = "fb-" + data.id;
      button.setAttribute("data-id", data.id);

      var html = button.innerHTML.replace(/{title}/g, data.title);
      button.innerHTML = html;
    },

    remove: function (id) {
      button = document.getElementById("fb-" + id);
      button.remove();
    },
  },

  clearOptions: function () {
    var buttons = document
      .getElementById("active-filters-groups")
      .getElementsByTagName("button");

    for (var index = 0; index < buttons.length; index++) {
      var button = buttons[index];

      if (button.getAttribute("disabled") == null) {
        button.setAttribute("aria-pressed", "false");
      }
    }
  },

    clear: function () {
        Filter.activeFilter.clear();
        Filter.clearOptions();
        Filter.activeFilter.hide();

        if (Filter.price && typeof Filter.price.reset === "function") {
            Filter.price.reset();
        }
        
        document.dispatchEvent(new CustomEvent("filter:clear", { bubbles: true }));
    },

};

document.addEventListener("filter:clear", function (event) {
  console.log("FILTER:CLEAR");
});

document.addEventListener("filter:remove", function (event) {
  console.log("Remove item");

  var button = event.detail.button;
  var id = button.getAttribute("data-id");

  var button1 = document.getElementById("af-" + id);
  var button2 = document.getElementById("fb-" + id);

  button1.setAttribute("aria-pressed", false);
  button2.setAttribute("aria-pressed", false);

  button2.remove();

  Filter.activeFilter.updateVisibility();
});

document.addEventListener("filter:add", function (event) {
  console.log("Button click");

  var button = event.detail.button;

  var data = {
    id: button.getAttribute("data-id"),
    title: button.getAttribute("data-title"),
  };

  if (button.getAttribute("aria-pressed") === "true") {
    Filter.activeFilter.add(button, data);
  } else {
    Filter.activeFilter.remove(data.id);
  }

  Filter.activeFilter.updateVisibility();
});
/* Filter  */





/* Sort filter Start */

const filterSelects = document.querySelectorAll(".filtered");
let productsWrapper = document.querySelector(".products_Cards");

filterSelects.forEach(select => {
    select.addEventListener("change", () => {

        const cards = Array.from(document.querySelectorAll(".products_Page_Card"));
        const selected = select.value;

        let sorted = [...cards];

        if (selected === "high") {
            sorted.sort((a, b) => b.dataset.price - a.dataset.price);
        } 
        else if (selected === "low") {
            sorted.sort((a, b) => a.dataset.price - b.dataset.price);
        }

        cards.forEach(card => card.classList.add("hide"));

        setTimeout(() => {

            productsWrapper.innerHTML = "";
            sorted.forEach(card => {
                card.classList.remove("hide");
                productsWrapper.appendChild(card);
            });

            setTimeout(() => {
                const newCards = document.querySelectorAll(".products_Page_Card");
                newCards.forEach(card => {
                    card.classList.remove("hide");
                });
            }, 20);

        }, 450);
    });
});


/* Sort filter End */


/* Filter Buton Start */
const filterBtn = document.getElementById("mobileFilterBtn");
const filterPanel = document.getElementById("aside-collection-filters");

filterBtn.addEventListener("click", () => {
    filterPanel.classList.toggle("active");

    if (filterPanel.classList.contains("active")) {
        filterBtn.innerHTML = `
            Close Filters
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12V4M19 20V17M5 20V16M19 13V4M12 7V4M12 20V11" stroke="#fff" stroke-linecap="round"/>
                <path d="M5 16C6.10457 16 7 15.1046 7 14C7 12.8954 6.10457 12 5 12C3.89543 12 3 12.8954 3 14C3 15.1046 3.89543 16 5 16Z" stroke="#fff" stroke-linecap="round"/>
                <path d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" stroke="#fff" stroke-linecap="round"/>
                <path d="M19 17C20.1046 17 21 16.1046 21 15C21 13.8954 20.1046 13 19 13C17.8954 13 17 13.8954 17 15C17 16.1046 17.8954 17 19 17Z" stroke="#fff" stroke-linecap="round"/>
            </svg>
        `;
    } else {
        filterBtn.innerHTML = `
            Filters
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12V4M19 20V17M5 20V16M19 13V4M12 7V4M12 20V11" stroke="#fff" stroke-linecap="round"/>
                <path d="M5 16C6.10457 16 7 15.1046 7 14C7 12.8954 6.10457 12 5 12C3.89543 12 3 12.8954 3 14C3 15.1046 3.89543 16 5 16Z" stroke="#fff" stroke-linecap="round"/>
                <path d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" stroke="#fff" stroke-linecap="round"/>
                <path d="M19 17C20.1046 17 21 16.1046 21 15C21 13.8954 20.1046 13 19 13C17.8954 13 17 13.8954 17 15C17 16.1046 17.8954 17 19 17Z" stroke="#fff" stroke-linecap="round"/>
            </svg>
        `;
    }
});

/* Filter Buton End */




/* Filter Price Range Start */

Filter.price = {
    min: 0,
    max: 5000,
    minInput: document.getElementById("priceMin"),
    maxInput: document.getElementById("priceMax"),
    minDisplay: document.getElementById("priceMinVal"),
    maxDisplay: document.getElementById("priceMaxVal"),

    init: function() {
        
        const products = document.querySelectorAll(".products_Page_Card");
        let prices = Array.from(products).map(p => parseFloat(p.dataset.price));
        let realMax = Math.max(...prices);

        this.maxInput.max = realMax;
        this.maxInput.value = realMax;
        this.maxDisplay.textContent = realMax;

        this.minInput.addEventListener("input", () => {
            let minVal = parseFloat(this.minInput.value);
            let maxVal = parseFloat(this.maxInput.value);
            if(minVal > maxVal) this.minInput.value = maxVal;
            this.minDisplay.textContent = this.minInput.value;
            this.apply();
        });

        this.maxInput.addEventListener("input", () => {
            let minVal = parseFloat(this.minInput.value);
            let maxVal = parseFloat(this.maxInput.value);
            if(maxVal < minVal) this.maxInput.value = minVal;
            this.maxDisplay.textContent = this.maxInput.value;
            this.apply();
        });

        this.apply();
    },

    apply: function() {
        let minPrice = parseFloat(this.minInput.value);
        let maxPrice = parseFloat(this.maxInput.value);

        const products = document.querySelectorAll(".products_Page_Card");
        let visibleCount = 0;

        products.forEach(product => {
            let price = parseFloat(product.dataset.price);
            if(price >= minPrice && price <= maxPrice){
                product.style.display = "";
                visibleCount++;
            } else {
                product.style.display = "none";
            }
        });

        const noResults = document.getElementById("noResults");
        noResults.hidden = visibleCount !== 0;
    }
};
Filter.price.reset = function() {
    const products = document.querySelectorAll(".products_Page_Card");
    let prices = Array.from(products).map(p => parseFloat(p.dataset.price));
    let realMax = Math.max(...prices);

    this.minInput.value = 0;
    this.minDisplay.textContent = 0;

    this.maxInput.max = realMax;
    this.maxInput.value = realMax;
    this.maxDisplay.textContent = realMax;

    this.apply();
};

document.addEventListener("DOMContentLoaded", () => {
    Filter.price.init();
});

/* Filter Price Range End */


/* lazy_loading_Products Page Start */

const productCards_products_Page_Card = document.querySelectorAll('.products_Page_Card');
let currentIndex_products_Page_Card = 0;
const loadingElement_lazy_loading_Products = document.getElementById('lazy_loading_Products');
let isLoading = false;

function showProducts(count) {
    const endIndex = Math.min(currentIndex_products_Page_Card + count, productCards_products_Page_Card.length);
    for (let i = currentIndex_products_Page_Card; i < endIndex; i++) {
        productCards_products_Page_Card[i].classList.add('visible');
    }
    currentIndex_products_Page_Card = endIndex;
}

function handleScroll() {
    if (isLoading) return;

    const triggerOffset = window.innerWidth < 768 ? 1200 : 900;

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - triggerOffset) {
        if (currentIndex_products_Page_Card < productCards_products_Page_Card.length) {
            isLoading = true;
            loadingElement_lazy_loading_Products.style.display = 'block';

            setTimeout(() => {
                loadingElement_lazy_loading_Products.style.display = 'none';
                showProducts(2);
                isLoading = false;
            }, 800);
        }
    }
}


window.addEventListener('scroll', handleScroll);
showProducts(2);

/* lazy_loading_Products Page End */





/* Mobile filters hide on scroll Start */

/* let mobile_FilterlastScrollY = window.mobile_FilterlastScrollY;

window.addEventListener("scroll", function () {
    const filteredScroll = document.getElementById("filteredScroll");

    if (window.mobile_FilterlastScrollY > mobile_FilterlastScrollY) {
        filteredScroll.style.top = "5px";
    } else {
        filteredScroll.style.top = "5px";
    }

    mobile_FilterlastScrollY = window.mobile_FilterlastScrollY;
}); */

/* Mobile filters hide on scroll End */