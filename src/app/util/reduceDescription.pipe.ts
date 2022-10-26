import { PipeTransform, Pipe } from "@angular/core";
@Pipe({
    name: 'reduceDescription'
})
export class ReduceDescription implements PipeTransform {
    transform(text: string, breakIn: number): string {
        if (text.length > breakIn) {
            return text.substr(0, breakIn) + '...'
        }
        return text
    }
}
