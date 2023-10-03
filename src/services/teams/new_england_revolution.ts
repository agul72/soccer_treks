import { iTeam } from "./iTeam";

export const NewEnglandRevolution: iTeam = {
    team: "New England Revolution",
    city: "Foxborough, Massachusetts",
    conference: "Eastern",
    founded: 1995,
    logo: "New_England_Revolution_logo.png",
    link: "https://www.revolutionsoccer.net/",
    aida: {
        awareness: {
            stadiums: [
                {
                name: "Gillette Stadium",
                location: "Foxborough, Massachusetts",
                capacity: 65878,
                photo: "Gillette_Stadium_(Top_View).jpg",
                highlights: [
                    "State-of-the-art stadium in Foxborough, Massachusetts",
                    "Home to the New England Revolution and the New England Patriots",
                    "Intimate atmosphere with close proximity to the pitch",
                ],
            },
        ],
            airports: [
                {
                    name: "T.F. Green International Airport",
                    link: "https://www.pvdairport.com/",
                    details: "The closest major airport to Gillette Stadium, located 30 miles away.",
                },
                {
                    name: "Boston Logan International Airport",
                    link: "https://www.massport.com/logan-airport/",
                    details: "Another major airport serving Foxborough, Massachusetts, located 35 miles away.",
                },
            ],
        },
        interest: {
            highlights: [
                {
                    name: "Freedom Trail",
                    link: "https://www.thefreedomtrail.org/",
                    image: "USA-The_Freedom_Trail.jpeg",
                    description: "Historic 2.5-mile path through Boston that passes by 16 sites significant to the American Revolution.",
                },
                {
                    name: "Fenway Park",
                    link: "https://www.mlb.com/redsox/ballpark/fenway-park",
                    image: "Hanscom_participates_in_World_Series_pregame_events.jpg",
                    description: "Iconic home ballpark of the Boston Red Sox, one of the oldest and most famous Major League Baseball stadiums.",
                },
            ],
        },
        desire: {
            howToGetToStadium: [
                {
                    route: "T.F. Green International Airport",
                    ways: [
                        "Take the Rhode Island Public Transit Authority (RIPTA) Route 20 bus from the airport terminal to the Providence Amtrak station. From there, transfer to the MBTA Route 128 bus and ride to the Gillette Stadium stop.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
                {
                    route: "Boston Logan International Airport",
                    ways: [
                        "Take the MBTA Silver Line bus from the airport terminal to South Station. From there, transfer to the MBTA Route 128 bus and ride to the Gillette Stadium stop.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                },
            ],
        },
        action: {
            scheduleLink: "https://www.revolutionsoccer.net/schedule",
            ticketSalesLink: "https://www.revolutionsoccer.net/tickets",
            narrative: "Experience the excitement of a New England Revolution match at Gillette Stadium! Book your tickets today!",
        },
    },
};
