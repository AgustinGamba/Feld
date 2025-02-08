import { Container } from '@mui/material';

import BlackBox from "./blackBox/blackBox.component"
import BlueBox from './blueBox/blueBox.component';

function ContactUs() {
  return (
    <Container>
      <BlackBox />
      <BlueBox />
    </Container>
  );
}

export default ContactUs;
