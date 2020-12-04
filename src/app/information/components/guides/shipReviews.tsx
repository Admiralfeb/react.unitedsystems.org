import {
  Button,
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

import reviews from '../../ship-builds/assets/shipMap.json';
import { sortItems } from '../../ship-builds/functions/sort';

interface IShipReview {
  id: number;
  name: string;
  manufacturer: string;
  shipReview: string;
}

const useShipReviews = (): IShipReview[] => {
  const reviewList = reviews.map((review) => {
    const id = review.id;
    const name = review.name;
    const manufacturer = review.manufacturer;
    const shipReview = review.shipReview;
    return { id, name, manufacturer, shipReview };
  });
  return sortItems(reviewList, 'name');
};

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
    textAlign: 'center',
    margin: 'auto',
  },
});

export const ShipReviews = () => {
  const classes = useStyles();
  const shipReviews = useShipReviews();
  return (
    <div className={classes.table}>
      <Typography variant="h3">Ship Reviews</Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Ship</TableCell>
              <TableCell>Manufacture</TableCell>
              <TableCell>Review Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shipReviews.map((review) => (
              <TableRow key={review.id}>
                <TableCell>{review.name}</TableCell>
                <TableCell>{review.manufacturer}</TableCell>
                <TableCell>
                  <Button
                    href={review.shipReview}
                    target="_blank"
                    variant="contained"
                    color="secondary"
                  >
                    Pilot Review
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
