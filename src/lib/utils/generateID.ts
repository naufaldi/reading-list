export  function generateId(): string {
 const timestamp: number = Date.now();
 const randomThreeDigits: number = Math.floor(Math.random() * 1000);
 const combined: number = +(`${timestamp}${randomThreeDigits}`);
 const id: string = (`${combined}`).slice(-3);
 return id;
}
