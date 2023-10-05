import { iTeam } from "./iTeam";

export const CFMontréal: iTeam = {
    team: "CF Montréal",
    city: "Montreal",
    conference: "Eastern",
    founded: 1992,
    logo: "CF_Montreal_logo.png",
    link: "https://www.cfmontreal.com/",
    aida: {
        awareness: {
            stadiums: [
                {
                    name: "Saputo Stadium",
                    location: "Montreal, Quebec",
                    capacity: 19619,
                    photo: "montreal_cf.jpg",
                    highlights: [
                        "State-of-the-art soccer-specific stadium in Olympic Park",
                        "Home to CF Montréal",
                        "Intimate atmosphere with close proximity to the pitch",
                    ],
                },
                {
                    name: "Olympic Stadium",
                    location: "Montreal, Quebec",
                    capacity: 61240,
                    photo: "Olympic_Stadium.png",
                    highlights: [
                        "Iconic stadium built for the 1976 Summer Olympics",
                        "Home to the Montreal Expos (MLB) from 1969 to 1972",
                        "Has hosted a variety of major sporting events, including the FIFA World Cup and the Olympic Games",
                    ],
                },
            ],
            airports: [
                {
                    name: "Montréal–Trudeau International Airport",
                    link: "https://www.admtl.com/",
                    details: "The closest major airport to Saputo Stadium and Olympic Stadium, located 15 miles away.",
                },
            ],
        },
        interest: {
            highlights: [
                {
                    name: "Old Montreal",
                    link: "https://www.tourisme-montreal.org/en-ca/places-to-visit/old-montreal",
                    image: "Old_Port_of_Montreal.jpg",
                    description: "Historic neighborhood in downtown Montreal with cobblestone streets, charming shops and restaurants, and stunning views of the St. Lawrence River.",
                },
                {
                    name: "Mount Royal",
                    link: "https://www.tourisme-montreal.org/en-ca/places-to-visit/mount-royal",
                    image: "Mtroyal.jpg",
                    description: "Iconic hill in the heart of Montreal with panoramic views of the city and surrounding area.",
                },
            ],
        },
        desire: {
            howToGetToStadium: [
                {
                    route: "Montréal–Trudeau International Airport",
                    ways: [
                        "Take the 747 bus from the airport terminal to the Côte-Vertu station. From there, transfer to the Orange Line metro train and ride to the Crémazie station. From there, it's a short walk to Saputo Stadium.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
            ],
        },
        action: {
            scheduleLink: "https://www.cfmontreal.com/schedule",
            ticketSalesLink: "https://www.cfmontreal.com/tickets",
            narrative: "Experience the excitement of a CF Montréal match at Saputo Stadium or Olympic Stadium! Book your tickets today!",
        },
    },
};
