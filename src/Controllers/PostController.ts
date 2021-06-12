import { Response, Request } from "express";

class PostController {
  async store(req: Request, res: Response) {
    const data = req.body;

    return res.json(data);
  }
}

export { PostController };
