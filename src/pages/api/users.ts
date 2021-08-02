import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
   const users = [
       {id: 1, name: 'Hugo'},
       {id: 2 , name: 'Fulano'},
       {id: 3 , name: 'Siclano'},
   ]
   return response.json(users)
}