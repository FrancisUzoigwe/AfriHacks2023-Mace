import { connect } from "mongoose"

// const DB = "mongodb://localhost:27017/AfriHack"
const DB = "mongodb://127.0.0.1:27017/AfriHack"

export const Database = async () => {
  try {
      await connect(DB!).then(() => {
        console.log("Database Connected 🚀🚀🚀")
    });
  } catch (error: any) {
    console.log("Error connecting to databse ...");
  }
};