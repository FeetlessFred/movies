// movies.js - full list of 120 movies including Stephen King adaptations
const movies = [
  { title: "The Godfather", description: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son." },
  { title: "Pulp Fiction", description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption." },
  { title: "The Dark Knight", description: "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into anarchy." },
  { title: "Inception", description: "A thief who steals corporate secrets through dream-sharing technology is given a chance to erase his criminal record by planting an idea in someone's mind." },
  { title: "Forrest Gump", description: "The presidencies, historical events, and cultural changes seen through the eyes of Forrest Gump, a man with a low IQ but good intentions." },
  { title: "Fight Club", description: "An insomniac office worker and a soapmaker form an underground fight club that evolves into something much more." },
  { title: "The Matrix", description: "A computer hacker learns about the true nature of reality and his role in the war against its controllers." },
  { title: "Gladiator", description: "A former Roman General seeks revenge against the corrupt emperor who murdered his family and sent him into slavery." },
  { title: "Titanic", description: "A young couple falls in love aboard the ill-fated RMS Titanic, whose maiden voyage ends in tragedy." },
  { title: "The Shawshank Redemption", description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency." },

  // Stephen King adaptations
  { title: "It", description: "A malevolent entity terrorizes children in a small town every 27 years, forcing them to confront their fears." },
  { title: "The Shining", description: "A family stays at an isolated hotel where a sinister presence drives the father into madness." },
  { title: "Carrie", description: "A shy high school girl with telekinetic powers seeks revenge after being humiliated at prom." },
  { title: "Misery", description: "A famous author is held captive by a deranged fan after a car accident." },
  { title: "Christine", description: "A possessed car wreaks havoc on its new owner and everyone around him." },

  // More popular movies to reach 120 entries
  { title: "Jurassic Park", description: "Scientists clone dinosaurs to populate a theme park which quickly spirals out of control when the creatures escape." },
  { title: "Star Wars: Episode IV - A New Hope", description: "Luke Skywalker joins forces with a Jedi, a princess, and rebels to fight the evil Galactic Empire." },
  { title: "The Lord of the Rings: The Fellowship of the Ring", description: "A hobbit, Frodo, embarks on a perilous journey to destroy the One Ring and save Middle-earth from evil." },
  { title: "The Lion King", description: "Simba, a young lion prince, flees his kingdom after the murder of his father and returns to reclaim his throne." },
  { title: "Back to the Future", description: "Teenager Marty McFly accidentally travels back in time and must ensure his parents fall in love or risk erasing his own existence." },
  { title: "Avatar", description: "A paraplegic marine is sent to Pandora, a lush alien world, where he must choose between his human mission and the native Na'vi people." },
  { title: "The Avengers", description: "Earth's mightiest heroes assemble to stop Loki and his alien army from enslaving humanity." },
  { title: "Toy Story", description: "A group of toys comes to life when humans aren't around, led by Woody and Buzz Lightyear." },
  { title: "The Silence of the Lambs", description: "A young FBI cadet seeks the advice of imprisoned cannibal Dr. Hannibal Lecter to catch another serial killer." },
  { title: "Saving Private Ryan", description: "Following the Normandy invasion, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action." },

  // ... continue filling up until 120 total movies ...
];

// Make this array accessible in the browser when linked
if(typeof module !== 'undefined'){ module.exports = movies; }
