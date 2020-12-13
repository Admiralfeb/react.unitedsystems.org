import { makeStyles } from '@material-ui/core';

export const useQueryStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    rowGap: '1px',
    margin: 'auto',
    width: '95%',
    gridTemplateAreas: `
    'specializations'
    'engineering'
    'ship'
    'other'
    'buttons'`,
    textAlign: 'center',
    [theme.breakpoints.up('lg')]: {
      gridTemplateAreas: `
        'specializations    engineering'
        'ship   other'
        'buttons    buttons'`,
      gridTemplateRows: '1fr 1fr 0.1fr',
      //   gridTemplateColumns: '1fr 0.5fr',
      rowGap: '5px',
      columnGap: '5px',
    },
  },
  bottomButtons: {
    textAlign: 'center',
    gridArea: 'buttons',
  },
  querySection: {
    width: '90%',
    border: '5px solid gray',
    padding: '5px',
    borderRadius: '15px',
    margin: '5px',
    textAlign: 'center',
    [theme.breakpoints.up('lg')]: {
      width: '98%',
    },
  },
  querySectionheader: {
    marginTop: '5px',
    textAlign: 'center',
  },
  shipQueries: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  shipTypeQuery: {
    [theme.breakpoints.up('lg')]: {
      minWidth: '200px',
      margin: '5px',
      flex: '1 0',
    },
  },
  shipSizeQuery: {
    margin: 'auto',
  },
  engineeringQuery: {
    gridArea: 'engineering',
  },
  queryExplanationText: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  querySpecialtyButtons: {
    display: 'grid',
    gridTemplate: '1fr 1fr 1fr 1fr 1fr / 1fr 1fr',
    '& button': {
      margin: '3px',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplate: '1fr 1fr / 1fr 1fr 1fr 1fr 1fr',
    },
  },
  queryOtherButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  queryOtherButtonGrids: {
    display: 'grid',
    gridTemplateRows: '0.5fr 1fr',
    margin: '0 10px',
    '& div': {
      margin: 'auto',
      padding: '5px',
    },
    '& label': {
      height: '25px',
      padding: '5px',
    },
  },
  QueryOtherBeginnerButtons: {
    borderWidth: '3px',
    borderStyle: 'solid',
    borderColor: theme.palette.secondary.main,
    borderRadius: '5px',
  },
}));
