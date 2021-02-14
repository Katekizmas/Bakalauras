import { Pool } from 'pg';

import dotenv from 'dotenv';

dotenv.config();

const dbKonfiguracija = { prisijungimoEilute: process.env.DATABASE_URL };
const klientas = new Pool(dbKonfiguracija);

export default klientas;