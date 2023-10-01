import { NextApiResponse, NextApiRequest } from 'next'
import { people } from '../../../data'
import { Person } from '../../../interfaces'





import clientPromise from "../../../lib/mongodb";

export default async function handler({req, res, posts} ) {
  const client = await clientPromise;
  const db = client.db("Hotel");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let newPost = await db.collection("Rooms").insertOne(bodyObject); // Inserimento di un singolo documento
      res.json(newPost.ops[0]);
      break;
    case "GET":
      const posts = await db.collection("Rooms").find({}).toArray();
      res.json({ status: 200, data: posts });
      break;
      // console.log(req.query.slug)
      // const str2 = req.query.slug.charAt(0).toUpperCase()+ req.query.slug.slice(1);
      // const posts = await db.collection("Rooms").find({ name: { "$eq": str2 }}).toArray();
      // res.json({ status: 200, data: posts });
    //  res.json({ status: 200, data: [hej: "Yaaay"] });
      // break;
  }
  return res.status(200).json(people)
 

}








