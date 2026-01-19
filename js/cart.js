

let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartContainerEl = document.querySelector('#cartModal .shopping-cart');

const cartCountEl = document.getElementById('cartCount');

const cartModalEl = document.getElementById('cartModal');
if (cartModalEl) {
    cartModalEl.addEventListener('shown.bs.modal', () => {
        renderCartItems();
    });
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    cartCountEl.textContent = cart.length;
}

function renderCartItems() {
    const cartContainerEl = document.querySelector('#cartModal .shopping-cart');
    if (!cartContainerEl) return;

    cartContainerEl.innerHTML = '';

    if (cart.length === 0) {
        cartContainerEl.innerHTML = '<p>Səbət boşdur.</p>';
        return;
    }

    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.marginBottom = '10px';

        div.innerHTML = `
            <img src="${item.img}" style="width:50px;height:50px;object-fit:cover;margin-right:10px;">
            <span>${item.name}</span>
            <button class="removeBtn btn btn-sm btn-danger" style="margin-left:auto; color: red">
                <svg width="18" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_558_241)">
                    <path d="M3 20.9971C3 21.2925 3.0582 21.5851 3.17127 21.8581C3.28434 22.1311 3.45008 22.3791 3.65901 22.5881C3.86794 22.797 4.11598 22.9627 4.38896 23.0758C4.66194 23.1889 4.95453 23.2471 5.25 23.2471C5.54547 23.2471 5.83806 23.1889 6.11104 23.0758C6.38402 22.9627 6.63206 22.797 6.84099 22.5881C7.04992 22.3791 7.21566 22.1311 7.32873 21.8581C7.4418 21.5851 7.5 21.2925 7.5 20.9971C7.5 20.4003 7.26295 19.828 6.84099 19.4061C6.41903 18.9841 5.84674 18.7471 5.25 18.7471C4.65326 18.7471 4.08097 18.9841 3.65901 19.4061C3.23705 19.828 3 20.4003 3 20.9971Z" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.369 21.7471L15 23.2471L19.5 5.24707H4.5M4.5 5.24707V18.8751M4.5 5.24707V2.24707C4.5 1.84925 4.65804 1.46771 4.93934 1.18641C5.22064 0.905106 5.60218 0.74707 6 0.74707H16.5C17.6935 0.74707 18.8381 1.22118 19.682 2.06509C20.5259 2.909 21 4.0536 21 5.24707H4.5Z" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_558_241">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </button>
        `;

        div.querySelector('.removeBtn').addEventListener('click', () => {
            removeFromCart(item.name);
        });

        cartContainerEl.appendChild(div);
    });
}


// Add product to cart
function addToCart(product) {
    const exists = cart.find(item => item.name === product.name);
    if (!exists) {
        cart.push(product);
        saveCart();
        updateCartCount();
        renderCartItems();
    } else {
        alert(`${product.name} artıq səbətdə var!`);
    }
}

// Remove product from cart
function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    saveCart();
    updateCartCount();
    renderCartItems();
}


document.querySelectorAll('.addToCartBtn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        /* e.stopPropagation(); */

        const productCard = btn.closest('.products_Page_Card');
        if (!productCard) return;

        const nameEl = productCard.querySelector('.product_Card_Product_Name');
        const typeEl = productCard.querySelector('.product_Card_Product_Type');
        const imgEl = productCard.querySelector('img');

        let productLink = '';

        if (productCard.tagName.toLowerCase() === 'a') {
            productLink = productCard.href;
        } else {
            productLink = window.location.href;
        }

        const product = {
            name: nameEl ? nameEl.textContent.trim() : 'Unknown Product',
            category: typeEl ? typeEl.textContent.trim() : '',
            price: productCard.dataset.price || '0',
            img: imgEl ? imgEl.src : '',
            link: productLink
        };

        addToCart(product);
    });
});

renderCartItems();
updateCartCount();


document.addEventListener('click', function (e) {
    const sendBtn = e.target.closest('.send_Cart_Products_Btn');
    if (!sendBtn) return;

    e.preventDefault();
    sendCartToWhatsapp();
});

function sendCartToWhatsapp() {
    if (!cart || cart.length === 0) {
        alert('Səbət boşdur!');
        return;
    }

    let message = '🛒 Yeni Sifariş\n\n';

    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\n`;
        message += `Kateqoriya: ${item.category || '-'}\n`;
        message += `Şəkil: ${item.img}\n`;
        message += `Link: ${item.link}\n`;
        message += `----------------------\n`;
    });

    message += `Məhsul sayı: ${cart.length}`;

    const phoneNumber = '994552181218';
    const whatsappUrl =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
}

document.addEventListener('click', function (e) {
    const buyBtn = e.target.closest('.buy_Now_Btn, .buy_Now_Btn_Prod_Details');
    if (!buyBtn) return;

    e.preventDefault();

    const productCard = buyBtn.closest('.products_Page_Card');
    if (!productCard) return;

    const name = productCard.querySelector('.product_Card_Product_Name')?.textContent.trim() || '—';
    const category = productCard.querySelector('.product_Card_Product_Type')?.textContent.trim() || '—';
    const img = productCard.querySelector('img')?.src || '';
    const link = window.location.href;

    const message =
        `🛒 Yeni Sifariş\n\n` +
        `Məhsul: ${name}\n` +
        `Kateqoriya: ${category}\n` +
        (img ? `Şəkil: ${img}\n` : '') +
        `🔗 Link: ${link}`;

    const phoneNumber = '994552181218';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
});



