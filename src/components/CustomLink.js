import { Link } from 'react-router-dom';

export const CustomLink = ({ to, children, ...props }) => {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
};
