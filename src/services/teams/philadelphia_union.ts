import { iTeam } from "./iTeam";

export const PhiladelphiaUnion: iTeam = {
    team: "Philadelphia Union",
    city: "Chester, Pennsylvania",
    conference: "Eastern",
    founded: 2008,
    logo: "Philadelphia_Union_logo.png",
    link: "https://www.philadelphiaunion.com/",
    aida: {
        awareness: {
            stadiums: [
                {
                name: "Subaru Park",
                location: "Chester, Pennsylvania",
                capacity: 18500,
                photo: "Philadelphia_Union_versus_Chicago_Fire_at_Subaru_Park.jpeg",
                highlights: [
                    "State-of-the-art soccer-specific stadium in Chester, Pennsylvania",
                    "Home to the Philadelphia Union and the Philadelphia Independence",
                    "Intimate atmosphere with close proximity to the pitch",
                    "Wide variety of food and beverage options, including local favorites",
                ],
            },
        ],
            airports: [
                {
                    name: "Philadelphia International Airport",
                    link: "https://www.phl.org/",
                    details: "The closest major airport to Subaru Park, located just 10 miles away.",
                },
            ],
        },
        interest: {
            highlights: [
                {
                    name: "Liberty Bell",
                    link: "https://www.nps.gov/inde/libertybellcenter.htm",
                    image: "Liberty_Bell.jpg",
                    description: "Iconic symbol of American freedom, located in Independence National Historical Park in Philadelphia.",
                },
                {
                    name: "Reading Terminal Market",
                    link: "https://www.readingterminalmarket.org/",
                    image: "Reading_Terminal_Market.png",
                    description: "Public market in Philadelphia with over 100 vendors selling fresh produce, meats, cheeses, prepared foods, and more.",
                },
                {
                    name: "Philadelphia Museum of Art",
                    link: "https://www.philamuseum.org/",
                    image: "PhiladelphiaMuseumOfArt.jpg",
                    description: "Art museum with a world-renowned collection of over 240,000 works of art.",
                },
            ],
        },
        desire: {
            howToGetToStadium: [
                {
                    route: "Philadelphia International Airport",
                    ways: [
                        "Take the SEPTA Regional Rail R3 Media/Elwyn Line from the airport station to the Highland Avenue station. From there, it's a short walk to Subaru Park.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
            ],
        },
        action: {
            scheduleLink: "https://www.philadelphiaunion.com/schedule",
            ticketSalesLink: "https://www.philadelphiaunion.com/tickets",
            narrative: "Experience the excitement of a Philadelphia Union match at Subaru Park! Book your tickets today!",
        },
    },
};
