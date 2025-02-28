import { Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import { NorthEast } from '@mui/icons-material';

import Pill from "../pill/pill.component"
import { useBreakpoint } from "../../../../components/breakpoint-provider/breakpointProvider.component";

import styles from './accordion.module.css';

function FeldAccordion({ service, position, onClick, expanded, onMouseEnter, onMouseLeave }) {
  const { isSmallerThanOrEqual } = useBreakpoint();

  return (
    <Box onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Accordion
        square
        className={styles.accordionContainer}
        onClick={onClick}
        expanded={expanded}
        sx={{
          maxWidth: isSmallerThanOrEqual("sm") ? "100%" : "328px"
        }}
      >
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
            "& .MuiAccordionSummary-content.Mui-expanded": {
              margin: "20px 10px"
            },
          }}
        >
          <Box display="flex" gap={1} alignItems="center">
            <Pill position={position} />
            <Typography variant='body1' >
              {service.name}
            </Typography>
            <NorthEast
              sx={{
                // TODO: Move to stylesheet
                transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease-in-out"
              }}
            />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.accordionDescriptionText}>
            {service.description}
          </Typography>
        </AccordionDetails>
      </Accordion >
    </Box >
  )
}

export default FeldAccordion;
