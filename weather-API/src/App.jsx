import React,{useState} from "react"
import axios from "axios";

function App() {

  const [data,setData] = useState({})
  const [location,setLocation] = useState('')

   const WEATHER_API_key="73f7fde1e025b875e7147ec93915e2a7"
   const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=zh_tw&units=metric&appid=${WEATHER_API_key}`
  //toSave json    https://api.openweathermap.org/data/2.5/weather?q=Taiwan&appid=73f7fde1e025b875e7147ec93915e2a7
  
  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      //event.key === 'Enter' 鍵盤Enter
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)//回傳資料
      })
      setLocation('')//搜尋完回空字串
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchLocation}//鍵盤Enter回傳輸入值
        placeholder="Enter Locaton"
        type="text" 
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}。Ｆ</h1> : null}
            {/* 因為API裡面是JSON{} ,所以是main.temp */}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> :null}
            {/* 因為API裡面是陣列 ,所以是weather[0].main */}
          </div>
        </div>
        {/* 讓下排 輸入後不再顯示 data.name != undefined */}
        {data.name != undefined &&
        <div className="bottom">
        <div className="feels">
          {data.main ? <p className="bold">{data.main.temp.toFixed()}。Ｆ</p> : null}
          <p>Feels Like</p>
        </div>
        <div className="humidity">
        {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
          <p>Humidity</p>
        </div>
        <div className="wind">
        {data.wind ? <p className="bold">{data.wind.speed.toFixed()}%</p> : null}
          <p>Wind Speed</p>
        </div>
      </div>
        }
        
      </div>
    </div>
  )
}

export default App;













































//舉例

// export default function Example() {
//   // 声明一个新的叫做 “count” 的 state 变量
//   const [count, setCount] = useState(0);
// //useState() 印出空值 useState(0) 印出數  useState("")印出一字字串  反映到{count}
// //{count} 變數  setCount 做啥麼事  useState(0) 回傳值型式
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }