import Image from 'next/image';
import headerStyles from './Header.module.scss';
import Link from 'next/link';

import { Play } from 'next/font/google'

const play = Play ({ 
  subsets: ["cyrillic"],
  weight: '400'
 });

const Header = () => {
  return ( 
    <main className={headerStyles.main}>
      <div className={headerStyles.background}></div>
      <div className={headerStyles.container}>
        <div className={`${headerStyles.contents} ${play.className}`}>
          <div className={headerStyles.imgBox}>
            <Image
              src='/Images/Img/LiterallyMe.png'
              width={590}
              height={695}
              alt='lm'
            />
            <p className={headerStyles.p}>Мой любимый художник</p>
          </div>
          <div className={headerStyles.titelBox}>
            <h2 className={headerStyles.h2}>Зинкин Артем Александрович</h2>
            <h3 className={headerStyles.h3}>Frontend Разработчик</h3>
            <p className={headerStyles.p}>Создаю адаптивные и интерактивные веб-приложения</p>
            <Link className={headerStyles.linkToAbout} href='@'>Обо мне</Link>
          </div>
        </div>
      </div>
    </main>
   );
}
 
export default Header;


