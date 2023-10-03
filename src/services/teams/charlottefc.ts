import { iTeam } from "./iTeam";

export const CharlotteFC: iTeam = {
    team: "Charlotte FC",
    city: "Charlotte",
    conference: "Eastern",
    founded: 2019,
    logo: "Charlotte_FC_logo.png",
    link: "https://www.charlottefootballclub.com/",
    aida: {
        awareness: {
            stadiums: [
            {
                name: "Bank of America Stadium",
                location: "Charlotte, North Carolina",
                capacity: 74867,
                photo: "charlotte_fc.jpg",
                highlights: [
                    "State-of-the-art stadium in downtown Charlotte",
                    "Home to both the Carolina Panthers (NFL) and Charlotte FC",
                    "Sustainable design and construction",
                    "Intimate atmosphere with close proximity to the pitch",
                ],
            }
        ],
            airports: [
                {
                    name: "Charlotte Douglas International Airport",
                    link: "https://www.clt.org/",
                    details: "The closest major airport to Bank of America Stadium, located 10 miles away.",
                },
            ],
        },
        interest: {
            highlights: [
                {
                    name: "U.S. National Whitewater Center",
                    link: "https://www.usnwc.org/",
                    image: "US_National_Whitewater_Center.jpg",
                    description: "Outdoor adventure center with whitewater rafting, kayaking, rock climbing, and more.",
                },
                {
                    name: "NASCAR Hall of Fame",
                    link: "https://www.nascarhall.com/",
                    image: "NASCAR_HoF_from_CCC.jpg",
                    description: "Interactive museum dedicated to the history and heritage of NASCAR racing.",
                },
            ],
        },
        desire: {
            howToGetToStadium: [
                {
                    route: "Charlotte Douglas International Airport",
                    ways: [
                        "Take the CATS light rail train from the airport station to the Uptown station. From there, it's a short walk to Bank of America Stadium.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
            ],
        },
        action: {
            scheduleLink: "https://www.charlottefootballclub.com/schedule",
            ticketSalesLink: "https://www.charlottefootballclub.com/tickets",
            narrative: "Experience the excitement of a Charlotte FC match at Bank of America Stadium! Book your tickets today!",
        },
    },
};
