const projectsData = [
  {
    id: 1,
    title: "Next Portfolio Website",
    description:
      "I built this Next.js portfolio website to showcase my technical skills and projects, build credibility, facilitate communication and document my ongoing journey in the field of development. <br> Technologies used: React, Next.js, Nodemailer, Tailwind CSS",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/osstd/oshemy_portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "The Birthday Wisher",
    description:
      "The wisher sends a simple wish to all your friends on their birthdays. <br> \
    Technologies used: Flask, Celery, Redis, twilio, PostgreSQL, Bootstrap5",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/osstd/The-Birthday-Wisher-.git",
    previewUrl: "https://the-birthday-wisher-vercel.vercel.app/",
  },
  {
    id: 3,
    title: "What is a pixel?",
    description:
      "What is a pixel, delves into the foundational blocks of our screens and phones, namely, the pixel, offering a unique \
    web tool to explore the intricate composition of every pixel in an image. <br> Technologies used: Flask, Pillow, Numpy, Chart.js, Bootstrap5",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/osstd/What-is-a-pixel--.git",
    previewUrl: "https://what-is-a-pixel-vercel.vercel.app",
  },
  {
    id: 4,
    title: "The Blog",
    description:
      "A blog to share knowledge and expertise and to promote my personal brand. <br> Technologies used: Flask, twilio, PostgreSQL, Bootstrap5",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/osstd/The_Blog_.git",
    previewUrl: "https://the-blog-vercel.vercel.app/",
  },
  {
    id: 5,
    title: "The Transcriber",
    description:
      "Simple app to record, transcribe and translate all in the browser. \
    <br> Technologies used: Vite, React, Xenova - Transformers.js, Tailwind CSS",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/osstd/The-TranScriber-.git",
    previewUrl: "https://the-tran-scriber.vercel.app/",
  },
  {
    id: 6,
    title: "Structural Engineering Portfolio Website",
    description:
      "I built this multipage web app as a tool to showcase my structural engineering technical skills and projects. <br> Technologies used: Flask, MongoDB, HTML, CSS, JavaScript",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/osstd/oshemy-sportfolio.git",
    previewUrl: "https://www.oshemy.info",
  },
  {
    id: 7,
    title: "Flight Checker",
    description:
      "Search flights for up to 5 cities with your required dates, nights and stopovers. <br> \
    Technologies used: Flask, Requests, AIOHTTP",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/osstd/Flights-search.git",
    previewUrl: "https://flight-checker-vercel.vercel.app",
  },
  {
    id: 8,
    title: "The Book Shelf",
    description:
      "Showcase your favourite books. Create, read, update and delete books, preview photos, reviews and notes. <br>\
    Technologies used: React, MongoDB Realm serverless, Tailwind CSS",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/osstd/Book_shelf_.git",
    previewUrl: "https://book-shelf-s1ao.onrender.com",
  },
  {
    id: 9,
    title: "NY Restaurant Reviews",
    description:
      "New York City restaurant reviews directory. Search for your restaurant by name or zipcode. Create, read, update and delete your reviews for reference. <br>\
    Technologies used: Express, React, MongoDB, Bootstrap5",
    image: "/images/projects/9.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/osstd/Restaurant_reviews_.git",
    previewUrl: "https://restaurant-reviews-v644.onrender.com",
  },
  {
    id: 10,
    title: "Django To Do List",
    description:
      "To do list web-app using Django framework. App utilizes Django user authentication. Django app hosted on Render and connected to AWS RDS PostgreSQL.<br>\
    Technologies used: Django, AWS PostgreSQL",
    image: "/images/projects/10.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/osstd/todo_list_.git",
    previewUrl: "https://the-to-do-list-vercel.vercel.app",
  },
  {
    id: 11,
    title: "The Beam Calculator",
    description:
      "Beam caculator for simply supported and cantilever beams.<br>\
    Technologies used: Flask, Python Objects, Chart.js ",
    image: "/images/projects/11.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/osstd/The-Beam-Calculator.git",
    previewUrl: "https://beam-calculator-vercel.vercel.app/",
  },
  {
    id: 12,
    title: "Your Special Day",
    description:
      "Get Billboard's top 10 list on your favourite chosen day.<br>\
    Technologies used: Flask, Requests, BeautifulSoup",
    image: "/images/projects/12.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/osstd/Top-10-special.git",
    previewUrl: "https://top-10-special-vercel.vercel.app",
  },
  {
    id: 13,
    title: "To-Do List",
    description:
      "TO-DO List with a progress bar, providing real-time updates and tracking your progress as you complete tasks.<br>\
    Technologies used: HTML, CSS, JavaScript",
    image: "/images/projects/13.png",
    tag: ["JS"],
    gitUrl: "https://github.com/osstd/To-Do-List-Widget.git",
    previewUrl: "https://to-do-list-vercel-seven.vercel.app/",
  },
  {
    id: 14,
    title: "Text to Speech",
    description:
      "Text-to-speech converter powered by the Web Speech API's Speech Synthesis module.<br>\
    Technologies used: HTML, CSS, JavaScript",
    image: "/images/projects/14.png",
    tag: ["JS"],
    gitUrl: "https://github.com/osstd/text_voice_converter_.git",
    previewUrl: "https://text-to-voice-converter-vercel.vercel.app",
  },
  {
    id: 15,
    title: "The Notes",
    description:
      "Short-term notes widget utilizing browser's cache for faster loading and offline access.<br>\
    Technologies used: HTML, CSS, JavaScript",
    image: "/images/projects/15.png",
    tag: ["JS"],
    gitUrl: "https://github.com/osstd/Top-10-special.git",
    previewUrl: "https://top-10-special-vercel.vercel.app",
  },
  {
    id: 16,
    title: "Weather Widget",
    description:
      "The Weather Widget allows you to search for a city by name or by specifying the city and country (e.g. 'London, Canada')<br>\
    Technologies used: Flask, Requests, JavaScript",
    image: "/images/projects/16.png",
    tag: ["JS", "All", "Web"],
    gitUrl: "https://github.com/osstd/Weather_Widget_.git",
    previewUrl: "https://weather-widget-vercel.vercel.app",
  },
  {
    id: 17,
    title: "LTB Calculator",
    description:
      "LTB moment structural engineering calculator<br>\
    Technologies used:JavaScript, HTML, CSS",
    image: "/images/projects/17.png",
    tag: ["JS"],
    gitUrl: "https://github.com/osstd/ltb-moment-calc-.git",
    previewUrl: "https://ltb-moment-calc.vercel.app",
  },
  {
    id: 18,
    title: "Movies - The Numbers",
    description:
      "Data analysis and visualization of the movie budgets and financial performance dataset.<br>\
    Technologies used: Matplotlib, Pandas, Scikit-learn, Seaborn",
    image: "/images/projects/18.png",
    tag: ["Data Analysis", "JS"],
    gitUrl: "https://github.com/osstd/Movie-Budget-Colab.git",
    previewUrl: "https://movie-budget-colab.vercel.app",
  },
  {
    id: 19,
    title: "Playstore - The Numbers",
    description:
      "Analysis and visualization of apps and review data that was scraped from the Google Play Store.<br>\
    Technologies used: Pandas, Plotly",
    image: "/images/projects/19.png",
    tag: ["Data Analysis", "JS"],
    gitUrl: "https://github.com/osstd/Google-Playstore-Colab.git",
    previewUrl: "https://google-playstore-colab.vercel.app",
  },
  {
    id: 20,
    title: "Google Search Trends",
    description:
      "Google Trends gives us an estimate of search volume. An exploration if search popularity relates to other kinds of data.<br>\
    Technologies used: Matplotlib, Pandas",
    image: "/images/projects/20.png",
    tag: ["Data Analysis", "JS"],
    gitUrl: "https://github.com/osstd/Search-Trends-Colab.git",
    previewUrl: "https://search-trends-colab.vercel.app",
  },
  {
    id: 21,
    title: "Programming Languages Dataset",
    description:
      "A visualization that provides insights into the popularity of different languages over time.<br>\
    Technologies used: Matplotlib, Pandas, Plotly",
    image: "/images/projects/21.png",
    tag: ["Data Analysis", "JS"],
    gitUrl: "https://programming-languages-colab.vercel.app",
    previewUrl: "https://programming-languages-colab.vercel.app",
  },
];

export default projectsData;
