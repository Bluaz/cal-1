import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [Stringvalue, setStringvalue] = useState("0");
  const [sum, setsum] = useState("0");

  const handleChange = (e) => {
    if (Stringvalue == "0" && e != "clear") {
      setStringvalue(e)
    }
    else if (e == "clear") {
      setStringvalue("0")
      setsum("0")
    }
    else {
      setStringvalue(Stringvalue + e)
    }


  }
  const calClick = () => {
    try {
      const result = eval(Stringvalue);
      console.log(result)
      if (result) {
        setsum(result.toFixed(2))
      }
    }
    catch{
      alert("กรุณาตรวจสอบข้อมูลให้ถูกต้อง")
    }
  }
  return (
    <div className="bg-black w-screen h-screen flex justify-center items-center">
      <div className="w-[29rem] h-[51rem] bg-gray rounded-2xl shadow-xl border-4 border-gray-100">
        <div className="w-auto my-2 h-16 flex justify-between">
          <div className="flex items-center justify-start">
            <img className='w-auto h-full rounded-2xl' src="/logo.png" />
          </div>
          <div className="w-full  flex justify-center items-center">
            <label className='w-full text-gray-100 font-bold text-center text-xl'>SSP</label>
          </div>
        </div>
        <div className="w-auto m-3 h-40 text-right space-y-2 py-2">
          <div className="text-gray-100 h-2/5 text-5xl ">{Stringvalue}</div>
          <div className="text-gray-100 font-bold text-7xl h-3/5">{sum}</div>
        </div>
        <div className="w-auto m-1 h-auto mb-2">
          <div className="m-2 flex justify-between">
            <div onClick={() => handleChange("clear")} className="bg-red-100 shadow-md rounded-2xl w-24 h-24 text-red-600 font-medium flex justify-center items-center">C</div>
            <div onClick={() => handleChange(" ( ")} className="bg-gray-200 shadow-md rounded-2xl w-24 h-24 text-black font-medium flex justify-center items-center">(</div>
            <div onClick={() => handleChange(" ) ")} className="bg-gray-200 shadow-md rounded-2xl w-24 h-24 text-black font-medium flex justify-center items-center">)</div>
            <div onClick={() => handleChange(" / ")} className="bg-red-500 shadow-md rounded-2xl w-24 h-24 text-white font-medium text-xl flex justify-center items-center">/</div>
          </div>
          <div className="m-2 flex justify-between">
            <div onClick={() => handleChange("7")} className="bg-gray-200 shadow-md rounded-2xl w-24 h-24 text-black font-medium flex justify-center items-center">7</div>
            <div onClick={() => handleChange("8")} className="bg-gray-200 shadow-md rounded-2xl w-24 h-24 text-black font-medium flex justify-center items-center">8</div>
            <div onClick={() => handleChange("9")} className="bg-gray-200 shadow-md rounded-2xl w-24 h-24 text-black font-medium flex justify-center items-center">9</div>
            <div onClick={() => handleChange(" * ")} className="bg-red-500 shadow-md rounded-2xl w-24 h-24 text-white font-medium text-xl flex justify-center items-center">x</div>
          </div>
          <div className="m-2 flex justify-between">
            <div onClick={() => handleChange("4")} className="bg-gray-200 shadow-md rounded-2xl w-24 h-24 text-black font-medium flex justify-center items-center">4</div>
            <div onClick={() => handleChange("5")} className="bg-gray-200 shadow-md rounded-2xl w-24 h-24 text-black font-medium flex justify-center items-center">5</div>
            <div onClick={() => handleChange("6")} className="bg-gray-200 shadow-md rounded-2xl w-24 h-24 text-black font-medium flex justify-center items-center">6</div>
            <div onClick={() => handleChange(" - ")} className="bg-red-500 shadow-md rounded-2xl w-24 h-24 text-white font-medium text-xl flex justify-center items-center">-</div>
          </div>
          <div className="m-2 flex justify-between">
            <div onClick={() => handleChange("1")} className="bg-gray-200 shadow-md rounded-2xl w-24 h-24 text-black font-medium flex justify-center items-center">1</div>
            <div onClick={() => handleChange("2")} className="bg-gray-200 shadow-md rounded-2xl w-24 h-24 text-black font-medium flex justify-center items-center">2</div>
            <div onClick={() => handleChange("3")} className="bg-gray-200 shadow-md rounded-2xl w-24 h-24 text-black font-medium flex justify-center items-center">3</div>
            <div onClick={() => handleChange(" + ")} className="bg-red-500 shadow-md rounded-2xl w-24 h-24 text-white font-medium text-xl flex justify-center items-center">+</div>
          </div>
          <div className="m-2 flex justify-between">
            <div onClick={() => handleChange("0")} className="bg-gray-200 shadow-md rounded-2xl w-full h-24 text-black font-medium flex justify-center items-center">0</div>
            <div className="flex w-full ml-3 justify-between">
              <div onClick={() => handleChange(".")} className="bg-gray-200 shadow-md rounded-2xl w-24 h-24 text-black font-medium flex justify-center items-center">.</div>
              <div onClick={() => calClick()} className="bg-green-500 shadow-md rounded-2xl w-24 h-24 text-white font-medium text-xl flex justify-center items-center">=</div>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <div className="w-20 h-1 bg-gray-100 rounded-l-xl rounded-r-xl"></div>
          </div>
        </div>
      </div>
    </div>

  )
}
