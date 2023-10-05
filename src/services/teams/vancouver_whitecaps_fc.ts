import { iTeam } from "./iTeam";

export const VancouverWhitecapsFC: iTeam = {
    team: "Vancouver Whitecaps FC",
    city: "Vancouver, British Columbia",
    conference: "Western",
    founded: 2009,
    logo: "Vancouver_Whitecaps_FC_logo.png",
    link: "https://www.whitecapsfc.com/",
    aida: {
        awareness: {
            stadiums: [
                {
                name: "BC Place",
                location: "Vancouver, British Columbia",
                capacity: 54500,
                photo: "BC_Place_2015_Women's_FIFA_World_Cup.jpg",
                highlights: [
                    "Iconic stadium with a retractable roof",
                    "Home to the Vancouver Whitecaps FC, the Vancouver BC Lions, and the Vancouver Canadians",
                    "Intimate atmosphere with close proximity to the pitch",
                    "Wide variety of food and beverage options, including local favorites",
                ],
            },
        ],
            airports: [
                {
                    name: "Vancouver International Airport (YVR)",
                    link: "https://www.yvr.ca/",
                    details: "The closest major airport to BC Place, located just 8 miles away.",
                },
            ],
        },
        interest: {
            highlights: [
                {
                    name: "Stanley Park",
                    link: "https://vancouver.ca/parks-recreation-culture/stanley-park",
                    image: "Stanley_Park_Labeled_Aerial_Map.png",
                    description: "Urban park with over 1,000 acres of forest, beaches, and attractions.",
                },
                {
                    name: "Capilano Suspension Bridge Park",
                    link: "https://www.capilanosuspensionbridge.com/",
                    image: "Capilano_Suspension_Bridge,_Vancouver.jpg",
                    description: "Suspension bridge park with stunning views of the Capilano River and surrounding rainforest.",
                },
                {
                    name: "Vancouver Aquarium",
                    link: "https://www.vanaqua.org/",
                    image: "Vancouver_Aquarium_entrance.jpg",
                    description: "Public aquarium with over 70,000 animals from around the world.",
                },
            ],
        },
        desire: {
            howToGetToStadium: [
                {
                    route: "Vancouver International Airport (YVR)",
                    ways: [
                        "Take the Canada Line train from the airport station to the Vancouver City Centre station. From there, transfer to the Expo Line train and ride to the Stadium-Chinatown station. From there, it's a short walk to BC Place.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
            ],
        },
        action: {
            scheduleLink: "https://www.whitecapsfc.com/schedule",
            ticketSalesLink: "https://www.whitecapsfc.com/tickets",
            narrative: "Experience the excitement of a Vancouver Whitecaps FC match at BC Place! Book your tickets today!",
        },
    },
};
