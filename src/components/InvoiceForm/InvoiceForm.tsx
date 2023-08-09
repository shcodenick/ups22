import React from 'react'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next';
import { TextField, Grid } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller } from 'react-hook-form';
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import FormActions from './FormActions';
import CompanyForm from './CompanyForm';
import InvoiceItems from './InvoiceItems';
import schema from './validation';


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

    const methods = useForm({
        resolver: yupResolver(schema),
        defaultValues: {items:[{}]}
    });


    const onSubmit = (data: any) => console.log(data);

    return (
        <InvoicesFormBox>
            <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <h2>{t('newinvoice')}</h2>
                <Grid item container spacing={1} xs={6}>
                    <Grid item xs={8}>
                        <TextField
                        fullWidth
                        label={t('no')}
                        variant="standard"
                        inputRef={noInputRef} 
                        {...methods.register("no", { required: true })}
                        />
                        <p className="error">{t(methods.formState.errors.no?.message || "")}</p>
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            control={methods.control}
                            name="created"
                            render={({
                                field: { onChange, onBlur, value, name, ref },
                                fieldState: { invalid, isTouched, isDirty, error },
                                formState,
                            }) => (
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label={t('created')} 
                                    onChange={onChange} // send value to hook form
                                    inputRef={ref}
                                />
                                </LocalizationProvider>
                            )}
                        />
                        <p className="error">{t(methods.formState.errors.created?.message || "")}</p>
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            control={methods.control}
                            name="valid"
                            render={({
                                field: { onChange, onBlur, value, name, ref },
                                fieldState: { invalid, isTouched, isDirty, error },
                                formState,
                            }) => (
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker 
                                    label={t('valid')}
                                    onChange={onChange} // send value to hook form
                                    inputRef={ref}
                                />
                                </LocalizationProvider>
                            )}
                        />
                        <p className="error">{t(methods.formState.errors.valid?.message || "")}</p>
                    </Grid>
                </Grid>
                
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <CompanyForm title={t('recipient')} prefix="recipient_" />
                    </Grid>
                    <Grid item xs={6}>
                        <CompanyForm title={t('sender')} prefix="sender_" />
                    </Grid>
                </Grid>

                <InvoiceItems />
                
                <FormActions />
            </form>
            </FormProvider>
        </InvoicesFormBox>
    );
};
  

export default InvoiceForm;