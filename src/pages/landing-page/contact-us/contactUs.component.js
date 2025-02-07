import { Container } from '@mui/material';

import BlackBox from "./blackBox/blackBox.component"
import BlueBox from './blueBox/blueBox.component';
import PaddedContainer from '../../../components/padded-container/paddedContainer.component';

function ContactUs() {
  return (
    <PaddedContainer>
      <BlackBox />
      <BlueBox />
    </PaddedContainer>
  );
}

export default ContactUs;
