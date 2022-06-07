// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import orgModel from "./models/org.js"
// import Trip from "./models/tripModel.js"
// import Partic from "./models/participant.js"
// import usermodel from "./models/userModel.js"
// import tripRoutes from "./routes1/trip_routes.js"
// import test_Rout from "./routes1/testroute.js"
// //import org_part from "./trip_routes.js"
// import participant_tips from "./routes1/partic_routes.js"
// import userRoutes from "./routes1/user_routes.js"
// import chap_org_Routes from "./routes1/org_routes.js"
// import trip_leader from "./routes1/tripleaderrout.js"
// import bodyParser from 'body-parser';
// import fastCsv from 'fast-csv';
// import fs from 'fs';
// import { Parser } from 'json2csv';
// import { stringify } from 'csv-stringify';
// import partic from './models/participant.js';
// const json2csvParser = new Parser({ header: true });
// //import userModel from "../models/userModel.js"
// //const ws = fs.createWriteStream("chaprone2.csv");

// dotenv.config('./.env');
// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// async function connectDB() {
//     try {
//         await mongoose.connect(`mongodb://${process.env.URL}`, {
//             useNewUrlParser: true,
//             useCreateIndex: true,
//             useFindAndModify: false,
//             useUnifiedTopology: true,
//         });
//         console.log('MongoDB connected...');
//     } catch (err) {
//         console.log(err.message);
//         process.exit(1);
//     }
// };

// const db = connectDB();
// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`Serve at http://localhost:${port}`);
// });
// //Routes
// app.use('/', participant_tips);
// app.use('/', chap_org_Routes);
// app.use('/', tripRoutes);
// app.use('/', userRoutes);
// app.use('/', test_Rout);
// app.use('/', trip_leader);







// export default app
