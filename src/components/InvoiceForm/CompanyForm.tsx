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
    const { register, formState } = useFormContext();
    const fields = ['company_name', 'city', 'street', 'post_code', 'vat', 'phone', 'email', 'bank_account']

    return (
        <CompanyFormBox>
            <h2>{props.title}</h2>
            {fields.map((item, index) => (
                <div key={index}>
                    <TextField
                    key={index}
                    fullWidth
                    label={t(item)}
                    variant="standard"
                    InputLabelProps={{ shrink: true }}
                    {...register(props.prefix + item)}
                    name={props.prefix + item}
                    />
                    <p className="error">{t(formState.errors?.[props.prefix + item]?.message?.toString() || "")}</p>
                </div>
            ))}
        </CompanyFormBox>
    );
};


export default CompanyForm;