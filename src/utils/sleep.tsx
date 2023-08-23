
function sleep(milliseconds:number) {
    const date = Date.now();
    let currentDate:number = 0;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }


export default sleep;


export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));