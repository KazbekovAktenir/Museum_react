import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import "./AboutPage.css";
const AboutPage = () => {
  return (
    <Container maxWidth="md" sx={{ padding: 4, backgroundColor: "darkblue" }}>
      <Paper sx={{ padding: 4 }}>
        <h1>Mission Statement</h1>
        <hr />
        <br />
        <Typography
          sx={{
            color: "darkblue",
            fontSize: "52px",
            fontWeight: "900",
            fontFamily: "Roboto",
            fontStyle: "italic",
            lineHeight: "1.1",
          }}
          variant="h5"
          gutterBottom
        >
          GALLERIX is a leading global arts organization committed to
          exhibiting, conserving, and understanding the world’s artistic and
          cultural heritage.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: 2,
            color: "lightblue",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          At our museum, we celebrate the beauty and diversity of art across
          centuries and cultures. From the Renaissance masters to contemporary
          innovators, we showcase the brilliance of human creativity. Our
          gallery is a sanctuary for art lovers and a nurturing ground for
          emerging talents, fostering a dialogue between past traditions and
          modern visions.
        </Typography>
      </Paper>
      <div className="moving-images-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqLpcwlljRPF4hHOMapdRYtZgqbNWkxBg4w&s"
          alt="Moving Image 1"
          className="moving-image"
          style={{ top: "82px", left: "100px" }}
        />
        <img
          src="https://www.rusline.aero/upload/medialibrary/e0b/_6.jpg"
          alt="Moving Image 1"
          className="moving-image"
          style={{ top: "300px", left: "-200px" }}
        />
        <img
          src="   https://planetofhotels.com/guide/sites/default/files/styles/paragraph__text_with_image___twi_image/public/2020-05/modern-art-museum-2.jpg"
          alt="Moving Image 1"
          className="moving-image"
          style={{ top: "300px", right: "100px" }}
        />
        <img
          src="  https://images.squarespace-cdn.com/content/v1/563a5fb2e4b0710808c31f27/1623373709936-UXWH4EQTDVE15AA71T0P/%D0%BC%D1%83%D0%B7%D0%B5%D0%B8%CC%86+%D1%81%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE+%D0%B8%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2%D0%B0+%D0%BD%D1%8C%D1%8E+%D0%B8%CC%86%D0%BE%D1%80%D0%BA.jpg"
          alt="Moving Image 1"
          className="moving-image"
          style={{ top: "80px", right: "-100px" }}
        />
      </div>
    </Container>
  );
};

export default AboutPage;
