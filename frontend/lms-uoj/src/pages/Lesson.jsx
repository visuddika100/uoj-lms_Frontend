import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import Sidebar from "../components/Sidebar";

function Lesson() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ p: 4, width: "100%" }}>
        <Typography variant="h4">HTML Basics</Typography>

        {/* Video Section */}
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <video width="100%" controls>
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
            </video>
          </CardContent>
        </Card>

        {/* Lesson Description */}
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography variant="h6">Introduction</Typography>
            <Typography>
              HTML is the standard language used to create web pages. In this
              lesson you will learn the basic structure of HTML.
            </Typography>
          </CardContent>
        </Card>

        <Button variant="contained" sx={{ mt: 3 }}>
          Start Quiz
        </Button>
      </Box>
    </Box>
  );
}

export default Lesson;