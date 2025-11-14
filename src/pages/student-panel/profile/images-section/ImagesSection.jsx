import { Button } from '@heroui/button';
import React from 'react'
import { useTranslation } from 'react-i18next';
import Photos from '../../../../core/icons/Photos';
import PhotoSection from './photo-section/PhotoSection';

const ImagesSection = () => {
  const { t } = useTranslation();
  return (
    <div className="w-3/4 mr-2 flex flex-wrap gap-2 mt-16 border-r-1 border-boarder">
      <Button color='primary' radius='full' className='mr-11'>
        <Photos/>
        {t("AddPhoto")}
      </Button>
      <PhotoSection/>
    </div>
  )
}

export default ImagesSection
