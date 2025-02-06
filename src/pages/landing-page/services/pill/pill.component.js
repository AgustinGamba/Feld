import { Typography, Box } from '@mui/material';

import styles from './pill.module.css';

const getFormatedNumber = number => ('0' + number).slice(-2)

function Pill({ position }) {
  return (
    <Box className={styles.pillBox}>
      <Typography variant='body1' component="span"> {
        getFormatedNumber(position)
      }/&nbsp;&nbsp;&nbsp;</Typography>
    </Box>
  )
}

export default Pill;
