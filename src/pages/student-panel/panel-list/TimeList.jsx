import { useTranslation } from 'react-i18next'
import TimeData from '../../../core/constant/time-panel-data/TimeData'
import Time from '../dashboard/time/Time'

const TimeList = () => {
    const {t} = useTranslation()
    
  return (
    <div className='flex flex-nowrap w-full mt-4'>
      {TimeData.map((value)=>{
        return(
            <Time
                key={value.id}
                id={value.id}
                name={t("HourAndDate" + value.id)}
                description={value.description}
                image={value.image}
            />
        )
      })}
    </div>
  )
}

export default TimeList
