import GridPostList from "@/components/shared/GridPostList"
import Loader from "@/components/shared/Loader";
import { useUserContext } from "@/context/AuthContext";
import { savePost } from "@/lib/appwrite/api";
import { useGetCurrentUser, useGetPosts, useGetSavedPosts } from "@/lib/react-query/queriesAndMutations";

const Saved = () => {
  // const { data: posts, fetchNextPage, hasNextPage } = useGetPosts();
  const {data: currentUser} = useGetCurrentUser();
  const savedPosts = currentUser?.save.map((savePost: Models.Document) => ({
    ...savePost.post,
    creator: {
      imageUrl: currentUser.imageUrl,
    }
  }));

  console.log(savedPosts);

  return (
    <div className="saved-container">
      <h2 className='h4-bold md:h3-bold text-left w-full'>Saved Posts</h2>
      <div className='flex flex-wrap gap-9 w-full max-w-5xl'>
        {!currentUser ? (
        <Loader />
        ) : (
          <ul className="w-full flex justify-center max-w-5xl gap-9">
            {savedPosts.length === 0 ? (
              <p className="text-light-4">No available posts</p>
            ) : (
              <GridPostList posts={savedPosts} showStats={false} />
            )}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Saved
