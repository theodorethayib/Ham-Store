const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin:'http://localhost:3000',
}));

const port = 5000;

app.get('/', (req, res) => {
    res.json({
        message: 'Hello world!',
    });
});

app.get('/ham', (req, res) => {
    res.json({
        message: [
            {"name": "Not tavern ham", "image": "https://media.istockphoto.com/photos/large-holiday-ham-on-a-white-background-picture-id1085504140?k=20&m=1085504140&s=612x612&w=0&h=OorrnhdErZ5fswli6ilAZNicXZNN1_lOGI8tc9P0OfI=", "description": "Some ham", "price": "$0.01"},
            {"name": "Also not tavern ham", "image": "https://images-gmi-pmc.edge-generalmills.com/4e7aa85f-dcce-4c16-82e8-4f8015e8f78e.jpg", "description": "Also not tavern ham description", "price": "$0.05"},
            {"name": "Tavern Ham", "image": "https://i.imgur.com/e19qclL.png", "description": "TAVERN HAM!!!", "price": "Priceless"},
        ]
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});