interface LinkProps {
  message: string;
}

const Link = (props: LinkProps) => {
  return <a className="font-[600] text-[12px] py-[10px]">{props.message}</a>;
};

export default Link;
