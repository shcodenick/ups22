import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next';
import { TextField, Button } from '@mui/material';

const CompanyFormBox = styled.div`

`;

const CompanyForm = (props:any) => {
    const { t } = useTranslation()
    const [inputValue, setInputValue] = useState('');
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
                value={inputValue}
                name={props.prefix + item}
                />
            ))}
        </CompanyFormBox>
    );
};
  

export default CompanyForm;