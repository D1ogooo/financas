
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma";
import type { SignInType, AuthServiceTypes } from "../@types/AuthTypes.ts";
import { jwtConfig } from "../configs/auth";
import { HttpException } from "../errors/HttpException";
import 'dotenv/config';

class AuthService {
  name?: string;
  email: string;
  password: string;

  constructor(body: AuthServiceTypes) {
    this.name = body.name;
    this.email = body.email;
    this.password = body.password;
  }

  public async signin() {
    if (!this.email || !this.password) {
      throw new HttpException(400, "Preencha todos os campos");
    }
  
    const userEmail = await prisma.user.findFirst({
      where: { email: this.email },
    })

    if (!userEmail) {
      throw new HttpException(400, "Email inválido");
    }

    const passwordMatch = await bcrypt.compare(
      this.password,
      userEmail.password,
    );

    if (!passwordMatch) {
      throw new HttpException(400, "Senha inválida");
    }

    const token = jwt.sign(
      { id: userEmail.id, name: userEmail.name },
      jwtConfig.secret as string,
      { expiresIn: "1h" },
    );

    const user = await prisma.user.findUnique({
      where: { id: userEmail.id },
      select: {
        id: true,
        name: true,
      },
    });

    return { token, user };
  }

  public async signup() {
    if (!this.name || !this.email || !this.password) {
      throw new HttpException(400, "Preencha todos os campos");
    }

     const userEmail = await prisma.user.findFirst({
      where: { email: this.email },
    })

    if (userEmail) {
      throw new HttpException(400, "Email já cadastrado");
    }

    const hashedPassword = await bcrypt.hash(this.password, 10);

    const user = await prisma.user.create({
      data: {
        name: this.name,
        email: this.email,
        password: hashedPassword,
      },
    });

    return user;
  }

}

export { AuthService };
