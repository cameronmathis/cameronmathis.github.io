import AUMBBTracker from '../images/projects/AUMBBTracker.jpg';
import ContactManagementSystem from '../images/projects/ContactManagementSystem.jpg';
import ExtremeStreetCrosser from '../images/projects/ExtremeStreetCrosser.jpg';
import QRCodeGenerator from '../images/projects/QRCodeGenerator.jpg';
import RockPaperScissors from '../images/projects/RockPaperScissors.jpg';
import SudokuSolver from '../images/projects/SudokuSolver.jpg';
import SuperChat from '../images/projects/SuperChat.jpg';
import Tacio from '../images/projects/tacio.jpg';

// images that are 4:3 work best

interface ProjectConstant {
    link: string;
    image: string;
}

const AUMBB_TRACKER: ProjectConstant = {
    link: 'https://twitter.com/AUMBBTracker',
    image: AUMBBTracker,
};

const CONTACT_MANAGEMENT_SYSTEM: ProjectConstant = {
    link: 'https://github.com/cameronmathis/ContactManagementSystem',
    image: ContactManagementSystem,
};

const EXTREME_STREET_CROSSER: ProjectConstant = {
    link: 'https://github.com/cameronmathis/ExtremeStreetCrosser',
    image: ExtremeStreetCrosser,
};

const ROCK_PAPER_SCISSORS: ProjectConstant = {
    link: 'https://cameronmathis.github.io/RockPaperScissors',
    image: RockPaperScissors,
};

const SUDOKU_SOLVER: ProjectConstant = {
    link: 'https://github.com/cameronmathis/SudokuSolver',
    image: SudokuSolver,
};

const SUPER_CHAT: ProjectConstant = {
    link: 'https://github.com/cameronmathis/SuperChat',
    image: SuperChat,
};

const QR_CODE_GENERATOR: ProjectConstant = {
    link: 'https://github.com/cameronmathis/QRCodeGenerator',
    image: QRCodeGenerator,
};

const TAC_IO: ProjectConstant = {
    link: 'https://cameronmathis.github.io/tac.io',
    image: Tacio,
};

// create project array
export const PROJECTS: ProjectConstant[] = [
    TAC_IO,
    ROCK_PAPER_SCISSORS,
    AUMBB_TRACKER,
    SUPER_CHAT,
    CONTACT_MANAGEMENT_SYSTEM,
    EXTREME_STREET_CROSSER,
];
