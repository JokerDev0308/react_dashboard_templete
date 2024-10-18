import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';
import Stack from '@mui/material/Stack';
import DoubleRightOutlined from "@ant-design/icons/DoubleRightOutlined"
import DoubleLeftOutlined from "@ant-design/icons/DoubleLeftOutlined"

// project import
import Logo from './LogoMain';
import config from 'config';

import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ sx, to }) => {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <ButtonBase disableRipple component={Link} to={!to ? config.defaultPath : to} sx={sx}>
        <Logo />
      </ButtonBase>
      <Stack onClick={() => handlerDrawerOpen(!drawerOpen)} style={{ cursor: "pointer" }}>
        {drawerOpen && <DoubleLeftOutlined size={22} />}
        {!drawerOpen && <DoubleRightOutlined size={22} />}
      </Stack>
    </Stack>
  );
};

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string
};

export default LogoSection;
