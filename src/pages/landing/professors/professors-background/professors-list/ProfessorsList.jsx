import React from 'react'
import ProfessorsData from '../../../../../core/constant/professors-data/ProfessorsData'
import ProfessorsBackground from '../ProfessorsBackground'
import { useTranslation } from 'react-i18next'

const ProfessorsList = () => {
    const {t} =useTranslation()
  return (
    <div className='m-auto flex bg-black-600 flex-wrap gap-4 relative'>
      <img src="/src/assets/icons/Vector 3.svg" className='absolute left-1/4 top-0.5' />
      {ProfessorsData.map((value)=>{
        return(
            <ProfessorsBackground
                key={value.id}
                id={value.id}
                name={t("ProfessorsName"+value.id)}
                medal={value.medal}
                score={t("ProfessorsScore"+value.id)}
                image={value.image}
            />
        )
      })}
    </div>
  )
}

export default ProfessorsList
