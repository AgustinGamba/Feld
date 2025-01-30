import { Container } from '@mui/material';

import ContactUs from './pages/landing-page/contact-us/contactUs.component';
import Footer from './pages/landing-page/footer/footer.component';
import Header from './pages/landing-page/header/header.component';
import OurWork from './pages/landing-page/our-work/ourWork.component';
import Services from './pages/landing-page/services/services.component';

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
