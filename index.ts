function capitalizeWords(text) {
    return text ? text.replace(/\b\w/g, char => char.toUpperCase()) : "";
}

console.log(capitalizeWords("hello world"));  
  



function isValidNumber(value) {
    return typeof value === "number" && !isNaN(value);
}

console.log(capitalizeWords(""));  
console.log(isValidNumber(42));  
console.log(isValidNumber("42"));  



  interface User {
    id: number;
    name: string;
    email: string;
    isAdmin?: boolean;
  }
  
  function createUser(user: User): string {
    return `User ${user.name} created successfully`;
  }
  
  
  const newUser: User = { id: 1, name: "Raghad", email: "raghad@example.com" };
  console.log(createUser(newUser));

  class Product {
    // Properties
    public name: string;
    public category: string;
    private price: number;
  
    
    constructor(name: string, price: number, category: string) {
      this.name = name;
      this.price = price;
      this.category = category;
    }
  
    
    public getDiscountedPrice(discount: number): number {
      if (discount < 0 || discount > 100) {
        throw new Error("Discount must be between 0 and 100");
      }
      return this.price - (this.price * discount) / 100;
    }
  }
  
  
  const product = new Product("Laptop", 1000, "Electronics");
  console.log(product.getDiscountedPrice(10));
  

  function filterArray<T>(array: T[], predicate: (item: T) => boolean): T[] {
    return array.filter(predicate);
}
const numbers = [1, 2, 3, 4, 5, 6];
const oddNumbers = filterArray(numbers, num => num % 2 !== 0);
console.log(oddNumbers); 


export async function fetchUsers() {
  try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      return users.map(user => ({
          id: user.id,
          name: user.name,
          email: user.email
      }));
  } catch (error) {
      throw new Error("Failed to fetch users.");
  }
}
fetchUsers()
  .then(users => console.log("Fetched users:", users))
  .catch(error => console.error("Error:", error.message));
  
  
  

