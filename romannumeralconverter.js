function convertToRoman(num) {
  const roman_num = [["M", 1000],
                     ["CM", 900],
                     ["D", 500],
                     ["CD", 400],
                     ["C", 100],
                     ["XC", 90],
                     ["L", 50],
                     ["XL", 40],
                     ["X", 10],
                     ["IX", 9],
                     ["V", 5],
                     ["IV", 4],
                     ["I", 1]];

  let roman = "";

  for(let i = 0; i < roman_num.length; i++)
  {
    while(num >= roman_num[i][1])
    {
      roman += roman_num[i][0];
      num -= roman_num[i][1];
    }
  }
  

  console.log(roman);
  return roman;
}

convertToRoman(36);
