import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/CartSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products"); //Fake Store API
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(addProduct(product));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6 text-center max-sm:text-lg">
        Our Latest Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {loading ? (
          <p className="text-center col-span-full">Loading...</p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded shadow-lg hover:shadow-2xl transition bg-white"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-4"
              />
              <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                {product.title}
              </h2>
              <p className="text-gray-500 mb-2">{product.category}</p>
              <p className="text-gray-500 mb-2">${product.price}</p>
              <button
                onClick={() => handleAdd(product)}
                className="bg-[#7549BB] text-white px-4 py-2 rounded hover:bg-[#4101F6] w-full"
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
