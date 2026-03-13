import { Box, Card, CardContent, Typography, Grid, Avatar, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Dashboard() {

  return (
  
      <Box sx={{ flexGrow: 1, p: 4 }}>

        {/* Top Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h4">Student Dashboard</Typography>
        
        </Box>

        {/* Cards */}
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
  );
}

export default Dashboard;