// Stadium interface
interface iStadium {
    name: string;
    location: string;
    capacity: number;
    photo?: string;
    highlights: string[];
  }
  
  // Airport interface
  interface iAirport {
    name: string;
    link: string;
    details: string;
  }
  
  // Interest Highlight interface
  interface iInterestHighlight {
    name: string;
    link: string;
    image: string;
    description: string;
  }
  
  // Action interface
  interface iAction {
    scheduleLink: string;
    ticketSalesLink: string;
    narrative: string;
  }
  
  // AIDA Model Interface
  interface iAIDA {
    awareness: {
      stadium: iStadium;
      airports: iAirport[];
    };
    interest: {
      highlights: iInterestHighlight[];
    };
    desire: {
      howToGetToStadium: {
        [key: string]: string[];
      };
    };
    action: iAction;
  }
  
  // Final iTeam interface
  export interface iTeam {
    team: string;
    city: string;
    conference: string;
    founded: number;
    logo: string;
    link: string;
    AIDA: iAIDA;
  }
  
  // Example data for Atlanta United
  const AtlantaUnited: iTeam = {
    team: "Atlanta United FC",
    city: "Atlanta",
    conference: "Eastern",
    founded: 2014,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Atlanta_United_FC_logo.svg/1200px-Atlanta_United_FC_logo.svg.png",
    link: "https://www.atlutd.com/",
    AIDA: {
      awareness: {
        stadium: {
          name: "Mercedes-Benz Stadium",
          location: "Atlanta, Georgia",
          capacity: 71000,
          photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Benz_Stadium_Atlanta_Georgia_USA_2023-09-23.jpg/1200px-Mercedes-Benz_Stadium_Atlanta_Georgia_USA_2023-09-23.jpg",
          highlights: [
            "State-of-the-art retractable roof",
            "360-degree LED video board",
          ],
        },
        airports: [
          {
            name: "Hartsfield-Jackson Atlanta International Airport",
            link: "https://www.atl.com/",
            details: "The busiest airport in the world, located 10 miles from downtown Atlanta.",
          },
          {
            name: "DeKalb-Peachtree Airport",
            link: "https://www.dekalbpeachtreeairport.com/",
            details: "Smaller airport located closer to downtown Atlanta.",
          },
        ],
      },
      interest: {
        highlights: [
          {
            name: "The Georgia Aquarium",
            link: "https://www.georgiaaquarium.org/",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Georgia_Aquarium_Atlanta_Georgia_USA_2023-09-23.jpg/1200px-Georgia_Aquarium_Atlanta_Georgia_USA_2023-09-23.jpg",
            description: "The world's largest aquarium, home to over 100,000 animals.",
          },
        ],
      },
      desire: {
        howToGetToStadium: {
          "Hartsfield-Jackson": [
            "The MARTA Gold Line train from the airport station to Garnett Station. From there, it's a short walk to Mercedes-Benz Stadium.",
            "You can also take a taxi or Uber from the airport to the stadium.",
          ],
          "DeKalb-Peachtree": [
            "The MARTA Blue Line train from the airport station to Vine City Station. From there, it's a short walk to Mercedes-Benz Stadium.",
            "You can also take a taxi or Uber from the airport to the stadium.",
          ],
        },
      },
      action: {
        scheduleLink: "https://www.atlutd.com/schedule",
        ticketSalesLink: "https://www.atlutd.com/tickets",
        narrative: "Book your tickets today and experience the excitement of an Atlanta United match at Mercedes-Benz Stadium!",
      },
    },
 };