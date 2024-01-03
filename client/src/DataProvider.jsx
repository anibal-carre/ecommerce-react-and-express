// DataProvider.js
import { useState, useEffect } from "react";
import DataContext from "./DataContext";

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hacer la solicitud a la API externa aquí
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ecommerce-backend-oypk.onrender.com/api/products"
        );
        const result = await response.json();
        setData(result);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error al obtener datos de la API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
