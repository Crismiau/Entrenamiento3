// api base url and sample product for tests
const API_URL = "http://localhost:3000/products";

const newProduct = {
  id: "7",
  name: "PlayStation 6",
  description: "next-gen console",
  price: 800,
  category: "gaming",
  stock: 50,
};

// this function checks if the product has all required fields and the correct data types
function validateProduct(product) {
  if (
    !product.id ||
    !product.name ||
    !product.description ||
    typeof product.price !== "number" ||
    !product.category ||
    typeof product.stock !== "number"
  ) {
    console.error("❌ validation failed: complete all fields correctly.");
    return false;
  }
  return true;
}

// this function waits a specific amount of time (in milliseconds) before continuing
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// this function uses GET to get all products and show them as a table in the console
function getProducts() {
  return fetch(API_URL)
    .then(res => {
      if (!res.ok) throw new Error("could not get products.");
      return res.json();
    })
    .then(data => {
      console.log("📦 current products:");
      console.table(data);
      return data;
    })
    .catch(err => console.error("❌ error in GET:", err.message));
}

// this function sends a POST request to add a new product, if the data is valid
function createProduct(product) {
  if (!validateProduct(product)) return;

  return fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  })
    .then(res => {
      if (!res.ok) throw new Error("failed to create product.");
      return res.json();
    })
    .then(data => {
      console.log("✅ product created:");
      console.log(data);
      return data;
    })
    .catch(err => console.error("❌ error in POST:", err.message));
}

// this function updates an existing product by sending a PUT request with only the fields that changed
function updateProduct(id, updatedFields) {
  if (updatedFields.price !== undefined && typeof updatedFields.price !== "number") {
    console.error("❌ validation failed: price must be a number.");
    return;
  }
  if (updatedFields.stock !== undefined && typeof updatedFields.stock !== "number") {
    console.error("❌ validation failed: stock must be a number.");
    return;
  }
  if (updatedFields.name !== undefined && !updatedFields.name.trim()) {
    console.error("❌ validation failed: name cannot be empty.");
    return;
  }
  if (updatedFields.description !== undefined && !updatedFields.description.trim()) {
    console.error("❌ validation failed: description cannot be empty.");
    return;
  }
  if (updatedFields.category !== undefined && !updatedFields.category.trim()) {
    console.error("❌ validation failed: category cannot be empty.");
    return;
  }

  const updatedProduct = { id, ...updatedFields };

  return fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedProduct),
  })
    .then(res => {
      if (!res.ok) throw new Error("failed to update product.");
      return res.json();
    })
    .then(data => {
      console.log("🔄 product updated:");
      console.log(data);
      return data;
    })
    .catch(err => console.error("❌ error in PUT:", err.message));
}

// this function deletes a product from the API using its ID with the DELETE method
function deleteProduct(id) {
  return fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  })
    .then(res => {
      if (!res.ok) throw new Error("failed to delete product.");
      console.log(`🗑️ product with ID ${id} deleted.`);
      return true;
    })
    .catch(err => console.error("❌ error in DELETE:", err.message));
}

// this function runs all CRUD operations in order with short delays between each one
async function runAllTests() {
  console.log("🚀 starting CRUD tests...\n");

  try {
    await getProducts();
    await wait(1000);

    const created = await createProduct(newProduct);
    await wait(1000);

    if (created && created.id) {
      const updatedData = {
        name: "PlayStation 6 Pro",
        description: "enhanced console with liquid cooling",
        price: 900,
        category: "gaming",
        stock: 30,
      };
      await updateProduct(created.id, updatedData);
      await wait(1000);
      await deleteProduct(created.id);
      await wait(1000);
    }

    await getProducts();
    console.log("✅ all tests completed!");

  } catch (error) {
    console.error("❌ error during tests:", error);
  }
}

// this function shows the current product list in a table in the console
function testGet() {
  console.log("🔍 executing GET...");
  getProducts();
}

// this function adds a test product to the API using the createProduct function
function testPost(product = newProduct) {
  console.log("➕ executing POST...");
  createProduct(product);
}

// this function lets the user add a product easily by writing all the fields as parameters
function createCustomProduct(id, name, description, price, category, stock) {
  const customProduct = { id, name, description, price, category, stock };
  console.log("➕ creating custom product...");
  createProduct(customProduct);
}

// this function updates a product by id with fixed data for testing
function testPut(id) {
  console.log(`🔄 executing PUT for ID ${id}...`);
  const updatedData = {
    name: "PlayStation 6 Pro",
    description: "enhanced console with liquid cooling",
    price: 900,
    category: "gaming",
    stock: 30,
  };
  updateProduct(id, updatedData);
}

// this function deletes a product from the API by id
function testDelete(id) {
  console.log(`🗑️ executing DELETE for ID ${id}...`);
  deleteProduct(id);
}

// informative message in the console when the page loads
console.log(`
🎮 product API loaded!

available functions:
• getProducts() - get all products
• createProduct(product) - create new product
• updateProduct(id, fields) - update product
• deleteProduct(id) - delete product

available tests:
• runAllTests() - run all CRUD tests
• testGet() - GET only
• testPost() - POST only
• testPut(id) - PUT only
• testDelete(id) - DELETE only

create custom products:
• createCustomProduct("id", "name", "description", price, "category", stock)

examples:
• testPost() - create PlayStation 6
• createCustomProduct("8", "iPhone 15", "Apple smartphone", 999, "phones", 10)
• createProduct({id: "9", name: "laptop", description: "gaming laptop", price: 1200, category: "computers", stock: 5})

to run tests, type in console:
runAllTests()
`);
