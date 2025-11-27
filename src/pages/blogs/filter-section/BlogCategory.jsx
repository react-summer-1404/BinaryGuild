import { useQuery } from '@tanstack/react-query';
import Date from '../../../components/common/search-and-date/date/Date';
import Search from '../../../components/common/search-and-date/search/Search';
import { GetBlogsCategory } from '../../../core/services/api/get-data';
import CategorySection from './category/CategorySection';

const BlogCategory = ({setFilter}) => {
    const {data : blogsCategoryData} = useQuery({
        queryKey:["GET_CATEGORY"],
        queryFn:GetBlogsCategory,
    })
    console.log("categoryData",blogsCategoryData)
  return (
    <div className='flex flex-wrap mt-4 mb-2 w-10/12 m-auto gap-2'>
    
      <Search setFilter={setFilter}/>
      <CategorySection setFilter={setFilter} CategoryId={blogsCategoryData}/>
      <Date setFilter={setFilter}/>
    </div>
  )
}

export default BlogCategory
