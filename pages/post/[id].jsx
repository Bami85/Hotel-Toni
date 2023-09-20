import { useRouter } from "next/router";
import Navbar from '../../components/Navbar'



export default function RoomPage() {
    const router = useRouter()
    const id = router.query.id 
  return (
    <div>
      <h1>Dhoma: {id}</h1>
    </div>
  )
}

