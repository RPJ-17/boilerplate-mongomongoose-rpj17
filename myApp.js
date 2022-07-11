require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

const personSchema = mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: Array
});

let Person;

Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  const bruceWayne = new Person({"name": 'Bruce Wayne', "age": 33, "favoriteFoods": ["cucumber sandwiches"]});
  bruceWayne.save((err, data) => {
    if (err) return console.error(err);
    done(null , data);
  });
};

const arrayOfPeople = [
  {name: "Tim Drake", age: 17, favoriteFoods: ["Del Taco"]},
  {name: "Dick Grayson", age: 26, favoriteFoods: ["roast chicken"]},
  {name: "Jason Todd", age: 23, favoriteFoods: ["burgers"]},
  {name: "Barbara Gordon", age: 24, favoriteFoods: ["red wine"]},
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) return console.log(err);
    done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (err, personFound) => {
    if (err) return console.log(err);
    done(null, personFound);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, (err, data) => {
    if (err) return console.log(err);
    done(null, data);
  })
};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, data) => {
    if (err) return console.log(err);
    done(null, data);
  });
};

//findPersonById('62cb6d672a1a0ed024336a98', (err, doc) => console.log(err, doc)); // this works, but i don't see the other records being created

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
