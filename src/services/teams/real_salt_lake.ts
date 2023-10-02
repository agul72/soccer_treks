import { iTeam } from "./iTeam";

export const RealSaltLake: iTeam = {
    team: "Real Salt Lake",
    city: "Sandy, Utah",
    conference: "Western",
    founded: 2004,
    logo: "Real_Salt_Lake_logo.png",
    link: "https://www.rsl.com/",
    aida: {
        awareness: {
            stadiums: [
                {
                name: "Rio Tinto Stadium",
                location: "Sandy, Utah",
                capacity: 20213,
                photo: "RioTintoEast3.jpg",
                highlights: [
                    "State-of-the-art soccer-specific stadium in Sandy, Utah",
                    "Home to Real Salt Lake and the Utah Royals FC of the NWSL",
                    "Intimate atmosphere with close proximity to the pitch",
                    "Wide variety of food and beverage options, including local favorites",
                ],
            },
        ],
            airports: [
                {
                    name: "Salt Lake City International Airport (SLC)",
                    link: "https://www.slcairport.com/",
                    details: "The closest major airport to Rio Tinto Stadium, located just 15 miles away.",
                },
            ],
        },
        interest: {
            highlights: [
                {
                    name: "Temple Square",
                    link: "https://www.churchofjesuschrist.org/temples/salt-lake-temple",
                    image: "Temple_Square,_Salt_Lake_City.jpg",
                    description: "Headquarters of the Church of Jesus Christ of Latter-day Saints, with a variety of temples, gardens, and other attractions.",
                },
                {
                    name: "Park City Mountain Resort",
                    link: "https://www.parkcitymountain.com/",
                    image: "Eagle_Race_Arena_at_Park_City_Resort.jpg",
                    description: "World-renowned ski resort located just 30 minutes from Salt Lake City.",
                },
                {
                    name: "Great Salt Lake",
                    link: "https://www.visitsaltlake.com/things-to-do/great-salt-lake/",
                    image: "Great_Salt_Lake_by_Sentinel.jpg",
                    description: "Largest saltwater lake in the Western Hemisphere, with a variety of recreational activities available.",
                },
            ],
        },
        desire: {
            howToGetToStadium: [
                {
                    route: "Salt Lake City International Airport (SLC)",
                    ways: [
                        "Take the TRAX Green Line train from the airport station to the Sandy Civic Center station. From there, transfer to the TRAX Blue Line train and ride to the Rio Tinto Stadium station. From there, it's a short walk to the stadium.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
            ],
        },
        action: {
            scheduleLink: "https://www.rsl.com/schedule",
            ticketSalesLink: "https://www.rsl.com/tickets",
            narrative: "Experience the excitement of a Real Salt Lake match at Rio Tinto Stadium! Book your tickets today!",
        },
    },
};
