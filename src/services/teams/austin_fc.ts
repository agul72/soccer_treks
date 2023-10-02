import { iTeam } from "./iTeam";

export const AustinFC: iTeam = {
    team: "Austin FC",
    city: "Austin, Texas",
    conference: "Western",
    founded: 2019,
    logo: "Austin_FC_logo.png",
    link: "https://www.austinfc.com/",
    aida: {
        awareness: {
            stadiums: [
                {
                name: "Q2 Stadium",
                location: "Austin, Texas",
                capacity: 20500,
                photo: "Austin_FC_Stadium.jpg",
                highlights: [
                    "State-of-the-art soccer-specific stadium in downtown Austin",
                    "Home to Austin FC and the USL Championship's Austin Bold FC",
                    "Intimate atmosphere with close proximity to the pitch",
                    "Wide variety of food and beverage options, including local favorites",
                ],
            },
        ],
            airports: [
                {
                    name: "Austin-Bergstrom International Airport",
                    link: "https://www.austintexas.gov/department/austin-bergstrom-international-airport",
                    details: "The closest major airport to Q2 Stadium, located just 7 miles away.",
                },
            ],
        },
        interest: {
            highlights: [
                {
                    name: "Texas State Capitol",
                    link: "https://www.tspb.texas.gov/Capitol.aspx",
                    image: "TexasStateCapitol.jpg",
                    description: "Iconic state capitol building in downtown Austin.",
                },
                {
                    name: "Zilker Park",
                    link: "https://www.austintexas.gov/department/zilker-park",
                    image: "Austin-skyline.jpg",
                    description: "Large urban park with a variety of attractions, including Barton Springs Pool, the Zilker Botanical Garden, and the Umlauf Sculpture Garden.",
                },
                {
                    name: "Sixth Street",
                    link: "https://www.visitaustin.org/things-to-do/entertainment/6th-street",
                    image: "Sixth_Street_Austin.jpg",
                    description: "Popular entertainment district in downtown Austin, with a variety of bars, clubs, and restaurants.",
                },
            ],
        },
        desire: {
            howToGetToStadium: [
                {
                    route: "Austin-Bergstrom International Airport",
                    ways: [
                        "Take the MetroBus #20 from the airport terminal to the Lavaca/4th Street station. From there, transfer to the MetroBus #3 and ride to the Congress/Cesar Chavez intersection. From there, it's a short walk to Q2 Stadium.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
            ],
        },
        action: {
            scheduleLink: "https://www.austinfc.com/schedule",
            ticketSalesLink: "https://www.austinfc.com/tickets",
            narrative: "Experience the excitement of an Austin FC match at Q2 Stadium! Book your tickets today!",
        },
    },
};
