import { iTeam } from "./iTeam";

// Example data for Atlanta United
export const AtlantaUnited: iTeam = {
    team: "Atlanta United FC",
    city: "Atlanta",
    conference: "Eastern",
    founded: 2014,
    logo: "Atlanta_MLS.png",
    link: "https://www.atlutd.com/",
    aida: {
        awareness: {
            stadiums: [
                {
                    name: "Mercedes-Benz Stadium",
                    location: "Atlanta, Georgia",
                    capacity: 71000,
                    photo: "atlanta_united_stadium.jpg",
                    highlights: [
                        "State-of-the-art retractable roof",
                        "360-degree LED video board",
                    ],
                }
            ],
            airports: [
                {
                    name: "Hartsfield-Jackson Atlanta International Airport",
                    link: "https://www.atl.com/",
                    details: "The busiest airport in the world, located 10 miles from downtown Atlanta.",
                },
                {
                    name: "DeKalb-Peachtree Airport",
                    link: "https://www.dekalbpeachtreeairport.com/",
                    details: "Smaller airport located closer to downtown Atlanta.",
                },
            ],
        },
        interest: {
            highlights: [
                {
                    name: "The Georgia Aquarium",
                    link: "https://www.georgiaaquarium.org/",
                    image: "georgia-aquarium.jpeg",
                    description: "The world's largest aquarium, home to over 100,000 animals.",
                },
            ],
        },
        desire: {
            howToGetToStadium: [
                {
                    route: "Hartsfield-Jackson",
                    ways: [
                        "The MARTA Gold Line train from the airport station to Garnett Station. From there, it's a short walk to Mercedes-Benz Stadium.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ]
                },
                {
                    route: "DeKalb-Peachtree",
                    ways: [
                        "The MARTA Blue Line train from the airport station to Vine City Station. From there, it's a short walk to Mercedes-Benz Stadium.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                }
            ],
        },
        action: {
            scheduleLink: "https://www.atlutd.com/schedule",
            ticketSalesLink: "https://www.atlutd.com/tickets",
            narrative: "Book your tickets today and experience the excitement of an Atlanta United match at Mercedes-Benz Stadium!",
        },
    },
};