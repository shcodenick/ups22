import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next';

const PigBox = styled.div`
    position: fixed;
    right: 10px;
    top: 10px;
    cursor: pointer;
  span { font-size: 60px; }
`;

const Pig = () => {
    const { t } = useTranslation()

    const sayOink = () => {
        alert(t('oink'))
    }

    return (
        <PigBox onClick={sayOink}>
            <span className="material-icons">savings</span>
        </PigBox>
    );
};
  
  
export default Pig;