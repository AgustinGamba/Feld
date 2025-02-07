import { Typography, Accordion, AccordionSummary, AccordionDetails, Box, Container } from '@mui/material';
import { NorthEast } from '@mui/icons-material';

import Pill from "../pill/pill.component"

import styles from './accordion.module.css';

function FeldAccordion({ service, position }) {
  return (
    <Container>
      <Accordion square className={styles.accordionContainer} >
        <AccordionSummary
          aria-controls={`accordion-${position}-content`}
          id={`panel-${position}-header`}
          sx={{
            // TODO: Move to stylesheet
            '& .MuiAccordionSummary-content': {
              paddingBottom: "28px",
              borderBottom: "solid 1px",
              margin: "20px 10px"
            },
          }}
        >
          <Box display="flex" gap={1} alignItems="center">
            <Pill position={position} />
            <Typography variant='h5' >
              {service.name}
            </Typography>
            {/* TODO: Change arrow color */}
            <NorthEast />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.servicesDescriptionText}>
            {service.description}
          </Typography>
        </AccordionDetails>
      </Accordion >
    </Container>
  )
}

export default FeldAccordion;
