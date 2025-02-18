const express = require('express');
const app = express();
const port = 3001;

const books = [
    { id: 1, title: 'Node.js for beginners', author: 'SBAC Begin' },
    { id: 2, title: 'Express.js Mastery', author: 'SBAC Express' }
];

app.get('/', (req, res) => {
    res.json({ fname: 'Techavit', lname: 'Srichaimu' });
});

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);
    if (book) {
        res.json(book);
    } else {
        res.json({ message: 'ไม่มี!!!!!!!!!!!!!!!!!!!!!!!!!!!' });
    }
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
