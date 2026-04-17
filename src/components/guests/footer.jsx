import {
  Box,
  Grid,
  Stack,
  List,
  ListItem,
  ListItemButton,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerLinks = [
    {
      title: "Categories",
      item: [
        { title: "Fashion and Beauty", url: "" },
        { title: "Automotive", url: "" },
        { title: "Export Services", url: "" },
        { title: "Agriculture", url: "" },
        { title: "Logistics and warehousing", url: "" },
      ],
    },
    {
      title: "Quick Links",
      item: [
        { title: "About Us", url: "" },
        { title: "Contact Us", url: "" },
        { title: "Artisan's Attic Reports", url: "" },
        { title: "FAQ", url: "" },
      ],
    },
    {
      title: "Contact Us",
      item: [
        { title: "About Us", url: "" },
        { title: "Contact", url: "" },
        { title: "Artisan's Attic Reports", url: "" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: "/icons/facebook.png",
      url: "https://facebook.com",
      alt: "Facebook",
    },
    {
      icon: "/icons/telegram.png",
      url: "https://t.me",
      alt: "Telegram",
    },
    {
      icon: "/icons/instagram.png",
      url: "https://instagram.com",
      alt: "Instagram",
    },
    {
      icon: "/icons/youtube.png",
      url: "https://youtube.com",
      alt: "YouTube",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#172153",
        padding: "60px 20px",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} sm={1} lg={1} md={1}></Grid>
        <Grid item xs={12} sm={10} lg={10} md={10}>
          <Grid container spacing={1}>
            {footerLinks.map((item, index) => (
              <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
                <h5
                  style={{
                    color: "white",
                    fontWeight: "700",
                    fontSize: 18,
                  }}
                >
                  {item.title}
                </h5>
                <List dense>
                  {item.item.map((link, count) => (
                    <ListItem key={count} sx={{ px: 0 }}>
                      <ListItemButton
                        sx={{
                          color: "white",
                          fontSize: 13,
                          fontWeight: "500",
                          px: 0,
                        }}
                      >
                        {link.title}
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            ))}

            <Grid item xs={12} sm={6} md={6} lg={3}>
              <h5
                style={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: 18,
                }}
              >
                {"Social Links"}
              </h5>
              <Stack direction={"row"} spacing={2} alignItems={"center"}>
                {socialLinks.map((item, index) => (
                  <IconButton
                    key={index}
                    aria-label={item.alt}
                    component={Link}
                    href={item.url}
                    target="_blank"
                    sx={{
                      width: 40,
                      height: 40,
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.alt}
                      style={{ width: 32, height: 30 }}
                    />
                  </IconButton>
                ))}
              </Stack>
            </Grid>
          </Grid>
          <div
            style={{
              height: 1,
              backgroundColor: "#7B7E86",
              margin: "40px 0 30px",
            }}
          />
          <div>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <div
                style={{
                  fontSize: 12,
                  color: "white",
                  flexGrow: 1,
                }}
              >
                © 2023 All Rights Reserved
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "white",
                }}
              >
                <Link to={"/privacy-policy"}>Privacy Policy</Link>
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "white",
                }}
              >
                <Link to={"/privacy"}>Terms and conditions</Link>
              </div>
            </Stack>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
