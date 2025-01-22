import { Container } from '@mui/material';

import ContactUs from '../contact-us/contactUs.component';
import Footer from '../footer/footer.component';
import Header from '../header/header.component';
import OurWork from '../our-work/ourWork.component';
import Services from '../services/services.component';

function App() {
  return (
    <Container>
      <Header />
      <OurWork />
      <Services />
      <ContactUs />
      <Footer />
    </Container>
  );
}

export default App;
