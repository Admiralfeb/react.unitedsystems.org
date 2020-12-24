import { makeStyles } from '@material-ui/core';

export const useQueryStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    display: 'grid',
    rowGap: theme.spacing(1),
    // width: '99%',
    gridTemplateAreas: `
    'specializations'
    'engineering'
    'ship'
    'other'
    'buttons'`,
    textAlign: 'center',
    [theme.breakpoints.up('lg')]: {
      gridTemplateAreas: `
        'specializations engineering'
        'ship other'
        'buttons buttons'`,
      gridTemplateRows: '1fr 1fr 0.1fr',
      gridGap: theme.spacing(1),
    },
  },
  bottomButtons: {
    textAlign: 'center',
    gridArea: 'buttons',
    '& button': {
      margin: '5px',
    },
  },
  querySection: {
    width: '100%',
    minHeight: '14rem',
    border: '5px solid gray',
    padding: '0.5rem',
    borderRadius: '1rem',
    margin: 'auto',
    textAlign: 'center',
    display: 'grid',
    gridTemplate: '0.6fr 0.6fr 3fr / 1fr',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('lg')]: {
      width: '100%',
    },
  },
  querySectionheader: {
    margin: '0',
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
  toggleButtonCustom: {
    '& svg': {
      fontSize: '2rem',
    },
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
    flexWrap: 'wrap',
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
    '& svg': {
      fontSize: '2rem',
    },
  },
  QueryOtherBeginnerButtons: {
    borderWidth: '3px',
    borderStyle: 'solid',
    borderColor: theme.palette.secondary.main,
    borderRadius: '5px',
  },
}));
