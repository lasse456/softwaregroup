interface LinkProps {
  message: string;
  url: string;
}

const Link = (props: LinkProps) => {
  return (
    <a href={props.url} className="font-[600] text-[12px] py-[10px]">
      {props.message}
    </a>
  );
};

export default Link;
