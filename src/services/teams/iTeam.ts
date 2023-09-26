// Stadium interface
export interface iStadium {
    name: string;
    location: string;
    capacity: number;
    photo?: string;
    highlights: string[];
}

// Airport interface
export interface iAirport {
    name: string;
    link: string;
    details: string;
}

// Interest Highlight interface
export interface iInterestHighlight {
    name: string;
    link: string;
    image: string;
    description: string;
}

// Action interface
export interface iAction {
    scheduleLink: string;
    ticketSalesLink: string;
    narrative: string;
}

export interface iRoad {
    route: string;
    ways: string[]
}
// AIDA Model Interface
export interface iAIDA {
    awareness: {
        stadiums: iStadium[];
        airports: iAirport[];
    };
    interest: {
        highlights: iInterestHighlight[];
    };
    desire: {
        howToGetToStadium: iRoad[];
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
    aida: iAIDA;
}