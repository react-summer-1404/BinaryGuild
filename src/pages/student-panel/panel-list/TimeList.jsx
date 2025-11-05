import React from 'react'
import TimeData from '../../../core/constant/time-panel-data/TimeData'
import Time from '../dashboard/time/Time'
import { useTranslation } from 'react-i18next'

const TimeList = () => {
    const {t} = useTranslation()
  return (
    <div>
      {TimeData.map((value)=>{
        return(
            <Time
                key={value.id}
                id={value.id}
                name={t("HourAndDate" + value.id)}
                description={t("TimeAndDay" + value.id)}
                image={value.image}
            />
        )
      })}
    </div>
  )
}

export default TimeList
