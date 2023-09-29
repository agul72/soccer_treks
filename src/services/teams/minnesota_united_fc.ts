import { iTeam } from "./iTeam";

export const MinnesotaUnitedFC: iTeam = {
    team: "Minnesota United FC",
    city: "Saint Paul, Minnesota",
    conference: "Western",
    founded: 2010,
    logo: "Minnesota_United_FC_logo.png",
    link: "https://www.mnufc.com/",
    aida: {
        awareness: {
            stadiums: [
                {
                name: "Allianz Field",
                location: "Saint Paul, Minnesota",
                capacity: 19400,
                photo: "Allianz_Field_-_MNUFC_Minnesota_United_st._Paul_Minnesota_MLS.jpg",
                highlights: [
                    "State-of-the-art soccer-specific stadium in Saint Paul, Minnesota",
                    "Home to Minnesota United FC and the USL Championship's Minnesota United FC 2",
                    "Intimate atmosphere with close proximity to the pitch",
                    "Wide variety of food and beverage options, including local favorites",
                ],
            },
        ],
            airports: [
                {
                    name: "Minneapolis-Saint Paul International Airport (MSP)",
                    link: "https://www.mspairport.com/",
                    details: "The closest major airport to Allianz Field, located just 5 miles away.",
                },
            ],
        },
        interest: {
            highlights: [
                {
                    name: "Mall of America",
                    link: "https://www.mallofamerica.com/",
                    image: "Mall_of_America.jpg",
                    description: "Largest shopping mall in the United States, with over 500 stores and restaurants.",
                },
                {
                    name: "Minneapolis Institute of Art",
                    link: "https://www.artsmia.org/",
                    image: "Minneapolis_Institute_of_Art.jpg",
                    description: "Art museum with a collection of over 90,000 works of art from around the world.",
                },
                {
                    name: "Walker Art Center",
                    link: "https://walkerart.org/",
                    image: "Walker_Art_Center.jpg",
                    description: "Contemporary art museum with a focus on visual art, performing art, and film.",
                },
            ],
        },
        desire: {
            howToGetToStadium: [
                {
                    route: "Minneapolis-Saint Paul International Airport (MSP)",
                    ways: [
                        "Take the Metro Green Line train from the airport station to the Union Depot station. From there, transfer to the Metro Green Line train and ride to the Raymond Avenue station. From there, it's a short walk to Allianz Field.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
            ],
        },
        action: {
            scheduleLink: "https://www.mnufc.com/schedule",
            ticketSalesLink: "https://www.mnufc.com/tickets",
            narrative: "Experience the excitement of a Minnesota United FC match at Allianz Field! Book your tickets today!",
        },
    },
};
