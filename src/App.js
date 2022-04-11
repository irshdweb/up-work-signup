import './App.css';
import RightImg from '../src/rightimg.png';
import Logo from '../src/JoinCottageLogo.svg';
import CheckBox from './CheckBox';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

const themepcbPlay = createTheme({
  palette: {
    primary: {
      main: '#0555C0',
    },
    secondary: {
      main: '#00843C'
    }
  },
  typography: {
    fontFamily: "'Source Sans Pro', sans-serif"
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            // set some styles for the label if need it
            fontSize: '16px',
            color: '#2B4162',
          },
          "& input": {
            background: '#FAFAFA'
          },

          // this is styles for the new variants
          "&.subvariant-hovered": {
            "& fieldset": {
              border: "1px solid #535353",
              borderRadius: '8px',
            },
            "& .MuiInputBase-input:hover + fieldset": {
              border: `1px solid #535353`
            },
            "& .MuiInputBase-input:focus + fieldset": {
              border: `1px solid #535353`,
              color: 'green'
            },
            "& .Mui-focused": {
              color: '#2B4162',
            }
          }
        }
      }
    }
  }
});

// const useStyles = makeStyles({
//   input: {
//     width: 400,
//     height: 40,
//     backgroundColor: '#FAFAFA',
//     padding: 0,
//     color: '#2B4162',
//     '& input + fieldset': {
//       borderColor: '#535353',
//     },

//   }
// });

function App() {
  //const classes = useStyles();
  return (
    <ThemeProvider theme={themepcbPlay}>
      <section className="form-section">
        <div className="container">
          <div className="inner-wrap">
            <div className="form-part">
              <div className="logo-wrap">
                <img src={Logo} alt="Join Cottage" />
              </div>
              <div className="form-wrap">
                <form>
                  <div className="form-group">
                    <TextField id="outlined-basic" fullWidth label="First Name" size="small" variant="outlined" className="subvariant-hovered" />
                    <TextField id="outlined-basic" fullWidth label="Last Name" size="small" variant="outlined" className="subvariant-hovered" />
                  </div>
                  <div className="form-group">
                    <TextField id="outlined-basic" fullWidth label="Email Address" size="small" variant="outlined" className="subvariant-hovered" />
                  </div>
                  <div className="form-group">
                    <TextField id="outlined-basic" fullWidth label="Company Name" size="small" variant="outlined" className="subvariant-hovered" />
                  </div>
                  <div className="form-group">
                    <TextField id="outlined-basic" fullWidth label="Password" type="password" size="small" variant="outlined" className="subvariant-hovered" />
                  </div>
                  <div className="check-group mt">
                    <CheckBox id="chk" name="privacy" checked={false} />
                    <p>
                      By continuing, you agree to Cottage's Terms of Service and acknowledge you've read our Privacy Policy.
                    </p>
                  </div>
                  <div className="check-group">
                    <CheckBox id="chk1" name="newsletter" checked={true} />
                    <p>
                      Sign up for our newsletter.
                    </p>
                  </div>
                  <div className="btn-group">
                    <Button variant="contained">Sign Up</Button>
                  </div>
                  <div className="sign-group">
                      Already a member? <a href="https://">Sign In</a> 
                  </div>
                </form>
              </div>
            </div>
            <div className="right-image">
              <img src={RightImg} alt="Join Cottage Man" />
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>

  );
}

export default App;
