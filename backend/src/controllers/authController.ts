import type { Request, Response } from "express";
import type { SignInType, SignUpType } from "../@types/AuthTypes";
import { HttpException } from "../errors/HttpException";
import { AuthService } from "../services/authService";

export async function HandleSignInUser(
  req: Request<SignInType>,
  res: Response,
): Promise<Response | any> {
  try {
    const service = new AuthService(req.body);
    const { user, token } = await service.signin();
    return res
      .status(200)
      .json({ message: "Usuário autenticado com sucesso", user, token });
  } catch (error) {
    if (error instanceof HttpException) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    return res.status(500).json({ message: "Erro interno no servidor" });
  }
}

export async function HandleSignUpUser(
  req: Request<SignUpType>,
  res: Response,
): Promise<Response | any> {
  try {
    const service = new AuthService(req.body);
    const user = await service.signup();
    return res
      .status(201)
      .json({ user, message: "Usuário criado com sucesso" });
  } catch (error) {
    if (error instanceof HttpException) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    return res.status(500).json({ message: "Erro interno no servidor" });
  }
}
