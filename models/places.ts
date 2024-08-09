import mongoose, { Document, Schema } from "mongoose";

interface IPlace extends Document {
  name: string;
  pic: string;
  cuisines: string;
  city: string;
  state: string;
  founded: number;
  comments: mongoose.Schema.Types.ObjectId[];
  showEstablished(): string;
}

const placeSchema: Schema<IPlace> = new Schema({
  name: { type: String, required: true },
  pic: { type: String, default: "http://placekitten.com/350/350" },
  cuisines: { type: String, required: true },
  city: { type: String, default: "Anytown" },
  state: { type: String, default: "USA" },
  founded: {
    type: Number,
    min: [1673, "Surely not that old?!"],
    max: [new Date().getFullYear(), "Hey, this year is in the future!"],
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

placeSchema.methods.showEstablished = function (): string {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`;
};

export default mongoose.model<IPlace>("Place", placeSchema);
