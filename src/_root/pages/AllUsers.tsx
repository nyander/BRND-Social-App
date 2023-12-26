import Loader from "@/components/shared/Loader";
import UserCard from "@/components/shared/UserCard";
import { useGetUsers } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";

const AllUsers = () => {
  const {data: creators, isLoading: isUserLoading, isError: isErrorCreators} = useGetUsers();

  return (
    <div className="people-container">
    <h2 className='h4-bold md:h3-bold text-left w-full'>Top Creators</h2>
    <div className='flex justify-center w-full p-4'>
            
            {isUserLoading && !creators ? (<Loader/>) 
               : (
                 <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full'>
                   {creators?.documents.map((user: Models.Document) => (
                     <UserCard creator={user} key={user.$id} />
                   ))}
                 </ul>
                 
               
               )} 
             
           
       </div>
    </div>
  )
}

export default AllUsers