import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PermissionService } from './permission.service';

@ApiTags('Permission')
@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Get('all')
  async getPermissions() {
    return await this.permissionService.getPermissions();
  }
}
