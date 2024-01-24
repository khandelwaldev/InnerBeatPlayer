export default function Greeting() {
    const getGreeting = () => {
        const currentHour = new Date().getHours();
    
        if (currentHour >= 5 && currentHour < 12) {
          return "Good Morning";
        } else if (currentHour >= 12 && currentHour < 18) {
          return "Good Afternoon";
        } else if (currentHour >= 18 && currentHour < 21) {
          return "Good Evening";
        } else {
          return "Good Night";
        }
      };
    
      const greeting = getGreeting();
    return (
        <div className="flex items-center gap-5">
            <div>
                <img src={`https://media.tenor.com/UmUHrSQYRrAAAAAi/izzy-gee-anime.gif`} width={55} alt="Greeting" />
            </div>
            <div className="flex flex-col justify-around">
                <p className="text-base text-gray-400">MUSIC TO GET YOU STARTED</p>
                <h1 className="text-2xl font-semibold">{greeting}</h1>
            </div>
        </div>
    )
}