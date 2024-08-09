import mongoose, { Document, Schema } from "mongoose";

interface IComment extends Document {
  author: string;
  rant: boolean;
  stars: number;
  content: string;
}

const commentSchema: Schema<IComment> = new Schema({
  author: { type: String, default: "Anonymous" },
  rant: { type: Boolean, default: false },
  stars: { type: Number, required: true },
  content: { type: String, default: "" },
});

export default mongoose.model<IComment>("Comment", commentSchema);
