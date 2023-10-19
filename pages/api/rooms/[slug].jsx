// export default function handler(req, res) {
//   const { id } = req.query;

//   if (Array.isArray(id)) {
//     res.end(`RoomKeys: ${id.join(', ')}`);
//   } else {
//     res.end(`RoomKey: ${id}`);
//   }
// }



// pages/api/rooms/[id].js

import { ObjectId } from 'mongodb';
import clientPromise from '../../../lib/mongodb';

export default async function handler({ query }, res) {
  const { id } = query;
  const client = await clientPromise;
  const db = client.db('Hotel');

  const post = await db.collection('Rooms').findOne({ id});

  res.json({ status: 200, data: post });
}




