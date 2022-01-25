import React from 'react';
import css from './Social.module.scss'
import facebook from './../../assets/facebook.png'

const Social = () => {
    return <div className={css.Social}>
        <span>SOCIAL</span>
        <div/>

        <section>
            <img src={facebook} alt=""/>
            <img src={facebook} alt=""/>
            <img src={facebook} alt=""/>
            <img src={facebook}
                 alt=""/>

        </section>
    </div>
};

export default Social;