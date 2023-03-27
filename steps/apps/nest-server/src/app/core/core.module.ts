import { Global, Module } from '@nestjs/common';
import { ProvidersModule } from './providers/providers.module';

@Global()
@Module({
  imports: [ProvidersModule],
  exports: [ProvidersModule],
})
export class CoreModule {}
