import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

const LoadingBox = styled.div`
    z-index: 1000;
    margin: 0;
    position: absolute;
    left: 0; top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 0.5;
    padding-top: 100px;
    text-align: center;
    font-size: 100px;
`;

const Loading = () => {
    const { t } = useTranslation()

    return (
        <LoadingBox>
            {t('loading')} 
        </LoadingBox>
    );
};

  
export default Loading;