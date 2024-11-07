import { useSelector } from 'react-redux';

const Puntaje = () => {
  const { score } = useSelector((state) => state.trivia);

  return (
    <div className="Puntaje">
      <h2>Score: 100</h2>
    </div>
  );
};

export default Puntaje;
