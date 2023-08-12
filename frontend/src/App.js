import { Card, CardMedia, Typography } from "@mui/material";
import Form from "./Form";

function App() {
  return (
    <div style={{backgroundColor: "#edeff2"}}>
      <Form />

      {/* google form part */}

      <Card
        style={{
          maxWidth: 550,
          padding: "10px 5px",
          margin: "0 auto",
          display: "flex",
          gap: "10px",
          marginBottom: "30px",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="./images/Google_Forms_Logo.jpg"
          alt="Live from space album cover"
        />
        <div>
          <Typography gutterBottom variant="h5">
            You can fill this google form
          </Typography>
          <Typography gutterBottom variant="h6">
            <a
              href="https://www.w3.org/Provider/Style/dummy.html"  target="_blank" rel="noreferrer">
              LINK
            </a>
          </Typography>
        </div>
      </Card>
    </div>
  );
}

export default App;
