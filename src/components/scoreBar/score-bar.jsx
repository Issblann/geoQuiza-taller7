import { useSelector } from 'react-redux';
import '../../styles/scoreBar/styles.css';
const ScoreBar = () => {
  const { score } = useSelector((state) => state.trivia);

  return (
    <p className="text-gray-800 font-bold score w-full text-2xl">
      PUNTOS {score}/261
    </p>
  );
};

export default ScoreBar;
