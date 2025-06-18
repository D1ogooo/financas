import jwt from "jsonwebtoken";
import { jwtDecode } from 'jwt-decode';
import type { Request, Response } from "express";
import type { SignInType, SignUpType } from "../@types/AuthTypes";
import { HttpException } from "../errors/HttpException";
import { FinancasService } from "../services/financasService";
import { jwtConfig } from "../configs/auth";

export async function HandleFinancesCreate(
  req: Request<SignInType>,
  res: Response,
): Promise<Response | any> {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Token não fornecido" });
    }

    const decoded = jwtDecode(token)
    const service = new FinancasService(req.body, decoded.id);
    // const {} = service.create()
  } catch (error) {
    if (error instanceof HttpException) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    return res.status(500).json({ message: "Erro interno no servidor" });
  }
}

export async function HandleFinancesRead(
  req: Request<SignUpType>,
  res: Response,
): Promise<Response | any> {
  try {
    const service = new FinancasService(req.body);

  } catch (error) {
    if (error instanceof HttpException) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    return res.status(500).json({ message: "Erro interno no servidor" });
  }
}

export async function HandleFinancesUpdate(
  req: Request,
  res: Response,
): Promise<Response | any> {
  try {
    const service = new FinancasService(req.body);

  } catch (error) {
    if (error instanceof HttpException) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    return res.status(500).json({ message: "Erro interno no servidor" });
  }
}

export async function HandleFinancesDelete(
  req: Request,
  res: Response,
): Promise<Response | any> {
  try {
    const service = new FinancasService(req.body);

  } catch (error) {
    if (error instanceof HttpException) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    return res.status(500).json({ message: "Erro interno no servidor" });
  }
}