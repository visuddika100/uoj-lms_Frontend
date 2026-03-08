import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h4">Student Dashboard</Typography>

        <Grid container spacing={3} mt={2}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Courses</Typography>
                <Typography variant="h4">3</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Assignments</Typography>
                <Typography variant="h4">5</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Progress</Typography>
                <Typography variant="h4">75%</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;