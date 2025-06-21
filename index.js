import bodyParser from "body-parser";
import express from "express";
import axios from "axios";

const port = 3000;
const app = express();
const apikey = "ac3ce8791d70772d783247fcfac902db";

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    data: null,
    error: null,
  });
});

app.post("/submit", async (req, res) => {
  try {
    const cityname = req.body.cityname;
    if (cityname) {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric`
      );
      const result = response.data;
      res.render("index.ejs", {
        data: result,
        error: null,
      });
    } else {
      res.render("index.ejs", {
        data: null,
        error: "Please enter a city name.",
      });
    }
  } catch (error) {
    console.log("City not found Error: ", error.message);
    res.render("index.ejs", {
      data: null,
      error: "City not found. Please try again.",
    });
  }
});

app.listen(port, () => {
  console.log("Server is listening on port:", port);
});
