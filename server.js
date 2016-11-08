var express = require('express');

var Storage = {
  add: function(name) {
    var item = {name: name, id: this.setId};
    this.items.push(item);
    this.setId += 1;
    return item;
  },
  delete: function(id) {
    for (var i = 0; i < this.items.length; i++) {
      if(this.items[i].id == id){
        this.items.splice(i,1);
      }
    }
  },
  put: function(name) {
   for (var i = 0; i < this.items.length; i++) {
    if(this.items[i].name == id){
        this.items[i].splice(name,id);
      }
    }
  }
};

var createStorage = function() {
  var storage = Object.create(Storage);
  storage.items = [];
  storage.setId = 1;
  return storage;
};

var storage = createStorage();

storage.add('Strawberries');
storage.add('Tomatoes');
storage.add('Peppers');

var app = express();
app.use(express.static('public'));

app.get('/items', function(request, response) {
    response.json(storage.items);
});

//prepping the body post function by setting bodyParser & jsonParser
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

app.post('/items', jsonParser, function(request, response) {
    if (!('name' in request.body)) {
        return response.sendStatus(400); //400 = 'bad request'
    }

    var item = storage.add(request.body.name);
    response.status(201).json(item); //201 = 'created'
});

app.put('/items/:id', jsonParser, function(request, response) {
    var item = storage.put(request.body);
    response.status(200).json(item);
});
//need to add not found 404 if failed
//need to add success 200 if succeeded
//if non-existent ID is placed, need to create a new ID for it
//Remember that you're passing the ID in the request.params 
// and the request.body, so you should check that they match
// as well.


app.delete('/items/:id', function(request,response){
  // response.json(storage.items.splice);
  //need to add not found 404 if failed
    storage.delete(request.params.id);
    response.sendStatus(200);
    
});

/*
var Storage = {
  add: function(name) {
    var item = {name: name, id: this.setId};
    this.items.push(item);
    this.setId += 1;
    return item;
  } 
  delete: function(name) {
    var item = {name: name, id: this.setId};
    this.items.splice(item);
    this.setId -= 1;
    !return item;
  }
};
*/



app.listen(process.env.PORT || 8080,function(){
  console.log('app is running on server http://localhost:8080');
});

exports.app = app;
exports.storage = storage;





































