import { Container } from '@mui/material';
import clsx from 'clsx';

import styles from './paddedContainer.module.css';

function PaddedContainer({ children, className }) {
    return (
        <Container className={clsx(styles.paddedContainer, className)}>
            {children}
        </Container>
    );
}

export default PaddedContainer;
