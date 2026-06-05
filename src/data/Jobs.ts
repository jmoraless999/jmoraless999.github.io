/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience:WorkExperience[] = [
    {
        title: "Call Center Agent",
        startDate: "2026-05-04",
        endDate: "2020-06-03",
        company: "Covisian",
        location: "Barranquilla",
        description: "Managed customer retention and port-in processes for the Colombian telecommunications market, ensuring seamless mobile number portability and hitting performance targets.",
        goals: [
            "Analyzed customer needs to recommend and offer the most suitable plans.",
            "Achieved monthly performance goals and key performance indicators (KPIs).",
            "Monitored and tracked portability requests end-to-end until successful closure.",
        ],
        currentJob: false,
    },
    {
        title: "Professional Practicum",
        startDate: "2023-01-02",
        endDate: "2020-06-03",
        company: "Ufinet Colombia S.A",
        location: "Barranquilla",
        description: "Optimized documentation, databases, and administrative processes to improve data access and information flow at Ufinet.",
        goals: [
            "Updating and control of documentary databases.",
            "Management of filing and distribution of documents.",
            "Organization and digitization of physical and digital documentation.",
            "Improvement in information access times through document organization.",
        ],
        currentJob: false,
    },
];
export default workExperience;