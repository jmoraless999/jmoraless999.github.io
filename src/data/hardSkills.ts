interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "SQL",
    description: "Where I enjoy diving deep into relational databases, writing complex queries, and extracting the exact insights I need",
    icon: "SQL"
  },
  {
    name: "Power Bi",
    description: "My go-to tool where I love transforming raw data into stunning, interactive dashboards that tell a compelling story",
    icon: "Power Bi"
  },
  {
    name: "Excel",
    description: "Where I enjoy organizing complex spreadsheets, creating advanced formulas, and building quick, reliable data models",
    icon: "Excel"
  },
  {
    name: "Python",
    description: "My favorite language where I love building automation scripts, cleaning messy data, and training machine learning models",
    icon: "Python"
  },
    {
    name: "Rstudio",
    description: "My favorite space for deep statistical analysis and data mining. ",
    icon: "Rstudio"
  },
    {
    name: "Tableau",
    description: "Where I like to explore visual analytics and design beautiful, high-impact dashboards for business insights",
    icon: "Tableau"
  }
];

export default hardSkills;