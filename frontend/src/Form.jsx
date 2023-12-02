import { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Stack,
  Checkbox,
} from "@mui/material";

export default function MyForm() {
  const [name, setName] = useState("");
  const [regid, setRegid] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [complaint, setComplaint] = useState("");

//   const HideInfo =  ()=>{
//     setEmail("hidden");
//     setName("hidden");
//     setRegid("hidden");
//   }

  const baseUrl = "http://localhost:8000";

  const sendEmail = async () => {
    let dataSend = {
      name: name,
      regid: regid,
      email: email,
      subject: subject,
      complaint: complaint,
    };

    const res = await fetch(`${baseUrl}/email/sendEmail`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      // HANDLING ERRORS
      .then((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300) {
          alert("Send Successfully !");
        }
      });
  };
  return (
    <div style={{ padding: "30px" }}>
      <Typography gutterBottom variant="h3" align="center">
        ICC
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 550, padding: "10px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography
              style={{ padding: "0 0 10px" }}
              variant="body2"
              color="textPrimary"
              component="p"
              gutterBottom
            >
              Write your complaints below or fill the <strong>google form below</strong>
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <FormControl id="name" fullWidth>
                    <TextField
                      placeholder="Your full name"
                      label="Full Name"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                </Grid>
                <Grid xs={12} item>
                  <FormControl id="regid" fullWidth>
                    <TextField
                      placeholder="Registration ID"
                      label="Reg ID"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setRegid(e.target.value)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl id="email" fullWidth>
                    <TextField
                      type="email"
                      placeholder="Email ID"
                      label="Email ID"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl id="subject" fullWidth>
                    <TextField
                      label="Subject"
                      multiline
                      rows={2}
                      placeholder="Subject"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl id="complaint" fullWidth>
                    <TextField
                      label="Complaint"
                      multiline
                      rows={6}
                      placeholder="Type your complaint here"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setComplaint(e.target.value)}
                    />
                  </FormControl>
                </Grid>

                {/* <FormControl>
                  <Stack
                    style={{ padding: "10px" }}
                    spacing={{ xs: 1, sm: 2 }}
                    direction="row"
                    useFlexGap
                    flexWrap="wrap"
                  >
                    <FormLabel id="identity-group" style={{ padding: "10px" }}>
                      Keep my Identity Confidential
                    </FormLabel>
                    <RadioGroup
                      name="identity-group"
                      // value={value}
                      // onChange={}
                    >
                      <Stack
                        spacing={{ xs: 1, sm: 2 }}
                        direction="row"
                        useFlexGap
                        flexWrap="wrap"
                      >
                        <FormControlLabel
                          value="Yes"
                          control={<Radio />}
                          label="Yes"
                          onChange={(e) => HideInfo()}
                        />
                        <FormControlLabel
                          value="No"
                          control={<Radio />}
                          label="No"
                        //   onChange={(e) => setIdentity(e.target.value)}
                        />
                      </Stack>
                    </RadioGroup>
                  </Stack>
                </FormControl> */}

                <FormControlLabel
                  style={{ paddingTop: "15px" }}
                  required
                  control={<Checkbox />}
                  label="I hereby declare that the information furnished above is true,
                        complete and correct to the best of my knowledge and belief"
                />

                <Grid item xs={12} style={{ paddingTop: "15px" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => sendEmail()}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
