export default {
  projects: [
    {
      id: 1,
      title: "realtime car parking reservation",
      summary: `A realtime car parking reservation web app with a working hardware prototype.
            What's happening on the parking slot prototype (i.e. if the slot is vacant, reserved or occupied) is reflected in realtime on the web and vice-versa.
            Registered users can view vacant slots and reserve a slot ahead of time online.
            This system includes an admin dashboard for managing users, automated transaction logs and income computations.`,
      linkToCode: "https://github.com/RonelTheGreat/car-park-rev",
      linkToDemo: "https://parkya.herokuapp.com",
      features: [
        "online reservation",
        "realtime parking slot's state (i.e. vacant, reserved or occupied)",
        "custom payment",
        "automatic deduction of user's balance upon reservation",
        "dashboard where admin can load user's account & register a new user",
        "automated logging of actions from entrance to exit (for security purposes)",
        "automated calculations of daily, monthly & yearly income"
      ],
      techs: [
        "HTML",
        "CSS",
        "Javascript",
        "JQuery",
        "Node JS",
        "Express Framework",
        "Websocket (socket.io)",
        "MongoDB",
        "EJS templating engine"
      ],
      projectClass: "car-parking",
      snapshot: "car-parking.png"
    },
    {
      id: 2,
      title: "library system with QR Code & SMS Technology",
      summary: `An automated library system for borrowing and returning of books in the library.
            This system automates the logging of borrowed and returned books.
            This system also monitors borrowed books and notify the borrower via SMS whether the borrowed book is due today, due tomorrow or is overdue.`,
      linkToCode: "https://github.com/RonelTheGreat/library-app",
      linkToDemo: "https://github.com/RonelTheGreat/library-app",
      features: [
        "Automated borrowing and returning of books",
        "QR code scanner & generator",
        "SMS notification system",
        "Easy book monitoring",
        "Automated logging of transactions (i.e. borrowed & returned books)",
        "Admin dashboard for registering a new book or user",
        "Admin dashboard for viewing transaction logs",
        "Admin dashboard for viewing all available, borrowed, and returned books",
        "Admin dashboard for editing user & book information"
      ],
      techs: [
        "HTML",
        "CSS",
        "Javascript",
        "JQuery",
        "Node JS",
        "Express Framework",
        "Websocket (socket.io)",
        "MongoDB",
        "EJS templating engine"
      ],
      projectClass: "library",
      snapshot: "lib.png"
    },
    {
      id: 3,
      title: "typing game built with reactJS",
      summary: `A simple typing game that will test your typing speed and accuracy for 1 minute.
            It has also a realtime calculations and results for accuracy, number of correctly & mistakenly typed words.`,
      linkToCode: "https://github.com/RonelTheGreat/typing-app",
      linkToDemo: "http://keyboard-ninjaaa.herokuapp.com/",
      features: [
        "Calculation and results for accuracy, keystrokes and correctly or mistakenly typed words",
        "Can choose a word length (i.e. short, medium and long words)"
      ],
      techs: [
        "HTML",
        "CSS",
        "Javascript (React JS)",
        "Node JS",
        "Express Framework"
      ],
      projectClass: "typing",
      snapshot: "typing-game.png"
    },
    {
      id: 4,
      title: "covid-19 tracker built with vue JS",
      summary:
        "A simple COVID-19 tracker that consumes a third-party API for the latest updates on COVID-19 around the globe, with over 200+ searchable countries.",
      linkToCode: "https://github.com/RonelTheGreat/covid-19-tracker-revamped",
      linkToDemo: "http://covid19-update.netlify.com/",
      features: [
        "Realtime search suggestion for available countries",
        "Daily updates from a third-party API"
      ],
      techs: ["HTML", "CSS", "Javascript (Vue JS)"],
      projectClass: "covid",
      snapshot: "covid.png"
    }
  ]
};
