let products = [
    {
      name: "Sofa Set",
      price: 25.99,
      image: "https://source.unsplash.com/800x600/?sofa-set",
      company: "Marcos",
    },
    {
      name: "Coffee Table",
      price: 49.99,
      image: "https://source.unsplash.com/800x600/?coffee-table",
      company: "Ikea",
    },
    {
      name: "Floor Lamp",
      price: 34.95,
      image: "https://source.unsplash.com/800x600/?floor-lamp",
      company: "Liddy",
    },
    {
      name: "TV Stand",
      price: 79.99,
      image: "https://source.unsplash.com/800x600/?tv-stand",
      company: "Caressa",
    },
    {
      name: "Bookshelf",
      price: 64.5,
      image: "https://source.unsplash.com/800x600/?bookshelf",
      company: "Ikea",
    },
    {
      name: "Accent Chair",
      price: 89.95,
      image: "https://source.unsplash.com/800x600/?accent-chair",
      company: "Marcos",
    },
    {
      name: "Rug",
      price: 39.75,
      image: "https://source.unsplash.com/800x600/?rug",
      company: "Liddy",
    },
    {
      name: "Side Table",
      price: 29.99,
      image: "https://source.unsplash.com/800x600/?side-table",
      company: "Caressa",
    },
    {
      name: "Wall Art",
      price: 19.99,
      image: "https://source.unsplash.com/800x600/?wall-art",
      company: "Ikea",
    },
    {
      name: "Floor Cushions",
      price: 18.5,
      image: "https://source.unsplash.com/800x600/?floor-cushions",
      company: "Marcos",
    },
    {
      name: "Throw Blanket",
      price: 12.95,
      image: "https://source.unsplash.com/800x600/?throw-blanket",
      company: "Liddy",
    },
    {
      name: "Media Console",
      price: 109.99,
      image: "https://source.unsplash.com/800x600/?media-console",
      company: "Caressa",
    },
    {
      name: "Plant Stand",
      price: 27.5,
      image: "https://source.unsplash.com/800x600/?plant-stand",
      company: "Ikea",
    },
    {
      name: "Curtains",
      price: 24.75,
      image: "https://source.unsplash.com/800x600/?curtains",
      company: "Marcos",
    },
    {
      name: "Pouf Ottoman",
      price: 36.45,
      image: "https://source.unsplash.com/800x600/?pouf-ottoman",
      company: "Liddy",
    },
    {
      name: "Console Table",
      price: 69.99,
      image: "https://source.unsplash.com/800x600/?console-table",
      company: "Lorena",
    },
    {
      name: "Desk Chair",
      price: 54.95,
      image: "https://source.unsplash.com/800x600/?desk-chair",
      company: "Jaxon",
    },
    {
      name: "End Table",
      price: 31.5,
      image: "https://source.unsplash.com/800x600/?end-table",
      company: "Thompson",
    },
    {
      name: "Chaise Lounge",
      price: 149.99,
      image: "https://source.unsplash.com/800x600/?chaise-lounge",
      company: "Lorena",
    },
    {
      name: "Floating Shelves",
      price: 21.75,
      image: "https://source.unsplash.com/800x600/?floating-shelves",
      company: "Jaxon",
    },
    {
      name: "Mirror",
      price: 38.5,
      image: "https://source.unsplash.com/800x600/?mirror",
      company: "Thompson",
    },
    {
      name: "Bar Stools",
      price: 45.99,
      image: "https://source.unsplash.com/800x600/?bar-stools",
      company: "Lorena",
    },
    {
      name: "Bookcase",
      price: 79.95,
      image: "https://source.unsplash.com/800x600/?bookcase",
      company: "Jaxon",
    },
    {
      name: "Vase",
      price: 14.75,
      image: "https://source.unsplash.com/800x600/?vase",
      company: "Thompson",
    },
    {
      name: "Lounge Chair",
      price: 92.5,
      image: "https://source.unsplash.com/800x600/?lounge-chair",
      company: "Lorena",
    },
    {
      name: "Table Lamp",
      price: 27.95,
      image: "https://source.unsplash.com/800x600/?table-lamp",
      company: "Jaxon",
    },
    {
      name: "Wall Clock",
      price: 18.99,
      image: "https://source.unsplash.com/800x600/?wall-clock",
      company: "Thompson",
    },
    {
      name: "Media Shelf",
      price: 56.5,
      image: "https://source.unsplash.com/800x600/?media-shelf",
      company: "Lorena",
    },
    {
      name: "Bar Cart",
      price: 68.95,
      image: "https://source.unsplash.com/800x600/?bar-cart",
      company: "Jaxon",
    },
    {
      name: "Candle Holders",
      price: 9.75,
      image: "https://source.unsplash.com/800x600/?candle-holders",
      company: "Thompson",
    },
    {
      name: "Sideboard",
      price: 134.99,
      image: "https://source.unsplash.com/800x600/?sideboard",
      company: "Lorena",
    },
    {
      name: "Artificial Plant",
      price: 22.95,
      image: "https://source.unsplash.com/800x600/?artificial-plant",
      company: "Jaxon",
    },
    {
      name: "Coat Rack",
      price: 29.5,
      image: "https://source.unsplash.com/800x600/?coat-rack",
      company: "Thompson",
    },
    {
      name: "Console Cabinet",
      price: 98.75,
      image: "https://source.unsplash.com/800x600/?console-cabinet",
      company: "Lorena",
    },
    {
      name: "Floor Mirror",
      price: 75.95,
      image: "https://source.unsplash.com/800x600/?floor-mirror",
      company: "Jaxon",
    },
    {
        "name": "Shoe Rack",
        "price": 42.99,
        "image": "https://source.unsplash.com/800x600/?shoe-rack",
        "company": "Crestwood"
      },
      {
        "name": "Bean Bag Chair",
        "price": 58.95,
        "image": "https://source.unsplash.com/800x600/?bean-bag-chair",
        "company": "Havencrest"
      },
      {
        "name": "Ceiling Fan",
        "price": 89.50,
        "image": "https://source.unsplash.com/800x600/?ceiling-fan",
        "company": "Nexa"
      },
      {
        "name": "Cozy Blanket",
        "price": 29.75,
        "image": "https://source.unsplash.com/800x600/?cozy-blanket",
        "company": "Amberton"
      },
      {
        "name": "Wall Shelf",
        "price": 16.99,
        "image": "https://source.unsplash.com/800x600/?wall-shelf",
        "company": "VividSpaces"
      },
      {
        "name": "Desk",
        "price": 79.95,
        "image": "https://source.unsplash.com/800x600/?desk",
        "company": "HarborHome"
      },
      {
        "name": "Accent Pillow",
        "price": 12.50,
        "image": "https://source.unsplash.com/800x600/?accent-pillow",
        "company": "LuxeLiving"
      },
      {
        "name": "Bar Table",
        "price": 67.99,
        "image": "https://source.unsplash.com/800x600/?bar-table",
        "company": "Barrique"
      },
      {
        "name": "Wall Decor",
        "price": 24.75,
        "image": "https://source.unsplash.com/800x600/?wall-decor",
        "company": "Eleganza"
      },
      {
        "name": "Console Shelf",
        "price": 54.50,
        "image": "https://source.unsplash.com/800x600/?console-shelf",
        "company": "Luxuria"
      },
      {
        "name": "Kitchen Island",
        "price": 139.99,
        "image": "https://source.unsplash.com/800x600/?kitchen-island",
        "company": "GourmetGrove"
      },
      {
        "name": "Dining Chair",
        "price": 43.95,
        "image": "https://source.unsplash.com/800x600/?dining-chair",
        "company": "MingleMoods"
      },
      {
        "name": "Wardrobe",
        "price": 112.50,
        "image": "https://source.unsplash.com/800x600/?wardrobe",
        "company": "ChicHaven"
      },
      {
        "name": "Couch Throw",
        "price": 18.95,
        "image": "https://source.unsplash.com/800x600/?couch-throw",
        "company": "Havencrest"
      },
      {
        "name": "Desk Organizer",
        "price": 32.50,
        "image": "https://source.unsplash.com/800x600/?desk-organizer",
        "company": "Nexa"
      },
      {
        "name": "Hanging Chair",
        "price": 78.99,
        "image": "https://source.unsplash.com/800x600/?hanging-chair",
        "company": "Crestwood"
      },
      {
        "name": "Plant Pot",
        "price": 14.75,
        "image": "https://source.unsplash.com/800x600/?plant-pot",
        "company": "Amberton"
      },
      {
        "name": "Floor Vase",
        "price": 36.95,
        "image": "https://source.unsplash.com/800x600/?floor-vase",
        "company": "VividSpaces"
      },
      {
        "name": "TV Console",
        "price": 89.99,
        "image": "https://source.unsplash.com/800x600/?tv-console",
        "company": "HarborHome"
      },
      {
        "name": "Throw Pillow",
        "price": 15.50,
        "image": "https://source.unsplash.com/800x600/?throw-pillow",
        "company": "LuxeLiving"
      },
      {
        "name": "Book Holder",
        "price": 10.99,
        "image": "https://source.unsplash.com/800x600/?book-holder",
        "company": "Barrique"
      },
      {
        "name": "Entryway Bench",
        "price": 67.75,
        "image": "https://source.unsplash.com/800x600/?entryway-bench",
        "company": "Eleganza"
      },
      {
        "name": "Futon Sofa",
        "price": 129.50,
        "image": "https://source.unsplash.com/800x600/?futon-sofa",
        "company": "Luxuria"
      },
      {
        "name": "Wall Mirror",
        "price": 46.99,
        "image": "https://source.unsplash.com/800x600/?wall-mirror",
        "company": "GourmetGrove"
      },
      {
        "name": "Floor Lamp",
        "price": 62.95,
        "image": "https://source.unsplash.com/800x600/?floor-lamp",
        "company": "MingleMoods"
      },
      {
        "name": "Chest of Drawers",
        "price": 84.50,
        "image": "https://source.unsplash.com/800x600/?chest-of-drawers",
        "company": "ChicHaven"
      },
      {
        "name": "Nesting Tables",
        "price": 59.99,
        "image": "https://source.unsplash.com/800x600/?nesting-tables",
        "company": "Havencrest"
      },
      {
        "name": "Storage Ottoman",
        "price": 49.95,
        "image": "https://source.unsplash.com/800x600/?storage-ottoman",
        "company": "Nexa"
      },
      {
        "name": "Bar Stools",
        "price": 54.50,
        "image": "https://source.unsplash.com/800x600/?bar-stools",
        "company": "Crestwood"
      },
      {
        "name": "Wall Clock",
        "price": 21.75,
        "image": "https://source.unsplash.com/800x600/?wall-clock",
        "company": "Amberton"
      },
      {
        "name": "Lounge Chair",
        "price": 69.99,
        "image": "https://source.unsplash.com/800x600/?lounge-chair",
        "company": "VividSpaces"
      },
      {
        "name": "Nightstand",
        "price": 37.95,
        "image": "https://source.unsplash.com/800x600/?nightstand",
        "company": "HarborHome"
      },
      {
        "name": "Curtains",
        "price": 19.50,
        "image": "https://source.unsplash.com/800x600/?curtains",
        "company": "LuxeLiving"
      },
      {
        "name": "Credenza",
        "price": 89.99,
        "image": "https://source.unsplash.com/800x600/?credenza",
        "company": "Barrique"
      },
      {
        "name": "Sculpture",
        "price": 27.75,
        "image": "https://source.unsplash.com/800x600/?sculpture",
        "company": "Eleganza"
      },
      {
        "name": "Buffet Table",
        "price": 129.50,
        "image": "https://source.unsplash.com/800x600/?buffet-table",
        "company": "Luxuria"
      },
      {
        "name": "Table Lamp",
        "price": 34.99,
        "image": "https://source.unsplash.com/800x600/?table-lamp",
        "company": "GourmetGrove"
      },
      {
        "name": "Room Divider",
        "price": 57.95,
        "image": "https://source.unsplash.com/800x600/?room-divider",
        "company": "MingleMoods"
      },
      {
        "name": "Dresser",
        "price": 89.50,
        "image": "https://source.unsplash.com/800x600/?dresser",
        "company": "ChicHaven"
      },
      {
        "name": "Ottoman",
        "price": 29.99,
        "image": "https://source.unsplash.com/800x600/?ottoman",
        "company": "Havencrest"
      },
      {
        "name": "Vanity Table",
        "price": 98.95,
        "image": "https://source.unsplash.com/800x600/?vanity-table",
        "company": "Nexa"
      },
      {
        "name": "Wall Art",
        "price": 23.50,
        "image": "https://source.unsplash.com/800x600/?wall-art",
        "company": "Crestwood"
      },
      {
        "name": "Plant Stand",
        "price": 19.75,
        "image": "https://source.unsplash.com/800x600/?plant-stand",
        "company": "Amberton"
      },
      {
        "name": "Shelves",
        "price": 47.99,
        "image": "https://source.unsplash.com/800x600/?shelves",
        "company": "VividSpaces"
      },
      {
        "name": "Writing Desk",
        "price": 68.95,
        "image": "https://source.unsplash.com/800x600/?writing-desk",
        "company": "HarborHome"
      },
      {
        "name": "Throw Blanket",
        "price": 21.50,
        "image": "https://source.unsplash.com/800x600/?throw-blanket",
        "company": "LuxeLiving"
      },
      {
        "name": "Wine Rack",
        "price": 36.99,
        "image": "https://source.unsplash.com/800x600/?wine-rack",
        "company": "Barrique"
      },
      {
        "name": "Sculpture",
        "price": 31.75,
        "image": "https://source.unsplash.com/800x600/?sculpture",
        "company": "Eleganza"
      },
      {
        "name": "Bookshelf",
        "price": 74.50,
        "image": "https://source.unsplash.com/800x600/?bookshelf",
        "company": "Luxuria"
      },
      {
        "name": "Desk Lamp",
        "price": 26.99,
        "image": "https://source.unsplash.com/800x600/?desk-lamp",
        "company": "GourmetGrove"
      },
      {
        "name": "Room Screen",
        "price": 53.95,
        "image": "https://source.unsplash.com/800x600/?room-screen",
        "company": "MingleMoods"
      },
      {
        "name": "Vanity Dresser",
        "price": 112.50,
        "image": "https://source.unsplash.com/800x600/?vanity-dresser",
        "company": "ChicHaven"
      },
      {
        "name": "Stool",
        "price": 18.99,
        "image": "https://source.unsplash.com/800x600/?stool",
        "company": "Havencrest"
      },
      {
        "name": "Folding Screen",
        "price": 72.95,
        "image": "https://source.unsplash.com/800x600/?folding-screen",
        "company": "Nexa"
      },
      {
        "name": "Wall Sculpture",
        "price": 44.50,
        "image": "https://source.unsplash.com/800x600/?wall-sculpture",
        "company": "Crestwood"
      },
      {
        "name": "Indoor Fountain",
        "price": 95.75,
        "image": "https://source.unsplash.com/800x600/?indoor-fountain",
        "company": "Amberton"
      },
      {
        "name": "Bar Cart",
        "price": 49.99,
        "image": "https://source.unsplash.com/800x600/?bar-cart",
        "company": "VividSpaces"
      },
      {
        "name": "Computer Desk",
        "price": 89.95,
        "image": "https://source.unsplash.com/800x600/?computer-desk",
        "company": "HarborHome"
      },
      {
        "name": "Throw Pillow",
        "price": 14.50,
        "image": "https://source.unsplash.com/800x600/?throw-pillow",
        "company": "LuxeLiving"
      },
      {
        "name": "Console Table",
        "price": 64.99,
        "image": "https://source.unsplash.com/800x600/?console-table",
        "company": "Barrique"
      },
      {
        "name": "Sculpture",
        "price": 28.75,
        "image": "https://source.unsplash.com/800x600/?sculpture",
        "company": "Eleganza"
      },
      {
        "name": "Dining Table",
        "price": 189.50,
        "image": "https://source.unsplash.com/800x600/?dining-table",
        "company": "Luxuria"
      },
      {
        "name": "Floor Mirror",
        "price": 58.95,
        "image": "https://source.unsplash.com/800x600/?floor-mirror",
        "company": "GourmetGrove"
      },
      {
        "name": "Closet Organizer",
        "price": 79.50,
        "image": "https://source.unsplash.com/800x600/?closet-organizer",
        "company": "MingleMoods"
      },
      {
        "name": "Dresser",
        "price": 94.50,
        "image": "https://source.unsplash.com/800x600/?dresser",
        "company": "ChicHaven"
      },
      {
        "name": "Stool",
        "price": 17.99,
        "image": "https://source.unsplash.com/800x600/?stool",
        "company": "Havencrest"
      },
      {
        "name": "Corner Desk",
        "price": 74.95,
        "image": "https://source.unsplash.com/800x600/?corner-desk",
        "company": "Nexa"
      },
      {
        "name": "Wall Art",
        "price": 19.50,
        "image": "https://source.unsplash.com/800x600/?wall-art",
        "company": "Crestwood"
      },
      {
        "name": "Pendant Lamp",
        "price": 36.75,
        "image": "https://source.unsplash.com/800x600/?pendant-lamp",
        "company": "Amberton"
      },
      {
        "name": "Wine Cabinet",
        "price": 119.99,
        "image": "https://source.unsplash.com/800x600/?wine-cabinet",
        "company": "VividSpaces"
      },
      {
        "name": "Writing Desk",
        "price": 54.95,
        "image": "https://source.unsplash.com/800x600/?writing-desk",
        "company": "HarborHome"
      },
      {
        "name": "Decorative Pillow",
        "price": 16.50,
        "image": "https://source.unsplash.com/800x600/?decorative-pillow",
        "company": "LuxeLiving"
      },
      {
        "name": "Bookcase",
        "price": 87.99,
        "image": "https://source.unsplash.com/800x600/?bookcase",
        "company": "Barrique"
      },
      {
        "name": "Statue",
        "price": 34.75,
        "image": "https://source.unsplash.com/800x600/?statue",
        "company": "Eleganza"
      },
      {
        "name": "Buffet Table",
        "price": 139.50,
        "image": "https://source.unsplash.com/800x600/?buffet-table",
        "company": "Luxuria"
      },
      {
        "name": "Desk Lamp",
        "price": 29.99,
        "image": "https://source.unsplash.com/800x600/?desk-lamp",
        "company": "GourmetGrove"
      },
      {
        "name": "Shoe Cabinet",
        "price": 72.95,
        "image": "https://source.unsplash.com/800x600/?shoe-cabinet",
        "company": "MingleMoods"
      },
      {
        "name": "Nightstand",
        "price": 62.50,
        "image": "https://source.unsplash.com/800x600/?nightstand",
        "company": "ChicHaven"
      },
      {
        "name": "Stool",
        "price": 14.99,
        "image": "https://source.unsplash.com/800x600/?stool",
        "company": "Havencrest"
      },
      {
        "name": "Laptop Desk",
        "price": 48.95,
        "image": "https://source.unsplash.com/800x600/?laptop-desk",
        "company": "Nexa"
      }
  ]

  
  export default products