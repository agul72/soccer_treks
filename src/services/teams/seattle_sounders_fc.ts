import { iTeam } from "./iTeam";

export const SeattleSoundersFC: iTeam = {
    team: "Seattle Sounders FC",
    city: "Seattle, Washington",
    conference: "Western",
    founded: 2008,
    logo: "Seattle_Sounders_FC_logo.png",
    link: "https://www.soundersfc.com/",
    aida: {
        awareness: {
            stadiums: [
                {
                name: "Lumen Field",
                location: "Seattle, Washington",
                capacity: 69000,
                photo: "Qwest_Field_North.jpg",
                highlights: [
                    "State-of-the-art stadium with a retractable roof",
                    "Home to the Seattle Sounders FC, the Seattle Seahawks, and the OL Reign",
                    "Intimate atmosphere with close proximity to the pitch",
                    "Wide variety of food and beverage options, including local favorites",
                ],
            },
        ],
            airports: [
                {
                    name: "Seattle-Tacoma International Airport (SEA)",
                    link: "https://www.portseattle.org/sea-tac",
                    details: "The closest major airport to Lumen Field, located just 13 miles away.",
                },
            ],
        },
        interest: {
            highlights: [
                {
                    name: "Space Needle",
                    link: "https://www.spaceneedle.com/",
                    image: "Space_Needle.jpg",
                    description: "Iconic observation tower with stunning views of the city and Puget Sound.",
                },
                {
                    name: "Pike Place Market",
                    link: "https://www.pikeplacemarket.org/",
                    image: "Pike_Place_Market_Seattle.jpg",
                    description: "Public market with over 200 vendors selling fresh produce, seafood, flowers, and other goods.",
                },
                {
                    name: "Museum of Pop Culture (MoPOP)",
                    link: "https://www.mopop.org/",
                    image: "EMPPano11.jpg",
                    description: "Museum dedicated to popular culture, including music, movies, video games, and science fiction.",
                },
            ],
        },
        desire: {
            howToGetToStadium: [
                {
                    route: "Seattle-Tacoma International Airport (SEA)",
                    ways: [
                        "Take the Link light rail train from the airport station to the International District/Chinatown station. From there, it's a short walk to Lumen Field.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
            ],
        },
        action: {
            scheduleLink: "https://www.soundersfc.com/schedule",
            ticketSalesLink: "https://www.soundersfc.com/tickets",
            narrative: "Experience the excitement of a Seattle Sounders FC match at Lumen Field! Book your tickets today!",
        },
    },
};
