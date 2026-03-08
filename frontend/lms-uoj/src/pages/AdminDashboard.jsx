import { Box, Typography, Grid, Card, CardContent, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import Sidebar from "../components/Sidebar";

function AdminDashboard() {

  const users = [
    { name: "Alex Johnson", email: "alex@email.com" },
    { name: "Emma Smith", email: "emma@email.com" }
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ p: 4, width: "100%" }}>
        <Typography variant="h4">Admin Dashboard</Typography>

        {/* Overview Cards */}
        <Grid container spacing={3} mt={2}>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography>Total Students</Typography>
                <Typography variant="h4">120</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography>Courses</Typography>
                <Typography variant="h4">10</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography>Assignments</Typography>
                <Typography variant="h4">25</Typography>
              </CardContent>
            </Card>
          </Grid>

        </Grid>

        {/* User Table */}
        <Card sx={{ mt: 4 }}>
          <CardContent>

            <Typography variant="h6">User Management</Typography>

            <Table sx={{ mt: 2 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {users.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Button variant="outlined" size="small">
                        Edit
                      </Button>

                      <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        sx={{ ml: 1 }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

          </CardContent>
        </Card>

      </Box>
    </Box>
  );
}

export default AdminDashboard;