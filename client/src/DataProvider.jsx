// DataProvider.js
import { useState, useEffect } from "react";
import DataContext from "./DataContext";

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Hacer la solicitud a la API externa aquí
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ecommerce-backend-oypk.onrender.com/api/products"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error al obtener datos de la API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
