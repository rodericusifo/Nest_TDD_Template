import { Role } from '@lib/enums/role.enum';
import { JwtAuthGuard } from '@lib/guards/jwt-auth.guard';
import { RolesGuard } from '@lib/guards/roles.guard';
import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';

export const ROLES_KEY = 'roles';
export function Auth(...roles: Role[]) {
  return applyDecorators(
    SetMetadata(ROLES_KEY, roles),
    UseGuards(JwtAuthGuard, RolesGuard),
  );
}
