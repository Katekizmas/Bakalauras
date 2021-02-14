import klientas from './klientas';

klientas.on('connect', () => {
  console.log('Prisijunga prie duomenų bazės');
});

/**
 * Create User Table
 * CREATE TABLE test
  (id SERIAL PRIMARY KEY, 
  name VARCHAR(100) UNIQUE NOT NULL, 
  phone VARCHAR(100));
 */
const createUserTable = () => {
  const userCreateQuery = `CREATE TABLE IF NOT EXISTS users
  (id SERIAL PRIMARY KEY, 
  email VARCHAR(100) UNIQUE NOT NULL, 
  first_name VARCHAR(100), 
  last_name VARCHAR(100), 
  password VARCHAR(100) NOT NULL,
  created_on DATE NOT NULL)`;

  klientas.query(userCreateQuery)
    .then((res) => {
      console.log(res);
      klientas.end();
    })
    .catch((err) => {
      console.log(err);
      klientas.end();
    });
};

/**
 * Create Buses Table
 */
const createBusTable = () => {
  const busCreateQuery = `CREATE TABLE IF NOT EXISTS bus
    (id SERIAL PRIMARY KEY,
    number_plate VARCHAR(100) NOT NULL,
    manufacturer VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    year VARCHAR(10) NOT NULL,
    capacity integer NOT NULL,
    created_on DATE NOT NULL)`;

  klientas.query(busCreateQuery)
    .then((res) => {
      console.log(res);
      klientas.end();
    })
    .catch((err) => {
      console.log(err);
      klientas.end();
    });
};

/**
 * Create Trip Table
 */
const createTripTable = () => {
  const tripCreateQuery = `CREATE TABLE IF NOT EXISTS trip
    (id SERIAL PRIMARY KEY, 
    bus_id INTEGER REFERENCES bus(id) ON DELETE CASCADE,
    origin VARCHAR(300) NOT NULL, 
    destination VARCHAR(300) NOT NULL,
    trip_date DATE NOT NULL,
    fare float NOT NULL,
    status float DEFAULT(1.00),
    created_on DATE NOT NULL)`;

  klientas.query(tripCreateQuery)
    .then((res) => {
      console.log(res);
      klientas.end();
    })
    .catch((err) => {
      console.log(err);
      klientas.end();
    });
};

/**
 * Create Booking Table
 */
const createBookingTable = () => {
  const bookingCreateQuery = `CREATE TABLE IF NOT EXISTS booking(id SERIAL, 
    trip_id INTEGER REFERENCES trip(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    bus_id INTEGER REFERENCES bus(id) ON DELETE CASCADE,
    trip_date DATE, 
    seat_number INTEGER UNIQUE,      
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,      
    created_on DATE NOT NULL,
    PRIMARY KEY (id, trip_id, user_id))`;
  klientas.query(bookingCreateQuery)
    .then((res) => {
      console.log(res);
      klientas.end();
    })
    .catch((err) => {
      console.log(err);
      klientas.end();
    });
};

/**
 * Drop User Table
 */
const dropUserTable = () => {
  const usersDropQuery = 'DROP TABLE IF EXISTS users';
  klientas.query(usersDropQuery)
    .then((res) => {
      console.log(res);
      klientas.end();
    })
    .catch((err) => {
      console.log(err);
      klientas.end();
    });
};


/**
 * Drop Bus Table
 */
const dropBusTable = () => {
  const busDropQuery = 'DROP TABLE IF EXISTS bus';
  klientas.query(busDropQuery)
    .then((res) => {
      console.log(res);
      klientas.end();
    })
    .catch((err) => {
      console.log(err);
      klientas.end();
    });
};

/**
 * Drop Trip Table
 */
const dropTripTable = () => {
  const tripDropQuery = 'DROP TABLE IF EXISTS trip';
  klientas.query(tripDropQuery)
    .then((res) => {
      console.log(res);
      klientas.end();
    })
    .catch((err) => {
      console.log(err);
      klientas.end();
    });
};

/**
 * Drop Bus Table
 */
const dropBookingTable = () => {
  const bookingDropQuery = 'DROP TABLE IF EXISTS booking';
  klientas.query(bookingDropQuery)
    .then((res) => {
      console.log(res);
      klientas.end();
    })
    .catch((err) => {
      console.log(err);
      klientas.end();
    });
};


/**
 * Create All Tables
 */
const createAllTables = () => {
  createUserTable();
  createBusTable();
  createTripTable();
  createBookingTable();
};


/**
 * Drop All Tables
 */
const dropAllTables = () => {
  dropUserTable();
  dropBusTable();
  dropTripTable();
  dropBookingTable();
};

klientas.on('remove', () => {
  console.log('Klientas pašalintas');
  process.exit(0);
});


export {
  createAllTables,
  dropAllTables,
};

require('make-runnable');