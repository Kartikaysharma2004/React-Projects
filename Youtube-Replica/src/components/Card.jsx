import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import {
  red,
  blue,
  green,
  orange,
  purple,
  yellow,
  teal,
  cyan,
  indigo,
  pink,
  brown,
  amber,
} from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import Box from "@mui/material/Box";

export default function YouTubeCard() {
  const videoCards = [
    {
      title: "React.js Tutorial for Beginners",
      subheader: "September 10, 2024",
      avatarColor: red[500],
      image: "/images/react.png",
      description:
        "Learn React.js with this comprehensive guide for beginners. Build your first React app from scratch.",
    },
    {
      title: "Daily Vlog: A Day in My Life",
      subheader: "August 25, 2024",
      avatarColor: blue[500],
      image: "/images/vlog.jpg",
      description:
        "Join me in a day of my life, from morning routines to night reflections. Don't forget to like and subscribe!",
    },
    {
      title: "Top 10 Gaming Moments of 2024",
      image: "/images/Gaming.jpg",
      subheader: "July 30, 2024",
      avatarColor: green[500],
      description:
        "Check out the top 10 most epic gaming moments of 2024! From Fortnite to Call of Duty, we've got it all.",
    },
    {
      title: "How to Cook the Perfect Steak",
      subheader: "June 15, 2024",
      avatarColor: orange[500],
      image: "/images/Cooking-steak.webp",
      description:
        "Want to cook the perfect steak every time? Here's a step-by-step guide to mastering the art of steak cooking.",
    },
    {
      title: "Beginner's Guide to JavaScript",
      subheader: "April 18, 2024",
      avatarColor: blue[300],
      image: "/images/Javascript.jpg",
      description:
        "Start your JavaScript journey with this beginner's guide. Understand the basics and core concepts.",
    },
    {
      title: "Travel Vlog: Exploring the Alps",
      subheader: "May 22, 2024",
      avatarColor: green[300],
      image: "/images/travel.jpg",
      description:
        "Come with me on an epic journey to the Alps. Experience the mountains, the scenery, and the adventure!",
    },
    {
      title: "Best Coding Practices for 2024",
      subheader: "March 3, 2024",
      avatarColor: red[300],
      image: "/images/coding-practice.jpg",
      description:
        "In this video, we discuss the best coding practices that developers should follow in 2024 to improve code quality.",
    },
    {
      title: "Fitness Challenge: 30 Days of Yoga",
      subheader: "July 12, 2024",
      avatarColor: purple[500],
      image: "/images/yoga-challenge.jpg",
      description:
        "Join me for a 30-day yoga challenge! Each day we'll explore different yoga poses and their benefits.",
    },
    {
      title: "How to Edit Videos with Premiere Pro",
      subheader: "August 9, 2024",
      avatarColor: yellow[600],
      image: "/images/Premiere-Pro.jpg",
      description:
        "Learn how to edit professional videos using Adobe Premiere Pro. Perfect for beginners and pros alike!",
    },
    {
      title: "Mastering CSS Grid and Flexbox",
      subheader: "October 2, 2024",
      avatarColor: teal[500],
      image: "/images/css.avif",
      description:
        "Become a pro at using CSS Grid and Flexbox with this comprehensive tutorial. Learn how to layout websites efficiently.",
    },
    {
      title: "Building Responsive Websites",
      subheader: "November 5, 2024",
      avatarColor: cyan[600],
      image: "/images/responsive.jpg",
      description:
        "Learn how to create fully responsive websites using modern CSS techniques. Perfect for web developers of all levels.",
    },
    {
      title: "Python for Data Science",
      subheader: "December 15, 2024",
      avatarColor: indigo[500],
      image: "/images/Premiere-Pro.jpg",
      description:
        "Discover how to use Python for data science. This course covers everything from data analysis to machine learning.",
    },
    {
      title: "Create Stunning Animations with CSS",
      subheader: "January 7, 2024",
      avatarColor: pink[400],
      image: "/images/coding-practice.jpg",
      description:
        "Learn how to create beautiful animations using CSS. This video covers transitions, keyframes, and more.",
    },
    {
      title: "Freelancing Tips for Developers",
      subheader: "February 3, 2024",
      avatarColor: brown[400],
      image: "/images/coding-practice.jpg",
      description:
        "Thinking about becoming a freelance developer? Learn how to start your freelancing career and grow your business.",
    },
    {
      title: "The Ultimate Guide to Git and GitHub",
      subheader: "March 10, 2024",
      avatarColor: amber[700],
      image: "/images/git-github.avif",
      description:
        "Master Git and GitHub with this ultimate guide. Learn how to manage your projects and collaborate with others.",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        marginTop: "25px",
        flexWrap: "wrap",
        justifyContent: "center",
        paddingBottom: "30px",
      }}
    >
      {videoCards.map((video, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="194"
            image={video.image}
            alt={video.title}
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {video.description}
            </Typography>
          </CardContent>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: video.avatarColor }} aria-label="recipe">
                {video.title.charAt(0)}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <ShareIcon />
              </IconButton>
            }
            title={video.title}
            subheader={video.subheader}
          />
        </Card>
      ))}
    </Box>
  );
}
