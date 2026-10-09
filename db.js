import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  host: "ep-autumn-tooth-a56fvf9w-pooler.us-east-2.aws.neon.tech",
  user: "neondb_owner",
  password: "npg_EpGkdsOLAB41",
  database: "neondb",
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
  channelBinding: "require",
});

export const dbController = {
  pool: pool,
};

export const query = async (text, params = []) => {
  const client = await dbController.pool.connect();
  try {
    const result = await client.query(text, params);
    return result;
  } finally {
    client.release();
  }
};