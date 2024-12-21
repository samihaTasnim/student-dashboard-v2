// material-ui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import course1 from '../../images/course1.png'
import course2 from '../../images/course2.png'
import course3 from '../../images/course3.png'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project-imports
import EcommerceDataCard from 'components/cards/statistics/EcommerceDataCard';
import EcommerceDataChart from 'sections/widget/chart/EcommerceDataChart';

import RepeatCustomerRate from 'sections/widget/chart/RepeatCustomerRate';
import ProjectOverview from 'sections/widget/chart/ProjectOverview';
import ProjectRelease from 'sections/dashboard/default/ProjectRelease';
import AssignUsers from 'sections/widget/statistics/AssignUsers';

import Transactions from 'sections/widget/data/Transactions';
import TotalIncome from 'sections/widget/chart/TotalIncome';

// assets
import { ArrowDown, ArrowUp, Book, Calendar, CloudChange, Wallet3 } from 'iconsax-react';
import WelcomeBanner from 'sections/dashboard/default/WelcomeBanner';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export default function DashboardDefault() {
  const theme = useTheme();

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12}>
        <WelcomeBanner />
      </Grid>

      <Grid xs={12} sm={6} md={3} lg={4}>
      <Box sx={{ m: 2 }}>
          <img src={course1} alt="" className='rounded-lg' />
          <br />
          <p className='text-purple-600 text-sm mb-2'>Numeri Sattar Apar</p>
          <p>Math - Integration</p>
          <p className='text-gray-500 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla illo, dolores natus alias eligendi nisi eaque illum laborum consequatur!</p>
        </Box>
      </Grid>
      <Grid  xs={12} sm={6} lg={4}>
      <Box sx={{ m: 2 }}>
          <img src={course1} alt="" className='rounded-lg' />
          <br />
          <p className='text-purple-600 text-sm mb-2'>Numeri Sattar Apar</p>
          <p>Math - Integration</p>
          <p className='text-gray-500 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla illo, dolores natus alias eligendi nisi eaque illum laborum consequatur!</p>
        </Box>
      </Grid>
      <Grid  xs={12} sm={6} lg={4}>
      <Box sx={{ m: 2 }}>
          <img src={course1} alt="" className='rounded-lg' />
          <br />
          <p className='text-purple-600 text-sm mb-2'>Numeri Sattar Apar</p>
          <p>Math - Integration</p>
          <p className='text-gray-500 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla illo, dolores natus alias eligendi nisi eaque illum laborum consequatur!</p>
        </Box>
      </Grid>


    </Grid>
  );
}
