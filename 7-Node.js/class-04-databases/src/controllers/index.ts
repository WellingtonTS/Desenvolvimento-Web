import { Request, Response, NextFunction } from "express";
import { sqliteConnection } from "../databases/sqlite3";
import { compare, hash } from "bcrypt";
import { userRepository } from "../repositories/userRepository";
import { z } from "zod";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userSchema = z
        .object({
          name: z
            .string({
              required_error: "Nome obeigatório!",
              invalid_type_error: "Somente texto!",
            })
            .min(3, { message: "Mínimo de 3 caracteres!" }),
          email: z
            .string({
              required_error: "Email obeigatório!",
              invalid_type_error: "Tipo: acbd@exemplo.com!",
            })
            .email({ message: "Email invalido!" }),
          password: z
            .string({
              required_error: "Senha obeigatório!",
              invalid_type_error: "Tipo string!",
            })
            .min(7, { message: "Senha com mínimo de 7 caracteres!" })
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,}$/, {
              message:
                "A senha deve conter pelo menos uma letra Maíuscula e minúscula, um número e um caractere especial",
            }),
        })
        .strict();

      const { name, email, password } = userSchema.parse(req.body);

      return res.json({ name, email, password });

      const userEmail = await userRepository.getByEmail(email);

      if (userEmail) {
        throw res.status(400).json({ message: "email already exists!" });
      }

      const userCreated = await userRepository.create({
        name,
        email,
        password,
      });

      return res.status(201).json({ message: "user created!", ...userCreated });
    } catch (error) {
      return next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { password } = req.body;

      if (!password) {
        throw res
          .status(400)
          .json({ message: "please confirm your password!" });
      }

      const user = await userRepository.getByID(id);

      if (!user) throw res.status(404).json({ message: "user not found!" });

      const passwordCheck = await compare(password, user.password);

      if (!passwordCheck) {
        throw res.status(401).json({ message: "invalid password!" });
      }

      const { name, email } = user;
      return res.status(200).json({ name, email });
    } catch (error) {
      return next(error);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { name, email, password, newPassword } = req.body;

      const user = await userRepository.getByID(id);

      if (!user) throw res.status(404).json({ message: "user not found!" });

      const passwordCheck = await compare(password, user.password);

      if (!passwordCheck) {
        throw res.status(401).json({ message: "invalid password!" });
      }

      const userEmail = await userRepository.getByEmail(email);

      if (userEmail && userEmail.id != id) {
        throw res.status(400).json({ message: "email already exists!" });
      }

      const userUpdated = await userRepository.update({
        id,
        name,
        email,
        newPassword,
      });

      return res.status(200).json(userUpdated);
    } catch (error) {
      return next(error);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { password } = req.body;

      const user = await userRepository.getByID(id);
      if (!user) throw res.status(404).json({ message: "user not found!" });

      const passwordCheck = await compare(password, user.password);

      if (!passwordCheck) {
        throw res.status(401).json({ message: "invalid password!" });
      }

      const userDeleted = await userRepository.delete(id);
      return res.status(200).send(userDeleted);
    } catch (error) {
      return next(error);
    }
  },
};
