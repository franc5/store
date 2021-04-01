const items = [
  {
    image: 'https://www.cstatic-images.com/car-pictures/main/usd10ans011a021001.png',
    title: '2021 Aston Martin DBX',
    price: 176900
  },
  {
    image: 'https://www.cstatic-images.com/car-pictures/main/usd10chs082d021001.png',
    title: '2021 Chevrolet TrailBlazer',
    price: 19000
  },
  {
    image: 'https://www.cstatic-images.com/car-pictures/main/usd10vws052i021001.png',
    title: '2021 Volkswagen Atlas',
    price: 31545
  },
  {
    image: 'https://www.cstatic-images.com/car-pictures/main/usc60cas031b021001.png',
    title: '2021 Cadillac Escalade ESV',
    price: 79195
  },
  {
    image: 'https://www.cstatic-images.com/car-pictures/main/usc80jas021b021001.png',
    title: '2021 Jaguar E-PACE',
    price: 40995
  },
];

export default function getItems() {
  return new Promise((resolve) =>
    resolve(items)
  );
}