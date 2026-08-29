const companiesData = [
  {
    id: 58392147,
    name: "Google",
    industry: "Technology",
    location: "Bengaluru, India",
    employees: 180000,
    founded: 1998,
    website: "https://www.google.com",
    description:
      "Google is one of the world's largest technology companies, best known for its search engine and a wide range of internet-based products and services. The company operates across areas such as online advertising, cloud computing, artificial intelligence, mobile operating systems, productivity software, and hardware. Its products include Google Search, YouTube, Android, Google Maps, Google Drive, Google Workspace, and Google Cloud. Google also invests heavily in artificial intelligence and machine learning technologies, using them across consumer products and enterprise services. The company has offices and engineering teams around the world and employs a large workforce involved in software engineering, research, product development, sales, and business operations.",
  },
  {
    id: 27461593,
    name: "Microsoft",
    industry: "Software & Cloud",
    location: "Hyderabad, India",
    employees: 220000,
    founded: 1975,
    website: "https://www.microsoft.com",
    description:
      "Microsoft is a global technology company that develops software, cloud computing platforms, developer tools, operating systems, productivity applications, and enterprise solutions. It is widely known for products such as Windows, Microsoft 365, Teams, Azure, Visual Studio, and Xbox. Azure has become a major part of Microsoft's business, providing organizations with cloud infrastructure, databases, analytics, artificial intelligence, and other technology services. Microsoft also works extensively in artificial intelligence and integrates AI capabilities into many of its products and services. The company serves individual consumers, developers, startups, governments, and large enterprises across numerous industries and operates development and research centers around the world.",
  },
  {
    id: 84623715,
    name: "Amazon",
    industry: "E-commerce & Cloud",
    location: "Bengaluru, India",
    employees: 1500000,
    founded: 1994,
    website: "https://www.amazon.com",
    description:
      "Amazon is a multinational technology and commerce company that operates across e-commerce, cloud computing, logistics, digital entertainment, advertising, and artificial intelligence. It began primarily as an online bookstore and expanded into one of the world's largest online marketplaces, offering products across a huge range of categories. Amazon Web Services, commonly known as AWS, provides cloud computing infrastructure and services used by companies, developers, governments, and organizations worldwide. Amazon also operates Prime Video, Audible, Kindle, and other consumer services. A major part of the company's operations involves warehouses, delivery networks, fulfillment centers, and logistics systems that allow products to be delivered to customers across many countries.",
  },
  {
    id: 39178426,
    name: "Netflix",
    industry: "Entertainment & Technology",
    location: "Mumbai, India",
    employees: 14000,
    founded: 1997,
    website: "https://www.netflix.com",
    description:
      "Netflix is a global entertainment and technology company that provides subscription-based streaming services for movies, television shows, documentaries, and original productions. The company has developed a large international audience by combining technology with content production and distribution. Netflix produces and licenses content from creators and studios around the world and releases programs across many languages and genres. Its technology platform uses data, recommendation systems, and machine learning to help users discover content based on their viewing behavior and preferences. In addition to streaming, Netflix invests significantly in original productions and works with filmmakers, actors, writers, and production companies across multiple countries.",
  },
  {
    id: 71543829,
    name: "Adobe",
    industry: "Software",
    location: "Noida, India",
    employees: 30000,
    founded: 1982,
    website: "https://www.adobe.com",
    description:
      "Adobe is a software company known for creating tools used by designers, photographers, video editors, marketers, businesses, and creative professionals. Its major products include Photoshop, Illustrator, Premiere Pro, After Effects, Acrobat, and Adobe Creative Cloud. The company has expanded beyond traditional desktop software into cloud-based services and digital experience platforms that help organizations create, manage, and deliver digital content. Adobe also develops artificial intelligence features that assist users with tasks such as image editing, content creation, document processing, and workflow automation. Its products are widely used by individuals, creative agencies, educational institutions, media organizations, and large businesses around the world.",
  },
  {
    id: 46289531,
    name: "Infosys",
    industry: "IT Services",
    location: "Bengaluru, India",
    employees: 320000,
    founded: 1981,
    website: "https://www.infosys.com",
    description:
      "Infosys is a multinational information technology services and consulting company headquartered in India. It helps businesses with software development, digital transformation, cloud computing, data analytics, cybersecurity, artificial intelligence, and technology consulting. Infosys works with organizations across industries such as banking, healthcare, retail, manufacturing, telecommunications, and energy. The company provides services ranging from building and maintaining large enterprise applications to helping businesses modernize their technology infrastructure. Infosys has a significant global workforce and operates development centers and offices in multiple countries, making it one of India's major technology services companies with a strong international presence.",
  },
  {
  id: 83726419,
  name: "Apple",
  industry: "Consumer Technology",
  location: "Bengaluru, India",
  employees: 164000,
  founded: 1976,
  website: "https://www.apple.com",
  description:
    "Apple is a global technology company known for designing and developing consumer electronics, software, online services, and hardware products. Its major products include the iPhone, Mac, iPad, Apple Watch, and AirPods, along with software and services such as iOS, macOS, Apple Music, iCloud, and the App Store. The company places significant emphasis on the integration of hardware and software, allowing its products and services to operate as part of a connected ecosystem. Apple also employs engineers and specialists across software development, hardware engineering, artificial intelligence, machine learning, cloud services, operations, retail, and supply chain technology.",
},

{
  id: 52918473,
  name: "Salesforce",
  industry: "Cloud Software",
  location: "Hyderabad, India",
  employees: 76000,
  founded: 1999,
  website: "https://www.salesforce.com",
  description:
    "Salesforce is a cloud software company best known for its customer relationship management platform and enterprise cloud applications. The company provides technology used by organizations to manage sales, customer service, marketing, commerce, analytics, automation, and business operations. Salesforce has expanded its platform through cloud services, artificial intelligence capabilities, developer tools, and enterprise integrations. Engineering teams work on large-scale cloud infrastructure and software platforms that support businesses across many industries. Salesforce also has a significant presence in India, where teams contribute across engineering, sales, customer success, operations, and other technology-focused functions.",
},

{
  id: 68429157,
  name: "Atlassian",
  industry: "Collaboration Software",
  location: "Bengaluru, India",
  employees: 12000,
  founded: 2002,
  website: "https://www.atlassian.com",
  description:
    "Atlassian is a software company that develops collaboration and productivity tools used by engineering teams, businesses, and organizations around the world. Its products include Jira, Confluence, Trello, Jira Service Management, and other tools designed to help teams plan work, manage projects, share knowledge, and improve collaboration. The company focuses heavily on cloud software and modern approaches to teamwork, with engineering teams building products and platforms used by hundreds of thousands of customers. Atlassian's work also increasingly involves artificial intelligence and cloud technologies that help teams automate tasks, organize information, and collaborate more effectively.",
},
{
  id: 41387625,
  name: "NVIDIA",
  industry: "AI & Semiconductor Technology",
  location: "Bengaluru, India",
  employees: 36000,
  founded: 1993,
  website: "https://www.nvidia.com",
  description:
    "NVIDIA is a technology company known for its work in graphics processing, accelerated computing, artificial intelligence, high-performance computing, networking, and semiconductor technology. Its graphics processing units and computing platforms are used across industries including gaming, data centers, scientific computing, robotics, autonomous systems, and artificial intelligence. NVIDIA develops both hardware and software platforms, requiring engineering work across areas such as computer architecture, systems programming, distributed computing, machine learning, compilers, networking, and cloud infrastructure. The company has engineering teams in multiple locations around the world and continues to expand its work in AI computing and accelerated systems.",
},
];
export default companiesData;
