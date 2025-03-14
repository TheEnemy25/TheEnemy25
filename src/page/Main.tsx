import About from '../containers/about/About';
import Resume from '../containers/resume/Resume';
import Stack from '../containers/stack/Stack';

const Main: React.FC = () => {
    return (
        <>
            <About />
            <Resume />
            <Stack />
        </>
    );
};

export default Main;