const BASE_URL = "https://server-assignment-1-omega.vercel.app/products";
const container = document.getElementById("productContainer");

// Get ID from URL
function getProductId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

// Fetch single product
async function fetchProduct(id) {
    try {
        const res = await fetch(`${BASE_URL}/${id}`);
        const result = await res.json();
        console.log(result);
        if (result.success) {
            renderProduct(result.data);
        } else {
            container.innerHTML = "<p>Product not found</p>";
        }
    } catch (error) {
        console.error("Error fetching product:", error);
    }
}

// Render product
function renderProduct(product) {
    container.innerHTML = `
    <div>
        <img src="${product.thumbnail}" 
             alt="${product.title}" 
             class="w-full h-125 object-cover rounded-lg shadow" />
    </div>

    <div class="space-y-6">
        <div class="text-[#4F39F6] bg-[#4F39F6]/20 px-3 py-1 rounded-full text-xs capitalize w-fit">
            ${product.category}
        </div>

        <h1 class="text-4xl font-bold">${product.title}</h1>

        <div class="flex items-center gap-2 text-gray-600">
            ⭐ ${product.rating}
        </div>

        <p class="text-gray-600 text-lg leading-relaxed">
            ${product.description}
        </p>

        <p class="text-3xl font-bold text-[#4F39F6]">
            $${product.price}
        </p>

        <div class="flex gap-4">
            <button
                class="px-6 py-3 border border-gray-800 rounded-lg hover:bg-gray-100 transition">
                Add to Cart
            </button>

            <button
                class="px-6 py-3 bg-[#4F39F6] text-white rounded-lg hover:opacity-90 transition">
                Buy Now
            </button>
        </div>
    </div>
  `;
}

// Init
const productId = getProductId();

if (productId) {
    fetchProduct(productId);
} else {
    container.innerHTML = "<p>Invalid product ID</p>";
}
