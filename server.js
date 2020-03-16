const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());

// custommiddleware
app.use(require('./customMiddleware'));


app.use('/api/users', require('./routes/user'));
app.use('/api/user/journey', require('./routes/journey'));


app.listen(PORT, () => { console.log(`The app is running on port ${PORT}`); });
