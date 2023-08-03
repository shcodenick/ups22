import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';

const PageNotFoundBox = styled.div`
    text-align: center;
    img { margin-top: 10px;}
`;

const PageNotFound = () => {
    const { t } = useTranslation()
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/');
      };

    return (
        <PageNotFoundBox>
            <img src={process.env.PUBLIC_URL + "/404.jpg"} />
            <Button onClick={handleBackClick} variant="contained" color="primary">{t('back')}</Button>
        </PageNotFoundBox>
    );
}

export default PageNotFound;
