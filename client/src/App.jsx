import { useState, useEffect } from "react";

function App() {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        const result = await response.json();
        setProductData(result);
      } catch (error) {
        console.error("Error al obtener datos de la API", error);
      }
    };
    fetchData();
  }, []);

  console.log(productData);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[500px] h-[700px] border border-black p-3">
        <div className="h-[60%]">
          <img
            className="w-full h-full"
            src={productData?.Samsung[0].images.mint.principal}
            alt=""
          />
        </div>

        <div className="h-[40%] px-5">
          <p className="mb-5">{productData?.Samsung[3].description}</p>
          <span>{`$ ${productData?.Samsung[3].price}`} </span>
        </div>
      </div>
    </div>
  );
}

export default App;
