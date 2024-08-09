import { Router, Request, Response } from "express";
import Place from "../models/place";
import Comment from "../models/comment";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const places = await Place.find();
    res.render("places/index", { places });
  } catch (err) {
    console.error(err);
    res.render("error404");
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    await Place.create(req.body);
    res.redirect("/places");
  } catch (err) {
    console.error("err", err);
    res.render("error404");
  }
});

router.get("/new", (req: Request, res: Response) => {
  res.render("places/new");
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const place = await Place.findById(req.params.id).populate("comments");
    console.log(place.comments);
    res.render("places/show", { place });
  } catch (err) {
    console.error(err);
    res.render("error404");
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    await Place.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/places/${req.params.id}`);
  } catch (err) {
    console.error("err", err);
    res.render("error404");
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    await Place.findByIdAndDelete(req.params.id);
    res.redirect("/places");
  } catch (err) {
    console.error("err", err);
    res.render("error404");
  }
});

router.get("/:id/edit", async (req: Request, res: Response) => {
  try {
    const place = await Place.findById(req.params.id);
    res.render("places/edit", { place });
  } catch (err) {
    res.render("error404");
  }
});

router.post("/:id/rant", (req: Request, res: Response) => {
  res.send("GET /places/:id/rant stub");
});

router.post("/:id/comment", async (req: Request, res: Response) => {
  console.log("post comment", req.body);
  if (req.body.author === "") req.body.author = undefined;
  req.body.rant = req.body.rant ? true : false;

  try {
    const place = await Place.findById(req.params.id);
    const comment = await Comment.create(req.body);
    place.comments.push(comment.id);
    await place.save();
    res.redirect(`/places/${req.params.id}`);
  } catch (err) {
    res.render("error404");
  }
});

router.delete(
  "/:id/comment/:commentId",
  async (req: Request, res: Response) => {
    try {
      await Comment.findByIdAndDelete(req.params.commentId);
      console.log("Success");
      res.redirect(`/places/${req.params.id}`);
    } catch (err) {
      console.error("err", err);
      res.render("error404");
    }
  }
);

export default router;
