import LoginButton from "../components/auth/LoginButton";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primaryYellow">
      <h1 className="text-4xl font-bold text-primaryBlack mb-4">
        Welcome to Maily
      </h1>
      <LoginButton />
    </div>
  );
};

export default Home;
