const express = require('express');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let trucks = [
  {
    imageOfTruck: "https://i.ytimg.com/vi/vUuESUUh0z0/hqdefault.jpg",
    name: 'food truck 1',
    cuisineType: 'The other Tum',
    customerRatings: [8, 9, 10, 3, 0],
    customerRatingAvg: 8,
    menu: [
      { 
        itemName: 'ham',
        itemDescription: 'full of ham goodness',
        itemPhotos: ["https://i.ytimg.com/vi/vUuESUUh0z0/hqdefault.jpg","https://i.ytimg.com/vi/vUuESUUh0z0/hqdefault.jpg","https://i.ytimg.com/vi/vUuESUUh0z0/hqdefault.jpg","https://i.ytimg.com/vi/vUuESUUh0z0/hqdefault.jpg"],
        itemPrice: 9,
        customerRatings: [9, 8, 7, 6],
        customerRatingAvg: 6
      },
      { 
        itemName: 'ham',
        itemDescription: 'full of ham goodness',
        itemPhotos: ["https://i.ytimg.com/vi/vUuESUUh0z0/hqdefault.jpg","https://i.ytimg.com/vi/vUuESUUh0z0/hqdefault.jpg","https://i.ytimg.com/vi/vUuESUUh0z0/hqdefault.jpg","https://i.ytimg.com/vi/vUuESUUh0z0/hqdefault.jpg"],
        itemPrice: 9,
        customerRatings: [9, 8, 7, 6],
        customerRatingAvg: 6
      },
    ]
  },
  {
    imageOfTruck: "https://www.thebalancesmb.com/thmb/3AOOgtucfdpCcft044FFAlmqcjQ=/300x200/filters:saturation(0.2):brightness(10):contrast(5):no_upscale()/Food-truck-1-56a7f5ff3df78cf7729b1e19.jpg",
    name: 'food truck 2',
    cuisineType: 'Yummy',
    customerRatings: [8, 9, 10, 3, 0],
    customerRatingAvg: 8,
    menu: [
      { 
        itemName: 'ham',
        itemDescription: 'full of ham goodness',
        itemPhotos: ["https://i.ytimg.com/vi/vUuESUUh0z0/hqdefault.jpg","https://i.ytimg.com/vi/vUuESUUh0z0/hqdefault.jpg","https://i.ytimg.com/vi/vUuESUUh0z0/hqdefault.jpg","https://i.ytimg.com/vi/vUuESUUh0z0/hqdefault.jpg"],
        itemPrice: 9,
        customerRatings: [9, 8, 7, 6],
        customerRatingAvg: 6
      },
      { 
        itemName: 'ham',
        itemDescription: 'full of ham goodness',
        itemPhotos: ["https://i.ytimg.com/vi/vUuESUUh0z0/hqdefault.jpg","https://i.ytimg.com/vi/vUuESUUh0z0/hqdefault.jpg","https://i.ytimg.com/vi/vUuESUUh0z0/hqdefault.jpg","https://i.ytimg.com/vi/vUuESUUh0z0/hqdefault.jpg"],
        itemPrice: 9,
        customerRatings: [9, 8, 7, 6],
        customerRatingAvg: 6
      },
    ]
  },
  {
    imageOfTruck: "http://apt613.ca/wp-content/uploads/2012/08/Food-Truck-2.jpg",
    name: 'food truck 3',
    cuisineType: 'Tum',
    customerRatings: [8, 9, 10, 3, 0],
    customerRatingAvg: 8,
    menu: [
      { 
        itemName: 'ham',
        itemDescription: 'full of ham goodness',
        itemPhotos: ["https://i.ytimg.com/vi/vUuESUUh0z0/hqdefault.jpg","https://i.ytimg.com/vi/vUuESUUh0z0/hqdefault.jpg","https://i.ytimg.com/vi/vUuESUUh0z0/hqdefault.jpg","https://i.ytimg.com/vi/vUuESUUh0z0/hqdefault.jpg"],
        itemPrice: 9,
        customerRatings: [9, 8, 7, 6],
        customerRatingAvg: 6
      },
      { 
        itemName: 'ham',
        itemDescription: 'full of ham goodness',
        itemPhotos: ["https://i.ytimg.com/vi/vUuESUUh0z0/hqdefault.jpg","https://i.ytimg.com/vi/vUuESUUh0z0/hqdefault.jpg","https://i.ytimg.com/vi/vUuESUUh0z0/hqdefault.jpg","https://i.ytimg.com/vi/vUuESUUh0z0/hqdefault.jpg"],
        itemPrice: 9,
        customerRatings: [9, 8, 7, 6],
        customerRatingAvg: 6
      },
    ]
  },
];


server.get('/trucks', (req, res) => {
  res.json(trucks);
});
let smurfId = trucks.length;

server.post('/trucks', (req, res) => {
    res.json(trucks);
});

server.put('/trucks/:id', (req, res) => {
    res.json(trucks);
});

server.delete('/trucks/:id', (req, res) => {
    res.json(trucks);
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});