import Link from 'next/link'
import { Person } from '../interfaces'



export default function PersonComponent({ person }) {
  return (
    <li>
      <Link href="/person/[id]" as={`/person/${person._id}`}>
        {person.name}
      </Link>
    </li>
  )
}