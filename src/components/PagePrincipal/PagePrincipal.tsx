import { Outlet } from 'react-router-dom';
import BarreHaut from '../BarreHaut';

function PagePrincipal() {
  return (
    <>
      <BarreHaut />
      <Outlet />
    </>
  );
}

export default PagePrincipal;
