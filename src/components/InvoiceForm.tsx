import React from 'react'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next';
import { TextField, Button, Grid } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller } from 'react-hook-form';
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import FormActions from './FormActions';
import CompanyForm from './CompanyForm';
import InvoiceItems from './InvoiceItems';


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


    let email_regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    let bank_account_regex = new RegExp(/^[0-9]{9,18}$/);
    let amount_regex = new RegExp(/^[0-9]{1,10}\.[0-9]{2}$/);

    const company_validation = {
        'company_name': yup.string().required(t('required')).min(3, t('tooshort')).max(20, t('toolong')),
        'city': yup.string().required(t('required')).min(3, t('tooshort')).max(30, t('toolong')),
        'street': yup.string().required(t('required')).min(3, t('tooshort')).max(20, t('toolong')),
        'post_code': yup.string().required(t('required')).test({
            name: 'is_valid_postcode',
            message: t('invalid_post_code'),
            test(value, ctx) {
                return /^\d{2}-\d{3}$/.test(value)
            }
        }),
        'vat': yup.string().required(t('required')).test({
            name: 'is_valid_vat',
            message: t('invalid_vat'),
            test(value, ctx) {
                return /^\d{3}-\d{3}-\d{2}-\d{2}$/.test(value)
            }
        }),
        'phone': yup.string().required(t('required')).min(9, t('tooshort')).max(15, t('toolong')),
        'email': yup.string().required(t('required')).test({
            name: 'is_valid_email',
            message: t('invalid_format'),
            test(value, ctx) {
                return email_regex.test(value)
            }
        }),
        'bank_account': yup.string().required(t('required')).test({
            name: 'is_valid_bank_account',
            message: t('invalid_format'),
            test(value, ctx) {
                return bank_account_regex.test(value)
            }
        }),
    }
    
    const itemSchema = yup.object().shape({
        name: yup.string().required('required').min(3, 'tooshort').max(30, 'toolong'),
        amount: yup.string().required('required').test({
            name: 'is_valid_amount',
            message: 'invalid_amount',
            test(value, ctx) {
                return amount_regex.test(value)
            }
        }),
        unit: yup.string().required('required').min(1, 'tooshort').max(10, 'toolong'),
        tax: yup.string().required('required').oneOf(['0%', '8%', '12%', '19%', '21%'], 'invalid_tax'),
        price: yup.string().required('required').test({
            name: 'is_valid_price',
            message: 'invalid_amount',
            test(value, ctx) {
                return amount_regex.test(value)
            }
        }),
      });
    const ArrayOfItemsSchema = yup.array().of(itemSchema);

    const schema = yup.object().shape({
        no: yup.string().required(t('required')).min(1, t('tooshort')).max(2, t('toolong')),
        created: yup.date().required(t('required')),
        valid: yup.date().required(t('required')).test({
            name: 'valid_gt_created',
            message: t('tooearly'),
            test(value, ctx) {
                if (value < this.parent.created) {
                    return false
                }
                return true
            }
        }),
        // companies' forms
        recipient_company_name: company_validation['company_name'],
        sender_company_name: company_validation['company_name'],
        recipient_city: company_validation['city'],
        sender_city: company_validation['city'],
        recipient_street: company_validation['street'],
        sender_street: company_validation['street'],
        recipient_post_code: company_validation['post_code'],
        sender_post_code: company_validation['post_code'],
        recipient_vat: company_validation['vat'],
        sender_vat: company_validation['vat'],
        recipient_phone: company_validation['phone'],
        sender_phone: company_validation['phone'],
        recipient_email: company_validation['email'],
        sender_email: company_validation['email'],
        recipient_bank_account: company_validation['bank_account'],
        sender_bank_account: company_validation['bank_account'],
        // invoice items fields
        items: ArrayOfItemsSchema
    });

    const methods = useForm({
        resolver: yupResolver(schema)
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
                        <p className="error">{methods.formState.errors.no?.message}</p>
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
                        <p className="error">{methods.formState.errors.created?.message}</p>
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
                        <p className="error">{methods.formState.errors.valid?.message}</p>
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