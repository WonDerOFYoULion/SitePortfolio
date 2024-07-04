import aboutStyles from "./About.module.scss";

import { Play } from 'next/font/google';
const play = Play({
  subsets: ["cyrillic"],
  weight: '400'
});

const About = () => {
  return ( 
    <main className={`${aboutStyles.main} ${play.className}`}>
      <div className={aboutStyles.container}>
        <div className={aboutStyles.mainFlex}>

          <div>
            <h2 className={aboutStyles.h2}>Личные качества и другая информация </h2>
            <h3 className={aboutStyles.h3}>Необходимый минимум и немного личного </h3>
            <div>

            </div>
            <p></p>
          </div>

          <div>
            <div></div>
            <p></p>
            <div></div>
          </div>

        </div>
      </div>
    </main>
   );
}
 
export default About;