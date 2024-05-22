const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const banners = [
    
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
    }
];

/* Banner GET */
app.get('/api/banners', (req, res) => {
    res.json(banners);
});

/* Product GET */
app.get('/api/products', (req, res) => {
    res.json(products);
});



/* Banner POST */
app.post('/api/banners', (req, res) => {
    const { bannerImg, bannerTitle, bannerText, bannerProductCode } = req.body;

    const newBanner = {
        id: banners.length + 1,
        bannerImg: bannerImg,
        bannerTitle: bannerTitle,
        bannerText: bannerText,
        bannerProductCode: bannerProductCode
    };

    banners.push(newBanner);
    console.log(newBanner);

    res.status(201).json({ message: 'Banner successfully added!', banner: newBanner });
});

/* Server Listen */
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
