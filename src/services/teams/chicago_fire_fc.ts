import { iTeam } from "./iTeam";

export const ChicagoFireFC: iTeam = {
    team: "Chicago Fire FC",
    city: "Chicago",
    conference: "Eastern",
    founded: 1997,
    logo: "Chicago_Fire_logo.png",
    link: "https://www.chicagofirefc.com/",
    aida: {
        awareness: {
            stadiums: [
                {
                    name: "Soldier Field",
                    location: "Chicago, Illinois",
                    capacity: 61500,
                    photo: "chicago_fire_fc_stadium_1.jpg",
                    highlights: [
                        "Historic stadium in downtown Chicago",
                        "Home to the Chicago Bears (NFL)",
                        "Recently renovated to include state-of-the-art amenities",
                    ],
                },
                {
                    name: "SeatGeek Stadium",
                    location: "Bridgeview, Illinois",
                    capacity: 20000,
                    photo: "chicago_fire_fc_stadium_2.jpg",
                    highlights: [
                        "State-of-the-art soccer-specific stadium in the Chicago suburbs",
                        "Home to Chicago Fire FC and the Chicago Red Stars (NWSL)",
                        "Intimate atmosphere with close proximity to the pitch",
                    ],
                },
            ],
            airports: [
                {
                    name: "O'Hare International Airport",
                    link: "https://www.flychicago.com/ohare",
                    details: "The closest major airport to both Soldier Field and SeatGeek Stadium, located 10 miles from Soldier Field and 15 miles from SeatGeek Stadium.",
                },
                {
                    name: "Midway International Airport",
                    link: "https://www.flychicago.com/midway",
                    details: "Another major airport serving Chicago, located 15 miles from Soldier Field and 20 miles from SeatGeek Stadium.",
                },
            ],
        },
        interest: {
            highlights: [
                {
                    name: "Millennium Park",
                    link: "https://www.millenniumpark.org/",
                    image: "Millennium_Square,_Chicago,_Illinois.jpg",
                    description: "Public park in downtown Chicago with iconic landmarks like Cloud Gate (aka The Bean) and Crown Fountain.",
                },
                {
                    name: "Art Institute of Chicago",
                    link: "https://www.artic.edu/",
                    image: "Art_Institute_of_Chicago.jpg",
                    description: "One of the world's leading art museums, with a collection spanning over 3,000 years.",
                },
            ],
        },
        desire: {
            howToGetToStadium: [
                {
                    route: "O'Hare International Airport",
                    ways: [
                        "Take the Metra BNSF Railway train from the airport station to the Ogilvie Transportation Center. From there, it's a short walk to Soldier Field.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
                {
                    route: "Midway International Airport",
                    ways: [
                        "Take the CTA Orange Line train from the airport station to the Roosevelt station. From there, transfer to the CTA Green Line train and ride to the Roosevelt station. From there, it's a short walk to Soldier Field.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
            ],
        },
        action: {
            scheduleLink: "https://www.chicagofirefc.com/schedule",
            ticketSalesLink: "https://www.chicagofirefc.com/tickets",
            narrative: "Experience the excitement of a Chicago Fire FC match at Soldier Field or SeatGeek Stadium! Book your tickets today!",
        },
    },
};
