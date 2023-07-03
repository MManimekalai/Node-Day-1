const CountriesRouter = require("express").Router();

CountriesRouter.post('/saveCountry', function (req, res, next) {
    console.log(req.body)
// res.status(200).json({
//     message: "Rest Countries API is under development"
// });
});

module.exports = CountriesRouter;