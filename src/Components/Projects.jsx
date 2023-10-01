import weatheria from '../assets/project/weatheria.png';
import password from '../assets/project/password generator.jpg';
import quote from '../assets/project/quote.png';
import imageGen from '../assets/project/Image Generator.jpg';
import nike from '../assets/project/Nike.png';
import lokru from '../assets/project/lokru.png';
import numberGuess from '../assets/project/numberGuess.png';
import bank from '../assets/project/bank.png';
import godaddy from '../assets/project/godaddy.png';

const Project = () => {

  const projects = [
    {
      id: 1,
      sourceCode: "https://github.com/abilash0205/weather-app",
      liveLink: "https://wanttoknowweather.netlify.app/",
      img: weatheria,
      name: "Weatheria"
    },
    {
      id: 2,
      sourceCode: "https://github.com/abilash0205/password-generator",
      liveLink: "https://own-password-generator.netlify.app/",
      img: password,
      name: "Password Generator"
    },
    {
      id: 3,
      sourceCode: "https://github.com/abilash0205/quoteGenerator",
      liveLink: "https://quotebloom.netlify.app/",
      img: quote,
      name: "Quote Generator"
    },
    {
      id: 4,
      sourceCode: "https://github.com/abilash0205/API-Image-Generator",
      liveLink: "https://abilash0205.github.io/API-Image-Generator/",
      img: imageGen,
      name: "Image Generator"
    },
    {
      id: 5,
      sourceCode: "https://github.com/abilash0205/nike-landing-page",
      liveLink: 'https://not-a-nike.netlify.app/',
      img: nike,
      name: "Nike Landing Page"
    },
    {
      id: 6,
      sourceCode: "https://github.com/abilash0205/Lokru-Cloud-Hosting-Site",
      liveLink: "https://lokru.netlify.app/",
      img: lokru,
      name: "Lokru"
    },
    {
      id: 7,
      sourceCode: "https://github.com/abilash0205/Number-Guessing-Game",
      liveLink: "https://abilash0205.github.io/Number-Guessing-Game/",
      img: numberGuess,
      name: "Number Guessing Game"
    },
    {
      id: 8,
      sourceCode: "https://github.com/abilash0205/Easybank-Landing-Page",
      liveLink: "https://testingbank.netlify.app/",
      img: bank,
      name: "Easybank"
    },
    {
      id: 9,
      sourceCode: "https://github.com/abilash0205/GoDaddy-Clone",
      liveLink: "https://abilash0205.github.io/GoDaddy-Clone/",
      img: godaddy,
      name: "GoDaddy"
    },
    // {
    //   id: 10,
    //   sourceCode: "",
    //   liveLink: "",
    //   img: reactSmooth,
    //   name: "Parallax Scroll"
    // }
  ];

  return (
    <section
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">During my learning journey, I have created several impressive projects. Check them out here.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, img, sourceCode, liveLink, name }) => (
            <div 
                className="shadow-md shadow-gray-600 rounded-lg"
                key={id}>
              <img
                src={img}
                alt=''
                className="rounded-md duration-200 hover:scale-105"
              />
              <figcaption className='text-center pt-2'>{name}</figcaption>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105">
                  <a 
                    href={liveLink} target='_blank' rel='noreferrer'>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105">
                  <a href={sourceCode} target='_blank' rel='noreferrer'>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;