import 'dotenv/config';

const ENV = process.env.NODE_ENV

export const config = process.env.NODE_ENV === "development" ?
    {
        "connectionLimit": 10,
        "host": process.env.DB_LOCAL_HOST,
        "user": process.env.DB_LOCAL_USER,
        "password": process.env.DB_LOCAL_PASSWORD,
        "database": process.env.DB_LOCAL_DATABASE,
    } : {
        "connectionLimit": 10,
        "host": process.env.DB_PROD_HOST,
        "user": process.env.DB_PROD_USER,
        "password": process.env.DB_PROD_PASSWORD,
        "database": process.env.DB_PROD_DATABASE,
    }

