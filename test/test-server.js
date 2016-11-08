var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');

var should = chai.should();
var app = server.app;
var storage = server.storage;

chai.use(chaiHttp);

describe('Shopping List', function() {
    it('should list items on get');
    it('should add an item on post');
    it('should edit an item on put');
    it('should delete an item on delete');
});

describe('Shopping List', function() {
    it('should list items on GET', function(done) {
        chai.request(app)
            .get('/items')
            .end(function(err, res) {
                res.should.have.status(200);
                done();
            });
    });

    it('should add an item on post');
    it('should edit an item on put');
    it('should delete an item on delete');
});

it('should list items on GET', function(done) {
        chai.request(app)
            .get('/items')
            .end(function(err, res) {
                should.equal(err, null);
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body.should.have.length(3);
                res.body[0].should.be.a('object');
                res.body[0].should.have.property('id');
                res.body[0].should.have.property('name');
                res.body[0].id.should.be.a('number');
                res.body[0].name.should.be.a('string');
                res.body[0].name.should.equal('Strawberries');
                res.body[1].name.should.equal('Tomatoes');
                res.body[2].name.should.equal('Peppers');
                done();
            });
    });

 it('should add an item on POST', function(done) {
        chai.request(app)
            .post('/items')
            .send({'name': 'Kale'})
            .end(function(err, res) {
                should.equal(err, null);
                res.should.have.status(201);//201 = 'created'
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.should.have.property('id');
                res.body.name.should.be.a('string');
                res.body.id.should.be.a('number');
                res.body.name.should.equal('Kale');
                storage.items.should.be.a('array');
                storage.items.should.have.length(4);
                storage.items[3].should.be.a('object');
                storage.items[3].should.have.property('id');
                storage.items[3].should.have.property('name');
                storage.items[3].id.should.be.a('number');
                storage.items[3].name.should.be.a('string');
                storage.items[3].name.should.equal('Kale');
                done();
            });
    });

 it('should delete an item on DELETE', function(done) {
 		chai.request(app)
 			.delete('/items/:id')
 			.end(function(err,res) {
 				should.equal(err,null);
 				res.should.have.status(200);//200 = 'succeeded'
 				done();
 			});
 });

 


// describe('Shopping List', function() {
//     it('should list items on get');
//     it('should add an item on post');
//     it('should edit an item on put');
//     it('should delete an item on delete');
//     it('should deposit $100 in my account per item added');
//     it('should save and have a send feature for operator to use');
//     it('should POST to an ID that exists');
// 	it('should POST without body data');
// 	it('should POST with something other than valid JSON');
// 	it('should PUT without an ID in the endpoint');
// 	it('should PUT with different ID in the endpoint than the body');
// 	it('should PUT to an ID that doesn\'t exist');
// 	it('should PUT without body data');
// 	it('should PUT with something other than valid JSON');
// 	it('should DELETE an ID that doesn\'t exist');
// 	it('should DELETE without an ID in the endpoint');
// });