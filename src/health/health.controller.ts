import { Controller, Get } from '@nestjs/common';

@Controller('v1')
export class HealthController {
    @Get('')
    health() {
        console.log('health');
        return {
            status: 'ok',
        };
    }
}
