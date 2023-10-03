import { iTeam } from "./iTeam";

export const HoustonDynamoFC: iTeam = {
    team: "Houston Dynamo FC",
    city: "Houston, Texas",
    conference: "Western",
    founded: 2006,
    logo: "Houston_Dynamo_FC_logo.png",
    link: "https://www.houstondynamofc.com/",
    aida: {
        awareness: {
            stadiums: [
                {
                name: "PNC Stadium",
                location: "Houston, Texas",
                capacity: 22039,
                photo: "PNC_Stadium_Skyline_View.jpg",
                highlights: [
                    "State-of-the-art soccer-specific stadium in downtown Houston",
                    "Home to Houston Dynamo FC and the University of Houston Cougars",
                    "Intimate atmosphere with close proximity to the pitch",
                    "Wide variety of food and beverage options, including local favorites",
                ],
            },
        ],
            airports: [
                {
                    name: "George Bush Intercontinental Airport",
                    link: "https://www.fly2houston.com/",
                    details: "The closest major airport to PNC Stadium, located just 12 miles away.",
                },
            ],
        },
        interest: {
            highlights: [
                {
                    name: "Space Center Houston",
                    link: "https://spacecenter.org/",
                    image: "Apollo_17_CM_Houston.jpg",
                    description: "World-renowned science center and museum dedicated to space exploration.",
                },
                {
                    name: "Houston Museum of Natural Science",
                    link: "https://www.hmns.org/",
                    image: "HMNS.jpg",
                    description: "Natural history museum with a variety of exhibits on dinosaurs, space, and more.",
                },
                {
                    name: "Houston Zoo",
                    link: "https://www.houstonzoo.org/",
                    image: "Houston_Zoo_Main_Entrance.jpg",
                    description: "Zoo with over 6,000 animals from all over the world.",
                },
            ],
        },
        desire: {
            howToGetToStadium: [
                {
                    route: "George Bush Intercontinental Airport",
                    ways: [
                        "Take the METRO Green Line train from the airport station to the Convention District station. From there, it's a short walk to PNC Stadium.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
            ],
        },
        action: {
            scheduleLink: "https://www.houstondynamofc.com/schedule",
            ticketSalesLink: "https://www.houstondynamofc.com/tickets",
            narrative: "Experience the excitement of a Houston Dynamo FC match at PNC Stadium! Book your tickets today!",
        },
    },
};
