const logotext = "LAVANYA";
const meta = {
    title: "Lavanya M E",
    description: "I’m Lavanya M E Technical Engineer_ Web Developer,currently working in Bangalore",
};

const introdata = {
    title: "I’m Lavanya M E",
    animated: {
        first: "I'm a Developer",
        second: "I design and develop websites!!",
        third: "I am passionate about creating user friendly websites",
    },
    description: "Being a web developer, I like to include my creative art into the website and always curious, enthusiastic to explore new things.",
    your_img_url: process.env.PUBLIC_URL+"/imagg.jpeg",
};

const dataabout = {
    title: "About me",
    aboutme: "My name is Lavanya, I'm a web developer based in Bangalore, India. I work on the development of dashboard application for visualization of data. I work on building and deployment of the web application. I interact with international customers to deploy the applications onsite and guide them through the usage of the application.",
};
const worktimeline = [{
        jobtitle: "Technical Engineer",
        where: "Huawei",
        date: "2022",
    },
    {
        jobtitle: "Graduate Engineering Trainee",
        where: "Huawei",
        date: "2020",
    }
];

const skills = [{
        name: "Python",
        value: 50,
    },
    {
        name: "Vue",
        value: 50,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 50,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "Web Development",
        description: "Certified with web development course from Udemy.",
    },
    {
        title: "Python for Datascience",
        description: "Certified with data science course from Udemy.",
    },
    {
        title: "Data Analytics",
        description: "Certified with learning data analytics course from LinkedIn.",
    },
];

const dataportfolio = [{
        img: "/blog.jpg",
        desctiption: "The basic portfolio template using html, css and javascript.",
        link: "https://github.com/lavanya-m-e/basic",
    },
    {
        img: "/travel.jpg",
        desctiption: "The travel booking website using html, bootstrap and php.",
        link: "https://github.com/lavanya-m-e/travel_guide",
    },
    {
        img: "/weather.jpg",
        desctiption: "The basic react weather predictor app using html, javascript and react.",
        link: "https://github.com/lavanya-m-e/social",
    },
   
];

const contactConfig = {
    YOUR_EMAIL: "lavanyame101@gmail.com",
    YOUR_FONE: "+91 8970970222",
    description: " ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/lavanya-m-e",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com/in/lavanya-m-e/728a7a134",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
    twitch: "https://twitch.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
