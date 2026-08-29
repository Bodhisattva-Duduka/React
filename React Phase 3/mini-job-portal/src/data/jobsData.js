const jobsData = [
  {
    id: 73849126,
    title: "Frontend Developer",
    company: "Google",
    companyId: 58392147,
    location: "Bengaluru, India",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹12,00,000 - ₹20,00,000",
    posted: "2 days ago",
    skills: ["React", "JavaScript", "HTML", "CSS", "TypeScript"],
    description:
      "We are looking for a Frontend Developer to join our engineering team and help build fast, accessible, and user-friendly web applications. You will work closely with designers, backend engineers, and product managers to turn product requirements into reliable user interfaces. The role involves developing reusable React components, improving application performance, integrating APIs, writing maintainable code, and participating in code reviews. You will also be expected to contribute to testing, debugging, and improving the overall frontend architecture as the application grows.",
  },

  {
    id: 49162783,
    title: "Backend Developer",
    company: "Microsoft",
    companyId: 27461593,
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹15,00,000 - ₹24,00,000",
    posted: "4 days ago",
    skills: ["Java", "Spring Boot", "REST API", "SQL", "Azure"],
    description:
      "We are seeking a Backend Developer to design, develop, and maintain scalable server-side applications and APIs. You will work with frontend engineers and other backend developers to build reliable services that can handle large numbers of users and requests. Your responsibilities will include designing REST APIs, working with relational databases, implementing business logic, improving application performance, writing automated tests, and troubleshooting production issues. You will also have opportunities to work with cloud services and contribute to architectural decisions as the platform evolves.",
  },

  {
    id: 82631594,
    title: "Full Stack Developer",
    company: "Amazon",
    companyId: 84623715,
    location: "Bengaluru, India",
    type: "Full-time",
    experience: "2-5 years",
    salary: "₹14,00,000 - ₹23,00,000",
    posted: "1 week ago",
    skills: ["React", "Node.js", "Express", "MongoDB", "AWS"],
    description:
      "We are hiring a Full Stack Developer to work across both frontend and backend systems and help deliver complete features from start to finish. You will develop interactive user interfaces, build backend services, integrate databases, and work with APIs and cloud infrastructure. The role requires strong problem-solving skills and the ability to understand how different parts of a web application work together. You will collaborate with product and engineering teams, participate in technical discussions, review code, investigate bugs, and continuously improve the scalability, security, and performance of the application.",
  },

  {
    id: 31574962,
    title: "Software Engineer",
    company: "Netflix",
    companyId: 39178426,
    location: "Mumbai, India",
    type: "Full-time",
    experience: "1-3 years",
    salary: "₹10,00,000 - ₹18,00,000",
    posted: "3 days ago",
    skills: ["Java", "Python", "Microservices", "SQL", "Git"],
    description:
      "We are looking for a Software Engineer to help develop and maintain scalable software systems used by large numbers of users. You will work with experienced engineers to design new features, improve existing services, fix technical issues, and write clean and testable code. The role provides exposure to distributed systems, microservices, APIs, databases, and cloud-based infrastructure. You will be expected to understand technical requirements, break problems into smaller tasks, participate in code reviews, and collaborate with engineers across different teams to deliver reliable software.",
  },

  {
    id: 67483215,
    title: "React Developer",
    company: "Adobe",
    companyId: 71543829,
    location: "Noida, India",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹11,00,000 - ₹19,00,000",
    posted: "5 days ago",
    skills: ["React", "JavaScript", "TypeScript", "Redux", "Tailwind CSS"],
    description:
      "We are looking for a React Developer who can build modern, responsive, and maintainable web applications. You will be responsible for developing reusable components, managing application state, consuming backend APIs, and ensuring that interfaces remain performant and accessible. You will work closely with UI designers and backend developers to implement new features and improve existing functionality. The role also involves debugging frontend issues, writing tests, participating in code reviews, and helping establish frontend best practices across the development team.",
  },

  {
    id: 95274631,
    title: "Cloud Engineer",
    company: "Infosys",
    companyId: 46289531,
    location: "Bengaluru, India",
    type: "Full-time",
    experience: "3-6 years",
    salary: "₹13,00,000 - ₹22,00,000",
    posted: "1 week ago",
    skills: ["AWS", "Docker", "Kubernetes", "Linux", "Terraform"],
    description:
      "We are seeking a Cloud Engineer to help design, deploy, and maintain secure and scalable cloud infrastructure. You will work with development teams to automate deployments, manage cloud resources, monitor applications, and improve system reliability. The position involves working with containerization, infrastructure as code, networking, security, and cloud monitoring tools. You will also participate in troubleshooting production issues, optimizing infrastructure costs, and developing automation that makes software delivery more reliable and efficient. Strong collaboration and a willingness to learn new cloud technologies are important for this role.",
  },
  {
    id: 38472651,
    title: "Software Development Engineer",
    company: "Amazon",
    companyId: 84623715,
    location: "Bengaluru, India",
    type: "Full-time",
    experience: "3+ years",
    salary: "₹16,00,000 - ₹26,00,000",
    posted: "1 day ago",
    skills: ["Java", "Python", "AWS", "Distributed Systems", "SQL"],
    description:
      "Join a software engineering team building highly scalable services used by customers across multiple regions. You will participate in system design, implementation, testing, deployment, and operational support. The role involves solving problems around scalability, reliability, performance, and maintainability while working with other engineers to deliver production-ready services. You will also contribute to code reviews, technical documentation, debugging, and improvements to existing architecture.",
  },

  {
    id: 62751483,
    title: "Software Engineer II",
    company: "Microsoft",
    companyId: 27461593,
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "3-6 years",
    salary: "₹18,00,000 - ₹30,00,000",
    posted: "2 days ago",
    skills: ["C#", ".NET", "Azure", "REST API", "SQL"],
    description:
      "We are looking for a Software Engineer to build reliable services and applications that operate at enterprise scale. You will work with other engineers to design features, implement backend services, investigate production issues, and improve system performance. The role includes participating in design discussions, writing automated tests, reviewing code, and contributing to engineering practices that improve the quality and reliability of the overall product.",
  },

  {
    id: 91846327,
    title: "Machine Learning Engineer",
    company: "Google",
    companyId: 58392147,
    location: "Bengaluru, India",
    type: "Full-time",
    experience: "2-5 years",
    salary: "₹18,00,000 - ₹32,00,000",
    posted: "3 days ago",
    skills: ["Python", "TensorFlow", "Machine Learning", "SQL", "GCP"],
    description:
      "We are seeking a Machine Learning Engineer to develop and improve machine learning systems used in large-scale products and services. You will work with engineers and data scientists to prepare data, train models, evaluate results, and integrate machine learning solutions into production systems. The position involves experimentation, performance optimization, model monitoring, and software engineering practices required to maintain reliable machine learning applications.",
  },

  {
    id: 74521863,
    title: "Frontend Engineer",
    company: "Adobe",
    companyId: 71543829,
    location: "Noida, India",
    type: "Full-time",
    experience: "2-5 years",
    salary: "₹13,00,000 - ₹22,00,000",
    posted: "4 days ago",
    skills: ["React", "TypeScript", "JavaScript", "CSS", "REST API"],
    description:
      "We are looking for a Frontend Engineer to build polished and responsive interfaces for modern web applications. You will work closely with designers, product managers, and backend engineers to implement new functionality and improve existing experiences. Responsibilities include building reusable components, integrating APIs, debugging UI issues, improving performance, writing maintainable code, and contributing to frontend development standards across the team.",
  },

  {
    id: 53698142,
    title: "DevOps Engineer",
    company: "Infosys",
    companyId: 46289531,
    location: "Pune, India",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹12,00,000 - ₹21,00,000",
    posted: "6 days ago",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
    description:
      "We are looking for a DevOps Engineer to improve the reliability and automation of software delivery and cloud infrastructure. You will work with development teams to build deployment pipelines, manage infrastructure, monitor applications, and automate repetitive operational tasks. The role includes troubleshooting infrastructure issues, improving deployment processes, supporting cloud environments, and helping teams adopt reliable practices for building and operating production systems.",
  },

  {
    id: 86137529,
    title: "Backend Engineer",
    company: "Netflix",
    companyId: 39178426,
    location: "Mumbai, India",
    type: "Full-time",
    experience: "2-5 years",
    salary: "₹16,00,000 - ₹27,00,000",
    posted: "1 week ago",
    skills: ["Java", "Spring Boot", "Microservices", "Kafka", "AWS"],
    description:
      "We are seeking a Backend Engineer to design and build services that support high-volume applications. You will work on APIs, backend systems, databases, messaging infrastructure, and distributed services while collaborating with engineers across teams. The role involves designing reliable systems, implementing new features, investigating failures, improving performance, and contributing to engineering practices that help services remain scalable and maintainable as usage grows.",
  },
];

export default jobsData;