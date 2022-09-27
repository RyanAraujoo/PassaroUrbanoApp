import  {Pipe, PipeTransform } from '@angular/core'
@Pipe({
        name: 'descricaoReduzida'
})
export class descricaoReduzida implements PipeTransform {
        transform(texto: string, truncarEm: number): string {
        if (texto.length > truncarEm) { return texto.substring(0,truncarEm) + '...' }
        return texto
        }

        
}