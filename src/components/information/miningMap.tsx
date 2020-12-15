import {
  Button,
  IconButton,
  Link,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { useMiningMaps } from 'hooks/information/useMiningMaps';
import React from 'react';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { copytoClipboard } from 'functions/copytoClipboard';
import { useLinks } from 'hooks/useLinks';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    width: '80%',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '95%',
    },
  },
}));

export const MiningMap = () => {
  const maps = useMiningMaps();
  const classes = useStyles();
  const { inaraCommodity } = useLinks();

  return (
    <div className={classes.root}>
      <Typography variant="h3">Mining Maps</Typography>
      <Typography variant="subtitle1">Compiled by Luisqa</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>System</TableCell>
              <TableCell>Body</TableCell>
              <TableCell>Material</TableCell>
              <TableCell>Mining Type</TableCell>
              <TableCell>Rez Overlap</TableCell>
              <TableCell>Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {maps.map((map) => (
              <TableRow key={map.link}>
                <TableCell>
                  {map.system}{' '}
                  <IconButton
                    size="small"
                    color="secondary"
                    onClick={() => copytoClipboard(map.system)}
                  >
                    <FileCopyIcon />
                  </IconButton>
                </TableCell>
                <TableCell>{map.body}</TableCell>
                <TableCell>
                  <Link
                    href={`${inaraCommodity}${map.materialInara}`}
                    target="_blank"
                  >
                    {map.material}
                  </Link>
                </TableCell>
                <TableCell>{map.miningType}</TableCell>
                <TableCell>{map.overlap}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    href={map.link}
                    target="_blank"
                  >
                    Open Map
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
