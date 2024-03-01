import React, { useState } from 'react'
import Divider from '../images/pattern-divider-desktop.svg';
import Dice from "../images/icon-dice.svg";
const AdviceComponent = (props: {id: number, advice: string}) => {

    const [newAdvice, setNewAdvice] = useState<boolean>(true)
    const getNewAdvice = ()=>{
        setNewAdvice(!newAdvice);
      }
    return (
        <>
            <div className="bg-[#1f2632] grid h-[100vh] place-items-center">
                <div className="bg-[#323a49] mx-auto grid place-items-center gap-4 px-6 pt-10 pb-20 rounded-[10px] relative max-w-[32rem] max-sm:mx-4">

                    <h3 className="text-[#52ffa8] text-[18px] font-semibold tracking-[0.3rem]">ADVICE #<span>{props.id}</span></h3>

                    <p className="text-[#cee3e9] text-[30px] text-center font-semibold">"<span>{props.advice}</span>"</p>

                    <div className="mt-4">
                        <img src={Divider} alt="" />
                    </div>

                    <div className="bg-[#52ffa8] h-16 w-16 grid place-items-center rounded-full absolute -bottom-8 hover:shadow-md hover:shadow-[#52ffa8] cursor-pointer ">
                        <img src={Dice} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdviceComponent;
