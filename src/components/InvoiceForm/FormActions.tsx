import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';

const FormActionsBox = styled.div`
    display: flex;
    justify-content: flex-end;
    column-gap: 10px;
    button { display: flex-item;  }
`;

const FormActions = () => {
    const { t } = useTranslation()
    const navigate = useNavigate();
    const handleCancelClick = () => {
        navigate('/');
      };

    return (
        <FormActionsBox>
            <Button variant="contained" color="warning" onClick={handleCancelClick}>
                {t('cancel')}
            </Button>
            <Button type="submit" variant="contained" color="primary">
                {t('save')}
            </Button>
        </FormActionsBox>
    );
}

export default FormActions;