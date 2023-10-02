import { iTeam } from "./iTeam";

export const InterMiamiCF: iTeam = {
    team: "Inter Miami CF",
    city: "Miami",
    conference: "Eastern",
    founded: 2018,
    logo: "Inter_Miami_CF_logo.png",
    link: "https://www.intermiamicf.com/",
    aida: {
        awareness: {
            stadiums: [
                {
                    name: "DRV PNK Stadium",
                    location: "Fort Lauderdale, Florida",
                    capacity: 18000,
                    photo: "DRV_PNK_Stadium.jpg",
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
                    image: "Ocean_drive_day.jpeg",
                    description: "Iconic beachfront neighborhood in Miami Beach with world-famous restaurants, nightclubs, and shops.",
                },
                {
                    name: "Vizcaya Museum and Gardens",
                    link: "https://www.vizcaya.org/",
                    image: "Villa_Vizcaya.jpeg",
                    description: "Italian Renaissance-style villa and gardens located in Biscayne Bay.",
                },
            ],
        },
        desire: {
            howToGetToStadium: [
                {
                    route: "Fort Lauderdale-Hollywood International Airport", 
                    ways: [
                        "Take the Tri-Rail train from the airport station to the Cypress Creek station. From there, it's a short walk to DRV PNK Stadium.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ]
                },
                {
                    route: "Miami International Airport", 
                    ways: [
                        "Take the Metrorail train from the airport station to the Dr. Martin Luther King Jr. Boulevard station. From there, it's a short walk to DRV PNK Stadium.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                }
            ],
        },
        action: {
            scheduleLink: "https://www.intermiamicf.com/schedule",
            ticketSalesLink: "https://www.intermiamicf.com/tickets",
            narrative: "Experience the excitement of an Inter Miami CF match at DRV PNK Stadium! Book your tickets today!",
        },
    },
};