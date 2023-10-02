import { iTeam } from "./iTeam";

export const LAGalaxy: iTeam = {
    team: "LA Galaxy",
    city: "Carson, California",
    conference: "Western",
    founded: 1996,
    logo: "Los_Angeles_Galaxy_logo.png",
    link: "https://www.lagalaxy.com/",
    aida: {
        awareness: {
            stadiums: [
                {
                name: "Dignity Health Sports Park",
                location: "Carson, California",
                capacity: 27000,
                photo: "LA_Galaxy_vs_Houston_Dynamo-_Western_Conference_Finals_panorama.jpg",
                highlights: [
                    "State-of-the-art soccer-specific stadium in Carson, California",
                    "Home to LA Galaxy and the LA Chargers",
                    "Intimate atmosphere with close proximity to the pitch",
                    "Wide variety of food and beverage options, including local favorites",
                ],
            },
        ],
            airports: [
                {
                    name: "Los Angeles International Airport (LAX)",
                    link: "https://www.flylax.com/",
                    details: "The closest major airport to Dignity Health Sports Park, located just 10 miles away.",
                },
            ],
        },
        interest: {
            highlights: [
                {
                    name: "Hollywood Walk of Fame",
                    link: "https://www.walkoffame.com/",
                    image: "Hollywood_Walk_of_Fame.jpg",
                    description: "Iconic sidewalk with over 2,600 stars honoring celebrities from various industries.",
                },
                {
                    name: "Griffith Observatory",
                    link: "https://www.griffithobservatory.org/",
                    image: "Griffith_observatory.jpg",
                    description: "Public observatory with exhibits on astronomy and space science, as well as stunning views of the city and Hollywood Sign.",
                },
                {
                    name: "Santa Monica Pier",
                    link: "https://www.santamonicapier.org/",
                    image: "Santa_monica_pier_entrance_evening.jpg",
                    description: "Popular tourist destination with amusement park rides, shops, restaurants, and a Ferris wheel with ocean views.",
                },
            ],
        },
        desire: {
            howToGetToStadium: [
                {
                    route: "Los Angeles International Airport (LAX)",
                    ways: [
                        "Take the Metro Green Line train from the airport station to the Hawthorne/Lennox station. From there, transfer to the Metro 111 bus and ride to the Dignity Health Sports Park station. From there, it's a short walk to the stadium.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
            ],
        },
        action: {
            scheduleLink: "https://www.lagalaxy.com/schedule",
            ticketSalesLink: "https://www.lagalaxy.com/tickets",
            narrative: "Experience the excitement of an LA Galaxy match at Dignity Health Sports Park! Book your tickets today!",
        },
    },
};
