import { Button, FormControlLabel, Checkbox } from "@mui/material";
import styles from "../index.module.css"
import Card from "../components/card/Card";
import Portfolio from "../components/portfoliocomp/Portfoliocomp";
import Contact from "../components/contact/contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useState, useEffect, useRef } from "react";
import "../App.css"
import { useMediaQuery } from "react-responsive";

const Landingpage = () => {
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
    }

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }

    return (
        <div className={styles.groupParent}>
            <Header />
            <div>
                <img className={styles.groupIcon} alt="" src="/group.svg" />
            </div>
            <b className={styles.welcome}>WELCOME</b>
            <b className={styles.services}>SERVICES</b>
            <b className={styles.portfolio}>PORTFOLIO</b>
            <b className={styles.contactUs}>CONTACT US</b>
            <div className={styles.withInnovationContainer}>
                <p className={styles.withInnovationSkills}>
                    <span className={styles.with}>{`With `}</span>
                    <span className={styles.innovation}>Innovation</span>
                    <span>{` & Skills`}</span>
                </p>
                <p className={styles.withInnovationSkills}>We Lead Business</p>
                <p className={styles.forward}>Forward</p>
            </div>
            <div className={styles.whatWeDoContainer}>
                <span>{`What We `}</span>
                <span className={styles.innovation}>Do ?</span>
            </div>

            <Button
                className={styles.frameChild}
                sx={{ width: 168 }}
                variant="outlined"
            // color="primary"
            >
                Join Us
            </Button>


            <div className={styles.rectangleContainer}>
                <div className={styles.rectangleDiv} />
                <div className={styles.viewAll}>View All</div>
                <div> <img className={`${styles.vectorIcon}`} alt="" src="/vector.svg" /> </div>
            </div>

            <section id="services">
                <button
                    className={styles.groupFormcontrollabel}
                > </button>
            </section>
            <div className={styles.rectangleWrapper}>
                <button className={styles.groupChild6} id="portfolio"  ></button>
            </div>
            <button
                className={styles.frameChild1}

            >
            </button>

            <div className={styles.rectangleWrapper}>
                <button className={styles.groupChild6} > </button>
            </div>

            <div className={styles.rectangleFrame}>
                <button className={styles.groupChild6} > </button>
            </div>
            <div className={styles.rectangleWrapper1}>
                <button className={styles.groupChild6} > </button>
            </div>
            <Mobile>
                <Card />
            </Mobile>
            <Desktop>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <section id="services">
                    <Card />
                </section>
            </Desktop>
            {/* <Card /> */}

            <section id="portfolio">
                <Portfolio />
            </section>

            <section >
                <Contact />
            </section>
            <br />  <br />  <br />  <br />  <br />  <br />  <br />

            <Footer />
        </div >
    );
};

export default Landingpage;
