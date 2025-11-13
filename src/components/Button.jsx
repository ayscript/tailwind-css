const Button = ({ children, size = "", variant = "primary" }) => {
  const variantsClass = {
    primary: "bg-green-500 text-white",
    secondary: "border-2 border-green-500 bg-white text-green-500",
    danger: "bg-red-500 text-white",
    success: "bg-green-200 border-2 border-green-500 text-green-500",
  };

  return (
    <button className={`px-2 py-1 ${variantsClass[variant]} rounded cursor-pointer font-bold`}>
      {children}
    </button>
  );
};

export default Button;
