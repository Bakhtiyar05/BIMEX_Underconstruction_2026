/* Blogs tabs Buttons Start */

const tabButtons = document.querySelectorAll('.tab-btn');
const blogs_Hero_Card = document.querySelectorAll('.blogs_Hero_Card');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {

        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.dataset.category;

        blogs_Hero_Card.forEach(card => {
            card.classList.add('hide');

            setTimeout(() => {
                if (category === "all" || card.dataset.category === category) {
                    card.style.display = "block";

                    setTimeout(() => card.classList.remove('hide'), 10);

                } else {
                    card.style.display = "none";
                }
            }, 200);
        });
    });
});

/* Blogs tabs Buttons End */

const searchInput = document.getElementById('searchInput');

// SEARCH FUNCTION
searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();

    blogs_Hero_Card.forEach(card => {
        const title = card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(searchText)) {
            card.style.display = "block";
            card.classList.remove("hide");
        } else {
            card.style.display = "none";
            card.classList.add("hide");
        }
    });
});



/* hero-description max-length Start */

document.querySelectorAll('.hero-description').forEach(p => {
    const words = p.innerText.trim().split(' ');
    const limit = 10;

    if (words.length > limit) {
        const trimmed = words.slice(0, limit).join(' ') + '...';
        p.innerText = trimmed;
    }
});

/* hero-description max-length End */









/* Lazy loading Blogs And News Start */

const product_blogs_Hero_Card_Cards = document.querySelectorAll('.blogs_Hero_Card');
let current_blogs_Hero_Card_Index = 0;
const loadingElement = document.getElementById('loading');
let isLoading = false;

function showProducts(count) {
    const endIndex = Math.min(current_blogs_Hero_Card_Index + count, product_blogs_Hero_Card_Cards.length);
    for (let i = current_blogs_Hero_Card_Index; i < endIndex; i++) {
        product_blogs_Hero_Card_Cards[i].classList.add('visible');
    }
    current_blogs_Hero_Card_Index = endIndex;
}

function handleScroll() {
    if (isLoading) return;

    const mobile_Or_Desktop_Window_Scroll = window.innerWidth < 768 ? 800 : 350;

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - mobile_Or_Desktop_Window_Scroll) {
        if (current_blogs_Hero_Card_Index < product_blogs_Hero_Card_Cards.length) {
            isLoading = true;
            loadingElement.style.display = 'block';

            setTimeout(() => {
                loadingElement.style.display = 'none';
                showProducts(3);
                isLoading = false;
            }, 1500);
        }
    }
}

window.addEventListener('scroll', handleScroll);
showProducts(3);


/* Lazy loading Blogs And News End */

