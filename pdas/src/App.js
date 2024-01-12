import ProfileCard from "./ProfileCard";
import AlexaImg from "./img/alexa.png";
import CortanaImg from "./img/cortana.png";
import SiriImg from "./img/siri.png";
import 'bulma/css/bulma.css';

function App(){
  return (
    <div>
      <section className = "hero is-primary">
        <div className = "hero-body">
          <p class = "title">Personal Digital Assistants</p>
        </div>
      </section >

      <div className = "container">
        <section className = "section">
          <div className = "columns">
            <div className = "column is-3">
              <ProfileCard 
                title = "Alexa" 
                handle = "alexa@99" 
                img = {AlexaImg}
                description = "Yadayada blah blah"
              />
            </div>

            <div className = "column is-3">
              <ProfileCard 
                title = "Cortana" 
                handle = "cort@213" 
                img = {CortanaImg}
                description = "Bad lol"
              />
            </div>

            <div className = "column is-3">
              <ProfileCard 
                title = "Siri" 
                handle = "siri@332" 
                img = {SiriImg}
                description = "Ded lol"
              />
            </div>
          </div>
        </section>
      </div>
      
      
      
    </div>
  );
}

export default App;