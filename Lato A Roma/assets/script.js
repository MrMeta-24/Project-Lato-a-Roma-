  function convertToRoman(num) {
    const romanMap = [
      [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
      [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
      [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];
    let result = '';
    for (let [value, numeral] of romanMap) {
      while (num >= value) {
        result += numeral;
        num -= value;
      }
    }
    return result;
  }

  function handleConvert() {
    const input = document.getElementById('number').value;
    const output = document.getElementById('output');
    const num = parseInt(input);

    if (input === '' || isNaN(num)) {
      output.textContent = "Please enter a valid number";
    } else if (num < 1) {
      output.textContent = "Please enter a number greater than or equal to 1";
    } else if (num >= 4000) {
      output.textContent = "Please enter a number less than or equal to 3999";
    } else {
      output.textContent = convertToRoman(num);
    }
  }

  document.getElementById('convert-btn').addEventListener('click', handleConvert);

  document.getElementById('number').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      handleConvert();
    }
  });
