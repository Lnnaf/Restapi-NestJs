import { forwardRef, Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './entities/post.entity';
import { CouterSeqModule } from 'src/couter-seq/couter-seq.module';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports: [
    AuthModule,
    CouterSeqModule, 
    TypeOrmModule.forFeature([PostEntity])],
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService]
})
export class PostModule {}
