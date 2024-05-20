const express = require('express');
const cors = require('cors'); // CORS modülünü ekleyin
const app = express();
const port = 3000;

app.use(cors()); // CORS izinlerini ekleyin


const banners = [
    {
        id: 1,
        img: '../assets/img/Banner1.jpg',
        title: 'Elegance Noire 1',
        text: `Seduce the senses with Elegance Noire, a women's fragrance that embodies elegance and mystery. A symphony of midnight jasmine, deep amber and whispers of musk, this scent lingers like a hidden promise. Unleash your inner magician with Elegance Noire."`,
        bannerProductCode: '123'
    },
    {
        id: 2,
        img: '../assets/img/Banner2.jpg',
        title: 'Exclusive Perfumes 2',
        text: 'The Hakari River is surrounded by the oak and hornbeam trees, an abundant texture of water. Ingredients: oak, cedar, nutmeg, wet wood, patchouli.',
        bannerProductCode: '124'
    },
    {
        id: 3,
        img: '../assets/img/Banner3.jpg',
        title: 'Exclusive Perfumes 3',
        text: 'The Hakari River is surrounded by the oak and hornbeam trees, an abundant texture of water. Ingredients: oak, cedar, nutmeg, wet wood, patchouli.',
        bannerProductCode: '125'
    }
];

const products = [
    {
        id: 1,
        img: '../assets/img/Banner1.jpg',
        productCode: 1,
        productName: 'Aaaaaa',
        productInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur error, incidunt itaque et veniam mollitia.',
        watt: 1200,
        wolt: 220,
        oldPrice: '',
        newPrice: 399
    },
    {
        id: 2,
        img: '../assets/img/Banner2.jpg',
        productCode: 2,
        productName: 'Aaaaaa',
        productInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur error, incidunt itaque et veniam mollitia.',
        watt: 1200,
        wolt: 220,
        oldPrice: 499,
        newPrice: 399
    },
    {
        id: 3,
        img: '../assets/img/Banner3.jpg',
        productCode: 3,
        productName: 'Aaaaaa',
        productInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur error, incidunt itaque et veniam mollitia.',
        watt: 1200,
        wolt: 220,
        oldPrice: 499,
        newPrice: 399
    },
    {
        id: 4,
        img: '../assets/img/Banner3.jpg',
        productCode: 4,
        productName: 'Aaaaaa',
        productInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur error, incidunt itaque et veniam mollitia.',
        watt: 1200,
        wolt: 220,
        oldPrice: 599,
        newPrice: 499
    },
    {
        id: 2,
        img: '../assets/img/Banner2.jpg',
        productCode: 2,
        productName: 'Aaaaaa',
        productInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur error, incidunt itaque et veniam mollitia.',
        watt: 1200,
        wolt: 220,
        oldPrice: 499,
        newPrice: 399
    },
    {
        id: 3,
        img: '../assets/img/Banner3.jpg',
        productCode: 3,
        productName: 'Aaaaaa',
        productInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur error, incidunt itaque et veniam mollitia.',
        watt: 1200,
        wolt: 220,
        oldPrice: 499,
        newPrice: 399
    },
    {
        id: 4,
        img: '../assets/img/Banner3.jpg',
        productCode: 4,
        productName: 'Aaaaaa',
        productInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur error, incidunt itaque et veniam mollitia.',
        watt: 1200,
        wolt: 220,
        oldPrice: 599,
        newPrice: 499
    },
    {
        id: 2,
        img: '../assets/img/Banner2.jpg',
        productCode: 2,
        productName: 'Aaaaaa',
        productInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur error, incidunt itaque et veniam mollitia.',
        watt: 1200,
        wolt: 220,
        oldPrice: 499,
        newPrice: 399
    },
    {
        id: 3,
        img: '../assets/img/Banner3.jpg',
        productCode: 3,
        productName: 'Aaaaaa',
        productInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur error, incidunt itaque et veniam mollitia.',
        watt: 1200,
        wolt: 220,
        oldPrice: 499,
        newPrice: 399
    },
    {
        id: 4,
        img: '../assets/img/Banner3.jpg',
        productCode: 4,
        productName: 'Aaaaaa',
        productInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur error, incidunt itaque et veniam mollitia.',
        watt: 1200,
        wolt: 220,
        oldPrice: 599,
        newPrice: 499
    },
    {
        id: 2,
        img: '../assets/img/Banner2.jpg',
        productCode: 2,
        productName: 'Aaaaaa',
        productInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur error, incidunt itaque et veniam mollitia.',
        watt: 1200,
        wolt: 220,
        oldPrice: 499,
        newPrice: 399
    },
    {
        id: 3,
        img: '../assets/img/Banner3.jpg',
        productCode: 3,
        productName: 'Aaaaaa',
        productInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur error, incidunt itaque et veniam mollitia.',
        watt: 1200,
        wolt: 220,
        oldPrice: 499,
        newPrice: 399
    },
    {
        id: 4,
        img: '../assets/img/Banner3.jpg',
        productCode: 4,
        productName: 'Aaaaaa',
        productInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur error, incidunt itaque et veniam mollitia.',
        watt: 1200,
        wolt: 220,
        oldPrice: 599,
        newPrice: 499
    },
    {
        id: 2,
        img: '../assets/img/Banner2.jpg',
        productCode: 2,
        productName: 'Aaaaaa',
        productInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur error, incidunt itaque et veniam mollitia.',
        watt: 1200,
        wolt: 220,
        oldPrice: 499,
        newPrice: 399
    },
    {
        id: 3,
        img: '../assets/img/Banner3.jpg',
        productCode: 3,
        productName: 'Aaaaaa',
        productInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur error, incidunt itaque et veniam mollitia.',
        watt: 1200,
        wolt: 220,
        oldPrice: 499,
        newPrice: 399
    },
    {
        id: 4,
        img: '../assets/img/Banner3.jpg',
        productCode: 4,
        productName: 'Aaaaaa',
        productInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur error, incidunt itaque et veniam mollitia.',
        watt: 1200,
        wolt: 220,
        oldPrice: 599,
        newPrice: 499
    }
]


/* Banner GET */

app.get('/api/banners', (req, res) => {
    res.json(banners);
});


/* Product GET */

app.get('/api/products', (req,res) => {
    res.json(products);
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
