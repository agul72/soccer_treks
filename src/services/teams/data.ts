const teams = [{
    team: "Atlanta United FC",
    city: "Atlanta",
    conference: "Eastern",
    founded: 2014,
    logo: "Atlanta_MLS.png",
    link: "https://en.wikipedia.org/wiki/Atlanta_United_FC#",
    stadium: "Mercedes-Benz Stadium"
},
{
    team: "Charlotte FC",
    city: "Charlotte",
    conference: "Eastern",
    founded: 2022,
    logo: "Charlotte_FC_logo.png",
    link: "https://en.wikipedia.org/wiki/Charlotte_FC#",
    stadium: "Bank of America Stadium"
},
{
    team: "Chicago Fire FC",
    city: "Chicago",
    conference: "Eastern",
    founded: 1997,
    logo: "Chicago_Fire_logo.png",
    link: "https://en.wikipedia.org/wiki/Chicago_Fire_FC#",
    stadium: "Soldier Field Chicago, Illinois"
},
{
    team: "CF Montréal",
    city: "Montréal",
    conference: "Eastern",
    founded: 2012,
    logo: "CF_Montreal_logo.png",
    link: "https://en.wikipedia.org/wiki/Chicago_Fire_FC#",
    stadium: "Stade Saputo Olympic Stadium"
},
{
    team: "Columbus Crew SC",
    city: "Columbus",
    conference: "Eastern",
    founded: 1996,
    logo: "Columbus_Crew_logo.png",
    link: "https://en.wikipedia.org/wiki/Columbus_Crew",
    stadium: "Lower.com Field Columbus, Ohio"
}];



export const stadiums = [
    {
        stadium: "Bank of America Stadium",
        location: "Charlotte, North Carolina",
        coordinates: "35°13′33″N 80°51′10″W",
        image: "BofAStadium2015.jpg",
        link: "https://en.wikipedia.org/wiki/Bank_of_America_Stadium",
        description: "Description"
    },
    {
        stadium: "Soldier Field Chicago",
        location: "Chicago, Illinois",
        coordinates: "41.8623°N 87.6167°W",
        image: "Soldier_Field_S.jpg",
        link: "https://en.wikipedia.org/wiki/Soldier_Field",
        description: "Description"
    },
    {
        stadium: "Mercedes-Benz Stadium",
        location: "Atlanta, Georgia",
        coordinates: "33°45′20″N 84°24′00″W",
        capacity: 71_000,
        image: "Peach_Bowl_Pre-game.jpg",
        link: "https://www.dezeen.com/2018/01/31/mercedes-benz-stadium-atlanta-georgia-hok-american-football-nfl-retractable-roof-super-bowl-liii/#",
        description: "Description",
        highlihtsStadium: [
            "State-of-the-art retractable roof",
            "360-degree LED video board",
            "Home to the Atlanta United FC and Atlanta Falcons"
        ],
        airports: [
            {
                name: "Hartsfield-Jackson Atlanta International Airport (ATL)",
                info:
                    [
                        "The busiest airport in the world",
                        "Located 10 miles from downtown Atlanta",
                        "Public transportation available"
                    ]
            },
            {
                name: "DeKalb - Peachtree Airport(PDK)",
                info:
                    [
                        "Smaller airport located closer to downtown Atlanta",
                        "No public transportation available"
                    ]
            }
        ],
        highlightsCity: [
            {
                name: "The Georgia Aquarium",
                info: "The world's largest aquarium, home to over 100,000 animals from around the world.",
                link: "https://www.georgiaaquarium.org/#"
            },
            {
                name: "The World of Coca-Cola",
                info: "A museum dedicated to the history of Coca-Cola, with exhibits on the company's history, its ingredients, and its advertising.",
                link: "https://www.cntraveler.com/activities/atlanta/world-of-coca-cola#"
            },
            {
                name: "The Varsity",
                info: "A classic Atlanta diner, known for its chili dogs and milkshakes.",
                link: "https://www.11alive.com/article/news/verify/the-varsity-verify/85-adf78d31-08ad-4031-83f1-95eb228c9b4f#"
            }
        ]
    },
    {
        stadium: "Saputo Stadium",
        location: "Montreal, Quebec",
        coordinates: "45°33′47″N 73°33′9″W",
        image: "Stade_Saputo.27.06.12.jpg",
        link: "https://en.wikipedia.org/wiki/Saputo_Stadium",
        description: "Description"
    },
    {
        stadium: "Lower.com Field",
        location: "96 Columbus Crew Way, Columbus, Ohio",
        coordinates: "39°58′6.46″N 83°1′1.52″W",
        image: "Lower.com_Field_Southwestern_Gate_July_3_2021.jpg",
        link: "https://en.wikipedia.org/wiki/Lower.com_Field",
        description: "Lower.com Field is a soccer-specific stadium in Columbus, Ohio, United States. It serves primarily as the home stadium of the Columbus Crew of Major League Soccer, replacing the club's previous home, Historic Crew Stadium. The new stadium cost $314 million and is located at the center of the mixed-use Astor Park development adjacent to the Arena District and downtown.[5] It seats 20,371 spectators and includes 30 suites and 1,900 club seats."
    },
];