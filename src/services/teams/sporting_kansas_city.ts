import { iTeam } from "./iTeam";

export const SportingKansasCity: iTeam = {
    team: "Sporting Kansas City",
    city: "Kansas City, Kansas",
    conference: "Western",
    founded: 1996,
    logo: "Sporting_Kansas_City_logo.png",
    link: "https://www.sportingkc.com/",
    aida: {
        awareness: {
            stadiums: [
                {
                name: "Children's Mercy Park",
                location: "Kansas City, Kansas",
                capacity: 18467,
                photo: "Children's_Mercy_Park_Aerial.jpg",
                highlights: [
                    "State-of-the-art soccer-specific stadium in Kansas City, Kansas",
                    "Home to Sporting Kansas City and the Kansas City Current",
                    "Intimate atmosphere with close proximity to the pitch",
                    "Wide variety of food and beverage options, including local favorites",
                ],
            },
        ],
            airports: [
                {
                    name: "Kansas City International Airport (MCI)",
                    link: "https://www.kansascityairport.com/",
                    details: "The closest major airport to Children's Mercy Park, located just 20 miles away.",
                },
            ],
        },
        interest: {
            highlights: [
                {
                    name: "National World War I Museum and Memorial",
                    link: "https://www.theworldwar.org/",
                    image: "National_World_War_I_Museum_and_Memorial_aerial.jpg",
                    description: "Museum dedicated to the history of World War I, with a variety of exhibits and artifacts.",
                },
                {
                    name: "Nelson-Atkins Museum of Art",
                    link: "https://www.nelson-atkins.org/",
                    image: "Atkins_Museum_of_Art,_Kansas_City.jpg",
                    description: "Art museum with a collection of over 40,000 works of art from around the world.",
                },
                {
                    name: "Power & Light District",
                    link: "https://www.powerandlightdistrict.com/",
                    image: "Pld_pano_cropped.jpg",
                    description: "Entertainment district with a variety of bars, restaurants, and shops.",
                },
            ],
        },
        desire: {
            howToGetToStadium: [
                {
                    route: "Kansas City International Airport (MCI)",
                    ways: [
                        "Take the Metro bus #229 from the airport station to the Southwest Blvd & State Ave station. From there, transfer to the Metro bus #35 and ride to the Southwest Blvd & 31st St station. From there, it's a short walk to Children's Mercy Park.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
            ],
        },
        action: {
            scheduleLink: "https://www.sportingkc.com/schedule",
            ticketSalesLink: "https://www.sportingkc.com/tickets",
            narrative: "Experience the excitement of a Sporting Kansas City match at Children's Mercy Park! Book your tickets today!",
        },
    },
};
