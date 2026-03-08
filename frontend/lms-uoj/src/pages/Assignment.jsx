import { Box, Typography, Card, CardContent, Button, TextField } from "@mui/material";
import Sidebar from "../components/Sidebar";

function Assignment() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ p: 4, width: "100%" }}>
        <Typography variant="h4">Submit Assignment</Typography>

        <Card sx={{ mt: 3 }}>
          <CardContent>

            <TextField
              label="Assignment Title"
              fullWidth
              margin="normal"
            />

            <TextField
              label="Description"
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />

            <Button
              variant="contained"
              component="label"
              sx={{ mt: 2 }}
            >
              Upload File
              <input type="file" hidden />
            </Button>

            <Button
              variant="contained"
              color="success"
              sx={{ mt: 2, ml: 2 }}
            >
              Submit
            </Button>

          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default Assignment;