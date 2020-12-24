import { useLoginAnon } from 'hooks/useLoginAnon';
import { useSnackbar } from 'notistack';
import { NavMobile } from './nav-Mobile';
import { NavFull } from './nav-Full';
import { navItems } from 'data/navItems';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { ILocation } from 'models/location';
import { useMediaQuery, useTheme } from '@material-ui/core';

export const NavbarComponent = () => {
  const { enqueueSnackbar } = useSnackbar();
  let location = useLocation<ILocation>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  try {
    useLoginAnon();
  } catch (e) {
    enqueueSnackbar('Unable to login for database', { variant: 'error' });
  }

  let title = useMemo(() => {
    return navItems.find((x) => x.to === location.pathname)?.text;
  }, [location]);

  return (
    <>
      {isMobile ? (
        <NavMobile title={title} navItems={navItems} />
      ) : (
        <NavFull navItems={navItems} />
      )}
    </>
  );
};
