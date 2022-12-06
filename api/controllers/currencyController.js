const axios = require('axios');
const xmlToJson = require('xml-to-json-stream');
const Currency = require("../models/Currency");
const parser = xmlToJson () ;
const url = 'https://www.nbkr.kg/XML/weekly.xml';

exports.getAllCurrency =  async function (req, res, next) {
    try {
        const currencies = await Currency.find().sort({_id: -1}).limit(39);
        if (currencies[0]) {
            return res.send(currencies);
        } else {
            const response = await axios.get(url);
            parser.xmlToJson(response.data,async (err, json) => {
                if (err) return err;
                for (let i = 0; i < json.CurrencyRates.Currency.length; i++) {
                    const currencyData = {
                        ISOCode: json.CurrencyRates.Currency[i].ISOCode,
                        value: json.CurrencyRates.Currency[i].Value,
                        datetime: json.CurrencyRates.Date,
                    };
                    const currency = new Currency(currencyData);
                    await currency.save();
                }

                const currencies = await Currency.find().sort({_id: -1})
                return res.send(currencies);
            });
        }
    } catch(e) {
        next(e);
    }
};

