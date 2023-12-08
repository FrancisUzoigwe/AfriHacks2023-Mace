import express, { Application,json } from "express";
import { mainApp } from "./mainApp";
import { Database } from "./utils/database";

const port: number = 2345;

const app: Application = express();

mainApp(app)

const server = app.listen(port,() => {
console.log()
Database()
})

process.on("uncaughtException", (error:Error) => {
    console.log(`Error due to ${error.message}`)
})

process.on("unhandledRejection", (reason:any) => {
    console.log(`Error due to ${reason.message}`);
    
    server.close(() => {
        process.exit(1);
    })
});
