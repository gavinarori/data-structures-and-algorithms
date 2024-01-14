// Sample data
const crimeData = [ 
    {
      "attributes": {
        "REPORT_DAT": 1702616400000,
        "SHIFT": "MIDNIGHT",
        "METHOD": "GUN",
        "OFFENSE": "HOMICIDE",
        "BLOCK": "600 - 699 BLOCK OF HAMLIN STREET NE",
        "XBLOCK": 400263.17,
        "YBLOCK": 139949.02,
        "WARD": "5",
        "DISTRICT": "5",
        "PSA": "502",
        "NEIGHBORHOOD_CLUSTER": "Cluster 21",
        "BLOCK_GROUP": "009201 2",
        "CENSUS_TRACT": "009201",
        "VOTING_PRECINCT": "Precinct 74",
        "LATITUDE": 38.9274187997,
        "LONGITUDE": -76.9969649589
      },
      "geometry": {
        "x": -76.996967243179654,
        "y": 38.927426593489365
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702616707000,
        "SHIFT": "MIDNIGHT",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT/OTHER",
        "BLOCK": "3500 - 3899 BLOCK OF JAY STREET NE",
        "XBLOCK": 404579.2827222025,
        "YBLOCK": 137347.1976288889,
        "WARD": "7",
        "DISTRICT": "6",
        "PSA": "601",
        "NEIGHBORHOOD_CLUSTER": "Cluster 30",
        "BLOCK_GROUP": "009602 2",
        "CENSUS_TRACT": "009602",
        "VOTING_PRECINCT": "Precinct 100",
        "LATITUDE": 38.9039688291,
        "LONGITUDE": -76.9472062055
      },
      "geometry": {
        "x": -76.947208473091663,
        "y": 38.903976619804816
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702617185000,
        "SHIFT": "MIDNIGHT",
        "METHOD": "OTHERS",
        "OFFENSE": "ROBBERY",
        "BLOCK": "300 - 399 BLOCK OF H STREET NE",
        "XBLOCK": 399886.83,
        "YBLOCK": 136928.01,
        "WARD": "6",
        "DISTRICT": "1",
        "PSA": "104",
        "NEIGHBORHOOD_CLUSTER": "Cluster 25",
        "BLOCK_GROUP": "008301 1",
        "CENSUS_TRACT": "008301",
        "VOTING_PRECINCT": "Precinct 83",
        "LATITUDE": 38.9002045591,
        "LONGITUDE": -77.0013046493
      },
      "geometry": {
        "x": -77.001306933281271,
        "y": 38.900212347330068
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702621413000,
        "SHIFT": "MIDNIGHT",
        "METHOD": "OTHERS",
        "OFFENSE": "MOTOR VEHICLE THEFT",
        "BLOCK": "5000 - 5099 BLOCK OF A STREET SE",
        "XBLOCK": 406165.8323876748,
        "YBLOCK": 135560.9404752312,
        "WARD": "7",
        "DISTRICT": "6",
        "PSA": "604",
        "NEIGHBORHOOD_CLUSTER": "Cluster 33",
        "BLOCK_GROUP": "009904 2",
        "CENSUS_TRACT": "009904",
        "VOTING_PRECINCT": "Precinct 104",
        "LATITUDE": 38.8878678803,
        "LONGITUDE": -76.9289311749
      },
      "geometry": {
        "x": -76.92893343546713,
        "y": 38.887875668896925
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702621478000,
        "SHIFT": "MIDNIGHT",
        "METHOD": "OTHERS",
        "OFFENSE": "MOTOR VEHICLE THEFT",
        "BLOCK": "1 - 99 BLOCK OF P STREET NW",
        "XBLOCK": 399080.01,
        "YBLOCK": 137975.31,
        "WARD": "5",
        "DISTRICT": "3",
        "PSA": "308",
        "NEIGHBORHOOD_CLUSTER": "Cluster 21",
        "BLOCK_GROUP": "004600 1",
        "CENSUS_TRACT": "004600",
        "VOTING_PRECINCT": "Precinct 19",
        "LATITUDE": 38.9096385304,
        "LONGITUDE": -77.0106072554
      },
      "geometry": {
        "x": -77.010609542805156,
        "y": 38.909646320140098
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702622688000,
        "SHIFT": "MIDNIGHT",
        "METHOD": "OTHERS",
        "OFFENSE": "ASSAULT W/DANGEROUS WEAPON",
        "BLOCK": "3101 - 3199 BLOCK OF 16TH STREET NW",
        "XBLOCK": 396837.94,
        "YBLOCK": 140214.86,
        "WARD": "1",
        "DISTRICT": "3",
        "PSA": "302",
        "NEIGHBORHOOD_CLUSTER": "Cluster 2",
        "BLOCK_GROUP": "002702 1",
        "CENSUS_TRACT": "002702",
        "VOTING_PRECINCT": "Precinct 39",
        "LATITUDE": 38.9298079189,
        "LONGITUDE": -77.036468077
      },
      "geometry": {
        "x": -77.036470373735156,
        "y": 38.929815711767624
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702626253000,
        "SHIFT": "MIDNIGHT",
        "METHOD": "OTHERS",
        "OFFENSE": "BURGLARY",
        "BLOCK": "3700 - 3799 BLOCK OF 12TH STREET NE",
        "XBLOCK": 400761.43,
        "YBLOCK": 140829.87,
        "WARD": "5",
        "DISTRICT": "5",
        "PSA": "504",
        "NEIGHBORHOOD_CLUSTER": "Cluster 20",
        "BLOCK_GROUP": "009504 1",
        "CENSUS_TRACT": "009504",
        "VOTING_PRECINCT": "Precinct 68",
        "LATITUDE": 38.9353534759,
        "LONGITUDE": -76.9912177356
      },
      "geometry": {
        "x": -76.991220018568043,
        "y": 38.935361271523213
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702635678000,
        "SHIFT": "MIDNIGHT",
        "METHOD": "OTHERS",
        "OFFENSE": "ROBBERY",
        "BLOCK": "3200 - 3299 BLOCK OF PENNSYLVANIA AVENUE SE",
        "XBLOCK": 403516.7245452165,
        "YBLOCK": 133455.8127292777,
        "WARD": "7",
        "DISTRICT": "6",
        "PSA": "605",
        "NEIGHBORHOOD_CLUSTER": "Cluster 34",
        "BLOCK_GROUP": "009901 2",
        "CENSUS_TRACT": "009901",
        "VOTING_PRECINCT": "Precinct 109",
        "LATITUDE": 38.8689186523,
        "LONGITUDE": -76.9594761766
      },
      "geometry": {
        "x": -76.95947844615921,
        "y": 38.868926435437537
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702637643000,
        "SHIFT": "MIDNIGHT",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT F/AUTO",
        "BLOCK": "1700 - 1799 BLOCK OF FORT DAVIS STREET SE",
        "XBLOCK": 404416.7490580517,
        "YBLOCK": 133154.9860729985,
        "WARD": "7",
        "DISTRICT": "6",
        "PSA": "605",
        "NEIGHBORHOOD_CLUSTER": "Cluster 34",
        "BLOCK_GROUP": "009902 2",
        "CENSUS_TRACT": "009902",
        "VOTING_PRECINCT": "Precinct 110",
        "LATITUDE": 38.8662046233,
        "LONGITUDE": -76.9491069734
      },
      "geometry": {
        "x": -76.949109238570614,
        "y": 38.866212406858303
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702641644000,
        "SHIFT": "MIDNIGHT",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT/OTHER",
        "BLOCK": "3301 - 3399 BLOCK OF BENNING ROAD NE",
        "XBLOCK": 403567.1,
        "YBLOCK": 136542.34,
        "WARD": "7",
        "DISTRICT": null,
        "PSA": null,
        "NEIGHBORHOOD_CLUSTER": "Cluster 32",
        "BLOCK_GROUP": "009604 2",
        "CENSUS_TRACT": "009604",
        "VOTING_PRECINCT": "Precinct 101",
        "LATITUDE": 38.8967230746,
        "LONGITUDE": -76.9588796709
      },
      "geometry": {
        "x": -76.958881941427137,
        "y": 38.896730863712889
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702642871000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT/OTHER",
        "BLOCK": "3200 - 3275 BLOCK OF M STREET NW",
        "XBLOCK": 394449.15,
        "YBLOCK": 137479.06,
        "WARD": "2",
        "DISTRICT": "2",
        "PSA": "206",
        "NEIGHBORHOOD_CLUSTER": "Cluster 4",
        "BLOCK_GROUP": "000202 3",
        "CENSUS_TRACT": "000202",
        "VOTING_PRECINCT": "Precinct 6",
        "LATITUDE": 38.9051510928,
        "LONGITUDE": -77.0639958956
      },
      "geometry": {
        "x": -77.063998199396551,
        "y": 38.905158879679249
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702642876000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT/OTHER",
        "BLOCK": "1900 - 1999 BLOCK OF R STREET NW",
        "XBLOCK": 396170.71,
        "YBLOCK": 138305.47,
        "WARD": "2",
        "DISTRICT": "2",
        "PSA": "208",
        "NEIGHBORHOOD_CLUSTER": "Cluster 6",
        "BLOCK_GROUP": "004202 2",
        "CENSUS_TRACT": "004202",
        "VOTING_PRECINCT": "Precinct 14",
        "LATITUDE": 38.9126048635,
        "LONGITUDE": -77.0441525971
      },
      "geometry": {
        "x": -77.044154895122404,
        "y": 38.912612652565031
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702644064000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT/OTHER",
        "BLOCK": "900 - 999 BLOCK OF W STREET NW",
        "XBLOCK": 397795.04,
        "YBLOCK": 139034.76,
        "WARD": "1",
        "DISTRICT": "3",
        "PSA": "305",
        "NEIGHBORHOOD_CLUSTER": "Cluster 3",
        "BLOCK_GROUP": "003500 2",
        "CENSUS_TRACT": "003500",
        "VOTING_PRECINCT": "Precinct 37",
        "LATITUDE": 38.9191801261,
        "LONGITUDE": -77.0254260409
      },
      "geometry": {
        "x": -77.025428333482893,
        "y": 38.919187917265042
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702644077000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT/OTHER",
        "BLOCK": "3000 - 3099 BLOCK OF SHERMAN AVENUE NW",
        "XBLOCK": 397731.6,
        "YBLOCK": 140050.32,
        "WARD": "1",
        "DISTRICT": "3",
        "PSA": "302",
        "NEIGHBORHOOD_CLUSTER": "Cluster 2",
        "BLOCK_GROUP": "003100 1",
        "CENSUS_TRACT": "003100",
        "VOTING_PRECINCT": "Precinct 38",
        "LATITUDE": 38.9283284531,
        "LONGITUDE": -77.0261609421
      },
      "geometry": {
        "x": -77.026163235481533,
        "y": 38.928336246046094
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702646093000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT/OTHER",
        "BLOCK": "2600 - 2649 BLOCK OF CONNECTICUT AVENUE NW",
        "XBLOCK": 395499.25,
        "YBLOCK": 139592.96,
        "WARD": "3",
        "DISTRICT": "2",
        "PSA": "204",
        "NEIGHBORHOOD_CLUSTER": "Cluster 15",
        "BLOCK_GROUP": "000501 1",
        "CENSUS_TRACT": "000501",
        "VOTING_PRECINCT": "Precinct 136",
        "LATITUDE": 38.9241998122,
        "LONGITUDE": -77.0519031245
      },
      "geometry": {
        "x": -77.051905425724556,
        "y": 38.924207603308773
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702647732000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "MOTOR VEHICLE THEFT",
        "BLOCK": "5100 - 5299 BLOCK OF F STREET SE",
        "XBLOCK": 406246.1147237493,
        "YBLOCK": 134851.0939465725,
        "WARD": "7",
        "DISTRICT": "6",
        "PSA": "604",
        "NEIGHBORHOOD_CLUSTER": "Cluster 33",
        "BLOCK_GROUP": "009905 3",
        "CENSUS_TRACT": "009905",
        "VOTING_PRECINCT": "Precinct 104",
        "LATITUDE": 38.8814727463,
        "LONGITUDE": -76.9280122744
      },
      "geometry": {
        "x": -76.928014534619209,
        "y": 38.881480532984448
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702648929000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT F/AUTO",
        "BLOCK": "2000 - 2099 BLOCK OF 13TH STREET NW",
        "XBLOCK": 397431.22,
        "YBLOCK": 138854.61,
        "WARD": "1",
        "DISTRICT": "3",
        "PSA": "305",
        "NEIGHBORHOOD_CLUSTER": "Cluster 3",
        "BLOCK_GROUP": "004401 1",
        "CENSUS_TRACT": "004401",
        "VOTING_PRECINCT": "Precinct 22",
        "LATITUDE": 38.9175562877,
        "LONGITUDE": -77.0296206817
      },
      "geometry": {
        "x": -77.029622975558809,
        "y": 38.917564078364883
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702648935000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT/OTHER",
        "BLOCK": "1900 - 1999 BLOCK OF F STREET NW",
        "XBLOCK": 396166.76,
        "YBLOCK": 136612.23,
        "WARD": "2",
        "DISTRICT": "2",
        "PSA": "207",
        "NEIGHBORHOOD_CLUSTER": "Cluster 5",
        "BLOCK_GROUP": "010800 6",
        "CENSUS_TRACT": "010800",
        "VOTING_PRECINCT": "Precinct 2",
        "LATITUDE": 38.8973515489,
        "LONGITUDE": -77.044188691
      },
      "geometry": {
        "x": -77.044190988175998,
        "y": 38.8973593348747
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702648940000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT/OTHER",
        "BLOCK": "2416 - 2499 BLOCK OF 19TH STREET NW",
        "XBLOCK": 396004.72,
        "YBLOCK": 139330.3,
        "WARD": "1",
        "DISTRICT": "3",
        "PSA": "303",
        "NEIGHBORHOOD_CLUSTER": "Cluster 1",
        "BLOCK_GROUP": "004001 4",
        "CENSUS_TRACT": "004001",
        "VOTING_PRECINCT": "Precinct 25",
        "LATITUDE": 38.9218361305,
        "LONGITUDE": -77.0460724634
      },
      "geometry": {
        "x": -77.046074762649582,
        "y": 38.921843921393815
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702648949000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT/OTHER",
        "BLOCK": "1200 - 1299 BLOCK OF 13TH STREET NW",
        "XBLOCK": 397430.71,
        "YBLOCK": 137621.06,
        "WARD": "2",
        "DISTRICT": "3",
        "PSA": "307",
        "NEIGHBORHOOD_CLUSTER": "Cluster 7",
        "BLOCK_GROUP": "005004 1",
        "CENSUS_TRACT": "005004",
        "VOTING_PRECINCT": "Precinct 17",
        "LATITUDE": 38.9064440504,
        "LONGITUDE": -77.029621947
      },
      "geometry": {
        "x": -77.029624240166584,
        "y": 38.906451838780441
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702649427000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT F/AUTO",
        "BLOCK": "300 - 399 BLOCK OF WATER STREET SE",
        "XBLOCK": 399887.59,
        "YBLOCK": 133994.79,
        "WARD": "8",
        "DISTRICT": "1",
        "PSA": "106",
        "NEIGHBORHOOD_CLUSTER": "Cluster 27",
        "BLOCK_GROUP": "007201 2",
        "CENSUS_TRACT": "007201",
        "VOTING_PRECINCT": "Precinct 131",
        "LATITUDE": 38.8737810014,
        "LONGITUDE": -77.001295408
      },
      "geometry": {
        "x": -77.001297690374145,
        "y": 38.87378878424677
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702651345000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT F/AUTO",
        "BLOCK": "1600 - 1699 BLOCK OF MARYLAND AVENUE NE",
        "XBLOCK": 401740.25,
        "YBLOCK": 137077.2,
        "WARD": "5",
        "DISTRICT": "5",
        "PSA": "507",
        "NEIGHBORHOOD_CLUSTER": "Cluster 23",
        "BLOCK_GROUP": "008903 3",
        "CENSUS_TRACT": "008903",
        "VOTING_PRECINCT": "Precinct 79",
        "LATITUDE": 38.9015468006,
        "LONGITUDE": -76.9799376272
      },
      "geometry": {
        "x": -76.979939904609296,
        "y": 38.901554589834056
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702651349000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT/OTHER",
        "BLOCK": "401 - 499 BLOCK OF ALLISON STREET NW",
        "XBLOCK": 398397.05,
        "YBLOCK": 141933.02,
        "WARD": "4",
        "DISTRICT": "4",
        "PSA": "407",
        "NEIGHBORHOOD_CLUSTER": "Cluster 18",
        "BLOCK_GROUP": "002301 1",
        "CENSUS_TRACT": "002301",
        "VOTING_PRECINCT": "Precinct 46",
        "LATITUDE": 38.9452898398,
        "LONGITUDE": -77.0184908566
      },
      "geometry": {
        "x": -77.018493148658038,
        "y": 38.94529763642047
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702652495000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT/OTHER",
        "BLOCK": "3900 - 3999 BLOCK OF KANSAS AVENUE NW",
        "XBLOCK": 397580.51,
        "YBLOCK": 141258.26,
        "WARD": "4",
        "DISTRICT": "4",
        "PSA": "404",
        "NEIGHBORHOOD_CLUSTER": "Cluster 18",
        "BLOCK_GROUP": "002503 1",
        "CENSUS_TRACT": "002503",
        "VOTING_PRECINCT": "Precinct 47",
        "LATITUDE": 38.9392095384,
        "LONGITUDE": -77.0279076874
      },
      "geometry": {
        "x": -77.027909982041294,
        "y": 38.939217333431735
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702654394000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "MOTOR VEHICLE THEFT",
        "BLOCK": "1328 - 1399 BLOCK OF ADAMS STREET NE",
        "XBLOCK": 401384.26,
        "YBLOCK": 139123.62,
        "WARD": "5",
        "DISTRICT": "5",
        "PSA": "505",
        "NEIGHBORHOOD_CLUSTER": "Cluster 22",
        "BLOCK_GROUP": "009102 3",
        "CENSUS_TRACT": "009102",
        "VOTING_PRECINCT": "Precinct 72",
        "LATITUDE": 38.919982282,
        "LONGITUDE": -76.9840375123
      },
      "geometry": {
        "x": -76.984039792061921,
        "y": 38.919990074784955
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702654789000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "MOTOR VEHICLE THEFT",
        "BLOCK": "100 - 138 BLOCK OF W STREET NW",
        "XBLOCK": 398886.09,
        "YBLOCK": 139033.94,
        "WARD": "5",
        "DISTRICT": "3",
        "PSA": "306",
        "NEIGHBORHOOD_CLUSTER": "Cluster 21",
        "BLOCK_GROUP": "003301 3",
        "CENSUS_TRACT": "003301",
        "VOTING_PRECINCT": "Precinct 135",
        "LATITUDE": 38.9191747995,
        "LONGITUDE": -77.012844822
      },
      "geometry": {
        "x": -77.012847110737965,
        "y": 38.919182591112879
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702655499000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT/OTHER",
        "BLOCK": "1401 - 1498 BLOCK OF WISCONSIN AVENUE NW",
        "XBLOCK": 394450.62,
        "YBLOCK": 137863.91,
        "WARD": "2",
        "DISTRICT": "2",
        "PSA": "206",
        "NEIGHBORHOOD_CLUSTER": "Cluster 4",
        "BLOCK_GROUP": "000102 2",
        "CENSUS_TRACT": "000102",
        "VOTING_PRECINCT": "Precinct 5",
        "LATITUDE": 38.9086179637,
        "LONGITUDE": -77.0639820577
      },
      "geometry": {
        "x": -77.063984361696228,
        "y": 38.9086257512635
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702655711000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT F/AUTO",
        "BLOCK": "1000 - 1099 BLOCK OF OTIS PLACE NW",
        "XBLOCK": 397585.5,
        "YBLOCK": 140742.97,
        "WARD": "1",
        "DISTRICT": "4",
        "PSA": "408",
        "NEIGHBORHOOD_CLUSTER": "Cluster 2",
        "BLOCK_GROUP": "002900 1",
        "CENSUS_TRACT": "002900",
        "VOTING_PRECINCT": "Precinct 42",
        "LATITUDE": 38.9345676669,
        "LONGITUDE": -77.0278483169
      },
      "geometry": {
        "x": -77.027850611268647,
        "y": 38.934575461041945
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702655836000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT F/AUTO",
        "BLOCK": "300 - 399 BLOCK OF FARRAGUT STREET NW",
        "XBLOCK": 398552.81,
        "YBLOCK": 142578.96,
        "WARD": "4",
        "DISTRICT": "4",
        "PSA": "407",
        "NEIGHBORHOOD_CLUSTER": "Cluster 18",
        "BLOCK_GROUP": "002202 3",
        "CENSUS_TRACT": "002202",
        "VOTING_PRECINCT": "Precinct 55",
        "LATITUDE": 38.9511089169,
        "LONGITUDE": -77.0166954473
      },
      "geometry": {
        "x": -77.016697739140824,
        "y": 38.951116714735036
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702657104000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT/OTHER",
        "BLOCK": "900 - 999 BLOCK OF RHODE ISLAND AVENUE NE",
        "XBLOCK": 400594.86,
        "YBLOCK": 139371.55,
        "WARD": "5",
        "DISTRICT": "5",
        "PSA": "505",
        "NEIGHBORHOOD_CLUSTER": "Cluster 22",
        "BLOCK_GROUP": "009102 4",
        "CENSUS_TRACT": "009102",
        "VOTING_PRECINCT": "Precinct 72",
        "LATITUDE": 38.9222166046,
        "LONGITUDE": -76.9931402028
      },
      "geometry": {
        "x": -76.993142485526405,
        "y": 38.922224397506227
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702657271000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "BURGLARY",
        "BLOCK": "1471 - 1499 BLOCK OF BANGOR STREET SE",
        "XBLOCK": 401367.17,
        "YBLOCK": 132523.55,
        "WARD": "8",
        "DISTRICT": "7",
        "PSA": "701",
        "NEIGHBORHOOD_CLUSTER": "Cluster 28",
        "BLOCK_GROUP": "007504 1",
        "CENSUS_TRACT": "007504",
        "VOTING_PRECINCT": "Precinct 114",
        "LATITUDE": 38.8605264129,
        "LONGITUDE": -76.9842477171
      },
      "geometry": {
        "x": -76.984249993366461,
        "y": 38.860534193729805
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702657687000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT F/AUTO",
        "BLOCK": "2 - 153 BLOCK OF GALVESTON PLACE SW",
        "XBLOCK": 399156.4454371701,
        "YBLOCK": 128511.7198286895,
        "WARD": "8",
        "DISTRICT": "7",
        "PSA": "708",
        "NEIGHBORHOOD_CLUSTER": "Cluster 39",
        "BLOCK_GROUP": "009807 2",
        "CENSUS_TRACT": "009807",
        "VOTING_PRECINCT": "Precinct 126",
        "LATITUDE": 38.8243867133,
        "LONGITUDE": -77.0097143627
      },
      "geometry": {
        "x": -77.009716645111723,
        "y": 38.824394485591014
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702657972000,
        "SHIFT": "DAY",
        "METHOD": "GUN",
        "OFFENSE": "ROBBERY",
        "BLOCK": "2200 - 2299 BLOCK OF NICHOLSON STREET SE",
        "XBLOCK": 402228.3725760209,
        "YBLOCK": 133997.5898817804,
        "WARD": "7",
        "DISTRICT": "6",
        "PSA": "607",
        "NEIGHBORHOOD_CLUSTER": "Cluster 34",
        "BLOCK_GROUP": "007601 1",
        "CENSUS_TRACT": "007601",
        "VOTING_PRECINCT": "Precinct 111",
        "LATITUDE": 38.8738034076,
        "LONGITUDE": -76.9743203214
      },
      "geometry": {
        "x": -76.974322595017938,
        "y": 38.873811191615829
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702658033000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "BURGLARY",
        "BLOCK": "200 - 239 BLOCK OF 34TH STREET SE",
        "XBLOCK": 403686.65,
        "YBLOCK": 135484.32,
        "WARD": "7",
        "DISTRICT": "6",
        "PSA": "603",
        "NEIGHBORHOOD_CLUSTER": "Cluster 32",
        "BLOCK_GROUP": "007708 1",
        "CENSUS_TRACT": "007708",
        "VOTING_PRECINCT": "Precinct 132",
        "LATITUDE": 38.8871915454,
        "LONGITUDE": -76.9575072161
      },
      "geometry": {
        "x": -76.957509485623106,
        "y": 38.887199332593134
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702658167000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "ROBBERY",
        "BLOCK": "1 - 99 BLOCK OF PIERCE STREET NE",
        "XBLOCK": 399351.44,
        "YBLOCK": 137425.96,
        "WARD": "6",
        "DISTRICT": "5",
        "PSA": "501",
        "NEIGHBORHOOD_CLUSTER": "Cluster 25",
        "BLOCK_GROUP": "010603 3",
        "CENSUS_TRACT": "010603",
        "VOTING_PRECINCT": "Precinct 144",
        "LATITUDE": 38.9046900373,
        "LONGITUDE": -77.0074772164
      },
      "geometry": {
        "x": -77.007479502512467,
        "y": 38.90469782614435
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702659280000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT/OTHER",
        "BLOCK": "2100 - 2199 BLOCK OF 14TH STREET NW",
        "XBLOCK": 397229.1,
        "YBLOCK": 138975.93,
        "WARD": "1",
        "DISTRICT": "3",
        "PSA": "305",
        "NEIGHBORHOOD_CLUSTER": "Cluster 3",
        "BLOCK_GROUP": "004401 2",
        "CENSUS_TRACT": "004401",
        "VOTING_PRECINCT": "Precinct 22",
        "LATITUDE": 38.9186485641,
        "LONGITUDE": -77.0319518232
      },
      "geometry": {
        "x": -77.031954117790534,
        "y": 38.91865635485027
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702660602000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "BURGLARY",
        "BLOCK": "100 - 199 BLOCK OF ANACOSTIA ROAD SE",
        "XBLOCK": 404088.7351377473,
        "YBLOCK": 135603.6163792708,
        "WARD": "7",
        "DISTRICT": "6",
        "PSA": "603",
        "NEIGHBORHOOD_CLUSTER": "Cluster 32",
        "BLOCK_GROUP": "007703 4",
        "CENSUS_TRACT": "007703",
        "VOTING_PRECINCT": "Precinct 107",
        "LATITUDE": 38.8882644342,
        "LONGITUDE": -76.952872024
      },
      "geometry": {
        "x": -76.952874292570385,
        "y": 38.888272221943858
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702662270000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT F/AUTO",
        "BLOCK": "1400 - 1445 BLOCK OF 22ND STREET SE",
        "XBLOCK": 402167.19,
        "YBLOCK": 133956.26,
        "WARD": "8",
        "DISTRICT": "6",
        "PSA": "607",
        "NEIGHBORHOOD_CLUSTER": "Cluster 34",
        "BLOCK_GROUP": "007601 1",
        "CENSUS_TRACT": "007601",
        "VOTING_PRECINCT": "Precinct 133",
        "LATITUDE": 38.8734312444,
        "LONGITUDE": -76.9750255172
      },
      "geometry": {
        "x": -76.975027791375851,
        "y": 38.873439028167709
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702663169000,
        "SHIFT": "DAY",
        "METHOD": "GUN",
        "OFFENSE": "ROBBERY",
        "BLOCK": "4026 - 4199 BLOCK OF WHEELER ROAD SE",
        "XBLOCK": 400887.1,
        "YBLOCK": 129540.82,
        "WARD": "8",
        "DISTRICT": "7",
        "PSA": "706",
        "NEIGHBORHOOD_CLUSTER": "Cluster 39",
        "BLOCK_GROUP": "009801 1",
        "CENSUS_TRACT": "009801",
        "VOTING_PRECINCT": "Precinct 121",
        "LATITUDE": 38.8336572844,
        "LONGITUDE": -76.9897828422
      },
      "geometry": {
        "x": -76.989785118545669,
        "y": 38.83366505954578
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702664334000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT/OTHER",
        "BLOCK": "2000 - 2038 BLOCK OF 4TH STREET NW",
        "XBLOCK": 398474.0,
        "YBLOCK": 138859.64,
        "WARD": "1",
        "DISTRICT": "3",
        "PSA": "306",
        "NEIGHBORHOOD_CLUSTER": "Cluster 3",
        "BLOCK_GROUP": "003400 1",
        "CENSUS_TRACT": "003400",
        "VOTING_PRECINCT": "Precinct 20",
        "LATITUDE": 38.917604029,
        "LONGITUDE": -77.0175963648
      },
      "geometry": {
        "x": -77.017598654926232,
        "y": 38.917611820067847
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702664362000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT F/AUTO",
        "BLOCK": "1618 - 1699 BLOCK OF 14TH STREET NW",
        "XBLOCK": 397228.87,
        "YBLOCK": 138264.18,
        "WARD": "2",
        "DISTRICT": "3",
        "PSA": "301",
        "NEIGHBORHOOD_CLUSTER": "Cluster 7",
        "BLOCK_GROUP": "005202 3",
        "CENSUS_TRACT": "005202",
        "VOTING_PRECINCT": "Precinct 16",
        "LATITUDE": 38.9122368826,
        "LONGITUDE": -77.0319516027
      },
      "geometry": {
        "x": -77.031953896951819,
        "y": 38.91224467205884
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702664396000,
        "SHIFT": "DAY",
        "METHOD": "GUN",
        "OFFENSE": "ROBBERY",
        "BLOCK": "2730 - 2899 BLOCK OF MARTIN LUTHER KING JR AVENUE SE",
        "XBLOCK": 400335.11,
        "YBLOCK": 131003.33,
        "WARD": "8",
        "DISTRICT": "7",
        "PSA": "707",
        "NEIGHBORHOOD_CLUSTER": "Cluster 39",
        "BLOCK_GROUP": "010400 3",
        "CENSUS_TRACT": "010400",
        "VOTING_PRECINCT": "Precinct 123",
        "LATITUDE": 38.8468326159,
        "LONGITUDE": -76.9961396645
      },
      "geometry": {
        "x": -76.996141943579062,
        "y": 38.846840393486445
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702664453000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT F/AUTO",
        "BLOCK": "3152 - 3195 BLOCK OF BERRY ROAD NE",
        "XBLOCK": 403283.2,
        "YBLOCK": 139790.7,
        "WARD": "5",
        "DISTRICT": "5",
        "PSA": "503",
        "NEIGHBORHOOD_CLUSTER": "Cluster 24",
        "BLOCK_GROUP": "009000 1",
        "CENSUS_TRACT": "009000",
        "VOTING_PRECINCT": "Precinct 139",
        "LATITUDE": 38.9259865092,
        "LONGITUDE": -76.962136843
      },
      "geometry": {
        "x": -76.962139116311448,
        "y": 38.925994304025593
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702664751000,
        "SHIFT": "DAY",
        "METHOD": "KNIFE",
        "OFFENSE": "ASSAULT W/DANGEROUS WEAPON",
        "BLOCK": "4900 - 4916 BLOCK OF KANSAS AVENUE NW",
        "XBLOCK": 398286.04,
        "YBLOCK": 142474.91,
        "WARD": "4",
        "DISTRICT": "4",
        "PSA": "407",
        "NEIGHBORHOOD_CLUSTER": "Cluster 18",
        "BLOCK_GROUP": "002201 1",
        "CENSUS_TRACT": "002201",
        "VOTING_PRECINCT": "Precinct 55",
        "LATITUDE": 38.950171126,
        "LONGITUDE": -77.0197727682
      },
      "geometry": {
        "x": -77.019775060973686,
        "y": 38.950178923612832
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702665075000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT/OTHER",
        "BLOCK": "2400 - 2500 BLOCK OF MARTIN LUTHER KING JR AVENUE SE",
        "XBLOCK": 400591.8,
        "YBLOCK": 132715.09,
        "WARD": "8",
        "DISTRICT": "7",
        "PSA": "703",
        "NEIGHBORHOOD_CLUSTER": "Cluster 37",
        "BLOCK_GROUP": "007407 2",
        "CENSUS_TRACT": "007407",
        "VOTING_PRECINCT": "Precinct 119",
        "LATITUDE": 38.8622527489,
        "LONGITUDE": -76.9931812237
      },
      "geometry": {
        "x": -76.993183502779786,
        "y": 38.862260529756952
      }
    },
    {
      "attributes": {
        "REPORT_DAT": 1702667555000,
        "SHIFT": "DAY",
        "METHOD": "OTHERS",
        "OFFENSE": "THEFT F/AUTO",
        "BLOCK": "2300 - 2499 BLOCK OF 11TH STREET NW",
        "XBLOCK": 397655.46,
        "YBLOCK": 139302.91,
        "WARD": "1",
        "DISTRICT": "3",
        "PSA": "304",
        "NEIGHBORHOOD_CLUSTER": "Cluster 2",
        "BLOCK_GROUP": "003600 3",
        "CENSUS_TRACT": "003600",
        "VOTING_PRECINCT": "Precinct 23",
        "LATITUDE": 38.9215953471,
        "LONGITUDE": -77.0270364945
      },
      "geometry": {
        "x": -77.027038787761498,
        "y": 38.921603138638432
      }
    }
    // ... Your crime data objects
  ];
  
  // Function to count occurrences of each offense type
  function countOffenses(data) {
    const offenseCounts = {};
    
    data.forEach(record => {
      const offenseType = record.attributes.OFFENSE;
      
      if (offenseCounts[offenseType]) {
        offenseCounts[offenseType]++;
      } else {
        offenseCounts[offenseType] = 1;
      }
    });
  
    return offenseCounts;
  }
  
  // Perform analysis
  const offensesCount = countOffenses(crimeData);
  
  // Display the results
  console.log("Offenses Count:", offensesCount);
  