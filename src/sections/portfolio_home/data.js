import Image1 from '../../assets/mediaproject.jpeg'
import Image2 from '../../assets/smdb.jpeg'
import Image3 from '../../assets/campus.png'

const data = [
    {
        id: 1,
        category: 'data analysis',
        image: Image1,
        title: 'Wesleyan Media Project',
        desc: "January 2023 - Present",
        desc2: "The project’s mission is to deliver unbiased media messaging to journalists and citizens by analyzing political advertisements and media.",
        demo: 'https://mediaproject.wesleyan.edu',
        role: 'Researcher',
        skills: 'Computer Vision, Multimodal Sentiment Analysis, Pandas, Data Analysis, Text Mining',
        work: [{'title':'Violent Protests in 2022 Political Television Ads', 'worklist':['Employed a color histogram-based shot detection algorithm to extract key frames from 2022 election TV ads.',
                'Utilized a pre-trained Convolutional Neural Network model to quantify protest scene violence.',
                'Analyzed the correlation between violent protest ads, political affiliation, key issues, and ad types.'
                ]},
                {'title':'Multimodal Sentiment Analysis & Image Classification', 'worklist':[
                    'Fine-tuned a pre-trained Vision Transformer (ViT) model to classify political ad images (text-free) as positive, negative, or neutral.',
                    'Collaborated with the Computer Vision team to interpret ViT model algorithms and develop precise labeling guidelines for human coders.',
                    'Improved the model’s performance to 0.8.'
                ]},
                {'title':'Text Mining for 2024 Presidential Election', 'worklist':[
                    'Explored the capabilities of Large Language Models, utilizing the OpenAI API, to establish a rapid, reliable method for classifying 2024 political campaign ads.'
                ]}]
    },
    {
        id: 2,
        category: ['project management', 'software engineering'],
        image: Image2,
        title: 'Multimedia Interface of Dataverse Database',
        desc: "June - August 2023",
        desc2: "Dataverse, initially designed by Harvard University, serves as a platform for sharing persistent, authorized, and verifiable data. However, it predominantly hosts static content such as academic papers. Accessing multimedia content requires multiple clicks, and even then, viewing videos is cumbersome due to the absence of dedicated metadata fields for multimedia. In essence, Dataverse isn't optimized for multimedia display. To address this limitation, we created the SNU Movie Database (SMDB) website as a test unit to offer a more optimal platform for multimedia content and enhance the user experience.",
        demo: 'https://smdb.dataverse.ac.kr',
        role: 'Product Manager / Backend Engineer',
        skills: 'AWS, fastAPI, RESTful API, UI/UX Design, Agile Team Management, Product Development, Data Ingestion, Figma',
        work: [{'title': '0', 'worklist': [
            'Orchestrated the entire lifecycle of the SNU Movie Trailer Database product.',
            'Designed the UI/UX of a movie trailer website using Figma, accompanied by functional specifications to facilitate effective team communication.',
            'Led daily Agile stand-up meetings, fostering alignment among designers, engineers, and the CEO regarding the product roadmap.',
            'Coordinated data ingestion with movie stakeholders and resolved legal compliance matters associated with data.',
            'Achieved a 1000% speed enhancement by automating the movies metadata uploading process to Dataverse.',
            'Developed the entire Python-based fastAPI backend code within a one-week timeframe.',
            'Successfully deployed both the backend and React-based SPA on an AWS instance.',
            'Presented the website’s scalability, positioning it as an audiovisual-focused Dataverse interface to the Dataverse community.'
        ]},
            {
                'title':"Website’s Scalability Vision",
                'worklist': [
                    'Conceptualized the secure storage of recorded professor lectures on Dataverse, offering an audiovisual-focused interface to promote modular learning at Seoul National University.',
                    "Established the movie trailer interface’s adaptability with any Dataverse, facilitating communication with autovisual-focused data."
                ]
            }]
    },
    {
        id: 3,
        category: ['software engineering','project management'],
        image: Image3,
        title: 'OurCampus Android App',
        desc: "January 2023 - Present",
        demo: 'https://about.ourcampuswes.org',
        role: 'Frontend Lead',
        skills: 'React Native, Typescript, Web Scraping (BeautifulSoup, Selenium)',
        work: [{'title':'0', 'worklist': [
            "Developed and maintained Wesleyan's social media application, which is used daily by over 25% of the student body.",
            "Collaborated with the team to continuously update and expand the application’s features, including professor reviews, dining menus, and campus events.",
            "Established a professor information database through web scraping of faculty websites, ensuring users had accurate and up-to-date information.",
            "Optimized the user experience by implementing Firebase functions to automate the update of users' last login information."
        ]}]
    }
]

export default data;