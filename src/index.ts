import express, { Request, Response } from "express";
import postgres from "postgres";
import cors from "cors";
import dotenv from "dotenv";

// const port = 8000;
const port = process.env.PORT || 8000;
dotenv.config();

const sql = postgres("postgresql://neondb_owner:npg_UikyhjM1r3Zc@ep-tight-snowflake-a1nbqy59-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require")
const app = express();

app.use(express.json());
app.use(cors());

app.post("/create", async (req:Request, res:Response)=>{
    try{
        const {donor_id,receiver_id,amount} = req.body

        const donations = await sql`
        insert into donations (donor_id, receiver_id, amount)
        values (${donor_id}, ${receiver_id}, ${amount})
        returning *;
      `;
      
       res.status(201).json({success:true , donations})
    }catch(err){
        res.status(400).json({success:false ,message: "aldaaaaaaa"})
    }
});


app.get("/donations", async (req:Request, res:Response)=>{
    const donations = await sql `select * from donations`;  
    res.json({donations});
});
// app.get("/get", async(req:Request, res:Response) => {
//     res.json({success:true , data})
// })

app.listen(port,()=>{
console.log(`Example app listening on port ${port}`);
});


// async function getUsers() {
//     const users = await sql`select * from users`;
//     console.log(users);
// }

// getUsers();

