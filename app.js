const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const https = require('https');
const { response } = require('express');
const { data } = require('jquery');

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended:true }));
// Use folder called "public" for the static files
app.use(express.static("public"));
// Set the view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const url = "https://ancient-springs-63198.herokuapp.com/api/books";
    https.get(url, response => {
        console.log(response.statusCode);

        response.on("data", data => {
            const booksData = JSON.parse(data);
            res.render('index', {
                books: booksData
            });
        })
    })
});

app.post('/', (req,res) => {
    const books = [];
    const bookId = req.body.bookId;
    const apiUrl = `https://ancient-springs-63198.herokuapp.com/api/books/${bookId}`;
    https.get(apiUrl, response => {
        console.log(response.statusCode);
        response.on("data", data => {
            const bookData = JSON.parse(data);
            books[0] = bookData;
            console.log(books);
            if (bookData !== null) {
                res.render('index', {
                    books: books
                });
            } else {
                res.render('index', {
                    books: books
                });
            }
        })
    })
})

app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
});
