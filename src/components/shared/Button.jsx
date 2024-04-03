const Button = ({ center, text, onclick, inWhite }) => {
  return (
    <div className={center && 'flex justify-center'}>
      {inWhite ? (
        <button
          onClick={onclick}
          className="lg:px-5 px-3 py-2 my-3 text-primary rounded-md  font-medium   duration-300 bg-white hover:bg-gradient-to-r hover:from-primary hover:text-white hover:to-secondary"
        >
          {text}
        </button>
      ) : (
        <button
          onClick={onclick}
          className="lg:px-5 px-3 py-2 my-3 text-white rounded-md  font-medium   duration-300 bg-gradient-to-l from-primary to-secondary hover:bg-gradient-to-r hover:from-primary hover:to-secondary"
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default Button;
