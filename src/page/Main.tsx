import { Route, Routes } from 'react-router-dom';
import './Main.scss';
import About from '../containers/about/About';

const Main: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<About />} />

            </Routes>
        </>
    );
};

export default Main;