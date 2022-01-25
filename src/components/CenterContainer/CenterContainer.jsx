import React from 'react';
import css from "./CenterContainer.module.scss";
import ContactUs from "../ContactUs/ContactUs";

const CenterContainer = () => {
    return <div className={css.CenterContainer}>
        <ContactUs/>


        <div className={css.textBox}>
            <p>
                <div/>

                We are a group of Freelancers
                who invented a never-seen
            </p>
            <span>OUTOSRCING</span>
            <p>
                process to help you taking your
                web-project to the next level
                <div/>
            </p>
        </div>
    </div>
};

export default CenterContainer;