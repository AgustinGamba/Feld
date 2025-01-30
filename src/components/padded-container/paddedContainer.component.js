import { Container } from '@mui/material';

import styles from './paddedContainer.module.css';

function PaddedContainer({ children }) {
    return (
        <Container className={styles.paddedContainer}>
            {children}
        </Container>
    );
}

export default PaddedContainer;
