var axios = require('axios');

const requestCalculator = async (op, intA, intB) => {
    var data = `<?xml version="1.0" encoding="utf-8"?>\n<soap12:Envelope xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">\n  <soap12:Body>\n    <${op} xmlns="http://tempuri.org/">\n      <intA>${intA}</intA>\n      <intB>${intB}</intB>\n    </${op}>\n  </soap12:Body>\n</soap12:Envelope>\n`;

    var config = {
        method: 'post',
        url: 'http://www.dneonline.com/calculator.asmx',
        headers: {
            'Content-Type': 'text/xml; charset=utf-8',
            'SOAPAction': 'http://tempuri.org/Subtract'
        },
        data: data
    };
}

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
});

const xmlToJson = (xml, op) => {
        return xml.split(`<${op}Result>`).pop().split(`</${op}Result>`)[0];
};

module.exports = {
    requestCalculator,
    xmlToJson,
};


