import React, { useState } from 'react'
import Divider from '../images/pattern-divider-desktop.svg';
import Dice from "../images/icon-dice.svg";
const AdviceComponent = (props: {id: number, advice: string, onClickNewAdvice: () => void}) => {

    return (
        <>
            <div className="h-[100vh] bg-[#1f2632] grid place-items-center">
                <div className="bg-[#323a49] mx-auto grid place-items-center gap-4 px-6 pt-10 pb-20 max-w-[32rem] max-sm:mx-[20px] rounded-[10px] relative">

                    <h3 className="text-[#52ffa8] text-[18px] font-semibold tracking-[5px]">ADVICE #<span>{props.id}</span></h3>

                    <p className="text-[30px] text-[#cee3e9] text-center font-semibold">"<span>{props.advice}</span>"</p>

                    <div className="mt-4">
                        <img src={Divider} alt="" />
                    </div>

                    <div onClick={props.onClickNewAdvice} className="bg-[#52ffa8] h-[60px] w-[60px] grid place-items-center rounded-full absolute -bottom-[32px] hover:shadow-md hover:shadow-[#52ffa8] cursor-pointer ">
                        <img src={Dice} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdviceComponent;
