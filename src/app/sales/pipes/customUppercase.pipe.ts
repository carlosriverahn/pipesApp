import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'customUppercase'})
export class CustomUppercasePipe implements PipeTransform {
    transform(text: string, uppercase: boolean = true): string {

         return (uppercase) ? text.toUpperCase() : text.toLowerCase();
    }
    
}
