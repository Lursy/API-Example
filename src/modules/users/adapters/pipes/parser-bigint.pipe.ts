import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseBigIntPipe implements PipeTransform<string, bigint> {
    transform(value: string): bigint {
        try {
            const transformedValue = BigInt(value);

            return transformedValue;
        } catch (error) {
            throw new BadRequestException(`Validation failed: "${value}" is not a valid bigint.`);
        }
    }
}