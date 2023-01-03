import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  
  return (
    <AuthLayout title="Create an account">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{mt: 2}}>
            <TextField
              label="Name"
              type={"text"}
              variant="outlined"
              fullWidth
              required
              autoFocus
              placeholder="Your name"
            />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
            <TextField
              label="Email"
              type={"email"}
              variant="outlined"
              fullWidth
              required
              placeholder="example@email.com"
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type={"password"}
              variant="outlined"
              fullWidth
              required
              placeholder="********"
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Create account
              </Button>
            </Grid>

            <Grid container direction={"row"} justifyContent="end">
              <Grid item>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Already have an account?{" "}
                  <Link component={RouterLink} to="/auth/login">
                    Login
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
