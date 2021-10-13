export class CounterService {
  clickCounter: number = 0
  increaseClickCounter() {
    this.clickCounter++
    console.log(this.clickCounter)
  }

}
