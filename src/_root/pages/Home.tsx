import Loader from '@/components/shared/Loader';
import PostCard from '@/components/shared/PostCard';
import { useGetRecentPosts } from '@/lib/react-query/queriesAndMutations';
import { Models } from 'appwrite';

const Home = () => {
  const {data: posts, isLoading: isPostLoading } = useGetRecentPosts();


  return (
    <div className='flex flex-1'>
      <div className="home-container w-8/12">
        <div className="home-posts">
          <h2 className='h3-bold md:h2-bold text-left w-full'>Home Feed</h2>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className='flex flex-col flex-1 gap-9 w-full'>
              {posts?.documents.map((post: Models.Document) => (
                <PostCard post = {post} key={post.caption}/>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className='topProfileSidebar'>
        <h2 className='h4-bold md:h3-bold text-left w-full'>Top Creators</h2>

        <div className='flex justify-center w-full h-full p-8'>
            <ul className='grid grid-cols-2 gap-3 w-full'>
              <UserCard />
            </ul>
        </div>
        
      </div>
    </div>
  )
}
// YOU ARE NOW ON 2:15:20

export default Home