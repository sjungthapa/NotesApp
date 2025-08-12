import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToPersonalNotes = () => {
    navigate('/personalNotes');
  };

  const goToSchoolNotes = () => {
    navigate('/schoolNotes');
  };

  const goToWorkNotes = () => {
    navigate('/workNotes');
  };

  const goToProfile = () => {
    navigate('/profile');
  }

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Notes App!</p>

      <button onClick={goToPersonalNotes}>Personal Notes</button>
      <button onClick={goToSchoolNotes}>School Notes</button>
      <button onClick={goToWorkNotes}>Work Notes</button>
      <button onClick={goToProfile}>Profile</button>
    </div>
  );
};

export default Home;