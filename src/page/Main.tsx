import { Route, Routes } from 'react-router-dom';
import './Main.scss';
import HomePage from './HomePage';

const Main: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    );
};

export default Main;