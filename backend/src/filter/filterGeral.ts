import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { errorNotFound } from "src/errors/errorNotFound";
import { Response } from "express";

@Catch(errorNotFound)
export class filterGeral implements ExceptionFilter{
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        response.status(501).json({
            statusCode: 404,
            message: exception.message
        });
    }
}