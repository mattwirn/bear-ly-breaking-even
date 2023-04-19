import Head from 'next/head'
import {useRouter} from "next/router"
import {useState, useEffect} from "react"
import PageHeader from '@/components/PageHeader'
import ExpenseTable from '@/components/ExpenseTable'
import classNames from "classnames";
import Test from '@/components/Test'


export default function Dashboard() {
  const router = useRouter()
  const [editIn, setEditIn] = useState(true)
  const [editEx, setEditEx] = useState(true)
  const [data, setData] = useState()
  const [exp, setExp] = useState(false)

  function signupLink() {
    router.push('/signup')
  }

  const [Income, setIncome] = useState(0)
  const [HnU, setHnU] = useState(100)
  const [transp, setTransp] = useState(200)
  const [food, setFood] = useState(300)
  const [enter, setEnter] = useState(400)
  const [health, setHealth] = useState(500)
  const [other, setOther] = useState(600)
  var total: number = 12*(+HnU + +transp + +food + +enter + +health + +other)
  var surplus = Income - total
  var exc = surplus/12

  async function get() {
    const result = await fetch('http://localhost:8080/dashboard/get')
    .then((result) => {
      result.json()
      setData(result)
    })
  }
    
  
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

    function showExp(){
      setExp(true)
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
      //get()
    }, [data, total, HnU, transp, food, enter, health, other])


    function load() {
      console.log("")
    }

    var Username = "User"

  return (
    <div className=''>
      <Head>
        <title>Dashboard | Bear-ly Breaking Even</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport"/>
        <link rel="icon" />
      </Head>

      <PageHeader/>

      <div className='px-3 pt-10'>
        <div className=' flex grid rounded-lg pb-5 mx-auto h-max  bg-[#f2eadf] pb-2 pt-4 border border-black space'>
          <div className=' flex mx-6 my-5  text-xl font-semibold'>
              Welcome!
          </div>

          

          <div className='flex grid px-4 py-1'>
          {editIn === true ? <div className=''> Current Yearly Income: ${Income.toLocaleString('en', {maximumFractionDigits:2 , minimumFractionDigits: 2})} </div> : 
          <div className=''> Edit Yearly Income: ${Income.toLocaleString('en', {maximumFractionDigits:2 , minimumFractionDigits: 2})} =>
            <input className="shadow appearance-none border rounded mx-2 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="income" type="number" placeholder="ex. 125000" ></input>
            <button onClick={changeIncome} className='text-sm underline mx-1 my-2'> Submit </button>
          </div>}
          <button id="inputButton" onClick= {toggleEditIn} className='text-left text-gray-600 text-xs py-2 underline hover:cursor-pointer'>Toggle Edit Income</button><br/> 
           {exp ?
           <div className=' grid place-items-center'>
           
           <Test/>
           </div> : <div><button onClick={showExp} className='bg-[#addfad] text-xl drop-shadow-lg rounded-lg px-6 py-3 border border-black py-4 my-5'>  Load Expenses  </button></div>}

            </div>
        </div>
        <div className=' flex mx-5 my-5 text-gray-500 text-sm font-semibold'>  </div>
      </div>
    </div>
)
  }