
const Button = ({ text, onclick }) => {
  return (
    <button
      onClick={onclick}
      className="lg:px-5 px-3 py-2 my-3 text-white rounded-md  font-medium   duration-300 bg-gradient-to-l from-primary to-secondary hover:bg-gradient-to-r hover:from-primary hover:to-secondary"
    >
      {text}
    </button>
  );
};

export default Button;