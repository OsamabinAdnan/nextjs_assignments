import Image from "next/image";
import Card from "./Components/Card";


export default function Home() {
  return (
    <div className="flex flex-wrap mt-5 bg-green-100 w-100 rounded-xl justify-center "  >
    
      <div className="box-border h-50 w-50 p-4 border-2 m-4 border-green-900 rounded-xl bg-green-200 hover:bg-green-900 text-black hover:text-white shadow-slate-700 shadow-lg">
        {/* Passing props from Parent to child component */}
        <Card name= "Osama" age={25} rollNo = {12345} Class="Monday 2 to 5 PM"/>
      </div>
      <div className="box-border h-50 w-50 p-4 border-2 m-4 border-green-900 rounded-xl bg-green-200 hover:bg-green-900 text-black hover:text-white shadow-slate-500 shadow-lg">
        {/* Passing props from Parent to child component */}
        <Card name= "Adnan" age={35} rollNo = {56546} Class="Monday 2 to 5 PM"/>
      </div>
      <div className="box-border h-50 w-50 p-4 border-2 m-4 border-green-900 rounded-xl bg-green-200 hover:bg-green-900 text-black hover:text-white shadow-slate-500 shadow-lg">
        {/* Passing props from Parent to child component */}
        <Card name= "Arham" age={15} rollNo = {98651} Class="Monday 2 to 5 PM"/>
      </div>
      <div className="box-border h-50 w-50 p-4 border-2 m-4 border-green-900 rounded-xl bg-green-200 hover:bg-green-900 text-black hover:text-white shadow-slate-500 shadow-lg">
        {/* Passing props from Parent to child component */}
        <Card name= "Usman" age={22} rollNo = {65657} Class="Monday 2 to 5 PM"/>
      </div>
      <div className="box-border h-50 w-50 p-4 border-2 m-4 border-green-900 rounded-xl bg-green-200 hover:bg-green-900 text-black hover:text-white shadow-slate-500 shadow-lg">
        {/* Passing props from Parent to child component */}
        <Card name= "Ahmed" age={30} rollNo = {54566} Class="Monday 2 to 5 PM"/>
      </div>
    
    </div>
    
  );
}
