interface LinkProps {
  message: string;
  url: string;
}

const Link = (props: LinkProps) => {
  return (
    <a href={props.url} className="font-[500] text-main w-[140px]">
      <span className="hover:mr-[10px] border-main transition-all">
        {props.message}
      </span>{" "}
      &#8594;
    </a>
  );
};

export default Link;
