// Your main code file
import { iTeam } from "./iTeam";  // make sure the path is correct

export const ColumbusCrewSC: iTeam = {
  team: "Columbus Crew SC",
  city: "Columbus",
  conference: "Eastern",
  founded: 1994,
  logo: "Columbus_Crew_SC_logo.png",
  link: "https://www.columbuscrewsc.com/",
  aida: {
    awareness: {
      stadiums: [
        {
        name: "Lower.com Field",
        location: "Columbus, Ohio",
        capacity: 20371,
        photo: "Lower.com_Field_stadium.jpg",
        highlights: [
          "State-of-the-art soccer-specific stadium in downtown Columbus",
          "Home to Columbus Crew SC",
          "Intimate atmosphere with close proximity to the pitch",
        ],
      },
      ],
      airports: [
        {
          name: "John Glenn Columbus International Airport",
          link: "https://www.columbusairport.com/",
          details: "The closest major airport to Lower.com Field, located 5 miles away.",
        },
      ],
    },
    interest: {
      highlights: [
        {
          name: "Franklin Park",
          link: "https://www.columbusparks.org/parks/franklin-park",
          image: "Fpsouth1.jpg.jpg",
          description: "Large public park with a variety of amenities, including a zoo, botanical garden, and golf course.",
        },
        {
          name: "Ohio State University",
          link: "https://www.osu.edu/",
          image: "OhioUnionFront.jpg",
          description: "Major public research university with a beautiful campus and a variety of attractions, including the Ohio Stadium and the Wexner Center for the Arts.",
        },
      ],
    },
    desire: {
      howToGetToStadium: [
        {
        route: "John Glenn Columbus International Airport", 
        ways: [
          "Take the COTA C-Bus from the airport terminal to the Convention Center station. From there, it's a short walk to Lower.com Field.",
          "You can also take a taxi or Uber from the airport to the stadium.",
        ],
      },
    ]
    },
    action: {
      scheduleLink: "https://www.columbuscrewsc.com/schedule",
      ticketSalesLink: "https://www.columbuscrewsc.com/tickets",
      narrative: "Experience the excitement of a Columbus Crew SC match at Lower.com Field! Book your tickets today!",
    },
  },
};
