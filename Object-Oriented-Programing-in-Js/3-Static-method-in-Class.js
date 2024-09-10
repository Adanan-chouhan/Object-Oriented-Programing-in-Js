
// ===========================
// Static Methods:

// Static method class ke andar ek aisa function hota hai jo class ke kisi specific object se nahi, balki puri class se juda hota hai. Matlab, is method ko chalane ke liye aapko class ka object banane ki zarurat nahi hoti. Aap isko seedha class ke naam se hi call kar sakte ho. Yeh method sirf class ke level par kaam karta hai aur class ke andar ke specific variables ya object se interact nahi karta.

class MathUtil {
    // Static method
    static add(a, b) {
      return a + b;
    }
  }
  
  // Yahan object banane ki zarurat nahi, seedha class se call kar sakte hain
  console.log(MathUtil.add(5, 3)); // Output: 8
  
  // Is example mein add() method ko bina object banaye class ke naam se hi call kiya gaya hai. Static method kaam aata hai jab aapko class ke specific object ke data se koi lena-dena nahi hota, balki kuch general kaam karna hota hai.

  // ===========================
// Static Methods:

// Example 2 => 
    class School {
        // Static method
        static schoolRules() {
          return "School time is from 8 AM to 2 PM.";
        }
      }
      
      // Static method ko bina object banaye call kar sakte hain
      console.log(School.schoolRules()); // Output: School time is from 8 AM to 2 PM
      