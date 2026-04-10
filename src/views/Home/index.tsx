import { Box, Stack, Typography } from '@mui/material';
import Page from '@/components/Page';
import Grid from "@mui/material/Grid2"
import bg_pet from "@/assets/images/users/bg_pet.png";
import bg_wooden from "@/assets/images/users/bg_wooden.png";
import bg_ks from "@/assets/images/users/bg_ks.png";
import bg_work from "@/assets/images/users/bg_work.png";
import bg_job from "@/assets/images/users/bg_job.png";
import bg_mintz from "@/assets/images/users/mintz.png";
import CommonImage from '@/components/Image/index';


const DATA_WEB = [
  {
    id: 1,
    image: bg_pet,
    url: 'https://www.flymm.vn/petz',
    label: 'WEBSITE PETZ'
  },
  {
    id: 2,
    image: bg_wooden,
    url: 'https://www.flymm.vn/moc',
    label: 'WEBSITE XƯỞNG GỖ'
  },
  {
    id: 3,
    image: bg_ks,
    // url: '/pet',
    label: 'WEBSITE KHÁCH SẠN'
  },
  {
    id: 4,
    image: bg_work,
    // url: '/pet',
    label: 'WEBSITE D.WORK'
  },
  {
    id: 5,
    image: bg_job,
    // url: '/pet',
    label: 'WEBSITE MINTZ JOB'
  },
  {
    id: 6,
    image: bg_mintz,
    url: 'https://www.funi.vn',
    label: 'WEBSITE MINTZ FUNI'
  }
]
const Home = () => {
  return (
    <Page title='Mintz DG'>
      <Box sx={{ height: { xs: 'auto', md: '100%'}, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} bgcolor='#FFFAE4'>
        <Typography mt={{ xs: 5, md: 0 }} textAlign='center' variant='h2' fontWeight={600} fontFamily='cursive'>Welcome to Mintz DG</Typography>
        <Typography mx={{ xs: 2, md: 0 }} textAlign='center' mt={2} mb={5} variant='h6' fontWeight={500} fontFamily='cursive'>Vui lòng chon website mà bạn muốn đăng nhập!</Typography>
        <Grid container spacing={2}>
          {DATA_WEB.map((data) => (
            <Grid 
              sx={{ 
                display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
                "&:hover": {
                    transform: data.url ? "scale(1.05)" : "none",
                    opacity: data.url ? 0.9 : 1,
                },
                cursor: data.url ? "pointer" : "default", 
              }} key={data.id} size={{ xs: 12, md: 4 }}
            >
              <CommonImage
                sx={{ height: 250 }}
                src={data.image}
                route={data.url}
              />
              <Typography mb={2} fontFamily='cursive' fontWeight={600}>{data.label}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Page>
  );
};

export default Home;
