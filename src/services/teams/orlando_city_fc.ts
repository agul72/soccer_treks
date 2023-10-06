import { iTeam } from "./iTeam";

export const OrlandoCityFC: iTeam = {
    team: "Orlando City FC",
    city: "Orlando, Florida",
    conference: "Eastern",
    founded: 2015,
    logo: "Orlando_City_FC_logo.png",
    link: "https://www.orlandocitysc.com/",
    aida: {
        awareness: {
            stadiums: [
                {
                name: "Exploria Stadium",
                location: "Orlando, Florida",
                capacity: 25500,
                photo: "Orlando_City_Stadium.jpg",
                highlights: [
                    "State-of-the-art soccer-specific stadium in Downtown Orlando",
                    "Home to Orlando City SC and Orlando Pride",
                    "Intimate atmosphere with close proximity to the pitch",
                    "Wide variety of food and beverage options, including local favorites",
                ],
            },
        ],
            airports: [
                {
                    name: "Orlando International Airport",
                    link: "https://www.orlandoairports.net/",
                    details: "The closest major airport to Exploria Stadium, located just 6 miles away.",
                },
            ],
        },
        interest: {
            highlights: [
                {
                    name: "Walt Disney World Resort",
                    link: "https://www.disneyworld.com/",
                    image: "Cinderella_Castle.jpg",
                    description: "World-famous theme park resort with four theme parks, two water parks, and dozens of hotels and restaurants.",
                },
                {
                    name: "Universal Orlando Resort",
                    link: "https://www.universalorlando.com/",
                    image: "Universal_Orlando_Resort.png",
                    description: "Theme park resort with two theme parks, a water park, and several hotels.",
                },
                {
                    name: "SeaWorld Orlando",
                    link: "https://seaworld.com/orlando-park/",
                    image: "SeaWorld_Orlando.jpg",
                    description: "Marine park and zoo with animal shows, exhibits, and rides.",
                },
            ],
        },
        desire: {
            howToGetToStadium: [
                {
                    route: "Orlando International Airport",
                    ways: [
                        "Take the Lynx bus #11 from the airport to the LYNX Rosa Parks Transit Station. From there, transfer to the Lynx bus #55 and ride to the Exploria Stadium stop.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
            ],
        },
        action: {
            scheduleLink: "https://www.orlandocitysc.com/schedule",
            ticketSalesLink: "https://www.orlandocitysc.com/tickets",
            narrative: "Experience the excitement of an Orlando City SC match at Exploria Stadium! Book your tickets today!",
        },
    },
};
