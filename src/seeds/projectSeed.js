// Seed to populate project cards
export const projectData = [
  {
    name: "Pata de Perro",
    description:
      "This application allows the user to choose from a variety of vacation activities, book and pay for them, while saving their selections if they are off-line",
    technologies:
      "MERN, REACT, GraphQL, JWT jsonwebtoken, Apollo server express, Fortawesome, emailjs, css, styled-components, Workbox for service worker, react testing library",
    image: require("../images/pata-dp.png").default,
    gitHubLink: "https://github.com/adina-hc/pata-de-perro",
    deployedApp: "https://shrouded-bayou-22662.herokuapp.com/",
    id: "1",
  },
  {
    name: "Happy Pets Shelter",
    description:
      "Happy Pets Shelter! An app to help pets find a new family. The user can view pets sheltered for future adoption.",
    technologies:
      "Nodejs, node fetch, Sequelize, MySQL, Handlebars, Express-js, Express-session, restful API, bcrypt, compression, CSS",
    image: require("../images/happy-pets.png").default,
    gitHubLink: "https://github.com/adina-hc/happy-pets-shelter-app",
    deployedApp: "https://desolate-tundra-25750.herokuapp.com/",
    id: "2",
  },
  {
    name: "Sports Almanac",
    description:
      "The sports almanac application provides the user with meaningful information about soccer matches on a certain date, team information, and the ability to access video snippets related to that league's matches, goals, etc.",
    technologies: "HTML, MaterializeCSS, Google Fonts, jQuery, APIs: scorebat.com and football-data.org, Fetch, local storage",
    image: require("../images/sports-almanac.png").default,
    gitHubLink: "https://github.com/adina-hc/sports-almanac",
    deployedApp: "https://adina-hc.github.io/sports-almanac/",
    id: "3",
  },
  {
    name: "Weather App",
    description:
      "Weather Application featuring current weather and five day forecast for a city searched. The information includes date, temperature, humidity, wind speed and only for the current weather, the current UV index.",
    technologies: "API OpenWeather One Call API, Moment, Bootstrap v.4.6, Sass, free weather image from unsplash.com",
    image: require("../images/weather.png").default,
    gitHubLink: "https://github.com/adina-hc/weather-dashboard",
    deployedApp: "https://adina-hc.github.io/weather-dashboard/",
    id: "4",
  },

];

