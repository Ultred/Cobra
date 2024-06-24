interface UiSpan {
  children?: string;
  color?: string;
}

const Span = ({ children, color }: UiSpan) => {
  return <span className={` ${color}`}>{children}</span>;
};

export default Span;
