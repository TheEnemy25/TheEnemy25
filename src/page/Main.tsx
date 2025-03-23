import About from '../containers/about/About';
import Project from '../containers/project/Project';
import Resume from '../containers/resume/Resume';
import Stack from '../containers/stack/Stack';

const Main: React.FC = () => {
    return (
        <>
            <About />
            <Resume />
            <Stack />
            <Project />
        </>
    );
};

export default Main;