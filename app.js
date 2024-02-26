const apiKey = "0c3e612d31bdec89e1385a1d8f6c661c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

const weatherReport = async () => {
  console.log("data Fetching from weather Sites...");
  const inputText = document
    .querySelector("#search-input")
    .value.toLowerCase()
    .trim();
  const img = document.querySelector("#weather-image");

  if (inputText === "") {
    alert("City Name can't be empty");
    return;
  }
  const response = await fetch(apiUrl + `q=${inputText}&appid=${apiKey}`);
  const data = await response.json();
  document.querySelector("#search-input").value = "";

  if (data.message) {
    alert(data.message);
    return;
  }
  document.querySelector("#weather-city").innerHTML = data?.name;
  document.querySelector("#weather-temp").innerHTML = `${Math.round(
    data?.main?.temp
  )}°C`;

  document.querySelector(
    "#weather-humidity"
  ).innerHTML = `${data?.main?.humidity}%`;
  document.querySelector(
    "#weather-wind"
  ).innerHTML = `${data?.wind?.speed}km/h`;
  console.log(img);
  if (data?.weather[0]?.main === "Clouds") img.src = "Images/clouds.png";
  else if (data?.weather[0]?.main === "Rain") img.src = "Images/rain.png";
  if (data?.weather[0]?.main === "Clear") img.src = "/Images/clear.png";
  if (data?.weather[0]?.main === "Drizzle") img.src = "Images/drizzle.png";
  if (data?.weather[0]?.main === "Mist") img.src = "Images/mist.png";
};

const input = document.querySelector("#search-input");
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") weatherReport();
});
const button = document.querySelector("#search-btn");
button.addEventListener("click", weatherReport);
