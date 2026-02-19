const API_URL = "https://server-assignment-1-omega.vercel.app/products";
const container = document.getElementById("trendingContainer");

// Fetch All Products
async function fetchProducts() {
    try {
        const res = await fetch(API_URL);
        const result = await res.json();
        console.log(result);

        if (result.success) {
            renderProducts(result.data);
        }
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

// Render Products
function renderProducts(products) {
    // Show only first 8 products for trending
    const trendingProducts = products.slice(0, 3);

    container.innerHTML = trendingProducts.map((product) => createProductCard(product)).join("");
}

// Create Product Card Template
function createProductCard(product) {
    return `
    <div class=" bg-white w-65 sm:w-75 rounded-lg shadow hover:shadow-lg transition duration-300">
        <img src="${product.thumbnail}" 
             alt="${product.title}" 
             class="w-full h-75 object-cover rounded-md" />

        <div class="p-4 space-y-2">
            <div class="flex justify-between items-center">
                <div class="text-[#4F39F6] bg-[#4F39F6]/20 px-3 py-1 rounded-full text-xs capitalize">
                    ${product.category}
                </div>

                <div class="flex items-center gap-1 text-sm text-gray-600">
                    ⭐ ${product.rating}
                </div>
            </div>

            <p class="font-bold truncate">${product.title}</p>
            <p class="text-xl font-bold">$${product.price}</p>

            <div class="flex gap-2">
                <button onclick="goToDetails(${product.id})"
                    class="rounded py-2 active:scale-95 transition-all duration-150 cursor-pointer border flex-1">
                    Details
                </button>

                <button
                    class="rounded py-2 active:scale-95 transition-all duration-150 cursor-pointer text-white bg-[#4F39F6] flex-1">
                    Add
                </button>
            </div>
        </div>
    </div>
  `;
}

// Go To Details Page
function goToDetails(id) {
    window.location.href = `./pages/product-details.html?id=${id}`;
}

// Load Products
fetchProducts();
