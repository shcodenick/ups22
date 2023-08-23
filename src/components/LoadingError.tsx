import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

const LoadingBox = styled.div`
    margin: 50px auto;
    width: 300px;
    text-align: center;
    span { font-size: 60px; }
`;

const LoadingError = () => {
    const { t } = useTranslation()

    return (
        <LoadingBox>
            <span className="material-icons">sick</span><br/>
            <span>{t('loading_error')}</span>
        </LoadingBox>
    );
};

  
export default LoadingError;