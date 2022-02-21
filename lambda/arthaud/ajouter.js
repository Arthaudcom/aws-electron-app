console.log('Loading function');

var AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
const querystring = require('querystring');

exports.handler = async (event) => {
  const postdata = querystring.parse(event.body);
  
  let pizza = null;
  let pizzajson = postdata["pizzajson"];
  if(pizzajson){
    pizza = JSON.parse(pizzajson);
  }
  
  let response = {
    statusCode: 400,
    headers: {
      "Access-Control-Allow-Origin" : "*"
    },
    body : "Pas de pizza reçu",
  };
  
  if (pizza == null) {
    return response;
  }

  pizza.id = Date.now();

  const params = {
      Bucket: "app-pizza-arthaud",
      Key: "liste-pizza.json",
  };

  let data = await s3.getObject(params).promise();
  let listePizzaJson = data.Body.toString('utf-8');
  const listePizza = JSON.parse(listePizzaJson);
  listePizza.push(pizza);
  listePizzaJson = JSON.stringify(listePizza);
  params.Body  = listePizzaJson;
  data = await s3.putObject(params).promise();

  response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: pizza.id
  };

  return response;
};
