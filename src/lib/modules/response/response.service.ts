import {
  IResponse,
  IResponsePagination,
} from '@lib/interfaces/response.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ResponseService {
  success<T>(message: string, data?: Record<string, T>): IResponse<T> {
    if (data) {
      return {
        success: true,
        message,
        data,
      };
    }

    return {
      success: true,
      message,
    };
  }

  successPagination<T>(
    message: string,
    meta: {
      totalData: number;
      totalPage: number;
      currentPage: number;
      perPage: number;
    },
    data: Record<string, T>[],
  ): IResponsePagination<T> {
    return {
      success: true,
      message,
      meta: {
        total_data: meta.totalData,
        total_page: meta.totalPage,
        current_page: meta.currentPage,
        per_page: meta.perPage,
      },
      data,
    };
  }
}
