import React, {useState} from 'react';
// import css from './Slider.module.scss'
import arrowLeft from './../../assets/arrowLeft.svg'
import arrowRight from './../../assets/arrpwRight.svg'
import styled from 'styled-components'

const Slider = () => {

    let [currentMarked, setMarked] = useState(2)
    window.currentMarked = currentMarked
    const nextCard = () => {
        if (currentMarked >= 3) setMarked(1)
        else setMarked(currentMarked + 1)
    }
    const prevCard = () => {
        if (currentMarked <= 1) setMarked(3)
        else setMarked(currentMarked - 1)
    }

    return <SliderCont>
        <div className='Slider'>

            <div className='arrowLeft' onClick={() => prevCard()}><img src={arrowLeft} alt=""/></div>
            <div className='arrowRight' onClick={() => nextCard()}><img src={arrowRight} alt=""/></div>
            <section onClick={() => setMarked(1)} className={['card1', currentMarked === 1 ? 'marked' : '',
                currentMarked === 1 ? 'center' : '',
                currentMarked === 2 ? 'left ' : '',
                currentMarked === 3 ? 'right ' : '',
            ].join(' ')}>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <p>descritive text for some reason my head is completely absdent of wordsdescritive text for some
                        reason
                        my head is completely absdent of words</p>
                </div>
                <button><span>Learn more</span></button>
            </section>


            <section onClick={() => setMarked(2)} className={['card2', currentMarked === 2 ? 'marked' : '',
                currentMarked === 1 ? 'right' : '',
                currentMarked === 2 ? 'center' : '',
                currentMarked === 3 ? 'left' : '',].join(' ')}>
                <div>
                    <h1>Who we are</h1>
                </div>
                <div>
                    <p>descritive text for some reason my head is completely absdent of wordsdescritive text for some
                        reason
                        my head is completely absdent of words</p>
                </div>
                <button><span>Learn more</span></button>
            </section>


            <section onClick={() => setMarked(3)} className={['card3', currentMarked === 3 ? 'marked' : '',
                currentMarked === 1 ? 'left' : '',
                currentMarked === 2 ? 'right' : '',
                currentMarked === 3 ? 'center' : '',].join(' ')}>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <p>descritive text for some reason my head is completely absdent of wordsdescritive text for some
                        reason
                        my head is completely absdent of words</p>
                </div>
                <button><span>Learn more</span></button>
            </section>
        </div>
    </SliderCont>
};

export default Slider;


const SliderCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    min-height: 100vh;
    width: 100vw;
    padding: 5vh 1%;
.center {
@media (max-width: 768px) {
display: block;
transform: translate(-50%, -50%) scale(1.1) !important;
z-index: 25;
}

}

.left {
@media (max-width: 768px) {
position: relative;
display: block;
transform: translate(-100%, -50%) !important;
z-index: 10;
}
}
.left::after {
@media (max-width: 768px) {
content: '';
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.31);
display: block;
backdrop-filter: blur(1px);
}
}


.right {
@media (max-width: 768px) {
position: relative;
display: block;
transform: translate(0%, -50%) !important;
z-index: 10;
}
}
.right::after {
@media (max-width: 768px) {
content: '';
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.31);
display: block;
backdrop-filter: blur(1px);
}
}

.arrowLeft {
position: absolute;
z-index: 30;
right: 35vw;
top: 50%;
transform: translateY(-50%);
cursor: pointer;
display: none;
@media (max-width: 768px) {
display: block;
}
}

.arrowRight {
position: absolute;
z-index: 30;
left: 35vw;
top: 50%;
transform: translateY(-50%);
cursor: pointer;
display: none;
@media (max-width: 768px) {
display: block;
}
}

.Slider {
display: flex;
background-color: #1B1919;
position: relative;
section {
transition: all 0.5s;
background: #292727;
max-width: 40rem;
min-width: 25rem;
width: 33%;
height: 60rem;
position: relative;
padding-top: 5%;
display: flex;
flex-direction: column;
align-items: center;
@media (max-width: 768px) {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
}

div:nth-of-type(1) {
background: #1B1919;
width: 100%;
height: 50%;
display: grid;

grid-template-rows: 3fr 1fr;
align-content: center;
margin-bottom: 5%;
transition: all 1s;

h1 {
display: flex;
justify-content: center;
align-items: center;
font-family: Roboto;
font-size: calc(2.5rem + 0.5vw);
font-weight: 400;
color: #A9A9A9;

}
}

div:nth-of-type(2) {
font-family: Roboto;
font-size: calc(1.5rem + 0.2vw);
font-weight: 400;
color: #8B8B8B;

p {
padding: 0 15%;
}

width: 100%;
}

button {
margin-top: 10%;
font-family: Roboto;
font-size: calc(1.5rem + 0.5vw);
font-weight: 400;
color: black;
background: #FFB100;
border: none;
width: 60%;
padding: 1.5rem 2rem;
position: relative;
overflow: hidden;

span {
position: relative;
z-index: 1;
}
}

button::after {
content: '';
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 0rem;
height: 0rem;
border-radius: 50%;
box-shadow: rgb(255, 177, 0) 0 0 1.5rem 1rem;
background-color: #FFB100;
}

button:hover {
background-color: white;
}

button:hover::after {
z-index: 0;
transition: 1s;
width: 5em;
height: 2em;
box-shadow: rgb(255, 177, 0) 0 0 2rem 10rem;

}
}


.card1 {
div:nth-of-type(1) {

-webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 75%);
clip-path: polygon(0 0, 100% 0, 100% 100%, 0 75%);
}
}

.card2 {
div:nth-of-type(1) {
-webkit-clip-path: polygon(100% 0, 100% 80%, 50% 93%, 0 80%, 0 0);
clip-path: polygon(100% 0, 100% 80%, 50% 93%, 0 80%, 0 0);
}
}

.card3 {
div:nth-of-type(1) {

-webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 75%);
clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
}
}
}

.marked {
transform: scale(1.1);
z-index: 25;
box-shadow: 10px 10px 4px 10px #00000040;

div:nth-of-type(1) {
background: #5B5B5B !important;

h1 {
color: white !important;
}

}
}
`