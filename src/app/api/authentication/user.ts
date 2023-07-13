const jwt = require("jsonwebtoken");
const { User: UserModel } = require("../models/User.js");
import { Response } from 'express';

require('dotenv').config();


const secret = process.env.SECRET

interface IBody {
  body: {
    name: string;
    email: string;
    password: string;
  }

  params: {
    id: string
  }
}

const userController = {
  create: async (req: IBody, res: Response) => {
    try {
      const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      if (!user.name) {
        res.status(422).json({ msg: "Nome obrigatorio!" });
      }
      if (!user.email) {
        res.status(422).json({ msg: "Email obrigatorio!" });
      }
      if (!user.password) {
        res.status(422).json({ msg: "Senha obrigatoria!" });
      }

      const response = await UserModel.create(user);

      const token = jwt.sign(
        {
          id: response.id
        }, secret
      )

      res.status(201).json({ response, msg: "Serviço criado com sucesso!", token, secret });
    } catch (error) {
      console.log("aaaaaaaaa", error);
    }
  },

  getAll: async (req: IBody, res: Response) => {
    try {
      const users = await UserModel.find();

      res.json(users);
    } catch (error) {
      console.log(error);
    }
  },

  get: async (req: IBody, res: Response) => {
    try {
      const id = req.params.id;
      const user = await UserModel.findById(id, '-password');

      if (!user) {
        res.status(404).json({ msg: "Nao encontrado" });
        return;
      }

      res.json(user);
    } catch (error) {
      console.log(error);
    }
  },

  delete: async (req: IBody, res: Response) => {
    try {
      const id = req.params.id;
      const user = await UserModel.findById(id);

      if (!user) {
        res.status(404).json({ msg: "Nao encontrado" });
        return;
      }

      const deletedUser = await UserModel.findByIdAndDelete(id);

      res
        .status(200)
        .json({ deletedUser, msg: "Usuario excluido com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },

  update: async (req: IBody, res: Response) => {
    try {
      const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      const id = req.params.id;

      const updatedUser = await UserModel.findByIdAndUpdate(id, user);

      if (!updatedUser) {
        res.status(404).json({ msg: "Nao encontrado" });
        return;
      }

      res.status(200).json({ user, msg: "Usuario atualizado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = userController;
