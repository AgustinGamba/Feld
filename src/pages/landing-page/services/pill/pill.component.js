import { Box, Typography } from '@mui/material';

import styles from './pill.module.css';

const getFormatedNumber = number => ('0' + number).slice(-2)

function Pill({ position }) {
  return (
    <Box display="flex" className={styles.pillBox}>
      <Typography variant='body1' component="span" className={styles.pillText}> {
        getFormatedNumber(position)
      }/&nbsp;&nbsp;&nbsp;</Typography>
    </Box>
  )
}

export default Pill;
