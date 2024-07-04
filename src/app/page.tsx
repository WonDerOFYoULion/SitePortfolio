import Header from "./Components/Header/Header"
import About from "./Components/About/About"
import homeStyle from './home.module.scss'

export default function Home() {
  return (
    <main className={homeStyle.main}>
      <Header></Header>
      {/* <About></About> */}
    </main>
  );
}
