import Head from 'next/head'
import {useRouter} from "next/router"
import {useState, useEffect} from "react"
import PageHeader from '@/components/PageHeader'

export default function Login() {
  const router = useRouter()
  const [editIn, setEditIn] = useState(true)
  const [editEx, setEditEx] = useState(true)
  
  function signupLink() {
    router.push('/signup')
  }

  var Username = "User123"
  const [Income, setIncome] = useState(30000)
  const [HnU, setHnU] = useState(100)
  const [transp, setTransp] = useState(200)
  const [food, setFood] = useState(300)
  const [enter, setEnter] = useState(400)
  const [health, setHealth] = useState(500)
  const [other, setOther] = useState(600)
  var total: number = 12*(+HnU + +transp + +food + +enter + +health + +other)
  var surplus = Income - total
  var exc = surplus/12

    function toggleEditIn(){
      if (editIn)
        setEditIn(false)
      else
        setEditIn(true)
    }
    
    function toggleEditEx(){
      if (editEx)
        setEditEx(false)
      else
        setEditEx(true)
    }

    function changeIncome(){
      const newIncome = document.getElementById('income')
      if (document.getElementById('income').value !== ""){
      setIncome(newIncome.value)}
      setEditIn(true)
    }

    function changeF(){
      if (document.getElementById('h&u').value !== ""){
      setHnU(document.getElementById('h&u').value)}
      if (document.getElementById('transp').value !== ""){
      setTransp(document.getElementById('transp').value)}
      if (document.getElementById('food').value !== ""){
      setFood(document.getElementById('food').value)}
      if (document.getElementById('enter').value !== ""){
      setEnter(document.getElementById('enter').value)}
      if (document.getElementById('health').value !== ""){
      setHealth(document.getElementById('health').value)}
      if (document.getElementById('other').value !== ""){
      setOther(document.getElementById('other').value)}
      setEditEx(true)
    }

    useEffect(() => {
      total = (HnU + transp + food + enter + health + other)
    }, [total, HnU, transp, food, enter, health, other])

  return (
    <div className=''>
      <Head>
        <title>Dashboard | Bear-ly Breaking Even</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport"/>
        <link rel="icon" />
      </Head>

      <PageHeader/>

      <div className=' px-3 pt-10'>
        <div className=' flex grid rounded-lg pb-5 mx-auto h-max  bg-[#f2eadf] pb-2 pt-4 border border-black space'>
          <div className=' flex mx-6 my-5  text-xl font-semibold'>
              Welcome { Username }!
          </div>
          <div className='flex grid px-4 py-1'>
          {editIn ? <div className=''> Current Yearly Income: ${Income.toLocaleString('en', {maximumFractionDigits:2 , minimumFractionDigits: 2})} </div> : 
          <div className=''> Edit Yearly Income: ${Income.toLocaleString('en', {maximumFractionDigits:2 , minimumFractionDigits: 2})} =>
            <input className="shadow appearance-none border rounded mx-2 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="income" type="number" placeholder="ex. 125000" ></input>
            <button onClick={changeIncome} className='text-sm underline mx-1 my-2'> Submit </button>
          </div>}
          <button id="inputButton" onClick= {toggleEditIn} className='flex text-gray-600 text-xs py-2 underline hover:cursor-pointer'>Toggle Edit Income</button><br/>
            {editEx ? <div>Current Monthly Expenses: <br/>
            - Expenses of Home and Utilities: ${HnU.toLocaleString('en', {maximumFractionDigits:2 , minimumFractionDigits: 2})} <br/>
            - Expenses of Transportation: ${transp.toLocaleString('en', {maximumFractionDigits:2 , minimumFractionDigits: 2})} <br/>
            - Expenses of Food: ${food.toLocaleString('en', {maximumFractionDigits:2 , minimumFractionDigits: 2})} <br/>
            - Expenses of Entertainment: ${enter.toLocaleString('en', {maximumFractionDigits:2 , minimumFractionDigits: 2})} <br/>
            - Expenses of Health: ${health.toLocaleString('en', {maximumFractionDigits:2 , minimumFractionDigits: 2})} <br/>
            - Other Expenses: ${other.toLocaleString('en', {maximumFractionDigits:2 , minimumFractionDigits: 2})} <br/></div> : 
            <div>Current Monthly Expenses: <br/>
            - Edit Expenses of Home and Utilities: ${HnU.toLocaleString('en', {maximumFractionDigits:2 , minimumFractionDigits: 2})} =><input className="m-1 shadow appearance-none border rounded mx-1 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="h&u" type="number"></input><br/>
            - Edit Expenses of Transportation: ${transp.toLocaleString('en', {maximumFractionDigits:2 , minimumFractionDigits: 2})} =><input className="m-1 shadow appearance-none border rounded mx-1 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="transp" type="number" ></input><br/>
            - Edit Expenses of Food: ${food.toLocaleString('en', {maximumFractionDigits:2 , minimumFractionDigits: 2})} =><input className="m-1 shadow appearance-none border rounded mx-1 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="food" type="number"></input><br/>
            - Edit Expenses of Entertainment: ${enter.toLocaleString('en', {maximumFractionDigits:2 , minimumFractionDigits: 2})} =><input className="m-1 shadow appearance-none border rounded mx-1 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="enter" type="number"></input><br/>
            - Edit Expenses of Health: ${health.toLocaleString('en', {maximumFractionDigits:2 , minimumFractionDigits: 2})} =><input className="m-1 shadow appearance-none border rounded mx-1 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="health" type="number"></input><br/>
            - Edit Other Expenses: ${other.toLocaleString('en', {maximumFractionDigits:2 , minimumFractionDigits: 2})} =><input className="m-1 shadow appearance-none border rounded mx-1 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="other" type="number"></input><br/>
            <button id="changeExpenses" onClick={changeF} className='text-sm underline mx-1 my-2'>Submit</button>
            </div>}
            <button id="expensesButton" onClick={toggleEditEx} className='flex text-gray-600 text-xs py-2 underline hover:cursor-pointer'>Toggle Edit Expenses</button><br/>
            Total Yearly Expenses: ${total.toLocaleString('en', {maximumFractionDigits:2 , minimumFractionDigits: 2})} <br/>
            Capital After Expenses: ${surplus.toLocaleString('en', {maximumFractionDigits:2 , minimumFractionDigits: 2})}<br/>
            Monthly Excess Income: ${exc.toLocaleString('en', {maximumFractionDigits:2 , minimumFractionDigits: 2})}
            </div>
        </div>
        <div className=' flex mx-5 my-5 text-gray-500 text-sm font-semibold'> Copyright © 2023 SMD Inc. </div>
      </div>
    </div>
)
}