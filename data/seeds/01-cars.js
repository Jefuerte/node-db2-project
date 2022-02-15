// STRETCH

const cars = [
    { 
        vin: '123456789234567',
        make: 'Toyota',
        model: 'Tundra',
        mileage: 1000,
        title: 'clean',
        transmission: 'manual',
    },
    { 
        vin: '123246789234567',
        make: 'Honda',
        model: 'Civic Type R',
        mileage: 1100,
        title: 'clean',
        transmission: 'stick',
    }, 
    { 
        vin: '123456789234555',
        make: 'Porsche',
        model: 'Taycan',
        mileage: 0,
        title: 'clean',
        transmission: 'electric',
    }, 
    { 
        vin: '123456789234897',
        make: 'Toyota',
        model: 'Corrolla',
        mileage: 3000,
        title: 'clean',
        transmission: 'manual',
    }
]

exports.seed = async function (knex) {
   await knex('cars').truncate()
   await knex('cars').insert(cars)
}
