const faker = require('faker');

exports.seed = async function(knex) {
      await knex('classes').insert([
        {
          name: 'Cycling',
          type: 'Cardio', 
          date: 'Wednesday',
          duration: '1 hour',
          intensity: 'Difficult',
          location: `${faker.address.streetAddress()}`,
          numberOfRegisteredAttendees: faker.random.number(),
          maxClassSize: faker.random.number()
        },
        {
          name: 'Running',
          type: 'Cardio', 
          date: 'Tuesday',
          duration: '1 hour',
          intensity: 'Moderate',
          location: `${faker.address.streetAddress()}`,
          numberOfRegisteredAttendees: faker.random.number(),
          maxClassSize: faker.random.number()
        },
        {
          name: 'Rowing',
          type: 'Cardio', 
          date: 'Wednesday',
          duration: '1 hour',
          intensity: 'Moderate',
          location: `${faker.address.streetAddress()}`,
          numberOfRegisteredAttendees: faker.random.number(),
          maxClassSize: faker.random.number()
        }
      ])
};
