import { connect } from "../../dbConfig/dbConfig";

import fs from 'fs';
import { NextResponse } from "next/server";
import File, { IFile } from '../../models/file';
import User from '../../models/userModel';

connect();

export async function POST(req: Request) {

  //const userId = req.user.id;

  const formData = await req.formData();
  const formDataEntryValues = Array.from(formData.values());
  for (const formDataEntryValue of formDataEntryValues) {
    if (typeof formDataEntryValue === "object" && "arrayBuffer" in formDataEntryValue) {
      const file = formDataEntryValue as unknown as Blob;
      const buffer = Buffer.from(await file.arrayBuffer());

      // Save the file to MongoDB using Mongoose
      const savedFile: IFile = await File.create({ name: file.name, path: `public/${file.name}` });
      console.log(savedFile)
      // Save the file to the public directory

      fs.writeFileSync(`public/${file.name}`, buffer);
    }
  }
  return NextResponse.json({ success: true });
}


