import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="my-12 px-4 py-12">
      <div className="flex flex-col justify-center items-center gap-5 ">
        <h2 className="md:text-3xl text-2xl text-red font-bold text-center text-primary">
          Sorry, page not found!
        </h2>
        <h2>
          <Link to="/">
            <br />
            <span className="md:text-3xl text-2xl text-red font-bold text-center flex underline justify-center text-green-700">
              Go Home
            </span>
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Error;
