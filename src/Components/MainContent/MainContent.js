import React , { useEffect,useState } from 'react'
import "./MainContent.css"
import { CurrencyExchange, MonetizationOn, PlaylistAddCheckCircle, SupervisedUserCircle } from "@mui/icons-material"
import { axiosInstance } from '../../baseURL/BaseUrl'

function MainContent() {
  const [ totalSales, setTotalSales ] = useState([])
  const [ totalUsers, setTotalUsers ] = useState([])
  const [ totalOrders, setTotalOrders ] = useState([])
  const [ todaySale, setTodaySale ] = useState([])


  const URL1 ="/Orders/gettotalordersales"
  const URL2 ="/Users/countallusers"
  const URL3 ="/Orders/ordersCount"
  const URL4 ="/Orders/gettodaysale"


  //fetch sales
  useEffect(()=>{
    const fetchData = async(URL1) =>{
      setTotalSales(JSON.parse(localStorage.getItem("url1")))
      try{
        const totalSale = await axiosInstance?.get(URL1)
        localStorage.setItem("url1" , JSON.stringify(totalSale?.data) )
        setTotalSales(totalSale?.data)
      }catch(err){
        setTotalSales(JSON.parse(localStorage.getItem("url1")))
      }
    }
    fetchData(URL1)
  }, [URL1])
  let totalsaless = Number(totalSales[0]?.total).toFixed(2)
  let totalsalesss = Number( totalsaless).toLocaleString("en-us")

    //fetch total Users
    useEffect(()=>{
      const fetchData = async(URL2) =>{
        setTotalUsers(JSON.parse(localStorage.getItem("userz")))
        try{
          const totalSale = await axiosInstance.get(URL2)
          localStorage.setItem("userz" , JSON.stringify(totalSale?.data) )
          setTotalUsers(totalSale?.data)
        }catch(err){
          setTotalUsers(JSON.parse(localStorage.getItem("userz")))
        }
      }
      fetchData(URL2)
    }, [URL2])
    let totalusers = Number(totalUsers).toLocaleString("en-us")

       //fetch total Orders
       useEffect(()=>{
        const fetchData = async(URL3) =>{
          setTotalOrders(JSON.parse(localStorage.getItem("orders")))
          try{
            const totalSale = await axiosInstance?.get(URL3)
            localStorage.setItem("orders" , JSON.stringify(totalSale?.data) )
            setTotalOrders(totalSale?.data)
          }catch(err){
            setTotalOrders(JSON.parse(localStorage.getItem("orders")))
          }
        }
        fetchData(URL3)
      }, [URL3])
      let totalorders = Number(totalOrders).toLocaleString("en-us")

         //fetch todays Sale
         useEffect(()=>{
          const fetchData = async(URL4) =>{
            setTodaySale(JSON.parse(localStorage.getItem("todaysal")))
            try{
              const totalSale = await axiosInstance.get(URL4)
              localStorage.setItem("todaysal" , JSON.stringify(totalSale?.data) )
              setTodaySale(totalSale?.data)
            }catch(err){
              setTodaySale(JSON.parse(localStorage.getItem("todaysal")))
            }
          }
          fetchData(URL4)
        }, [URL4])
        console.log(todaySale)
        let todayIncomes = Number(todaySale[0]?.total).toFixed(2)
        let todayIncomess = Number(todayIncomes).toLocaleString("en-us")
  return (
    <div className='MainContent'>
      <div className='MainContent_container'>

        <div className='MainContent_components'>
          <div className='MainContent_objects'>
            <h1>Total Income</h1>
            <div className='MainContent_stats_income'>
              <p>${totalsalesss && totalsalesss}</p>
              <span className='show_percentage'>+55%</span>
            </div>
          </div>
          <div className='MainContent_icon'>
            <MonetizationOn className='icon'/>
          </div>
        </div>

        <div className='MainContent_components'>
          <div className='MainContent_objects'>
            <h1>Todays Income</h1>
            <div className='MainContent_stats_income'>
              <p>$5000</p>
              <span className='show_percentage'>+3%</span>
            </div>
          </div>
          <div className='MainContent_icon'>
            <CurrencyExchange  className='icon'/>
          </div>
        </div>

        <div className='MainContent_components'>
          <div className='MainContent_objects'>
            <h1>Total Users</h1>
            <div className='MainContent_stats_income'>
              <p>{totalusers && totalusers}</p>
              <span className='show_percentages'>-9%</span>
            </div>
          </div>
          <div className='MainContent_icon'>
            <SupervisedUserCircle className='icon'/>
          </div>
        </div>

        <div className='MainContent_components'>
          <div className='MainContent_objects'>
            <h1>Total orders</h1>
            <div className='MainContent_stats_income'>
              <p>{totalorders && totalorders}</p>
              <span className='show_percentages'>-13%</span>
            </div>
          </div>
          <div className='MainContent_icon'>
            <PlaylistAddCheckCircle className='icon'/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MainContent
