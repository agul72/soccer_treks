import { iTeam } from "./iTeam";

export const TorontoFC: iTeam = {
    team: "Toronto FC",
    city: "Toronto, Ontario",
    conference: "Eastern",
    founded: 2006,
    logo: "Toronto_FC_Logo.png",
    link: "https://www.torontofc.ca/",
    aida: {
        awareness: {
            stadiums: [
                {
                name: "BMO Field",
                location: "Toronto, Ontario",
                capacity: 30000,
                photo: "Bmo_Field_2016_East_Stand.jpg",
                highlights: [
                    "State-of-the-art soccer-specific stadium in downtown Toronto",
                    "Home to Toronto FC and the Canadian national football team",
                    "Intimate atmosphere with close proximity to the pitch",
                    "Wide variety of food and beverage options, including local favorites",
                ],
            },
        ],
            airports: [
                {
                    name: "Toronto Pearson International Airport",
                    link: "https://www.torontopearson.com/",
                    details: "The closest major airport to BMO Field, located just 15 miles away.",
                },
            ],
        },
        interest: {
            highlights: [
                {
                    name: "Hockey Hall of Fame",
                    link: "https://www.hhof.com/",
                    image: "Hockey_Hall_of_Fame,_Toronto.jpg",
                    description: "Museum dedicated to the history and culture of ice hockey.",
                },
                {
                    name: "St. Lawrence Market",
                    link: "https://www.stlawrencemarket.com/",
                    image: "St_Lawerence_South_Market_Exterior.jpg",
                    description: "Public market with over 120 vendors selling fresh produce, meats, cheeses, prepared foods, and more.",
                },
                {
                    name: "Toronto Islands",
                    link: "https://www.toronto.ca/explore-enjoy/parks-gardens-beaches/toronto-islands/",
                    image: "Toronto_Islands.jpg",
                    description: "Group of islands in Lake Ontario just short ferry ride from downtown Toronto, with beaches, parks, and other attractions.",
                },
            ],
        },
        desire: {
            howToGetToStadium: [
                {
                    route: "Toronto Pearson International Airport",
                    ways: [
                        "Take the UP Express train from the airport station to Union Station. From there, it's a short walk to BMO Field.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
            ],
        },
        action: {
            scheduleLink: "https://www.torontofc.ca/schedule",
            ticketSalesLink: "https://www.torontofc.ca/tickets",
            narrative: "Experience the excitement of a Toronto FC match at BMO Field! Book your tickets today!",
        },
    },
};
