import React from 'react'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next';
import { TextField, Button, Grid } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import FormActions from './FormActions';
import CompanyForm from './CompanyForm';
import InvoiceItem from './InvoiceItem';

const InvoicesFormBox = styled.div`
    margin: 20px auto;
    width: 800px;
`;

const InvoiceForm = () => {
    const { t } = useTranslation()

    const noInputRef = React.useRef<HTMLInputElement>(null);
    React.useEffect(()=>{
        if (noInputRef.current) {
            noInputRef.current.focus();
          }
      }, []);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log('submit');
      };

    return (
        <InvoicesFormBox>
            <form onSubmit={handleSubmit}>
                <FormActions />
                <h2>{t('newinvoice')}</h2>
                <Grid item container spacing={1} xs={6}>
                    <Grid item xs={8}>
                        <TextField
                        fullWidth
                        label={t('no')}
                        variant="standard"
                        value=""
                        inputRef={noInputRef} 
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label={t('created')} />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label={t('valid')} />
                        </LocalizationProvider>
                    </Grid>
                </Grid>
                
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <h2>{t('recipient')}</h2>
                        <CompanyForm />
                    </Grid>
                    <Grid item xs={6}>
                        <h2>{t('sender')}</h2>
                        <CompanyForm />
                    </Grid>
                </Grid>
                <h2>{t('items')}</h2>
                <InvoiceItem />
                <InvoiceItem />
                <br></br>
                <Button variant="contained" color="primary">
                    {t('add_item')}
                </Button>
            </form>
        </InvoicesFormBox>
    );
};
  

export default InvoiceForm;