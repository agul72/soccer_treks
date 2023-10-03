import { iTeam } from "./iTeam";

export const LAFC: iTeam = {
    team: "LA FC",
    city: "Los Angeles, California",
    conference: "Western",
    founded: 2014,
    logo: "Los_Angeles_FC_logo.png",
    link: "https://www.lafc.com/",
    aida: {
        awareness: {
            stadiums: [
                {
                name: "Banc of California Stadium",
                location: "Los Angeles, California",
                capacity: 22000,
                photo: "LAFC_East_Side_Stadium_interior.jpg",
                highlights: [
                    "State-of-the-art soccer-specific stadium in downtown Los Angeles",
                    "Home to LA FC and the USL Championship's Los Angeles Galaxy II",
                    "Intimate atmosphere with close proximity to the pitch",
                    "Wide variety of food and beverage options, including local favorites",
                ],
            },
        ],
            airports: [
                {
                    name: "Los Angeles International Airport (LAX)",
                    link: "https://www.flylax.com/",
                    details: "The closest major airport to Banc of California Stadium, located just 5 miles away.",
                },
            ],
        },
        interest: {
            highlights: [
                {
                    name: "Universal Studios Hollywood",
                    link: "https://www.universalstudioshollywood.com/",
                    image: "Universal_archway.jpg",
                    description: "Theme park with movie-themed rides, attractions, and shows.",
                },
                {
                    name: "Getty Center",
                    link: "https://www.getty.edu/center/",
                    image: "Aerial_Getty_Museum.jpg",
                    description: "Art museum with a collection of European paintings, drawings, sculpture, illuminated manuscripts, decorative arts, and photographs.",
                },
                {
                    name: "Natural History Museum of Los Angeles County",
                    link: "https://nhmlac.org/",
                    image: "NaturalHistoryMuseumOfLosAngelesCounty.jpg",
                    description: "Natural history museum with exhibits on dinosaurs, animals, plants, and more.",
                },
            ],
        },
        desire: {
            howToGetToStadium: [
                {
                    route: "Los Angeles International Airport (LAX)",
                    ways: [
                        "Take the Metro Green Line train from the airport station to the Willowbrook/Rosa Parks station. From there, transfer to the Metro 730 bus and ride to the Vermont/Exposition station. From there, it's a short walk to Banc of California Stadium.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
            ],
        },
        action: {
            scheduleLink: "https://www.lafc.com/schedule",
            ticketSalesLink: "https://www.lafc.com/tickets",
            narrative: "Experience the excitement of an LA FC match at Banc of California Stadium! Book your tickets today!",
        },
    },
};
