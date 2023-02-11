import Featured from "../../Components/Featured/Featured";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MailList from "../../Components/MailList/MailList";
import Navbar from "../../Components/Navbar/Navbar";
import PropertyList from "../../Components/PropertyList/PropertyList";
import PropertyList2 from "../../Components/PropertyList2/PropertyList2";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className={styles.homeContiner}>
        <Featured />
        <h1 className={styles.homeTitle}>Browse by property type</h1>
        <PropertyList />
        <h1 className={styles.homeTitle}>Homes guests love</h1>
        <PropertyList2 />
        <MailList/>
      <Footer/>
      </div>
    </div>
  );
};

export default Home;
