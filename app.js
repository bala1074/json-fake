var jsf = require('json-schema-faker');
const processSchema = {
    "type": "array",
    "minItems": 80,
    "items": {
    "type": "object",
    "properties": {
        "process": {
          "type": "string",
          "faker": "name.findName"
        },
        "type": {
          "type": "string",
          "enum": ["JAVA", ".NET","PYTHON"]
        },
        "region": {
          "type": "string",
          "enum": ["Eastcoast", "Westcoasdt"]
        },
        "uptime": {
          "type": "integer",
          "minimum": 0,
          "maximum": 10
        },
        "status": {
          "type": "string",
          "enum": ["Active", "Inactive"]
        },
        "lastseen": {
          "type": "integer",
          "minimum": 0,
          "maximum": 10
        }
      },
      "required": [
        "process",
        "type",
        "region",
        "uptime",
        "status",
        "lastseen"
      ]
    }
  };

  

  //generate fake json from jsonschema using json schema faker
  jsf.resolve(processSchema).then(function(res) {

    //format generated fake json, will be key/value double quoted 
    var jsonFormat = require('json-format');
    var config = {type: 'space',size: 2};
    res = jsonFormat(res,config);

    console.log(res);
    //console.log(JSON.parse(res.toString()));
  });
  

// var faker = require('faker');

// var randomName = faker.name.findName(); // Rowan Nikolaus
// var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties

// console.log(randomName);
