import { iTeam } from "./iTeam";

export const ColoradoRapids: iTeam = {
    team: "Colorado Rapids",
    city: "Commerce City, Colorado",
    conference: "Western",
    founded: 1995,
    logo: "Colorado_Rapids_logo.png",
    link: "https://www.coloradorapids.com/",
    aida: {
        awareness: {
            stadiums: [
                {
                name: "Dick's Sporting Goods Park",
                location: "Commerce City, Colorado",
                capacity: 18061,
                photo: "colorado_rapids_stadium.jpg",
                highlights: [
                    "State-of-the-art soccer-specific stadium in Commerce City, Colorado",
                    "Home to the Colorado Rapids and the USL Championship's Colorado Springs Switchbacks FC",
                    "Intimate atmosphere with close proximity to the pitch",
                    "Wide variety of food and beverage options, including local favorites",
                ],
            },
        ],
            airports: [
                {
                    name: "Denver International Airport",
                    link: "https://www.denverairport.com/",
                    details: "The closest major airport to Dick's Sporting Goods Park, located just 21 miles away.",
                },
            ],
        },
        interest: {
            highlights: [
                {
                    name: "Rocky Mountains National Park",
                    link: "https://www.nps.gov/romo/index.htm",
                    image: "Rocky_Mountain_National_Park_in_September_2011_-_Glacier_Gorge_from_Bear_Lake.jpg",
                    description: "One of the most popular national parks in the United States, located just an hour's drive from Denver.",
                },
                {
                    name: "Red Rocks Park and Amphitheatre",
                    link: "https://www.redrocksonline.com/",
                    image: "RedRocks.jpg",
                    description: "Iconic outdoor concert venue located in Morrison, Colorado, about 30 minutes from Denver.",
                },
                {
                    name: "Coors Brewery",
                    link: "https://www.coorsbrewery.com/",
                    image: "Coors_logo.png",
                    description: "World-famous brewery located in Golden, Colorado, about 20 minutes from Denver.",
                },
            ],
        },
        desire: {
            howToGetToStadium: [
                {
                    route: "Denver International Airport",
                    ways: [
                        "Take the A Line train from the airport station to the Union Station station. From there, transfer to the R Line train and ride to the Dick's Sporting Goods Park station. From there, it's a short walk to the stadium.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
            ],
        },
        action: {
            scheduleLink: "https://www.coloradorapids.com/schedule",
            ticketSalesLink: "https://www.coloradorapids.com/tickets",
            narrative: "Experience the excitement of a Colorado Rapids match at Dick's Sporting Goods Park! Book your tickets today!",
        },
    },
};
