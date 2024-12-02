interface IButton {
  title: string;
  onClick: () => void;
}

const Button = ({ title, onClick }: IButton) => {
  return (
    <button data-testid="button" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
