import { iTeam } from "./iTeam";

export const PortlandTimbers: iTeam = {
    team: "Portland Timbers",
    city: "Portland, Oregon",
    conference: "Western",
    founded: 2010,
    logo: "Portland_Timbers_logo.png",
    link: "https://www.portlandtimbers.com/",
    aida: {
        awareness: {
            stadiums: [
                {
                name: "Providence Park",
                location: "Portland, Oregon",
                capacity: 25218,
                photo: "Providence_Park_March.jpg",
                highlights: [
                    "State-of-the-art soccer-specific stadium in downtown Portland",
                    "Home to the Portland Timbers and the Portland Thorns FC of the NWSL",
                    "Intimate atmosphere with close proximity to the pitch",
                    "Wide variety of food and beverage options, including local favorites",
                ],
            },
        ],
            airports: [
                {
                    name: "Portland International Airport (PDX)",
                    link: "https://www.portlandairport.com/",
                    details: "The closest major airport to Providence Park, located just 7 miles away.",
                },
            ],
        },
        interest: {
            highlights: [
                {
                    name: "Powell's City of Books",
                    link: "https://www.powells.com/",
                    image: "PowellsBookstore.jpg",
                    description: "World-renowned independent bookstore with over 1 million books in stock.",
                },
                {
                    name: "Portland Japanese Garden",
                    link: "https://japanesegarden.org/",
                    image: "Japanese_Garden.jpg",
                    description: "Authentic Japanese garden with a variety of plants, trees, and waterfalls.",
                },
                {
                    name: "Forest Park",
                    link: "https://www.portlandoregon.gov/parks/forest-park/",
                    image: "Forest_park_wildwood_trail_in_early_summer_P.jpeg",
                    description: "5,200-acre urban forest with over 80 miles of hiking trails.",
                },
            ],
        },
        desire: {
            howToGetToStadium: [
                {
                    route: "Portland International Airport (PDX)",
                    ways: [
                        "Take the MAX Red Line train from the airport station to the Rose Quarter station. From there, it's a short walk to Providence Park.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
            ],
        },
        action: {
            scheduleLink: "https://www.portlandtimbers.com/schedule",
            ticketSalesLink: "https://www.portlandtimbers.com/tickets",
            narrative: "Experience the excitement of a Portland Timbers match at Providence Park! Book your tickets today!",
        },
    },
};
