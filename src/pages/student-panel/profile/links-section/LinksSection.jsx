import { useQuery } from '@tanstack/react-query';
import Linkedin from './linkedin/Linkedin';
import Telegram from './telegram/Telegram';
import { AddProfileInfo } from '../../../../core/services/api/put-data/index';
import { useState } from 'react';

const LinksSection = () => {
  return (
    <div className="w-3/4 mr-2 flex flex-wrap gap-2 mt-16 border-r-1 min-h-1/4 border-boarder">
      <div className="w-10/12 m-auto mr-9 ml-9 flex justify-start flex-nowrap gap-2">
        <Telegram />
      </div>
      <div className="w-10/12 m-auto mr-9 ml-9 flex justify-start flex-nowrap gap-2">
        <Linkedin  />
      </div>
      
    </div>
  )
}

export default LinksSection
