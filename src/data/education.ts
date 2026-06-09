interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "Certificado de Análisis de Datos Talento Tech",
        startDate: "2025-05-26",
        endDate: "2025-08-01",
        school: "Universidad Libre ",
        location: "Barranquilla",
        description: "Tech bootcamp by Unilibre, focused on intensive data analysis training and practical problem-solving.",
        currentUni: false,
        
    },
    {
        title: "Google Data Analytics Professional Certificate",
        startDate: "2023-01-25",
        endDate: "2023-03-03",
        school: "Coursera",
        location: "Online",
        description: "Comprehensive professional certification focused on hands-on data analytics. It validates proficiency in data cleaning, problem-solving, and advanced analysis using tools like SQL, R, and Tableau, concluding with a real-world case study project.",
        currentUni: false,
    },
    {
        title: "Industrial Engineer",
        startDate: "2017-08-02",
        endDate: "2023-05-30",
        school: "Fundación Universidad del Norte",
        location: "Barranquilla",
        description: "Uninorte Industrial Engineer optimizing logistics, quality, and processes through strategic Business Intelligence and analytics.",
        currentUni: false,
    },
];

export default education;