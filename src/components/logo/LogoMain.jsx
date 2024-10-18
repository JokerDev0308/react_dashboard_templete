// material-ui
import { useTheme } from '@mui/material/styles';

// import logoDark from 'assets/images/logo-dark.svg';
import logo from 'assets/images/icons/logo.svg';
import logo_1 from 'assets/images/icons/logo_1.svg';
import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';

const Logo = () => {
  const theme = useTheme();
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  return (
    <>
      {drawerOpen && <img src={logo} alt="Mantis" width={144} height={40} />}
      {!drawerOpen && <img src={logo_1} alt="Mantis" width={48} height={40} />}
    </>
  );
};

export default Logo;
