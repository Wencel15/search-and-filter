document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.querySelector(".card-container");
    const searchInput = document.querySelector("#search-input");
    const categorySelect = document.querySelector("#category-select");
    
    const products = [
        { name: 'Smartphone X', price: 1200, category: 'Eletrônicos', image: 'images/01.jfif' },
        { name: 'Smartphone Y', price: 1300, category: 'Eletrônicos', image: 'images/01.jfif' },
        { name: 'Smartphone Z', price: 1400, category: 'Eletrônicos', image: 'images/01.jfif' },
        { name: 'Smartphone W', price: 1500, category: 'Eletrônicos', image: 'images/01.jfif' },
        { name: 'Camisa Polo', price: 80, category: 'Roupas', image: 'images/02.jfif' },
        { name: 'Camisa Polo', price: 85, category: 'Roupas', image: 'images/02.jfif' },
        { name: 'Camisa Polo', price: 90, category: 'Roupas', image: 'images/02.jfif' },
        { name: 'Camisa Polo', price: 70, category: 'Roupas', image: 'images/02.jfif' },
        { name: 'Livro de JavaScript', price: 45, category: 'Livros', image: 'images/03.jfif' },
        { name: 'Livro de Python', price: 46, category: 'Livros', image: 'images/03.jfif' },
        { name: 'Livro de Node', price: 40, category: 'Livros', image: 'images/03.jfif' },
        { name: 'Livro de IA', price: 44, category: 'Livros', image: 'images/03.jfif' },
    ];
    // Show the produts on HTML
    const displayData = products => {
        cardContainer.innerHTML = '';
        products.forEach(item => {
            cardContainer.innerHTML += `
            <div class="card">
                <h3>${item.category}</h3>                                                                                                                                                                                                                                                                                                                                                                                                                                             
                ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ''}
                <p>${item.name}</p>
                <p>R$ ${item.price}</p>
            </div>`;
        });
    };

    const filterProducts = () => {
        const searchQuery = searchInput.value.toLowerCase();
        const selectedCategory = categorySelect.value;
        const filteredProducts = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchQuery);
            const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
        displayData(filteredProducts);
    };


    searchInput.addEventListener("keyup", filterProducts);
    categorySelect.addEventListener("change", filterProducts);

    // Populate category dropdown
    const categories = [...new Set(products.map(product => product.category))];
    categorySelect.innerHTML = '<option value="all">Todas</option>' +
        categories.map(category => `<option value="${category}">${category}</option>`).join('');

    displayData(products);
});


