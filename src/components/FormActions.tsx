import React from 'react'
import styled from '@emotion/styled'
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

    return (
        <FormActionsBox>
            <Button variant="contained" color="warning">
                {t('cancel')}
            </Button>
            <Button type="submit" variant="contained" color="primary">
                {t('save')}
            </Button>
        </FormActionsBox>
    );
}

export default FormActions;