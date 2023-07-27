interface User {
    name: string;
    id: number;
  }

  const user: User = {
    name: "Hayes",
    id: 0,
  };

  class UserAccount {
    name: string;
    id: number;
   
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  }
   
  const user2: User = new UserAccount("Murphy", 1);


type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function getLength(obj: string | string[]) {
    return obj.length;
}


function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
      return [obj]; //(parameter) obj: string
        
    }
    return obj;
}


// generics
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;


