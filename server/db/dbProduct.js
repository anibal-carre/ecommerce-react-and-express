const productsDb = {
  Iphone: [
    {
      id: 1,
      name: "iPhone 13 PRO 512 GB",
      price: 6000,
      brand: "Apple",
      description:
        "What is the physical description of the iPhone 13 ProiPhone 13 Pro Technical Specifications. The iPhone 13 Pro display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is diagonally actual viewable area is less.",
      outstanding: false,
      ranking: 4,
      promotion: true,
      images: {
        principal: "http://localhost:3000/uploads/iphone13/iphone13.png",
        image1: "http://localhost:3000/uploads/iphone13/iphone132.png",

        blue: {
          principal: "http://localhost:3000/uploads/iphone13/blue/blue1.png",
          image1: "http://localhost:3000/uploads/iphone13/blue/blue2.png",
        },
        yellow: {
          principal:
            "http://localhost:3000/uploads/iphone13/yellow/yellow1.png",
          image1: "http://localhost:3000/uploads/iphone13/yellow/yellow2.png",
        },
        silver: {
          principal:
            "http://localhost:3000/uploads/iphone13/silver/silver1.png",
          image1: "http://localhost:3000/uploads/iphone13/silver/silver2.png",
        },
      },
    },
  ],
  Samsung: [
    {
      id: 1,
      name: "Samsung Galaxy S20 FE",
      price: 2000,
      brand: "Samsung",
      description:
        "Samsung Galaxy S20 FE (Fan Edition) is the successor of Galaxy S10 Lite. Specifications include a 6.5-inch FHD+ display, Snapdragon 865 chipset with 6GB/8GB RAM and 128GB/256GB storage, and 4500 battery. There is a triple-camera setup on the back, with the same main sensor found in regular Galaxy S20.",
      outstanding: false,
      ranking: 3,
      promotion: true,
      images: {
        principal: "http://localhost:3000/uploads/s20fe/s20fe.png",
        image1: "http://localhost:3000/uploads/s20fe/s20fe2.png",
        image2: "http://localhost:3000/uploads/s20fe/s20fe3.png",
        lavander: {
          principal:
            "http://localhost:3000/uploads/s20fe/lavander/lavander1.png",
          image1: "http://localhost:3000/uploads/s20fe/lavander/lavander2.png",
          image2: "http://localhost:3000/uploads/s20fe/lavander/lavander3.png",
        },
        mint: {
          principal: "http://localhost:3000/uploads/s20fe/mint/mint1.png",
          image1: "http://localhost:3000/uploads/s20fe/mint/mint2.png",
          image2: "http://localhost:3000/uploads/s20fe/mint/mint3.png",
        },
      },
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra",
      price: 10000,
      brand: "Samsung",
      description:
        "The Samsung Galaxy S23 Ultra is the headliner of the S23 series. Specifications are top-notch including 6.8-inch Dynamic AMOLED display with 120Hz refresh rate, Snapdragon 8 Gen 2 processor, 5000mAh battery, up to 12gigs of RAM, and 1TB of storage.",
      outstanding: true,
      ranking: 5,
      promotion: true,
      images: {
        principal: "http://localhost:3000/uploads/s20fe/s20fe.png",
      },
    },
    {
      id: 3,
      name: "Samsung Galaxy S23 128 GB",
      price: 5000,
      brand: "Samsung",
      description:
        "The Samsung Galaxy S23 specs are top-notch including a Snapdragon 8 Gen 2 chipset, 8GB RAM coupled with 128/256GB storage, and a 3900mAh battery. The phone sports a 6.1-inch Dynamic AMOLED display with an adaptive 120Hz refresh rate.",
      outstanding: false,
      ranking: 3,
      promotion: true,
      images: {
        principal: "http://localhost:3000/uploads/s23/s23.png",
      },
    },
    {
      id: 4,
      name: "Samsung Galaxy Z Fold4 512 GB",
      price: 12000,
      brand: "Samsung",
      description:
        "The Samsung Galaxy Z Fold 4 is, without a doubt, one of the most advanced and comprehensive Android smartphones available on the market, thanks to its rich equipment and advanced multimedia features. It has a large 7.6-inch display with a resolution of 2176x1812 pixels. The features offered by the Samsung Galaxy Z Fold 4 are many and innovative. Starting with 5G, which allows data transfer and excellent internet browsing. We emphasize the excellent internal memory of 1000 GB but without the possibility of expansion.",
      outstanding: false,
      ranking: 5,
      promotion: false,
      images: {
        principal: "http://localhost:3000/uploads/galaxyfold/galaxyfold.png",
        image1: "http://localhost:3000/uploads/galaxyfold/galaxyfold2.png",
        image2: "http://localhost:3000/uploads/galaxyfold/galaxyfold3.png",
      },
    },
  ],
};

module.exports = productsDb;
