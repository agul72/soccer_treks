import { iTeam } from "./iTeam";

export const NewYorkRedBulls: iTeam = {
    team: "New York Red Bulls",
    city: "Harrison, New Jersey",
    conference: "Eastern",
    founded: 1995,
    logo: "New_York_Red_Bulls_logo.png",
    link: "https://www.newyorkredbulls.com/",
    aida: {
        awareness: {
            stadiums: [
                {
                name: "Red Bull Arena",
                location: "Harrison, New Jersey",
                capacity: 25000,
                photo: "Red_Bull_Arena_Harrison_behind_goal.jpg",
                highlights: [
                    "State-of-the-art soccer-specific stadium in Harrison, New Jersey",
                    "Home to the New York Red Bulls and NJ/NY Gotham FC",
                    "Intimate atmosphere with close proximity to the pitch",
                ],
            },
        ],
            airports: [
                {
                    name: "Newark Liberty International Airport",
                    link: "https://www.ewr.com/",
                    details: "The closest major airport to Red Bull Arena, located 10 miles away.",
                },
                {
                    name: "John F. Kennedy International Airport",
                    link: "https://www.jfk.nyc/",
                    details: "Another major airport serving the New York metropolitan area, located 16 miles away.",
                },
            ],
        },
        interest: {
            highlights: [
                {
                    name: "Jersey City",
                    link: "https://www.visitnj.org/jersey-city",
                    image: "Jersey_City_Skyline_sunset.jpg",
                    description: "Vibrant city across the Hudson River from Manhattan, with stunning views of the city skyline.",
                  },
                  {
                    name: "Hoboken",
                    link: "https://www.visitnj.org/hoboken",
                    image: "Hoboken_NJ_photo_D_Ramey_Logan.jpg",
                    description: "Charming city on the Hudson River with a lively downtown area and easy access to Manhattan.",
                  },
                  {
                    name: "Montclair",
                    link: "https://www.visitnj.org/montclair",
                    image: "Montclair_overlook.jpg",
                    description: "Upscale suburb of New York City with a vibrant arts and culture scene.",
                  },
            ],
        },
        desire: {
            howToGetToStadium: [
                {
                    route: "Newark Liberty International Airport",
                    ways: [
                        "Take the NJ Transit North Jersey Coast Line train from the airport station to the Harrison station. From there, it's a short walk to Red Bull Arena.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
                {
                    route: "John F. Kennedy International Airport",
                    ways: [
                        "Take the AirTrain JFK to the Jamaica station. From there, transfer to the E train and ride to the 74th Street – Broadway station. From there, transfer to the N or W train and ride to the Harrison station. From there, it's a short walk to Red Bull Arena.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
            ],
        },
        action: {
            scheduleLink: "https://www.newyorkredbulls.com/schedule",
            ticketSalesLink: "https://www.newyorkredbulls.com/tickets",
            narrative: "Experience the excitement of a New York Red Bulls match at Red Bull Arena! Book your tickets today!",
        },
    },
};
