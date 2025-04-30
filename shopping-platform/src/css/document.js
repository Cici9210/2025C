document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: '商品 A', price: 100, description: '這是一個很棒的商品。' },
        { id: 2, name: '商品 B', price: 200, description: '這是一個更棒的商品。' },
    ];

    const cart = [];
    const history = [];

    const productContainer = document.getElementById('products');
    const cartContainer = document.getElementById('cart-items');
    const historyContainer = document.getElementById('history-items');

    // 顯示商品
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>價格: $${product.price}</p>
            <button class="add-to-cart" data-id="${product.id}">加入購物車</button>
        `;
        productContainer.appendChild(productDiv);
    });

    // 加入購物車
    productContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.dataset.id);
            const product = products.find(p => p.id === productId);
            cart.push(product);
            updateCart();
            alert(`${product.name} 已加入購物車！`);
        }
    });

    // 更新購物車
    function updateCart() {
        cartContainer.innerHTML = '';
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price}`;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = '移除';
            removeBtn.addEventListener('click', () => {
                cart.splice(index, 1);
                updateCart();
            });
            li.appendChild(removeBtn);
            cartContainer.appendChild(li);
        });
    }

    // 結帳
    document.getElementById('checkout').addEventListener('click', () => {
        if (cart.length === 0) {
            alert('購物車是空的！');
            return;
        }
        history.push(...cart);
        cart.length = 0;
        updateCart();
        updateHistory();
        alert('結帳成功！');
    });

    // 更新購買紀錄
    function updateHistory() {
        historyContainer.innerHTML = '';
        history.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price}`;
            historyContainer.appendChild(li);
        });
    }
});