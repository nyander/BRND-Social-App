import { Models } from 'appwrite'
import Loader from './Loader'
import GridPostList from './GridPostList'

type searchResultsProps  = {
  isSearchFetching: boolean,
  searchedPosts: Models.Document[]
}


const SearchResults = ({isSearchFetching,searchedPosts}: searchResultsProps) => {
  if(isSearchFetching) return <Loader />

  if (searchedPosts.length === 0) {
    return <p className='text-light-4 mt-10 text-center w-full'>No results found</p>
  }

  if(searchedPosts && searchedPosts.length > 0 ) {
    return (
    <GridPostList posts={searchedPosts}  />
    )
  }
    
  
  return (
    <p className='text-light-4 mt-10 text-center w-full'>No results found</p>
  )
}

export default SearchResults