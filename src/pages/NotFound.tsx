import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col justify-center items-center bg-neutral-900 text-lime-400 gap-4 font-inter">
      <h2 className="text-8xl font-medium">404</h2>
      <Link to="/" className="underline text-lg">
        Back to Portfolio
      </Link>
    </div>
  );
}

export default NotFound;
