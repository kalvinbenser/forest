import { PrismaClient } from "@prisma/client";
import * as RESPONSE from "../constants/response.js";

const prisma = new PrismaClient();

export const createTreeSites = async (req, res) => {
  try {
    console.log("req body", req.body.site_name);
    const data = {
      site_name: req.body.site_name,
      site_image: req.body.site_image,
      rate_per_tree: req.body.rate_per_tree,
      total_plant: req.body.total_plant,
      availabile_plant: req.body.availabile_plant,
      site_description: req.body.site_description,
      state: req.body.state,
      city: req.body.city,
    };
    const resData = await prisma.TreeSites.create({
      data,
    });
    RESPONSE.SUCCESS.data = { tree_site_id: resData.tree_site_id };
    RESPONSE.SUCCESS.Message = RESPONSE.MESSAGE.OK;
    res.status(RESPONSE.CODE.OK).send(RESPONSE.SUCCESS);
  } catch (err) {
    RESPONSE.FAILURE.Message = RESPONSE.MESSAGE.BAD_REQUEST;
    RESPONSE.FAILURE.Error = err.message;
    res.status(RESPONSE.CODE.BAD_REQUEST).send(RESPONSE.FAILURE);
  }
};

export const getAllTreeSites = async (req, res) => {
  try {
    const data = await prisma.TreeSites.findMany();
    RESPONSE.SUCCESS.data = data;
    RESPONSE.SUCCESS.Message = RESPONSE.MESSAGE.OK;
    res.status(RESPONSE.CODE.OK).send(RESPONSE.SUCCESS);
  } catch (err) {
    RESPONSE.FAILURE.Message = RESPONSE.MESSAGE.BAD_REQUEST;
    RESPONSE.FAILURE.Error = err.message;
    res.status(RESPONSE.CODE.BAD_REQUEST).send(RESPONSE.FAILURE);
  }
};

export const getTreeSitesById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id", Number(id));
    const data = await prisma.TreeSites.findFirst({
      where: { tree_site_id: Number(id) },
    });
    RESPONSE.SUCCESS.data = data;
    RESPONSE.SUCCESS.Message = RESPONSE.MESSAGE.OK;
    res.status(RESPONSE.CODE.OK).send(RESPONSE.SUCCESS);
  } catch (err) {
    RESPONSE.FAILURE.Message = RESPONSE.MESSAGE.BAD_REQUEST;
    RESPONSE.FAILURE.Error = err.message;
    res.status(RESPONSE.CODE.BAD_REQUEST).send(RESPONSE.FAILURE);
  }
};
