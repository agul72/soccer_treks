import { iTeam } from "./iTeam";

export const SanJoseEarthquakes: iTeam = {
    team: "San Jose Earthquakes",
    city: "San Jose, California",
    conference: "Western",
    founded: 1995,
    logo: "San_Jose_Earthquakes_logo.png",
    link: "https://www.sjearthquakes.com/",
    aida: {
        awareness: {
            stadiums: [
                {
                name: "PayPal Park",
                location: "San Jose, California",
                capacity: 18000,
                photo: "Avaya_Stadium.jpg",
                highlights: [
                    "State-of-the-art soccer-specific stadium in downtown San Jose",
                    "Home to the San Jose Earthquakes and the San Jose State Spartans",
                    "Intimate atmosphere with close proximity to the pitch",
                    "Wide variety of food and beverage options, including local favorites",
                ],
            },
        ],
            airports: [
                {
                    name: "Norman Y. Mineta San Jose International Airport (SJC)",
                    link: "https://www.flysanjose.com/",
                    details: "The closest major airport to PayPal Park, located just 3 miles away.",
                },
            ],
        },
        interest: {
            highlights: [
                {
                    name: "Winchester Mystery House",
                    link: "https://www.winchestermysteryhouse.com/",
                    image: "SWinchester_House.jpg",
                    description: "Mansion built by Sarah Winchester, widow of gun magnate William Wirt Winchester, with over 160 rooms and numerous architectural oddities.",
                },
                {
                    name: "NASA Ames Research Center",
                    link: "https://www.nasa.gov/ames",
                    image: "Aerial_View_of_the_NASA_Ames_Research_Center.jpg",
                    description: "NASA research center located in Mountain View, California, with a variety of exhibits and tours available.",
                },
                {
                    name: "Santa Cruz Beach Boardwalk",
                    link: "https://beachboardwalk.com/",
                    image: "Santa_Cruz_Beach_Boardwalk.jpg",
                    description: "Amusement park located on the Santa Cruz Beach Boardwalk, with a variety of rides, games, and attractions.",
                },
            ],
        },
        desire: {
            howToGetToStadium: [
                {
                    route: "Norman Y. Mineta San Jose International Airport (SJC)",
                    ways: [
                        "Take the VTA Light Rail Green Line train from the airport station to the Diridon Station station. From there, it's a short walk to PayPal Park.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
            ],
        },
        action: {
            scheduleLink: "https://www.sjearthquakes.com/schedule",
            ticketSalesLink: "https://www.sjearthquakes.com/tickets",
            narrative: "Experience the excitement of a San Jose Earthquakes match at PayPal Park! Book your tickets today!",
        },
    },
};
