import { useEffect, useState } from "react"


function Clock() {

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const [secondsRotation, setSecondsRotation] = useState(90);

  const [minutesRotation, setMinutesRotation] = useState(90);

  const [hoursRotation, setHoursRotation] = useState(90);



  useEffect(() => {

    const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString())
        setSecondsRotation(rotation => rotation - 6);
    }, 1000);

    return () => clearInterval(interval)
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
        setMinutesRotation(rotation => rotation - 6);
    }, 60000);

    return () => clearInterval(interval)
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
        setHoursRotation(rotation => rotation - 15);
    }, 3600000);

    return () => clearInterval(interval)
  }, []);



  const currentTime = new Date();

  const currentSecond = currentTime.getSeconds();
  const currentMinute = currentTime.getMinutes();
  const currentHour = currentTime.getHours();

   const secondsRing = () => {

      const arr = []

      for(let i=0; i<60; i++){
        arr.push(i)
      }

      return arr.map((second, index) => {
        const isCurrentSecond = index === currentSecond;
        
        return(
            <span key={index} style={{ transform: `rotate(${secondsRotation + index * 6}deg)`, transition: "transform 1s linear" }}>
                <p style={{ display: "inline-block", transform: `rotate(${-secondsRotation -index * 6}deg)`, color: isCurrentSecond ? "aqua" : "rgb(197, 197, 197)"}}>{second}</p>
            </span>
        )
      })
   }


   const minutesRing = () => {

    const arr = []

      for(let i=0; i<60; i++){
        arr.push(i)
      }

    return arr.map((minutes, index) => {
        const isCurrentMinute = index === currentMinute;
        return (
            <span key={index} style={{ transform: `rotate(${minutesRotation + index * 6}deg)` }}>
                <p style={{display:"inline-block", transform: `rotate(${-minutesRotation -index * 6}deg)`, color: isCurrentMinute ? "aqua": "rgb(197, 197, 197)"}}>
                    {minutes}
                </p>
            </span>
        )
    })

   }

   const hoursRing = () => {

    const arr = []

      for(let i=0; i<24; i++){
        arr.push(i)
      }

    return arr.map((hours, index) => {
        const isCurrentHour = index === currentHour;
        return (
            <span key={index} style={{ transform: `rotate(${hoursRotation + index * 15}deg)` }}>
                <p style={{display: "inline-block", transform:`rotate(${-hoursRotation -index*15}deg)`, color:isCurrentHour ? "aqua": "rgb(197, 197, 197)"}}>
                    {hours}
                </p>
            </span>
        )
    })

   }


  return (
    <>
    <div className="container">
    
    <div className='outer-ring'>
        {secondsRing()}
        <div className="cover-rectangle">

        </div>
        <div className="seconds-ring">
            {minutesRing()}
            <div className="cover-rectangle">

            </div>
            <div className="hours-ring">
                {hoursRing()}
                <div className="cover-rectangle">
                
                </div>
                <div className="current-timer">
                    {time}
                </div>
            </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Clock
