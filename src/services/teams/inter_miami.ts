import { iTeam } from "./iTeam";

export const InterMiamiCF: iTeam = {
    team: "Inter Miami CF",
    city: "Miami",
    conference: "Eastern",
    founded: 2018,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Inter_Miami_CF_logo.svg/1200px-Inter_Miami_CF_logo.svg.png",
    link: "https://www.intermiamicf.com/",
    aida: {
        awareness: {
            stadiums: [
                {
                    name: "DRV PNK Stadium",
                    location: "Fort Lauderdale, Florida",
                    capacity: 18000,
                    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DRV_PNK_Stadium.jpg/1200px-DRV_PNK_Stadium.jpg",
                    highlights: [
                        "State-of-the-art stadium in Fort Lauderdale",
                        "Designed by world-renowned architect David Beckham",
                        "Sustainable design and construction",
                        "Intimate atmosphere with close proximity to the pitch",
                    ],
                }
            ],
            airports: [
                {
                    name: "Fort Lauderdale-Hollywood International Airport",
                    link: "https://www.fll.net/",
                    details: "The closest major airport to DRV PNK Stadium, located 13 miles away.",
                },
                {
                    name: "Miami International Airport",
                    link: "https://www.miami-airport.com/",
                    details: "Another major airport serving Miami, located 20 miles away.",
                },
            ],
        },
        interest: {
            highlights: [
                {
                    name: "South Beach",
                    link: "https://www.miamiandbeaches.com/south-beach",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/South_Beach_Miami.jpg/1200px-South_Beach_Miami.jpg",
                    description: "Iconic beachfront neighborhood in Miami Beach with world-famous restaurants, nightclubs, and shops.",
                },
                {
                    name: "Vizcaya Museum and Gardens",
                    link: "https://www.vizcaya.org/",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Vizcaya_Museum_and_Gardens_Miami_Florida.jpg/1200px-Vizcaya_Museum_and_Gardens_Miami_Florida.jpg",
                    description: "Italian Renaissance-style villa and gardens located in Biscayne Bay.",
                },
            ],
        },
        desire: {
            howToGetToStadium: {
                "Fort Lauderdale-Hollywood International Airport": [
                    "Take the Tri-Rail train from the airport station to the Cypress Creek station. From there, it's a short walk to DRV PNK Stadium.",
                    "You can also take a taxi or Uber from the airport to the stadium.",
                ],
                "Miami International Airport": [
                    "Take the Metrorail train from the airport station to the Dr. Martin Luther King Jr. Boulevard station. From there, it's a short walk to DRV PNK Stadium.",
                    "You can also take a taxi or Uber from the airport to the stadium.",
                ],
            },
        },
        action: {
            scheduleLink: "https://www.intermiamicf.com/schedule",
            ticketSalesLink: "https://www.intermiamicf.com/tickets",
            narrative: "Experience the excitement of an Inter Miami CF match at DRV PNK Stadium! Book your tickets today!",
        },
    },
};