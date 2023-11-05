import styles from "./contact.module.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useRef } from 'react';
import "../../App.css"

const Contact = () => {
  const contactRef = useRef(null);
  return (
    <>
      <div className={styles.container} ref={contactRef} id="contact">
        <div className='contact-form row'>
          <div className='col-lg-12'>
            <div className={styles.getInTouchContainer}>
              <span>{`Get in `}</span>
              <span className={styles.innovation}>Touch</span>
            </div>
            <div className={styles.simplyFillIn}>Simply fill in the form below</div>
            <div className={styles.letsBuildSomethingContainer}>
              <p className={styles.withInnovationSkills}>Let’s Build Something</p>
              <p className={styles.withInnovationSkills}>Amazing together.</p>
            </div>
            <div className={styles.whetherItsA}>
              Whether it’s a brand refresh, public relations push, new website or <br />
              end-to-endbehaviour  change campaign — we’re interested <br />  and ready to talk
              solutions.
            </div>
          </div>
          <div className='contact-form row'>
            <div className='col-lg-6'>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                className={styles.parentbox}
              >
                <div className='col-lg-12'>
                  <TextField id="standard-basic" label="First Name" variant="standard" className={styles.box} style={{color: "#ff000" , borderBottom: "2px solid #ff0000"}} />
                </div>
                <div className='col-lg-12'>
                  <TextField id="standard-basic" label="Email Address" variant="standard" className={styles.box} style={{color: "#ff000" , borderBottom: "2px solid #ff0000"}} />
                </div>
                <div className='col-lg-12'>
                  <TextField id="standard-basic" label="Phone Number" variant="standard" className={styles.box} style={{color: "#ff000" , borderBottom: "2px solid #ff0000"}} />
                </div>
                <div className='col-lg-12'>
                  <TextField id="standard-basic" label="Tell us About Your Project" variant="standard" className={styles.box}  style={{color: "#ff000" , borderBottom: "2px solid #ff0000"}}/>
                </div>
              </Box>
              <div className={styles.send}> 
                <button className={styles.sendmsg}>send message</button>
              </div>

            </div>
            <div className='col-lg-6'>
              <img className={styles.Icon} alt="" src="/cup.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact