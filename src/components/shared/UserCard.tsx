import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Models } from "appwrite";

type UserCardProps = {
  creator: Models.Document;
}
const UserCard = ({creator} : UserCardProps) => {
  return (
    <div className="border rounded-lg border-gray-800 border-1 flex flex-col flex-center p-4">
        <Link to={``} className='flex flex-col gap-3 items-center'>
          <img src={creator.imageUrl || `/assets/icons/profile-placeholder.svg`} alt="" className='h-16 w-16 rounded-full'/>
          <div className='flex flex-col'>
          <p className="small-medium lg:base-medium">{creator.name}</p>
          </div>
        </Link>
        <p className="text-light-3 subtle-semibold lg:subtle-semibold">{creator.username}</p>
        <Button type="submit" className="shad-button_primary whitespace-nowrap mt-4">
            Follow
        </Button>
    </div>
  )
}

export default UserCard