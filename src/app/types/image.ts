import { Document } from "mongoose";

export interface Image extends Document {
  originalname: string;
  filename: string;
  path: string;
}