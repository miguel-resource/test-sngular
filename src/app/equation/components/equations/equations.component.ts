import { Type } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-equations',
  templateUrl: './equations.component.html',
  styleUrls: ['./equations.component.scss']
})
export class EquationsComponent implements OnInit {

  @Input() variable!: any;

  private triangleNumber = (n:number) => {
    const total = (n*(n+1))/2;

    return total;
  }

  private fibonacci = (n:number) => {
    const fib = [0,1]

    if(typeof n !== 'number') return 0

    for(let i = 2; i<= n; i++){
      fib[i] = fib[i - 1] + fib[i -2]
    }

    return fib[n];
  }

  private primeNumbers = (n:number) => {
    if(!n || n<= 1 ) return 0;

    for(let i = 2; i <= n / 2; i++){
      if(n % i == 0) return 0;
    }

    return 1
  }

  result = () => {
    const n = this.variable
    const result = (this.primeNumbers(n + 3) * this.triangleNumber(n -1))/this.fibonacci(n-2);

    if (isNaN(result)) return 0;

    return result.toFixed(5)
  }

  constructor() {

  }

  ngOnInit(): void {
  }


}
