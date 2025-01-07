const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sql = require('mssql');

const app = express();
const port = 3000;
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));


const products = [
    /* {
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
    } */
];


// JWT Secret Key
const SECRET_KEY = '/api/login';

// Users
const users = [{ username: 'admin', password: 'admin' }];

// Database Configuration
const dbConfig = {
    user: 'emin',
    password: 'Baku99339933',
    server: 'teamproject.database.windows.net',
    database: 'teamproject',
    options: {
        encrypt: true,
        trustServerCertificate: false,
    },
};

// Connect to the Database
async function connectToDatabase() {
    try {
        const pool = await sql.connect(dbConfig);
        console.log('Connected to Azure SQL Database!');
        return pool;
    } catch (err) {
        console.error('Database connection failed!', err);
        throw err;
    }
}

// Login API
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful!', token });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

// JWT Authentication Middleware
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

// Example Protected Route
app.get('/api/protected', authenticateJWT, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

// Fetch Products from Database
app.get('/api/products', async (req, res) => {
    try {
        const pool = await connectToDatabase();
        const result = await pool.request().query('SELECT * FROM Products');
        res.json(result.recordset);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ message: 'Error fetching products' });
    }
});

// Add Product to Database
app.post('/api/products', async (req, res) => {
    const { productImg, productProdCode, productTitle, productInfo, productOldPrice, productNewPrice } = req.body;
    try {
        const pool = await connectToDatabase();
        await pool.request()
            .input('Image', sql.NVarChar, productImg)
            .input('ProductCode', sql.NVarChar, productProdCode)
            .input('ProductName', sql.NVarChar, productTitle)
            .input('Description', sql.NVarChar, productInfo)
            .input('OldPrice', sql.Decimal(10, 2), productOldPrice)
            .input('NewPrice', sql.Decimal(10, 2), productNewPrice)
            .query(`
                INSERT INTO Products (Image, ProductCode, ProductName, Description, OldPrice, NewPrice) 
                VALUES (@Image, @ProductCode, @ProductName, @Description, @OldPrice, @NewPrice)
            `);
        res.status(201).json({ message: 'Product successfully added' });
    } catch (err) {
        console.error('Error adding product:', err);
        res.status(500).json({ message: 'Error adding product' });
    }
});


/* Server Listen */
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});