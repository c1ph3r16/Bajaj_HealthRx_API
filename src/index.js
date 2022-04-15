const dotenv = require('dotenv');

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();


dotenv.config();
app.use(express.json());

PORT = process.env.PORT || 3000;



app.post("/bfhl", async(req, res) => {
    try {
        const response = {
            "is_success": true,
            "user_id": "Mihir_khare_16022000",
            "email": "nero.khare.786@gmail.com",
            "roll_number": "0832CS191103",
            "numbers": [],
            "alphabets": []
        }


        const { data } = req.body;
        for (let element of data) {
            if (isNaN(parseInt(element))) {
                response.alphabets.push(element);
            } else {
                response.numbers.push(element);
            }
        }
        res.json(response);


    } catch (error) {

    }
});



app.listen(PORT, () => {
    console.log("Server running on port " + PORT + ".");
})