export interface IResponse<T> {
  readonly success: boolean;
  readonly message: string;
  readonly data?: Record<string, T>;
}

export interface IResponsePagination<T> {
  readonly success: boolean;
  readonly message: string;
  readonly meta: {
    readonly total_data: number;
    readonly total_page: number;
    readonly current_page: number;
    readonly per_page: number;
  };
  readonly data: Record<string, T>[];
}
