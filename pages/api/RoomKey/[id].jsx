import { NextApiRequest, NextApiResponse } from 'next'
import { people } from '../../../data'
import { Person, ResponseError } from '../../../interfaces'


export default function personHandler(
  req,
  res,
) {
  const { query } = req
  const { id } = query
  const person = people.find((p) => p.id === id)

  // User with id exists
  return person
    ? res.status(200).json(person)
    : res.status(404).json({ message: `User with id: ${id} not found.` })
}





// import clientPromise from "../../../lib/mongodb";
// import {Person} from '../../../interfaces'

// export default async function handler(req, res) {
//   const { query } = req
//   const { id } = query
//   const person = Rooms.find((p) => p.id === id)
//   // const person = await db.collection("Rooms").find((p)=>p.id=== id).toArray();
//   const client = await clientPromise;
//   const db = client.db("Hotel");
//   switch (req.method) {
//     case "POST":
//       let bodyObject = JSON.parse(req.body);
//       let newPost = await db.collection("Rooms").insertOne(bodyObject); 
//       res.json(newPost.ops[0]);
//       break;
//     case "GET":
//       const person = await db.collection("Rooms").find(({})).toArray();
//       res.json({ status: 200, data: person });
//       break;
//       // console.log(req.query.slug)
//       // const str2 = req.query.slug.charAt(0).toUpperCase()+ req.query.slug.slice(1);
//       // const posts = await db.collection("Rooms").find({ name: { "$eq": str2 }}).toArray();
//       // res.json({ status: 200, data: posts });
//      // res.json({ status: 200, data: [hej: "Yaaay"] });
//       // break;
//   }
//   return person
//   ? res.status(200).json(person)
//   : res.status(404).json({ message: `Room with id: ${id} not found.` })
// }
