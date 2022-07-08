import React, {ReactElement, FC} from "react";
import {Box, Typography} from "@mui/material";

const ItemDetails: FC<any> = (): ReactElement => {
    return (
        <Box height="100vh" display="flex" flexDirection="column">
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography variant="h3">ItemDetails</Typography>
        </Box>
        </Box>
    );
};

export default ItemDetails;