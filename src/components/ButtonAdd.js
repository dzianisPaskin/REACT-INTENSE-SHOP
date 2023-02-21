export const ButtonAdd = ({
  className,
  text,
  onAdd,
  product,
  count,
  ...props
}) => {
 
  return(  
  <button onClick={() => onAdd(product, count)} className={className}>
    {text}
  </button>)

};
