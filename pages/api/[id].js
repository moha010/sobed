import { all } from "@/date/date";

export default function handler(req, res) {
  let id = req.query.id ;
  let post = all.find(p => p.id == id)
  if(post){
    res.status(200).json(post)
  }
}