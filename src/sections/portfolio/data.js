import Image1 from '../../assets/backtogreen.jpeg'
import Image2 from '../../assets/kaiwes.jpeg'
import Image3 from '../../assets/mediaproject.jpeg'
import Image4 from '../../assets/ssqrd.jpeg'
import Image5 from '../../assets/campus.png'
import Image6 from '../../assets/qacproject.jpeg'
import Image7 from '../../assets/wes2.jpeg'
import Image8 from '../../assets/qac.jpeg'
import Image9 from '../../assets/smdb.jpeg'

const data = [
    {
        id: 1,
        category: 'data analysis',
        image: Image3,
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
        image: Image9,
        title: 'Multimedia Interface of Dataverse Database',
        desc: "June - August 2023",
        desc2: "Dataverse, initially designed by Harvard University, serves as a platform for sharing persistent, authorized, and verifiable data. However, it predominantly hosts static content such as academic papers. Accessing multimedia content requires multiple clicks, and even then, viewing videos is cumbersome due to the absence of dedicated metadata fields for multimedia. In essence, Dataverse isn't optimized for multimedia display. To address this limitation, we created the SNU Movie Trailer Database (SMDB) website  as a test unit to offer a more optimal platform for multimedia content and enhance the user experience.",
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
        image: Image5,
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
    },
    {
        id: 4,
        category: ['data analysis','project management'],
        image: Image7,
        title: 'Gun Safety Research Lab',
        desc: "September 2023 - Present",
        desc2: 'Wesleyan University Quantitative Analysis Center (QAC) x Center for the Study of Guns and Society (CSGS) Media Project explores the impact of firearm visual culture and history on cultural understanding, gun deaths, policies, gun manufacturers, and consumer markets. We investigate how films, television shows, and video games are influenced by decisions and, in turn, how they shape cultural perceptions. This is the first scholarly research on firearms in the United States supported by the Bureau of Alcohol, Tobacco, Firearms and Explosives.',
        role: 'Research Assistant',
        skills: 'Data Analysis, Agile Team Management, Topic Modeling',
        work: [{'title': '0', 'worklist': [
            'Directed the montage production that integrated historical firearms film clips and data analysis research results, visually narrating the portrayal of guns in media throughout history.',
            'Collaborated with the Director of the CSGS to present the montage at the Current Perspectives on the History of Guns and Society conference.',
            'Led weekly Agile meetings with the teams from the QAC, CSGS, and film students to effectively drive the montage project.',
            'Analyzed the correlation between firearm frequency, types, and movie genres across historical periods; identified firearm corporations interested in product placement within media.',
            'Employed topic modeling techniques on the National Rifle Association(NRA) dataset to investigate how firearms are portrayed and discussed across various media formats, including video games, TV, film, and advertisements.'
        ]}]
    },
    {
        id: 5,
        category: 'Entrepreneurship',
        image: Image2,
        title: 'KaiWes Entrepreneurs',
        desc: "August 2023 - Present",
        desc2: "KaiWes is Wesleyan’s student-led social entrepreneurship club that fosters global connections between Wesleyan students and industry professionals. Our initiatives focus on engaging with innovative, entrepreneurial individuals, particularly those involved in startups or early-stage projects. Our activities include speaker series, workplace trips, and an incubator project. We maintain a close partnership with Wesleyan’s Patricelli Center of Social Entrepreneurship.",
        demo: 'https://kaiwes.notion.site/Revive-KaiWes-6e8d0a08d1814129841de7cd688ca54d',
        role: 'Core Team Member / Incubator Project Director',
        skills: 'Product Management, Data Analysis and Experimentation, Customer Analysis, Branding, Digital Marketing, Agile Team Management',
        work: [{'title':'0', 'worklist':[
            'Launched the Incubator Project, empowering students as product owners to lead real-world ventures by collaborating with external partners and developing their own startup ideas from inception to completion.',
            'Initiated and directed the inaugural Incubator project in partnership with Bessie, a zero damage press-on nail brand.'
        ]},
        {'title':'Bessie x KaiWes Project', 'desc':'Ongoing project (September 2023 - Present): Optimizing engagement with gen Z and college students.','worklist': [
            'Facilitated weekly Agile stand-up meetings, fostering collaboration with the Bessie’s CEO, engineers, designers, and the Wesleyan team.',
            "Created a roadmap for the long-term development of Bessie’s Campus Ambassador program.",
            "Implemented strategies for improved deliverability and engagement in the Campus Ambassador program, including campus student database management and email marketing algorithms.",
            "Conducted A/B testing on Bessie’s platform UI/UX and features to identify Gen Z preferences, including Before & After Scrolling Bar and Store Locator.",
            "Integrated Bessie's nail quiz into the Shopify store to automate email marketing and targeted advertisements.",
            "Led the implementation of frontend code for updated features."
        ]}]
    },
    {
        id: 6,
        category: ['project management','software engineering'],
        image: Image4,
        title: 'SSQRD (Sustainable Sister)',
        desc: "August 2022 - August 2023",
        desc2: 'SSQRD is a startup that strives to achieve sustainability and accessibility in fashion industry.',
        demo: 'https://easy-shrine-696.notion.site/SSQRD-Website-Roadmap-526492fa9acb4fe9ad65e4824d0b9422',
        role: 'Product Manager / Software Engineering Intern',
        skills: 'React.js, Python, Marketing, Branding, UI/UX, Figma, Data Analysis and Experimentation',
        work: [{'title':'0', 'worklist': [
            'Conducted market research and devised long-term strategies to define the brand’s distinctiveness and retain its target clients.',
            "Delivered brand-differentiating feature ideas for the website, including the Outfit Generator, Message Center, and My Closet; led a 20-member team to consensus.",
            "Incorporated user feedback through exploratory testing, resulting in a majority of users expressing satisfaction in post-update surveys.",
            "Designed the website wireframe and prototype using Figma, and built the front-end alongside two other engineers.",
            "Developed a Python-based Scrapy web scraper to construct a database, enabling personalized search."
        ]}]
    },
    {
        id: 7,
        category: 'project management',
        image: Image8,
        title: 'Applied Data Analysis Tutor',
        desc: "August 2023 - Present",
        demo: 'http://adata.site.wesleyan.edu',
        role: 'Teaching Assistant',
        skills: 'R, Project Management',
        work: [{'title':'0','worklist':[
            'Conducted bi-weekly R data analysis tutoring for a group of five students, providing personalized one-to-one consultations to monitor progress and address individual concerns.',
            'Guided students in navigating research questions aligned with their interests, suggesting creative approaches in building upon prior studies.',
            'Curated 20+ pertinent research paper sources to enhance domain knowledge, helping students refine their research questions and project direction.',
            'Provided recommendations for analytical approaches and methodologies based on the unique dataset and research goals.'
        ]}, 
        {
            'title': "Research Topics that My Students Worked With:",
            'worklist': [
                "Childhood Adoption’s Impact on an Individual's Parenthood Desires",
                "Predicting Alcohol Dependency from Smoking Behaviors",
                "Parental Closeness and Its Effect on a Child’s Life Outlook",
                "The Correlation Between Perfectionism and Amphetamine Use among Amphetamine Users",
                "The Influence of Parental Involvement in Childhood on Adult Social Phobia Development"
            ]
        }]
    },
    {
        id: 8,
        category: 'data analysis',
        image: Image6,
        title: 'Social Media App Review Analysis',
        desc: "January - May 2023",
        desc2: 'The project aims to enhance user experience by analyzing the correlation between key app features and user satisfaction across popular social networking applications.',
        demo: 'https://drive.google.com/file/d/1_DTpwKVA5tSlzrN5Y8CuipzIKJmDpWo-/view',
        role: 'Data Analyst',
        skills: 'Python(Numpy, Pandas), Web Scraping(Scrapy, Selenium), Topic Modeling, R, Data Analysis, Machine Learning(K-means Clustering, PCA analysis)',
        work: [{'title':'0','worklist':[
            "Developed a Python-based scrapy-selenium to scrape 38,000+ Google Play Store reviews from the three most downloaded (Instagram, Tik Tok, Facebook) and the three most rapidly growing SNS apps (Snapchat, BeReal, Tumblr); experienced a 3000% speed improvement and increased system reliability.",
            "Utilized topic modeling techniques, including LDK, RAKE, and Word2Vec, on a pre-processed dataset to identify key app features.",
            "Conducted a comparative analysis of multiple sentiment analysis models to enhance accuracy.",
            "Conducted a comparative analysis of two models, using ratings and sentiments as dependent variables, to determine the optimal model.",
            "Proposed actionable recommendations for  future SNS app developers and product managers based on the findings."
        ]}]
    },
    {
        id: 9,
        category: 'Entrepreneurship',
        image: Image1,
        title: 'Back to Green',
        desc: "September 2019 - December 2022",
        desc2: 'Back to Green is an environmental nonprofit dedicated to driving community improvements through social engagement, aligned with the United Nations Sustainable Development Goals 13, 14, and 15 on a global scale.',
        role: 'Founder / Representative',
        skills: 'Marketing, Project Management, Data Analysis and Experimentation, Agile Team Management, Writing, Public Speaking',
        work: [{'title':'0', 'worklist': [
            'Oversaw five departments: Journalism & Publication, Research, Design, Public Affairs, and Education.',
            'Launched the organization with 20 members from seven international schools, achieving a 60% membership growth within a year.',
            'Secured a MOU with Arip-and-Wirip, an upcycling company, and promoted their products, primarily targeting Gen Z.',
            'Restructured marketing strategies through weekly Arip-and-Wirip CEO meetings, resulting in the sell-out of new products within three days.',
            'Hosted monthly online educational sessions, experiencing 25% quarterly growth in participation.',
            'Co-authored the book From Youth to Youth(translated from Korean), showcasing the establishment of Back to Green with fellow youth environmentalists; the book earned national recognition as one of the best-selling books in 2020.',
            'Participated in the MBC (a broadcasting corporation in South Korea) Youth Talk Show as a founder and representative of Back to Green.'
        ]}]
    }
]

export default data;