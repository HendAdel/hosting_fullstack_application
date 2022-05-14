// import  config  from "bluebird";
import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

// const {
//   POSTGRES_HOST,
//   DB_PORT,
// POSTGRES_DB,
// POSTGRES_USERNAME,
// POSTGRES_PASSWORD,
// PORT,
// AWS_REGION,
// AWS_PROFILE,
// AWS_BUCKET,
// JWT_SECRET
// } = process.env;
// export default {
//   host: POSTGRES_HOST,
//   db_port: parseInt(DB_PORT as string, 10),
//   port: parseInt(PORT as string, 10),
//   database: POSTGRES_DB ,
//   username: POSTGRES_USERNAME,
//   password: POSTGRES_PASSWORD,
//   dialect: "postgres",
//   aws_region: AWS_REGION,
//   aws_profile: AWS_PROFILE,
//   aws_media_bucket: AWS_BUCKET,
//   url: process.env.URL,
//   jwt: {
//     secret: JWT_SECRET,
//   },
// };
export const config = {
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  db_port: parseInt(process.env.DB_PORT as string, 10),
  port: parseInt(process.env.PORT as string, 10),
  // db_port: Number(process.env.DB_PORT),
  // port: Number(process.env.PORT),
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
