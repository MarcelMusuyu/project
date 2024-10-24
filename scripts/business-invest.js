const links = document.querySelectorAll(".menu");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Remove active class from all links
    links.forEach((link) => link.classList.remove("active"));

    // Add active class to the clicked link
    link.classList.add("active");
  });
});

const last = document.querySelector("#last");
// use the date object
const today = new Date();
// const options = {
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   hour: "numeric",
//   minute: "numeric",
//   second: "numeric",
// };
// const formatter = new Intl.DateTimeFormat("en-US", options);
// const dateTimeString = formatter.format(new Date());

const lastModified = document.lastModified;
const formattedDateTime = new Date(lastModified).toLocaleString();

last.innerHTML = `Last modification ${formattedDateTime}`;

const year = document.querySelector("#currentyear");
year.innerHTML = `${today.getFullYear()}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

// const menu = document.querySelectorAll("a");
// for (let a of menu) {
//   a.addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
// }

const startupProjects = [
  {
    id: "project1",
    name: "Innovative Tech Solutions",
    tagline: "Revolutionizing the future with cutting-edge technology.",
    description:
      "A startup focused on developing AI-powered solutions for various industries.",
    progress: 75, // Percentage completion
    status: "In Progress",
    fundingStatus: "Seed Round",
    funding: {
      amount: 800000,
      date: "2023-10-22",
      prototypage:
        "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    website: "https://innovativesolutions.com",
    socialMedia: {
      facebook: "https://facebook.com/innovativesolutions",
      twitter: "https://twitter.com/innovativesolutions",
      linkedin: "https://www.linkedin.com/company/innovativesolutions",
    },

    team: [
      {
        name: "John Doe",
        role: "CEO",
      },
      {
        name: "Jane Smith",
        role: "CTO",
      },
    ],
  },
  {
    id: "project2",
    name: "Green Thumb Technologies",
    tagline: "Growing a more sustainable future, one plant at a time.",
    description:
      "Developing smart irrigation systems for efficient water usage and optimal plant growth.",
    progress: 60,
    status: "In Development",
    fundingStatus: "Pre-Seed",
    funding: {
      amount: 930000,
      date: "2023-11-03",
      prototypage:
        "https://images.pexels.com/photos/3913031/pexels-photo-3913031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    website: "https://gre thumbtech.com",
    socialMedia: {
      facebook: "https://facebook.com/greennethumbtech",
      twitter: "https://twitter.com/greennethumbtech",
      instagram: "https://www.instagram.com/greennethumbtech/",
    },
    team: [
      {
        name: "Sarah Green",
        role: "Founder & CEO",
      },
      {
        name: "David Brown",
        role: "CTO",
      },
      {
        name: "Emily Garcia",
        role: "Head of Marketing",
      },
    ],
  },

  {
    id: "project3",
    name: "Eduverse",
    tagline: "Making education accessible and engaging for everyone.",
    description:
      "Creating an immersive VR platform for interactive and personalized learning experiences.",
    progress: 40,
    status: "Early Stage",
    fundingStatus: "Seeking Seed Funding",
    funding: {
      amount: 500000,
      date: "2023-04-12",
      prototypage:
        "https://media.istockphoto.com/id/1482147760/photo/portrait-of-a-young-team-of-multicultural-engineers-use-computers-insert-a-circuit-board.webp?s=1024x1024&w=is&k=20&c=BP6idCDk0P0y7ZZZ-EfRkyUqTv1o9SkmrXbBDa2yldY=",
    },
    website: "https://comingsoon.eduverse.com",
    socialMedia: {
      twitter: "https://twitter.com/eduversevr",
    },
    team: [
      {
        name: "Michael Lee",
        role: "Co-Founder & CEO",
      },
      {
        name: "Alice Chen",
        role: "Co-Founder & CTO",
      },
    ],
  },

  {
    id: "project4",
    name: "Healthify",
    tagline: "Making wellness accessible and affordable for everyone.",
    description:
      "A startup developing a telehealth platform connecting patients with doctors and therapists remotely.",
    progress: 60,
    status: "prototypage Stage",
    fundingStatus: "Seed Round",
    funding: {
      amount: 460000,
      date: "2024-03-14",
      prototypage:
        "https://media.istockphoto.com/id/1449084209/photo/concentrated-black-female-engineer-writing-code-developing-software-for-modern-drone-control.webp?s=1024x1024&w=is&k=20&c=M6SpBtpTPB8B71W-pQKjM7FLZKIhHwqaLt5ar2gotXI=",
    },
    website: "https://healthify.com",
    socialMedia: {
      facebook: "https://facebook.com/healthify",
      twitter: "https://twitter.com/healthify",
      linkedin: "https://www.linkedin.com/company/healthify",
    },
    team: [
      {
        name: "Amanda Williams",
        role: "CEO & Co-Founder",
      },
      {
        name: "Charles Miller",
        role: "CTO & Co-Founder",
      },
    ],
  },
  {
    id: "project6",
    name: "Innovative Tech Solutions",
    tagline: "Revolutionizing the future with cutting-edge technology.",
    description:
      "A startup focused on developing AI-powered solutions for various industries.",
    progress: 75,
    status: "In Progress",
    fundingStatus: "Seed Round",
    funding: {
      amount: 200000,
      date: "2023-02-10",
      prototypage:
        "https://media.istockphoto.com/id/1167549712/photo/caucasian-male-and-black-female-engineers-working-on-a-drone-project-with-help-of-laptop-and.webp?s=1024x1024&w=is&k=20&c=fRQu9OHU9O8SFomzYUY1HRkjO-KbGPPnrNyIA0ytrB4=",
    },
    website: "https://innovativesolutions.com",
    socialMedia: {
      facebook: "https://facebook.com/innovativesolutions",
      twitter: "https://twitter.com/innovativesolutions",
      linkedin: "https://www.linkedin.com/company/innovativesolutions",
    },
    team: [
      {
        name: "John Doe",
        role: "CEO",
      },
      {
        name: "Jane Smith",
        role: "CTO",
      },
    ],
  },
  {
    id: "project7",
    name: "Greenify Inc.",
    tagline: "Sustainable solutions for a greener tomorrow.",
    description:
      "A startup developing innovative technologies for renewable energy and eco-friendly products.",
    progress: 50,
    status: "In Development",
    fundingStatus: "Pre-Seed",
    funding: {
      amount: 560700,
      date: "2024-10-01",
      prototypage:
        "https://media.istockphoto.com/id/2147681904/photo/female-engineer-working-with-robotic-machine-in-factory.webp?s=1024x1024&w=is&k=20&c=GWacgs36rDUYFmgdLn-6qhvUkZQFWHf8cGBUW1akiRY=",
    },
    website: "https://greenifyinc.com",
    socialMedia: {
      facebook: "https://facebook.com/greenifyinc",
      twitter: "https://twitter.com/greenifyinc",
      linkedin: "https://www.linkedin.com/company/greenifyinc",
    },
    team: [
      {
        name: "Sarah Jones",
        role: "CEO & Founder",
      },
      {
        name: "David Lee",
        role: "Head of Engineering",
      },
    ],
  },
  // Add 8 more projects here with unique details
  {
    id: "project8",
    name: "Edufy",
    tagline: "Empowering education through personalized learning.",
    description:
      "A startup creating an adaptive learning platform for K-12 students.",
    progress: 80,
    status: "Beta Testing",
    fundingStatus: "Series A",
    funding: {
      amount: 346000,
      date: "2023-12-20",
      prototypage:
        "https://media.istockphoto.com/id/1167549773/photo/multi-ethnic-team-of-male-and-female-leading-scientists-work-on-innovative-robotics.webp?s=1024x1024&w=is&k=20&c=n0VrHCflDIvaZ3tm8dMA7552xGbnrO0LJ1IQNQ9CrXk=",
    },
    website: "https://edufy.com",
    socialMedia: {
      facebook: "https://facebook.com/edufy",
      twitter: "https://twitter.com/edufy",
      linkedin: "https://www.linkedin.com/company/edufy",
    },
    team: [
      {
        name: "Michael Brown",
        role: "CEO",
      },
      {
        name: "Emily Garcia",
        role: "CTO",
      },
    ],
  },
  {
    id: "project9",
    name: "Healthify",
    tagline: "Making wellness accessible and affordable for everyone.",
    description:
      "A startup developing a telehealth platform connecting patients with doctors and therapists remotely.",
    progress: 60,
    status: "Prototype Stage",
    fundingStatus: "Seed Round",
    funding: {
      amount: 570000,
      date: "2024-10-22",
      prototypage:
        "https://media.istockphoto.com/id/1448503073/photo/portrait-of-attentive-young-man-engineering-robotic-arm-with-screwdriver-at-isolated-room.webp?s=1024x1024&w=is&k=20&c=eJODQ_rOpjZl8eA4EfIXgQCmVirLSRdmOveL-rqBt_o=",
    },
    website: "https://healthify.com",
    socialMedia: {
      facebook: "https://facebook.com/healthify",
      twitter: "https://twitter.com/healthify",
      linkedin: "https://www.linkedin.com/company/healthify",
    },
    team: [
      {
        name: "Amanda Williams",
        role: "CEO & Co-Founder",
      },
      {
        name: "Charles Miller",
        role: "CTO & Co-Founder",
      },
    ],
  },
  {
    id: "project9",
    name: "Healthify",
    tagline: "Making wellness accessible and affordable for everyone.",
    description:
      "A startup developing a telehealth platform connecting patients with doctors and therapists remotely.",
    progress: 60,
    status: "Prototype Stage",
    fundingStatus: "Seed Round",
    funding: {
      amount: 730000,
      date: "2024-10-22",
      prototypage:
        "https://media.istockphoto.com/id/1461626406/photo/computer-science-engineer-in-virtual-reality-headset-using-controllers-and-operating-robot.webp?s=1024x1024&w=is&k=20&c=zFg6grLtdMoOHucEtBlMGbzFO9htldO2IS6lRa4-TKY=",
    },
    website: "https://healthify.com",
    socialMedia: {
      facebook: "https://facebook.com/healthify",
      twitter: "https://twitter.com/healthify",
      linkedin: "https://www.linkedin.com/company/healthify",
    },
    team: [
      {
        name: "Amanda Williams",
        role: "CEO & Co-Founder",
      },
      {
        name: "Charles Miller",
        role: "CTO & Co-Founder",
      },
    ],
  },
];

// createTempleCard(temples);
createProjectCard(startupProjects);

const home = document.querySelector("#home");
home.addEventListener("click", () => {
  createProjectCard(startupProjects);
});

const expensive = document.querySelector("#expensive");
expensive.addEventListener("click", () => {
  createProjectCard(
    startupProjects.filter((startup) => {
      // Extract the year from the dedicated property

      // Filter based on the year (replace 1983 with your desired year)
      return startup.funding.amount > 500000;
    })
  );
});
const cheap = document.querySelector("#cheap");

cheap.addEventListener("click", () => {
  createProjectCard(
    startupProjects.filter((startup) => {
      // Extract the year from the dedicated property

      // Filter based on the year (replace 1983 with your desired year)
      return startup.funding.amount <= 500000;
    })
  );
});

const recent = document.querySelector("#new");
recent.addEventListener("click", () => {
  createProjectCard(
    startupProjects.filter((startup) => {
      const date1Obj = new Date(startup.funding.date);
      const date2Obj = new Date("2024-10-1");
      return date1Obj > date2Obj;
    })
  );
});

function createProjectCard(projects) {
  document.querySelector(".card-container").innerHTML = "";
  const container = document.querySelector(".card-container");

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // let img = document.createElement("img");
    // img.setAttribute("src", "images/crowdfunding.webp");
    // img.setAttribute("alt", `${project.name} Project`);
    // img.setAttribute("loading", "lazy");
    // img.setAttribute("class", "card-logo");

    // let img2 = document.createElement("img");
    // img2.setAttribute("src", "images/Business_Success.webp");
    // img2.setAttribute("alt", `${project.name} Project`);
    // img2.setAttribute("loading", "lazy");
    // img2.setAttribute("class", "card-logo");

    // card.append(img);
    // card.append(img2);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    const cardDetails = document.createElement("div");
    cardDetails.classList.add("card-details");

    const title = document.createElement("h2");
    title.classList.add("card-title");
    title.textContent = project.name;
    cardContent.appendChild(title);
    let img3 = document.createElement("img");
    img3.setAttribute("src", project.funding.prototypage);
    img3.setAttribute("alt", `${project.name} Project`);
    img3.setAttribute("loading", "lazy");
    img3.setAttribute("class", "card-logo1");
    cardContent.appendChild(img3);
    const tagline = document.createElement("p");
    tagline.classList.add("card-tagline");
    tagline.textContent = project.tagline;
    cardContent.appendChild(tagline);

    const description = document.createElement("p");
    description.textContent = project.description;
    description.classList.add("card-description");
    cardContent.appendChild(description);

    const progress = document.createElement("p");
    progress.classList.add("card-progress");
    progress.innerHTML = `Progress: <span>${project.progress}</span> %`;
    cardDetails.appendChild(progress);
    const status = document.createElement("p");
    status.classList.add("card-status");
    status.innerHTML = `Status: <span>${project.status}</span>`;
    cardDetails.appendChild(status);
    const funding = document.createElement("p");
    funding.classList.add("card-funding");

    funding.innerHTML = `Funding: 💰💰💰<span>${project.funding.amount}</span> `;
    cardDetails.appendChild(funding);
    // Add a link to the website (optional)
    if (project.website) {
      const websiteLink = document.createElement("a");
      websiteLink.href = `project-details.html?${project.id}`;
      websiteLink.textContent = "See the Project";

      websiteLink.classList.add("link-button");
      cardDetails.appendChild(websiteLink);
    }
    const cardDetails1 = document.createElement("div");
    cardDetails1.classList.add("card-details");
    let team = document.createElement("img");
    team.setAttribute("src", "images/teamworker.png");
    team.setAttribute("alt", `${project.name} Project`);
    team.setAttribute("loading", "lazy");
    team.setAttribute("class", "card-logo");
    cardDetails1.appendChild(team);
    if (project.team) {
      project.team.forEach((team) => {
        const progress1 = document.createElement("p");
        progress1.classList.add("card-progress");
        progress1.innerHTML = `${team.role}: <span>${team.name}</span> %`;
        cardDetails1.appendChild(progress1);
      });
    }
    const status1 = document.createElement("p");
    status1.classList.add("card-status");
    status1.innerHTML = `Date: <span>${project.funding.date}</span>`;
    cardDetails1.appendChild(status1);
    const funding1 = document.createElement("p");
    funding1.classList.add("card-funding");

    funding1.innerHTML = `Progress: 🌡<span>${project.progress}</span> `;
    cardDetails1.appendChild(funding1);
    // Add a link to the website (optiona
    const cardDetailsMain = document.createElement("div");
    cardDetailsMain.classList.add("card-main");
    cardDetailsMain.appendChild(cardDetails);
    cardDetailsMain.appendChild(cardDetails1);
    cardContent.appendChild(cardDetailsMain);
    card.append(cardContent);
    container.appendChild(card);
  });
}

document.querySelectorAll(".link-button").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const val = link.href.split("?");
    const projectId = val[1];
    const project = startupProjects.find((project) => project.id === projectId);
    localStorage.setItem(projectId, JSON.stringify(project));
    localStorage.setItem("projectID", projectId);
    // Redirect to the details page
    window.location.href = val[0];

    console.log();
  });
});
