import React from 'react'
import Search from './search/Search';
import CategorySection from './category/CategorySection';
import { GetCategory } from '../../../core/services/api/get-data';
import { useQuery } from '@tanstack/react-query';

const BlogCategory = ({setFilter}) => {
    const {data : categoryData} = useQuery({
        queryKey:["GET_CATEGORY"],
        queryFn:GetCategory,
    })
    console.log("categoryData",categoryData)
  return (
    <div className='flex flex-wrap mt-4 mb-2 w-10/12 m-auto gap-2'>
    
      <Search setFilter={setFilter}/>
      <CategorySection ListTech={categoryData}/>
    </div>
  )
}

export default BlogCategory
