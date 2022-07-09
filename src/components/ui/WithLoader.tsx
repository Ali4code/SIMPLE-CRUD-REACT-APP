import { SpinnerCircular } from 'spinners-react';
import styled from '@emotion/styled';

export default function WithLoader({ isLoading, children }: { isLoading: boolean; children: any }) {
   
    return (
        <div style={{ position: 'relative' }}>
            {isLoading && (
                <StyledSpinner
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: '100',
                        transform: 'translate(-50%, -50%)',
                        color: "primary.main",
                    }}
                />
            )}
            {children}
        </div>
    );
}
export const StyledSpinner = styled(SpinnerCircular)<{ css?: any }>(({ theme, css }) => ({
    ...(css && css),
    color: "primary.main",
    secondaryColor: '#F00'
}));
