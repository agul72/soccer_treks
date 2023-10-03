import { iTeam } from "./iTeam";

export const NashvilleSC: iTeam = {
    team: "Nashville SC",
    city: "Nashville, Tennessee",
    conference: "Eastern",
    founded: 2016,
    logo: "Nashville_SC_logo.png",
    link: "https://www.nashvillesc.com/",
    aida: {
        awareness: {
            stadiums: [
                {
                name: "GEODIS Park",
                location: "Nashville, Tennessee",
                capacity: 30000,
                photo: "Nashville_SC_vs_Portland_Timbers.jpg",
                highlights: [
                    "State-of-the-art soccer-specific stadium in downtown Nashville",
                    "Home to Nashville SC and the USL Championship's Nashville SC II",
                    "Intimate atmosphere with close proximity to the pitch",
                    "Wide variety of food and beverage options, including local favorites",
                ],
            },
        ],
            airports: [
                {
                    name: "Nashville International Airport (BNA)",
                    link: "https://www.flynashville.com/",
                    details: "The closest major airport to GEODIS Park, located just 8 miles away.",
                },
            ],
        },
        interest: {
            highlights: [
                {
                    name: "Country Music Hall of Fame and Museum",
                    link: "https://www.countrymusichalloffame.org/",
                    image: "Country_Music_Hall_of_Fame.jpg",
                    description: "Museum dedicated to the history and culture of country music.",
                },
                {
                    name: "Ryman Auditorium",
                    link: "https://www.ryman.com/",
                    image: "Ryman_Auditorium.jpg",
                    description: "Historic concert hall known as the Mother Church of Country Music.",
                },
                {
                    name: "Broadway",
                    link: "https://www.visitnashville.com/things-to-do/neighborhoods/broadway/",
                    image: "WTN_PeepHoles.jpg",
                    description: "Popular entertainment district in downtown Nashville, with a variety of bars, clubs, and restaurants.",
                },
            ],
        },
        desire: {
            howToGetToStadium: [
                {
                    route: "Nashville International Airport (BNA)",
                    ways: [
                        "Take the WeGo bus #18 from the airport station to the 5th Avenue/Church Street station. From there, transfer to the WeGo bus #3 or #4 and ride to the 5th Avenue/Broadway station. From there, it's a short walk to GEODIS Park.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
            ],
        },
        action: {
            scheduleLink: "https://www.nashvillesc.com/schedule",
            ticketSalesLink: "https://www.nashvillesc.com/tickets",
            narrative: "Experience the excitement of a Nashville SC match at GEODIS Park! Book your tickets today!",
        },
    },
};
