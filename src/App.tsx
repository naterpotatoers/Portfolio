import grayscaleFull from './assets/robotics/robotics-team-pic-2022-grayscale.png'
import me from './assets/robotics/robotics-team-pic-2022-me.png'
import coders from './assets/robotics/robotics-team-pic-2022-coders.png'
import full from './assets/robotics/robotics-team-2022-full.png'
import sjsuLogo from './assets/logos/sjsu-robotics-logo.png'
import hdLogo from './assets/logos/hackdavis-logo.svg'
import pvLogo from './assets/logos/pv-logo.svg'
import cube3Logo from './assets/logos/cube3-logo.webp'
import whiteHouse from './assets/robotics/white-house.png'
function App() {
  return (
   <div>
    <h1>Nathanael Garza</h1>
    <p>Always building, always learning, always coding.</p>

    <div className='parallax'>
      <img src={pvLogo} className='primary-header hero' />
      <img src={whiteHouse} className='parallax__bg ' />
    </div>
    
    <h2>Volunteering</h2>
    <div className='col-2'>
    <img src={sjsuLogo} alt="SJSU Robotics Logo" className='logo' />
    <h3>SJSU Robotics</h3>
    </div>

    <div className='col-2'>
    <img src={me} alt="Only Me in Robotics Team" className=''/>
    <p className=''>During Covid I was the only person on the team who was able to program the robot. I spent a lot of time being mentored by a prior president of the club. A lot of the skills I learned from him greatly shaped me to be the programmer I am today and helped me to be able to teach others how to program the robot.</p>
    </div>


    <div className='col-2'>
    <img src={coders} alt="Only Coders in Robotics Team" className=''/>
    <p>Once school opened up, I took on as many recruits as possible to help with the programming of the robot. I interviewed and trained up over 20 people that first year and have probably trained up over 40 people in total since then.</p>
    </div>

    <div className='col-2'>
    <img src={full} alt="Full Robotics Team" className='' />
    <p>Some of the work I did for this club is still some of the most fondest things I've worked on to date. I made many friends and learned a ton not only about programming but also about leadership and how to work with others effectively - especially those in different engineering domains.</p>
    </div>
    
    <div className='col-2'>
      <div className='col-2'>
        <img src={cube3Logo} alt="Cube3 Logo" className='logo'/>
        <h3>Cube3</h3>
      </div>
    <p>I also helped build out the first cube satellite club at SJSU. This club was officially my first introduction to leadership as I found myself leading their software team. I helped launch the clubs first official website and worked closely with a lot of NASA engineers and USGS scientists.</p>
    </div>

    <h3>Davis Robotics</h3>
    <p>After moving to Davis, I got involved with their school's robotics team where I helped build a mini quadruped. The club was sort of flakey but I was able to help teach a few students a few things and made a few friends. This is where I started to feel like I was getting old lol</p>

    <h3>HackDavis</h3>
    <img src={hdLogo} alt="Hackdavis Logo" className='logo'/>
    <p>I helped mentor for 2 full days. I have a soft spot for hardware projects so I might've helped them more than the other teams. But it felt really badass being able to help so many people for widely different domains whether it be web, hardware, mobile, or gaming. This event was a big realization for me as I started to see how far I had come since transferring to SJSU in 2019. I had learned and grown so much over the short few years without realizing it.</p>

    <h3>Progressive Victory</h3>
    <img src={pvLogo} alt="Progressive Victory Logo" className='logo'/>
    <p>I've been secretly super interested in politics since I was like 7 or 8 years old probably. But I never really acted much on that front till I found out about this canvasing group. I wasted no time diving in to this organization and started implementing a lot of things I had learn from work and my various projects and clubs for their website. I helped them by emphasizing the importance of testing, documenting their APIs and with prioritizing tasks more effectively. I experimented a lot with a things I had learned from some of the technical books I had read like paired programming, TDD, road mapping, etc. I really honed in my skills in Figma, Cypress, and my unit testing</p>

    <h2>Hackathons</h2>
    <h3>Gone with the Fire</h3>
    <h3>Smart Flask</h3>
    <h3>Clever Pedal</h3>
    <h3>Mini Monster Truck</h3>
    <h3>Smart Clamp</h3>

    <h2>Physical Books</h2>
    <h3>Refactoring by Martin Fowler</h3>
    <h3>Test Driven Development by Example by Kent Beck</h3>
    <h3>Design Patterns by Gang of Four</h3>
    <h3>Domain Driven Design by Eric Evans</h3>
    
    <h2>Audio Books</h2>
    <h3>Clean Code by Robert Martin</h3>
    <h3>Clean Coder by Robert Martin</h3>
    <h3>Clean Architecture by Robert Martin</h3>
    <h3>Clean Agile by Robert Martin</h3>
    <h3>The Pragmatic Programmer by David Thomas, Andrew Hunt</h3>
    <h3>Staff Engineer by Will Larson</h3>
    <h3>Lead Without Blame by Diana Larsen, Tricia Broderick</h3>
    <h3>Retrospectives Antipatterns by Aino Vonge Corry</h3>
    <h3>Modern Software Engineering by Dave Farley</h3>
    <h3>Building Microservices by Sam Newman</h3>
    <h3>Fundamentals of Software Architecture by Mark Richards, Neal Ford</h3>
    <h3>User Story Mapping by Jeff Patton, Peter Economy</h3>
    <h3>Designing Data-Intensive Applications by Martin Kleppmann</h3>

    <h2>Projects</h2>
    <h3>Gin Rummy</h3>
    <h3>Cube3 Website</h3>
    <h3>SupaHotFood</h3>
    <h3>OnTime</h3>
    <h3>Laser Turret</h3>
    <h3>Smart Garden</h3>
    <h3>US Heatmap</h3>
    <h3>Fitlog</h3>
    <h3>Web Serial</h3>
    <h3>Custom Telemetry Interface</h3>
    <h3>Astraeus Dashboard</h3>
    <h3>Splot</h3>

    <h2>Work</h2>
    <h3>CDK Global</h3>
    <h3>Genpact</h3>
   </div>
  )
}

export default App
