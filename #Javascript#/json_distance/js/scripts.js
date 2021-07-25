var distance =
      {
        "Indianapolis" :
        {
          "Indianapolis": 0,
          "New York": 648,
          "Tokyo": 6476,
          "London": 4000
        },
        "New York" :
        {
          "Indianapolis": 648,
          "New York": 0,
          "Tokyo": 6760,
          "London": 3470
        },
        "Tokyo" :
        {
          "Indianapolis": 6476,
          "New York": 6760,
          "Tokyo": 0,
          "London": 5956
        },
        "London" :
        {
          "Indianapolis": 4000,
          "New York": 3470,
          "Tokyo": 5956,
          "London": 0
        },
    };
    alert(distance["Indianapolis"]["London"]);
    alert(distance.Indianapolis.Tokyo);
    alert(distance["London"].Tokyo);