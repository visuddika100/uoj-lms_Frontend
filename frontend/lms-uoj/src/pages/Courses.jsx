import { Box, Typography } from "@mui/material";
import CourseCard from "../components/CourseCard";
import Sidebar from "../components/Sidebar";

function Courses() {

  const courses = [
    { title: "HTML Basics", description: "Learn HTML fundamentals" },
    { title: "CSS Design", description: "Modern CSS layout and styling" }
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ p: 4 }}>
        <Typography variant="h4">My Courses</Typography>

        <Box sx={{ display: "flex", gap: 3, mt: 3 }}>
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Courses;