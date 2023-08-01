import React from 'react'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next';
import { TextField, Button, Grid } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller } from 'react-hook-form';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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


    const schema = yup.object().shape({
        no: yup.string().min(1, t('tooshort')).max(2, t('toolong')).required(t('required')),
        created: yup.date().required(t('required')),
        valid: yup.date().required(t('required')).test({
            name: 'greater',
            message: t('tooearly'),
            test(value, ctx) {
                if (value < this.parent.created) {
                    return false
                }
                return true
            }
        }),
    });
    const { control, register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: any) => console.log(data);

    return (
        <InvoicesFormBox>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormActions />
                <h2>{t('newinvoice')}</h2>
                <Grid item container spacing={1} xs={6}>
                    <Grid item xs={8}>
                        <TextField
                        fullWidth
                        label={t('no')}
                        variant="standard"
                        inputRef={noInputRef} 
                        {...register("no", { required: true })}
                        />
                        <p>{errors.no?.message}</p>
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            control={control}
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
                        <p>{errors.created?.message}</p>
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            control={control}
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
                        <p>{errors.valid?.message}</p>
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