import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const Categories = () => {
  const categories = [
    "All",
    "Music",
    "Gaming",
    "Sports",
    "News",
    "Learning",
    "Live",
    "Movies",
    "Trending",
    "Fashion",
    "Comedy",
    "Podcasts",
    // "Science",
  ];

  return (
    <>
      <Box
        sx={{
          margin: "0 15px",
          marginBottom: "10px",
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "10px",
          },
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", sm: "center" }, // Center on small screens, start on larger screens
            gap: "9px", // Add gap between buttons during wrapping
            marginTop: "90px",
          }}
        >
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="contained"
              sx={{
                boxShadow: "none",
                textTransform: "none",
                borderRadius: "10px",
                padding: "0.5rem 1.5rem",
                backgroundColor: "#f1f1f1",
                color: "black",
                "&:hover": { backgroundColor: "#e1e1e1" },
                fontSize: { xs: "0.75rem", sm: "0.875rem" }, // Adjust font size for responsiveness
                marginBottom: { xs: "0.5rem", sm: "0" }, // Add margin for small screens
              }}
            >
              {category}
            </Button>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default Categories;