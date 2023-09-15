import mongoose, { Document } from 'mongoose';

export interface IFile extends Document {
  name: string;
  path: string;
}

const FileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});

export default mongoose.models.File || mongoose.model<IFile>('File', FileSchema);
