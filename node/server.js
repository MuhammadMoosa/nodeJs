import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import {getContinent} from './utility/util.js'
const PORT = 8000

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()


  /*
Challenge:
  1. Create a utility function to make this code DRYer.
  2. Delete unnecessary code.
*/



  if (req.url === '/api' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify(destinations))
  } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
    const continent = req.url.split('/').pop() // Get the last part of the URL 

    
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
   let filteredDestinations =continent&& getContinent({destinations, continent}) // Use the utility function to filter destinations
    res.end(JSON.stringify({filteredDestinations}))

  /*
  Challenge:
  1. Check if the url starts with “/api/continent”.
    (Is there a JS method that allows you to check what a string starts with?)

  2. If it does, serve only items from that continent.
    (How can you get to what comes after the final slash?)
    (What method can you use to filter data?)
  */
    } else {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 404
    res.end(JSON.stringify({
      error: "not found",
      message: "The requested route does not exist"
    })
    )
  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
