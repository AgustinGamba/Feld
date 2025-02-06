import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { NorthEast } from '@mui/icons-material';

import Pill from "../pill/pill.component"

import styles from './accordion.module.css';

function FeldAccordion({ service, position }) {
  return (
    < Accordion square className={styles.accordionContainer} >
      <AccordionSummary
        // TODO: Change arrow color
        expandIcon={<NorthEast />}
        aria-controls={`accordion-${position}-content`}
        id={`panel-${position}-header`}
      >
        <Pill position={position} />
        <Typography variant='h5' >
          {service.name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={styles.servicesDescriptionText}>
          {service.description}
        </Typography>
      </AccordionDetails>
    </Accordion >
  )
}

export default FeldAccordion;
