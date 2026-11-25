import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { Pool } from "pg";

config();
const PORT = process.env.API_PORT;
const app = express();
app.use(cors());

const db = new Pool({
  //can find these data in the settings of Home PGSQL on SQLectron
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
});

app.get("/", (req, res) => {
  res.json({ msg: "Hello dear visitor, please go to /eq_catalog" });
});

app.get("/eq_catalog", async (req, res) => {
  const { rows } = await db.query(
    "SELECT id, event_time, magnitude, magnitude_type, location, latitude, longitude, depth_km FROM eq_catalog LIMIT 10",
  );
  res.json(rows);
});

app.listen(PORT, () => {
  console.log(`API available on http://localhost:${PORT} !`);
});
