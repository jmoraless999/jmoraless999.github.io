interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Spanish",
        level: "Native",
        description: "I speak fluently and write fluently",
        show: true
    },
    {
        name: "English",
        level: "B1",
        description: "I am able to hold simple conversations and understand clear everyday and professional language.",
        show: true
    },
    {
        name: "German",
        level: "A1",
        description: "I am currently learning the language and can understand basic words and expressions",
        show: true
    }
];

export default languages;