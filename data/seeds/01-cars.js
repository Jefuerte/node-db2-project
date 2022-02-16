// STRETCH

const cars = [
    { 
        vin: '5J8TB1H52CA023115',
        make: 'Toyota',
        model: 'Tundra',
        mileage: 1000,
        title: 'clean',
        transmission: 'manual',
    },
    { 
        vin: 'KMHDN46D05U916449',
        make: 'Honda',
        model: 'Civic Type R',
        mileage: 1100,
        title: 'clean',
        transmission: 'stick',
    }, 
    { 
        vin: 'WDBUF56J86A738367',
        make: 'Porsche',
        model: 'Taycan',
        mileage: 0,
        title: 'clean',
        transmission: 'electric',
    }, 
    { 
        vin: '1GKS2CE04BR392092',
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
