const productsDb = {
  Iphone: [
    {
      id: 1,
      name: "iPhone 13 PRO 512 GB",
      price: 6000,
      brand: "Apple",
      description:
        "Qual é a descrição física do iPhone 13 ProEspecificações técnicas do iPhone 13 Pro. A tela do iPhone 13 Pro possui cantos arredondados que seguem um belo design curvo, e esses cantos estão dentro de um retângulo padrão. Quando medida como uma forma retangular padrão, a área visível diagonalmente da tela é menor.",
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
    {
      id: 2,
      name: "iPhone 12 128 GB",
      price: 6000,
      brand: "Apple",
      description:
        "O iPhone 12 é resistente a respingos, água e poeira e foi testado em condições controladas em laboratório, classificado como IP68 segundo a norma IEC 60529 (profundidade máxima de seis metros por até 30 minutos). A resistência a respingos, água e poeira não é uma condição permanente e pode diminuir com o tempo.",
      outstanding: false,
      ranking: 4,
      promotion: true,
      images: {
        principal: "http://localhost:3000/uploads/iphone12/iphone.png",
        image1: "http://localhost:3000/uploads/iphone12/iphoneall.png",

        blue: {
          principal: "http://localhost:3000/uploads/iphone12/blue/blue.png",
          image1: "http://localhost:3000/uploads/iphone12/blue/iphoneall.png",
        },
        green: {
          principal: "http://localhost:3000/uploads/iphone12/green/green.png",
          image1: "http://localhost:3000/uploads/iphone12/green/iphoneall.png",
        },
        purple: {
          principal: "http://localhost:3000/uploads/iphone12/purple/purple.png",
          image1: "http://localhost:3000/uploads/iphone12/purple/iphoneall.png",
        },
        red: {
          principal: "http://localhost:3000/uploads/iphone12/red/red.png",
          image1: "http://localhost:3000/uploads/iphone12/red/iphoneall.png",
        },
      },
    },
    {
      id: 3,
      name: "iPhone 11 Pro 256 GB",
      price: 6000,
      brand: "Apple",
      description:
        "O Apple iPhone 11 é um smartphone iOS de bom nível, ótimo para fotos, que pode satisfazer até o mais exigente dos usuários. Tem uma enorme tela Touchscreen de 6.1 polegadas com uma resolução de 1792x828 pixel que não é das mais elevadas. Sobre as características deste Apple iPhone 11 na verdade não falta nada. Começando pelo LTE 4G que permite a transferência de dados e excelente navegação na internet, além de conectividade Wi-fi e GPS. Tem também leitor multimídia, videoconferência e bluetooth. Enfatizamos a boa memória interna de 512 GB mas sem a possibilidade de expansão.",
      outstanding: false,
      ranking: 4,
      promotion: true,
      images: {
        principal: "http://localhost:3000/uploads/iphone11/iphone11.png",
        image1: "http://localhost:3000/uploads/iphone11/iphone111.png",
        image2: "http://localhost:3000/uploads/iphone11/iphone112.png",

        golden: {
          principal: "http://localhost:3000/uploads/iphone11/golden/golden.png",
          image1: "http://localhost:3000/uploads/iphone11/golden/golden1.png",
          image2: "http://localhost:3000/uploads/iphone11/golden/golden2.png",
        },
        silver: {
          principal: "http://localhost:3000/uploads/iphone11/silver/silver.png",
          image1: "http://localhost:3000/uploads/iphone11/silver/silver1.png",
          image2: "http://localhost:3000/uploads/iphone11/silver/silver2.png",
        },
      },
    },
    {
      id: 4,
      name: "iPhone XR 64 GB",
      price: 6000,
      brand: "Apple",
      description:
        "O iPhone XR é resistente a água, salpicos e pó e foi testado em ambiente laboratorial controlado, obtendo a classificação IP67 segundo a norma IEC 60529 (até 30 minutos à profundidade máxima de 1 metro). A resistência a água, salpicos e pó não é permanente e pode diminuir com o desgaste normal.",
      outstanding: false,
      ranking: 3,
      promotion: true,
      images: {
        principal: "http://localhost:3000/uploads/iphonexr/iphonexr.png",
        image1: "http://localhost:3000/uploads/iphonexr/iphonexr1.png",
        image2: "http://localhost:3000/uploads/iphonexr/iphonexr2.png",

        red: {
          principal: "http://localhost:3000/uploads/iphonexr/red/red.png",
          image1: "http://localhost:3000/uploads/iphonexr/red/red1.png",
          image2: "http://localhost:3000/uploads/iphonexr/red/red2.png",
        },
        coral: {
          principal: "http://localhost:3000/uploads/iphonexr/coral/coral.png",
          image1: "http://localhost:3000/uploads/iphonexr/coral/coral1.png",
          image2: "http://localhost:3000/uploads/iphonexr/coral/coral2.png",
        },
        blue: {
          principal: "http://localhost:3000/uploads/iphonexr/blue/blue.png",
          image1: "http://localhost:3000/uploads/iphonexr/blue/blue1.png",
          image2: "http://localhost:3000/uploads/iphonexr/blue/blue2.png",
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
        "Samsung Galaxy S20 FE (Fan Edition) é o sucessor do Galaxy S10 Lite. As especificações incluem uma tela FHD + de 6,5 polegadas, chipset Snapdragon 865 com 6 GB/8 GB de RAM e 128 GB/256 GB de armazenamento e bateria 4500. Há uma configuração de câmera tripla na parte traseira, com o mesmo sensor principal encontrado no Galaxy S20 normal.",
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
        "O Samsung Galaxy S23 Ultra é a atração principal da série S23. As especificações são excelentes, incluindo tela Dynamic AMOLED de 6,8 polegadas com taxa de atualização de 120 Hz, processador Snapdragon 8 Gen 2, bateria de 5000mAh, até 12 GB de RAM e 1 TB de armazenamento.",
      outstanding: true,
      ranking: 5,
      promotion: true,
      images: {
        principal: "http://localhost:3000/uploads/s23ultra/s23ultra.png",
        image1: "http://localhost:3000/uploads/s23ultra/s23ultra1.png",
        image2: "http://localhost:3000/uploads/s23ultra/s23ultra2.png",
      },
    },
    {
      id: 3,
      name: "Samsung Galaxy S23 5G 128 GB",
      price: 5000,
      brand: "Samsung",
      description:
        "As especificações do Samsung Galaxy S23 são excelentes, incluindo um chipset Snapdragon 8 Gen 2, 8 GB de RAM acoplado com armazenamento de 128/256 GB e uma bateria de 3900mAh. O telefone possui uma tela Dynamic AMOLED de 6,1 polegadas com uma taxa de atualização adaptável de 120 Hz.",
      outstanding: false,
      ranking: 5,
      promotion: true,
      images: {
        principal: "http://localhost:3000/uploads/s23/s23.png",
        image1: "http://localhost:3000/uploads/s23/s231.png",
        image2: "http://localhost:3000/uploads/s23/s232.png",
        green: {
          principal: "http://localhost:3000/uploads/s23/creme/creme.png",
          image1: "http://localhost:3000/uploads/s23/creme/creme1.png",
          image2: "http://localhost:3000/uploads/s23/creme/creme2.png",
        },
        black: {
          principal: "http://localhost:3000/uploads/s23/black/black.png",
          image1: "http://localhost:3000/uploads/s23/black/black1.png",
          image2: "http://localhost:3000/uploads/s23/black/black2.png",
        },
      },
    },
    {
      id: 4,
      name: "Samsung Galaxy Z Fold4 512 GB",
      price: 12000,
      brand: "Samsung",
      description:
        "O Samsung Galaxy Z Fold 4 é, sem dúvida, um dos smartphones Android mais avançados e completos disponíveis no mercado, graças ao seu rico equipamento e recursos multimédia avançados. Possui uma grande tela de 7,6 polegadas com resolução de 2176x1812 pixels. Os recursos oferecidos pelo Samsung Galaxy Z Fold 4 são muitos e inovadores. Começando pelo 5G, que permite transferência de dados e excelente navegação na internet. Destacamos a excelente memória interna de 1000 GB mas sem possibilidade de expansão.",
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
  Motorola: [
    {
      id: 1,
      name: "Motorola Moto G 5G 128 GB ",
      price: 12000,
      brand: "Motorola",
      description:
        "Tem 3 câmeras traseiras de 48Mpx/8Mpx/2Mpx. Câmera frontal de 16Mpx. Processador Snapdragon 750G 5G Octa-Core de 2.2GHz com 6GB de RAM. Bateria de 5000mAh",
      outstanding: false,
      ranking: 3,
      promotion: false,
      images: {
        principal: "http://localhost:3000/uploads/motog/motog1.png",
        image1: "http://localhost:3000/uploads/motog/motog2.png",
        image2: "http://localhost:3000/uploads/motog/motog3.png",
      },
    },
    {
      id: 2,
      name: "Motorola Moto One Vision 128 GB",
      price: 11000,
      brand: "Motorola",
      description:
        "O modelo tem 16.0cm de altura e 7.1cm de largura, com peso de 181.0g. O aparelho dispõe de câmera frontal de 25.0 MP, e traseiras de 48.0 + 5.0 MP. Além de filmar em 4K, a câmera deste aparelho também oferece as tecnologias Autofoco, Câmera Dupla, Flash, HDR, Slow Motion.",
      outstanding: false,
      ranking: 4,
      promotion: false,
      images: {
        principal: "http://localhost:3000/uploads/onevision/onevision1.png",
        image1: "http://localhost:3000/uploads/onevision/onevision2.png",
        image2: "http://localhost:3000/uploads/onevision/onevision3.png",
        safira: {
          principal: "http://localhost:3000/uploads/onevision/onevision1.png",
          image1: "http://localhost:3000/uploads/onevision/safira/safira1.png",
          image2: "http://localhost:3000/uploads/onevision/safira/safira2.png",
        },
      },
    },
    {
      id: 3,
      name: "Motorola Edge 20 128 GB",
      price: 15000,
      brand: "Motorola",
      description:
        "O Motorola Edge 20 é um smartphone Android avançado e abrangente em todos os pontos de vista com algumas características excelentes. Tem uma grande tela de 6.67 polegadas com uma resolução de 2400x1080 pixels. As funcionalidades oferecidas pelo Motorola Edge 20 são muitas e inovadoras. Começando pelo 5G que permite a transferência de dados e excelente navegação na internet. Enfatizamos a excelente memória interna de 128 GB mas sem a possibilidade de expansão.",
      outstanding: false,
      ranking: 3,
      promotion: false,
      images: {
        principal: "http://localhost:3000/uploads/edge20/edge20.png",
        image1: "http://localhost:3000/uploads/edge20/edge201.png",
        image2: "http://localhost:3000/uploads/edge20/edge202.png",
        green: {
          principal:
            "http://localhost:3000/uploads/edge20/green/edge20green.png",
          image1: "http://localhost:3000/uploads/edge20/green/edge20green1.png",
          image2: "http://localhost:3000/uploads/edge20/green/edge20green2.png",
        },
        black: {
          principal:
            "http://localhost:3000/uploads/edge20/black/edge20black.png",
          image1: "http://localhost:3000/uploads/edge20/black/edge20black1.png",
          image2: "http://localhost:3000/uploads/edge20/black/edge20black2.png",
        },
      },
    },
    {
      id: 4,
      name: "Motorola Moto G22 128 GB",
      price: 10000,
      brand: "Motorola",
      description:
        "O Motorola Moto G22 é um smartphone Android completo, que não tem muito a invejar aos mais avançados dispositivos. Surpreendente é sua tela Touchscreen de 6.5 polegadas, que coloca esse Motorola no topo de sua categoria. A resolução também é alta: 1600x720 pixel. Quanto às funções, no Motorola Moto G22 realmente não falta nada. Começando pelo conectividade Wi-fi e GPS. A transferência de dados e navegação web sao fornecidas pela rede UMTS, mas não suporta tecnologias mais recentes, tais como HSDPA. Enfatizamos a boa memória interna de 128 GB com a possibilidade de expansão.",
      outstanding: false,
      ranking: 3,
      promotion: false,
      images: {
        principal: "http://localhost:3000/uploads/g22/g22.png",
        image1: "http://localhost:3000/uploads/g22/g221.png",
        image2: "http://localhost:3000/uploads/g22/g222.png",
        green: {
          principal: "http://localhost:3000/uploads/g22/green/green.png",
          image1: "http://localhost:3000/uploads/g22/green/green1.png",
          image2: "http://localhost:3000/uploads/g22/green/green2.png",
        },
        black: {
          principal: "http://localhost:3000/uploads/g22/black/black.png",
          image1: "http://localhost:3000/uploads/g22/black/black1.png",
          image2: "http://localhost:3000/uploads/g22/black/black2.png",
        },
      },
    },
  ],
};

module.exports = productsDb;
