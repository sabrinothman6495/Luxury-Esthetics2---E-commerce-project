import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold">Welcome to our Esthetics Spa</h1>
      <p className="text-gray-600">Experience the best spa treatments.</p>
      <Link to="/services" className="bg-blue-500 text-white p-2 mt-4 inline-block rounded">
        View Services
      </Link>
    </div>
  );
}

export default Home;
