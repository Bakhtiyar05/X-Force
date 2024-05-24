const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));


// JWT için gizli anahtar
const SECRET_KEY = '/api/login';

// Kullanıcı bilgileri
const users = [
    { username: 'admin', password: 'admin' }
];

// Oturum açma endpoint'i
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Kullanıcı doğrulaması
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        // Kullanıcı doğrulandıysa JWT oluştur
        const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful!', token });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

// JWT doğrulama middleware'i
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, SECRET_KEY, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

// Örnek korumalı endpoint
app.get('/api/protected', authenticateJWT, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});



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


/* Banner DELETE */
app.delete('/api/banners/:id', (req, res) => {
    const bannerId = parseInt(req.params.id);
    const index = banners.findIndex(banner => banner.id === bannerId);

    if (index === -1) {
        return res.status(404).json({ message: 'Banner not found!' });
    }

    const deletedBanner = banners.splice(index, 1);
    console.log('Deleted banner:', deletedBanner);

    res.status(200).json({ message: 'Banner successfully deleted!' });
});







/* Banner PUT */
app.put('/api/banners/:id', (req, res) => {
    const bannerId = parseInt(req.params.id);
    const index = banners.findIndex(banner => banner.id === bannerId);

    if (index === -1) {
        return res.status(404).json({ message: 'Banner not found!' });
    }

    const { bannerImg, bannerTitle, bannerText, bannerProductCode } = req.body;
    banners[index] = {
        ...banners[index],
        bannerImg: bannerImg,
        bannerTitle: bannerTitle,
        bannerText: bannerText,
        bannerProductCode: bannerProductCode
    };

    res.status(200).json({ message: 'Banner successfully updated!', banner: banners[index] });
});













/* Product GET */
app.get('/api/products', (req, res) => {
    res.json(products);
});





/* Server Listen */
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});