import { useEffect, useState } from "react"


function Clock() {

  const [time, setTime] = useState(new Date().toLocaleDateString());

  const [secondsRotation, setSecondsRotation] = useState(0);

  const [minutesRotation, setMinutesRotation] = useState(0);

  const [hoursRotation, setHoursRotation] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
        setTime(new Date().toLocaleDateString());
        setSecondsRotation(rotation => rotation + 6);
    }, 1000);

    return () => clearInterval(interval)
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
        setMinutesRotation(rotation => rotation + 6);
    }, 60000);

    return () => clearInterval(interval)
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
        setHoursRotation(rotation => rotation + 30);
    }, 3600000);

    return () => clearInterval(interval)
  }, []);

   const secondsRing = () => {

      const arr = []

      for(let i=1; i<=60; i++){
        arr.push(i)
      }

      return arr.map((second, index) => {
        

        return(
            <span key={index} style={{ transform: `rotate(${secondsRotation + index * 6}deg)` }}>
                <b style={{ transform: `rotate(${-index * 6}deg)` }}>{second}</b>
            </span>
        )
      })
   }


   const minutesRing = () => {

    const arr = []

      for(let i=1; i<=60; i++){
        arr.push(i)
      }

    return arr.map((minutes, index) => {
        return (
            <span key={index} style={{ transform: `rotate(${minutesRotation + index * 6}deg)` }}>
                {minutes}
            </span>
        )
    })

   }

   const hoursRing = () => {

    const arr = []

      for(let i=1; i<=24; i++){
        arr.push(i)
      }

    return arr.map((hours, index) => {
        return (
            <span key={index} style={{ transform: `rotate(${hoursRotation + index * 15}deg)` }}>
                {hours}
            </span>
        )
    })

   }


  return (
    <>
    <div className="container">
    <div className='outer-ring'>
        {secondsRing()}
        <div className="seconds-ring">
            {minutesRing()}
            <div className="hours-ring">
                    {hoursRing()}
            </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Clock
