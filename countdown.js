function startCounter(targetValues) {
    targetValues = targetValues.map(value => Math.max(0, parseFloat(value)) || 0);

    var counterElements = [
      document.getElementById('counter1'),
      document.getElementById('counter2'),
      document.getElementById('counter3'),
      document.getElementById('counter4'),
      document.getElementById('counter5'),
      document.getElementById('counter6')

    ];

    var counters = targetValues.map(function (targetValue, index) {
      return {
        targetValue: targetValue,
        element: counterElements[index],
        interval: setInterval(function () {
          var currentValue = parseFloat(counters[index].element.textContent) || 0;
          counters[index].element.textContent = currentValue + 1;

          if (currentValue >= counters[index].targetValue) {
            clearInterval(counters[index].interval);
          }
        }, 100)
      };
    });
  }

  // Start the counters with target values for each column
  startCounter([123, 152, 230 , 1230 , 129,10]);
