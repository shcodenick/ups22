import React from 'react'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next';
import { TextField } from '@mui/material';
import { useFormContext } from "react-hook-form";

const CompanyFormBox = styled.div`
    background-color: #fff; padding: 5px;
`;

const CompanyForm = (props:any) => {
    const { t } = useTranslation()
    const { register } = useFormContext();
    const fields = ['company_name', 'city', 'street', 'postcode', 'vat', 'phone', 'email', 'bank_account']

    return (
        <CompanyFormBox>
            <h2>{props.title}</h2>
            {fields.map((item, index) => (
                <TextField
                key={index}
                fullWidth
                label={t(item)}
                variant="standard"
                {...register(props.prefix + item)}
                name={props.prefix + item}
                />
            ))}
        </CompanyFormBox>
    );
};


export default CompanyForm;