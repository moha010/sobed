// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { all } from "@/date/date"
export default function handler(req, res) {
  res.status(200).json(all)
}
