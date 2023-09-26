import { iTeam } from "./iTeam";

export const StLouisCitySC: iTeam = {
    team: "St. Louis CITY SC",
    city: "St. Louis",
    conference: "Western",
    founded: 2020,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/St._Louis_CITY_SC_logo.svg/1200px-St._Louis_CITY_SC_logo.svg.png",
    link: "https://www.stlcitysc.com/",
    aida: {
        awareness: {
            stadiums: [
                {
                    name: "City Foundry STL",
                    location: "St. Louis, Missouri",
                    capacity: 22500,
                    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/City_Foundry_STL_render.jpg/1200px-City_Foundry_STL_render.jpg",
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
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Gateway_Arch_St_Louis.jpg/1200px-Gateway_Arch_St_Louis.jpg",
                    description: "Iconic monument and national park in downtown St. Louis.",
                },
                {
                    name: "City Museum",
                    link: "https://www.citymuseum.org/",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/City_Museum_St_Louis.jpg/1200px-City_Museum_St_Louis.jpg",
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