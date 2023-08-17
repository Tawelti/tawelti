import PropTypes from 'prop-types';

// @mui

import { Card} from '@mui/material';
// components


// ----------------------------------------------------------------------




// ----------------------------------------------------------------------

AppCurrentSubject.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function AppCurrentSubject({ ...other }) {


  return (
    <Card {...other}/>
  );
}
