import { iTeam } from "./iTeam";

export const NYCFC: iTeam = {
    team: "New York City FC",
    city: "New York City",
    conference: "Eastern",
    founded: 2013,
    logo: "NYCFC_logo.png",
    link: "https://www.nycfc.com/",
    aida: {
        awareness: {
            stadiums: [
                {
                name: "Yankee Stadium",
                location: "Bronx, New York",
                capacity: 54251,
                photo: "Yankee_Stadium_overhead.jpg",
                highlights: [
                    "Iconic home ballpark of the New York Yankees",
                    "Also home to NYC FC",
                    "State-of-the-art facilities and amenities",
                ],
            },
        ],
            airports: [
                {
                    name: "John F. Kennedy International Airport",
                    link: "https://www.jfk.nyc/",
                    details: "The closest major airport to Yankee Stadium, located 13 miles away.",
                },
                {
                    name: "LaGuardia Airport",
                    link: "https://www.laguardiaairport.com/",
                    details: "Another major airport serving New York City, located 14 miles away.",
                },
            ],
        },
        interest: {
            highlights: [
                {
                    name: "Statue of Liberty",
                    link: "https://www.nps.gov/stli/index.htm",
                    image: "Lady_Liberty_under_a_blue_sky.jpg",
                    description: "Iconic landmark and symbol of freedom located in New York Harbor.",
                },
                {
                    name: "Central Park",
                    link: "https://www.centralpark.com/",
                    image: "Global_Citizen_Festival_Central_Park_New_York_City_from_NYonAir.jpg",
                    description: "Large urban park in Manhattan that offers a variety of activities and attractions.",
                },
                {
                    name: "Empire State Building",
                    link: "https://www.empirestatebuilding.com/",
                    image: "Empire_State_Building.jpg",
                    description: "Iconic skyscraper in Midtown Manhattan that offers stunning views of the city.",
                },
            ],
        },
        desire: {
            howToGetToStadium: [
                {
                    route: "John F. Kennedy International Airport",
                    ways: [
                        "Take the AirTrain JFK to the Jamaica station. From there, transfer to the E train and ride to the 161st Street – Yankee Stadium station.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
                {
                    route: "LaGuardia Airport",
                    ways: [
                        "Take the M60 bus from the airport terminal to the 111th Street – Roosevelt Avenue station. From there, transfer to the 7 train and ride to the Mets – Willets Point station. From there, it's a short walk to Yankee Stadium.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
            ],
        },
        action: {
            scheduleLink: "https://www.nycfc.com/schedule",
            ticketSalesLink: "https://www.nycfc.com/tickets",
            narrative: "Experience the excitement of a NYC FC match at Yankee Stadium! Book your tickets today!",
        },
    },
};
