import { Container } from '@mui/material';

import ContactUs from '../contact-us/contactUs';
import Footer from '../footer/footer';
import Header from '../header/header';
import OurWork from '../our-work/ourWork';
import Services from '../services/services';

import styles from './app.module.css';

function App() {
  return (
    <Container className={styles.baseContainer} disableGutters>
      <Header />
      <OurWork />
      <Services />
      <ContactUs />
      <Footer />
    </Container>
  );
}

export default App;
