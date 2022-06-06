import * as React from 'react';

const AboutPage = () => {
  return (
    <section
      style={{
        width: '50%',
        margin: '0 auto',
      }}
    >
      <header>
        <h1>Om uppgiften</h1>
      </header>
      <section>
        <p>
          Du skall bygga styrning och visualisering av ett hissystem. Systemet
          skall visualisera och styra vilken hiss som skall svara på ett anrop
          så effektivt som möjligt. Systemet skall bestå av en frontend för
          visualisering av hissarnas läge samt ett backend för att anropa en
          hiss samt efterfråga hissarnas läge.
        </p>
        <h3>Generella krav</h3>
        <ul>
          <li>5 hissar</li>
          <li>20 våningar</li>
          <li>
            Det tar 2 sekunder för en hiss att färdas 1 våning oavsett riktning
          </li>
          <li>
            Det skall gå att begära en hiss till en specifik våning i
            gränssnittet, systemet skall avgöra vilken hiss som är lämpligast
          </li>
          <li>
            Funktionalitet för att välja en hissdestination behöver <b>inte</b>{' '}
            implementeras
          </li>
          <li>
            Funktionalitet för att persistera hissarna läge mellan omstarter av
            applikationen behöver <b>inte</b> implementeras
          </li>
        </ul>
      </section>
      <footer>
        <p>
          Kontakt: <a href="mailto:tech@stabelo.se">tech@stabelo.se</a>
        </p>
      </footer>
    </section>
  );
};

export default AboutPage;
