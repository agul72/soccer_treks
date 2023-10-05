import { iTeam } from "./iTeam";

export const StLouisCitySC: iTeam = {
    team: "St. Louis CITY SC",
    city: "St. Louis",
    conference: "Western",
    founded: 2020,
    logo: "St_Louis_City_SC_logo.png",
    link: "https://www.stlcitysc.com/",
    aida: {
        awareness: {
            stadiums: [
                {
                    name: "CityPark",
                    location: "St. Louis, Missouri",
                    capacity: 22500,
                    photo: "City_Park_Saint_Louis.jpg",
                    highlights: [
                        "State-of-the-art stadium in the heart of downtown St. Louis",
                        "Sustainable design and construction",
                        "Intimate atmosphere with close proximity to the pitch",
                    ],
                }
            ],
            airports: [
                {
                    name: "St. Louis Lambert International Airport",
                    link: "https://www.flystl.com/",
                    details: "The major airport serving St. Louis, located 13 miles from downtown.",
                },
            ],
        },
        interest: {
            highlights: [
                {
                    name: "Gateway Arch National Park",
                    link: "https://www.nps.gov/jeff/index.htm",
                    image: "Gateway_Arch_edit1.jpg",
                    description: "Iconic monument and national park in downtown St. Louis.",
                },
                {
                    name: "City Museum",
                    link: "https://www.citymuseum.org/",
                    image: "City_Museum_outdoor_structures.jpg",
                    description: "Unique indoor/outdoor museum with exhibits and activities for all ages.",
                },
            ],
        },
        desire: {
            howToGetToStadium: [
                {
                    route: "St. Louis Lambert International Airport",
                    ways: [
                        "Take the MetroLink train from the airport station to the Union Station stop. From there, it's a short walk to City Foundry STL.",
                        "You can also take a taxi or Uber from the airport to the stadium.",
                    ],
                }
            ],
        },
        action: {
            scheduleLink: "https://www.stlcitysc.com/schedule",
            ticketSalesLink: "https://www.stlcitysc.com/tickets",
            narrative: "Experience the excitement of a St. Louis CITY SC match at City Foundry STL! Book your tickets today!",
        },
    },
};