<template>
  <header>
    <h1>{{ date }}</h1>
    <h2>{{ today }}</h2>
    <div class="weather-box">
      <div class="temp">{{ temp }}℃</div>
    </div>
    <div class="doneToDo">
      <div>
        {{ totalTodoCount }}
        /
        {{ doneTodoCount }}
      </div>
    </div>
    <p style="clear: both">&nbsp;</p>
  </header>
</template>

<script>
import dayjs from "dayjs";
import axios from "axios";
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      date: dayjs().format("ddd HH:mm"),
      today: dayjs().format("YYYY/MM/DD"),
      //api_key: "28ef9086257e5260d94a3d54faa976d7",
      //url_base: "https://api.openweathermap.org/data/2.5/",
      temp: 0,
    };
  },
  computed: {
    ...mapGetters(["doneTodoCount", "totalTodoCount"]),
  },
  methods: {
    fetchData() {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&APPID=28ef9086257e5260d94a3d54faa976d7`
        )
        .then((res) => {
          console.log(res.data.main.temp);
          this.temp = res.data.main.temp;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    this.fetchData();
  },
  /*created() {
    //let fetchUrl = `${this.url_base}weather?q=Seoul&units=metric&APPID=${this.api_key}`;
    fetch(fetchUrl)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((results) => {
        this.weather = results;
        this.temp = results.main.temp;
      });
  },*/
};
</script>

<style scoped>
body {
  background-color: #ffffff;
  margin: 0.5rem 0.5rem 0.5rem;
}
h2 {
  font-size: 25px;
  font-weight: 1000;
  margin-block-start: 0ch;
  margin-block-end: 0em;
  color: #eceaea;
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
h1 {
  margin-block-end: 0ch;
  margin-block-start: 0ch;
  font-size: 15px;
  color: #eceaea;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.doneToDo {
  color: #450e79;
  float: right;
  font-size: 25px;
  font-weight: 800;
  margin: 0.5rem 0.5rem 0.5rem;
  padding-right: 1rem;
  margin-block-end: 0ch;
  margin-block-start: 0ch;
}
p {
  margin-block-start: -1em;
  margin-block-end: -1em;
}

.weather-box {
  text-align: left;
}
.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: #fff;
  font-size: 20px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 10px 10px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>
