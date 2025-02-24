import './Main.scss';
import About from '../containers/about/About';
import Biography from '../containers/biography/Biography';

const Main: React.FC = () => {
    return (
        <>
            <About />
            <Biography />
        </>
    );
};

export default Main;