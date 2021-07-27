const express = require("express");
const faker = require("faker");
const app = express();
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});
class User {
  constructor(){
      this._id = faker.random.number();
      this.firstName = faker.name.firstName();
      this.lastName = faker.name.lastName();
      this.phoneNumber = faker.phone.phoneNumber();
      this.email = faker.internet.email();
      this.password = faker.internet.password();
  }
}
console.log(new User());

class Company {
  constructor(){
      this._id = faker.random.number();
      this.name = faker.company.companyName();
      this.street = faker.address.streetName();
      this.city = faker.address.city();
      this.state = faker.address.state();
      this.zipCode = faker.address.zipCode();
      this.country = faker.address.country();
  }
}
console.log(new Company());
app.get('/api/users/new', (req,res) =>{
    var user = new User();
    res.json({results: user});
    
})

app.get('/api/companies/new', (req,res) =>{
    var company = new Company();
    res.json({results: company});
    
})

app.get('/api/user/company', (req, res) =>{
    var user = new User();
    var company = new Company();
    res.json({
        results: {
            user: user,
            company: company,
        }
    })
})

const server = app.listen(8000, () => console.log(`Listening on port ${8000}`));
