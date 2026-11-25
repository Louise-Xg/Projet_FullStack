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

app.get("/eq_catalog/:id", async (req, res) => {
  //here the id is actually a string
  const { rows } = await db.query(
    //structure of db.query: db.query(SQL_request, parameter_array);
    "SELECT id, event_time, magnitude, magnitude_type, location, latitude, longitude, depth_km FROM eq_catalog WHERE id=$1", // $1 refers to the first value in the parameter array which, here, is the EQ id extracted from the URL : req.params.id
    [Number(req.params.id)], //as the id from the url is a string, we convert it to number
  );
  res.json(rows[0]); //because if not [0], we have[ { id: 5, magnitude: "6.50", blabla ];
});

app.listen(PORT, () => {
  console.log(`API available on http://localhost:${PORT} !`);
});
