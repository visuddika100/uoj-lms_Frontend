import { Card, CardContent, Typography, Button } from "@mui/material";

function CourseCard({ course }) {
  return (
    <Card sx={{ width: 250 }}>
      <CardContent>
        <Typography variant="h6">{course.title}</Typography>

        <Typography variant="body2">
          {course.description}
        </Typography>

        <Button variant="contained" sx={{ mt: 2 }}>
          Continue
        </Button>
      </CardContent>
    </Card>
  );
}

export default CourseCard;