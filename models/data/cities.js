import "dotenv/config.js";
import "../../config/database.js";
import City from "../City.js";

let cities = [
        {
                country: "Venezuela",
  foundation: "1567-07-25",
  population: 2822255,
  photo: "https://www.telesurtv.net/__export/1500919212103/sites/telesur/img/news/2017/07/24/caracas.jpg",
  city: "Caracas",
  description: "Caracas is the capital and largest city of Venezuela, situated in a mountain valley in the Cordillera de la Costa. It is the political, economic, and cultural center of the country. The city features a mix of colonial and modern architecture, as well as a rich history that includes sites like the National Pantheon and the Birthplace of Liberator Simón Bolívar. Additionally, Caracas offers a variety of museums, parks, and entertainment venues.",
  smalldescription: "Caracas, the bustling capital of Venezuela, is known for its rich history and cultural diversity.",
  featuredLocation: "National Pantheon"
        },
        {
                country: "Colombia",
  foundation: "1616-03-03",
  population: 2496301,
  photo: "https://i.pinimg.com/originals/9d/b4/21/9db4216b1e706425d3a1be1847bd4841.png",
  city: "Medellín",
  description: "Medellín is a Colombian city located in a mountain valley in the Antioquia region. Known as the 'City of Eternal Spring,' Medellín has undergone a remarkable transformation in recent decades, transitioning from a city affected by violence to becoming a hub of innovation, culture, and tourism. The city is famous for its integrated public transportation system, innovative public spaces, and thriving arts scene.",
  smalldescription: "Medellín, the charming city surrounded by mountains, has been reborn as a center of creativity and progress in Colombia.",
  featuredLocation: "Arví Park"
        }
]

City.insertMany(cities);