import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

const LoadingBox = styled.div`
    margin: 50px auto;
    width: 300px;
    text-align: center;
    span { font-size: 60px; }
`;

const Loading = () => {
    const { t } = useTranslation()

    return (
        <LoadingBox>
            <span className="material-icons">clock_loader_20</span><br/>
            <span>{t('loading')}</span>
        </LoadingBox>
    );
};

  
export default Loading;