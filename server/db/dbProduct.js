const productsDb = {
  Iphone: {},
  Samsung: [
    {
      id: 1,
      name: "Samsung Galaxy S20 FE",
      price: 2000,
      description:
        "Samsung Galaxy S20 FE (Fan Edition) is the successor of Galaxy S10 Lite. Specifications include a 6.5-inch FHD+ display, Snapdragon 865 chipset with 6GB/8GB RAM and 128GB/256GB storage, and 4500 battery. There is a triple-camera setup on the back, with the same main sensor found in regular Galaxy S20.",
      outstanding: false,
      ranking: 3,
      promotion: true,
      image: "http://localhost:3000/uploads/s20fe.png",
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra",
      price: 10000,
      description:
        "The Samsung Galaxy S23 Ultra is the headliner of the S23 series. Specifications are top-notch including 6.8-inch Dynamic AMOLED display with 120Hz refresh rate, Snapdragon 8 Gen 2 processor, 5000mAh battery, up to 12gigs of RAM, and 1TB of storage.",
      outstanding: true,
      ranking: 5,
      promotion: true,
      image: "http://localhost:3000/uploads/s20fe.png",
    },
    {
      id: 3,
      name: "Samsung Galaxy S23",
      price: 5000,
      description:
        "The Samsung Galaxy S23 specs are top-notch including a Snapdragon 8 Gen 2 chipset, 8GB RAM coupled with 128/256GB storage, and a 3900mAh battery. The phone sports a 6.1-inch Dynamic AMOLED display with an adaptive 120Hz refresh rate.",
      outstanding: false,
      ranking: 3,
      promotion: true,
      image: "http://localhost:3000/uploads/s23.png",
    },
  ],
};

module.exports = productsDb;