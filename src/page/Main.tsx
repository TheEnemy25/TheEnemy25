import About from '../containers/about/About';
import Project from '../containers/project/Project';
import ProfessionalProfile from '../containers/professionalProfile/ProfessionalProfile';
import Stack from '../containers/stack/Stack';

const Main: React.FC = () => {
    return (
        <>
            <About />
            <ProfessionalProfile />
            <Stack />
            <Project />
        </>
    );
};

export default Main;