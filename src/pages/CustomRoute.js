import { useParams } from 'react-router-dom';

export const CustomRoute = ({ isValid, validElement, invalidElement }) => {
  const params = useParams();
  if (isValid(params)) {
    return validElement;
  } else {
    return invalidElement;
  }
};
