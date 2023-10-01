export default function handler(req, res) {
  const { id } = req.query;

  if (Array.isArray(id)) {
    res.end(`RoomKeys: ${id.join(', ')}`);
  } else {
    res.end(`RoomKey: ${id}`);
  }
}




