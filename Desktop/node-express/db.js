import pkg from "pg"
 const {Pool} =pkg

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'root',
  database: 'express-crud',   
  port: 5432,                       

});

pool.on("connect",()=>{
  console.log("db connected");
  
})

export default pool;