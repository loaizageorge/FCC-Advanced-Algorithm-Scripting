function telephoneCheck(str){

	return (str.match(/[1]?\s?(\(\d{3}\)|\d{3})\s?\x2D?\d{3}\s?\x2D?\d{4}/g) == str );
  
  // [1]?\s? => Both optional, check for a 1 followed by a space (area code)
  // (\(\d{3}\)|\d{3}) = > Two cases, either the number will have parentheses "(333)" or not "333"
  // \s?\x2D? = > Check for either a space or a hyphen, both optional
  // \d{3} => Check for 3 numbers
  // \s?\x2D? => Check for either a space or a hyphen, both optional
  // \d{4} => Check for 4 numbers
  
}

console.log(telephoneCheck("1 555 456 786"));

/*
/\d{3}-\d{3}-\d{3}/g tests for case "555-555-5555"
/\x28\d{3}\x29\d{3}\x2D\d{3}/g for case "(555)555-5555"
/\x28\d{3}\x29\s?\d{3}\x2D\d{3}/g for case " (555) 555-5555"

/\x28?\d{3}\x29?\s?\x2D?\d{3}\s?\x2D?\d{3}/g tests for all 3 plus "5555555555"

[1]\s?\x28?\d{3}\x29?\s?\x2D?\d{3}\s?\x2D?\d{3}/g tests for "1 555 555 5555"

 (str.match(/[1]?\s?\x28?\d{3}\x29?\s?\x2D?\d{3}\s?\x2D?\d{4}/g) == str );

*/
