import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { TextField, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const InvoiceItemBox = styled.div`

`;

const InvoiceItem = () => {
    const { t } = useTranslation();

    return (
        <InvoiceItemBox>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        label={t('name')}
                        variant="standard"
                        value=""
                    />
                </Grid>
                <Grid item xs={1}>
                    <TextField
                        fullWidth
                        label={t('amount')}
                        variant="standard"
                        value=""
                    />
                </Grid>
                <Grid item xs={1}>
                    <TextField
                        fullWidth
                        label={t('unit')}
                        variant="standard"
                        value=""
                    />
                </Grid>
                <Grid item xs={1}>
                    <TextField
                        fullWidth
                        label={t('tax')}
                        variant="standard"
                        value=""
                    />
                </Grid>
                <Grid item xs={1}>
                    <TextField
                        fullWidth
                        label={t('price')}
                        variant="standard"
                        value=""
                    />
                </Grid>
                <Grid item xs={1}>
                    <IconButton aria-label="delete" sx={{marginTop: '10px'}}>
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </InvoiceItemBox>
    );
};
  

export default InvoiceItem;