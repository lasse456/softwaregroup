interface ButtonProps {
  url: string;
  message: string;
}

const Button = (props: ButtonProps) => {
  return (
    <a href={props.url}>
      <button className="bg-main px-[25px] py-[10px] text-white font-[600] text-[12px] rounded-[100px]">
        {props.message}
      </button>
    </a>
  );
};

export default Button;
