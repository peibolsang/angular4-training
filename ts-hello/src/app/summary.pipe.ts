import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform{

    transform(value: any,limit?: any) {
        if (!value) return null;

        let actualLimit = (limit) ? limit:5;
        return (value as string).substr(0,actualLimit) +" ...";

    }

}