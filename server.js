    const express = require('express');
    const bodyParser = require('body-parser');
    const obscureNum = require('./creditcard');

    const app = express();
    app.use(bodyParser.json());

    app.get('/', (req, res) => {
    res.send('GET request received');
    });

    app.post('/', (req, res) => {
        const creditCardNumber = req.body.creditCardNumber;
        if (!creditCardNumber) {
          return res.status(400).json({ error: 'Invalid request. Please provide a valid creditCardNumber in the request body.' });
        }
      
        const obscuredNumber = obscureNum(creditCardNumber);
        if (obscuredNumber === "Invalid Credit Card") {
          return res.status(400).json({ error: 'Invalid credit card number. Please provide a valid credit card number.' });
        }
      
        res.json({ obscuredNumber });
      });

    app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });
