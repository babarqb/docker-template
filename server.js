const express = require('express')
const {Client} = require('pg')
const app = express();
const port = 8000;
const client = new Client({
    user: 'root',
    host: 'postgres',
    database: 'employee_db',
    password: 'root',
    port: 5432
})
app.use(express.static('public'))
app.get('/employees', async (req, res) => {
        const results = await client
            .query('SELECT * FROM employees')
            .then(res => res.rows)
            .catch(e => console.error(e.stack));
        res.setHeader('Content-Type', 'application/json');
        res.status(200)
        res.send(JSON.stringify(results))
    }
);
(async () => {
    try {
        await client.connect()
        console.log('connected')
    } catch (e) {
        console.error(e.stack)
    }
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
})();
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 300);
    reject('oops');
});

myPromise.then(() => {
    console.log('hello');
});

