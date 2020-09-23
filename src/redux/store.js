// store, который создавал я сам, примерно такой же создает библиотека redux
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "How are you ", likesCount: "12" },
        { id: 2, message: "It's my first posts", likesCount: "32" },
      ],
      newPostText: "hello ",
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "How many people" },
        { id: 2, message: "How many people" },
        { id: 3, message: "Lets you know" },
        { id: 4, message: "Hello" },
        { id: 5, message: "Hello" },
        { id: 6, message: "How many people" },
      ],
      newMessageText: "hello ",
      dialogs: [
        {
          id: 1,
          name: "Valera",
          image: "https://www.nlb.by/upload/iblock/d1a/smile.jpg",
        },
        {
          id: 2,
          name: "Gleb",
          image:
            "https://tlum.ru/uploads/e0eadfa10236e75c0ba98a4b25c18e3775ffcdd1f6467ee1e8a9374bd6e92b33.jpeg",
        },
        {
          id: 3,
          name: "Vika",
          image:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFRUVFxgXFxUWFRgXFxYVFhYXFxcXFhYYHSggGBolHRYVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICYvMC0vLy0wLS0wLS0vLS0tLS0rLS0tLS0vLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEEBQcIAgP/xABIEAACAQIDBAcEBQkGBgMBAAABAgADEQQSIQUxQVEGBxNhcYGRIjJSoUJicrHBFCMzQ4KSstHwU3OTosLhNDV0g6PSFiVVFf/EABoBAAIDAQEAAAAAAAAAAAAAAAAEAgMFAQb/xAAwEQACAgEEAAMGBQUBAAAAAAAAAQIDEQQSITEFQWETFDJRcZEjUoHR8AYiQqHxFf/aAAwDAQACEQMRAD8A3jERABERABEShMABMwfSXpbg8CobE1Qpb3KYBao9vhQakd+7vmI6x+my7PpAIA+Jqg9kh3KBvq1La5RppxOnMjnjG4ypWqNVrVGqVHN2djcn+Q5KNANBK52KJZCtyNxYjruoA+xg67Dmz01J8gTMpsXre2fWYLVFTDE/SqgGn51EJC/tWE0JEqV7LfYI68pVQwBBBBFwQbgg7iDxE+k556sunbYKotCuxOEc29rX8nY7nU8KfxLw3i1jfoNGvL4yUllFEouLwz3EpefOrWVRdmCjmSAPnJET6xMNiulWBp/pMZhl8a1MfjLX/wCd7M//AEMN/jJ/OAYJHExeB6QYSt+hxVCp9iqjfIGZO8AKmeS0EzU3Wr1h1aFQ4LBtlqKB21YAEoWFxTS4IDWsSTuBFtd3G0uzqTfCNrVq6qLswUc2IA9TKUcSji6MrDmpDD1E5HxdVqrZqzvVb4qrNUb1ckyuBrvRYPQdqTjc1Nih9Rv8DcSr20S32EjrwGVmnOgHWpUaomGx9iXIVMSAF9o6KKyjTU2GcW3i44zcSmWpp9FTTXDKxETpwREQAREQAREQAREQASx2ztSnhqFSvWNqdJSzc9NwA4kmwA5mXpmmevbpBdqWAQ6ACtW7zcikh9Gb92ck8LJ2Ky8GtdvbYq4zEVMTW9+ob5b3CIPcpr3AepJPGY+JWIyll5HorCwJSViROnllvpz09ZtfZ/WJjfyWilOnRQrSRTVctVZiqhS2QZQpNtxJmqZLdjj8xT+z+JtIXXTqhmJbTTGyf9xmcbt7HVr9pja9j9Gmwor/AOIBvmZiamCpsbuuc86hNQ+rkmXMTOlqbJdyZoR09ceonyWgo91VHgAPwnrLPcSrc/mWbUW9XCI3vIreKg/fLvA4qtR1oYivR5BKpKf4b3T/ACzxEnG+yPTZCVMJdolGB6x8ZQUmulPEooJJH5mrYC/C6MfJZqPFYl6rvVqG71GZ3P1nJY+VyR5SZsoIIO4jXwI1kKq0SjFDvU2Plx8xY+c0dPqJWxak+jPv08amnFHiIlZcUnlluLHcZ0/1e7XOK2dhqzm7lMrnm9Mmmx8ypPnOYhOgepJwdlUx8NWuD3HtWP3ERih9i9/kyfxERgXEREAEREAEREAEREAPFRgBc6Ab/CcpdIdqnFYqviT+tqMy/wB2Dlpj9wJOj+sDGmjs3F1BoRQqAHkzLkHzYTl5RpblpKLnxgupXOT1KSsrTW7BfiIHqQPxiw0euxbLnynL8VtL7t8+cmr4dSnZ29m2W3Id3r8pgKmwagNlZSvMkgjxFj8vlKK9TCWc8DFmnlHrkxlKkWIVd7Gw/n4Df5SZ0aYVQo3KAPQASxwWATDguzXNtW3ADko7/UzDbS2m1XTVU+Hn3tzPdukJr27xH4V5k4NUrL7Zm8Vtekml855Lr6tu+d5i6236h9xVXxux/AfKYmVlkNPXHyz9SueonIu22pXP61h4WH3CUG0q4/XP52P3iWsSzbH5L7FW+XzMpR29VHvBX8sp9Rp8plcJtek+hORuTWF/BtxkWnliALnQSEtPXPy+xZDUTiTuYra+y+09tLB7ag6Bh48D3zDbO2q6WykOnwk3/dP0fDdJLgsalUXU6jep3i/P+cUlVZp3uXX87G42QuW1kQq02U2YFTyItPJMm1airCzKGHIi8x9bYFFt2ZL8jcehvL4auEvi4KJ6WS+HkjMn/VT02TAu9DEaUKzhhU4UqlspLD4DZLkbiL7iZACLactPQwY5GW1ic4blg6+pvcAixB1BGoIPKe5qHqP6UswbZ9VrmmuegTqezBs9LwUlSO5iNyzbojieVkSaw8FYiJ04IiIAIiIAIiIAQ/rapk7JxduCKx8FqIT8gZzYJ1ttfALiKNWhU9yqj02+y6lT56zk/F4R6NR6NQWqUmam/wBpDlJ8DvHcRKLlxkvpfOD5z3RfKytvysptzsQbTxAiwyibUaodQym4YXHhPZPE6Dv5THbAU9gt+JY+RYy36RYuwFIfS1b7IOg8yPlMtU7rXBGq7dte5mM2vtHtDp+jXcOf1iPukfq7QYmy6fMzJkT506Cr7ot98169kFjBkW75vORhi2UZt/4T6ykrIt5eTqWEIiJE6J8MVRzrbjwn3lJKLw8o41lYMMudDpcH5GZ/A4k02VwNRvHNTvH9cbT4xJzmp9ojXHY+GTdHBAYG4IuD3GW+0sV2VMvx0C/aO7+u6WHRzFXU0z9HVfsnePIn/NPt0iX8z4On3kfjMlVKN6g+jW9puq3L5EZESspNIzCUdWBb/wDq4TLvzuDb4OxqZr93+06YWaT6itglqtXHMPZpg0aV+LtY1SPABVvzZuU3YI5WsRE7HmRWIiWFYiIgAiIgAiIgBQzTXXP0Lcsdo4dCwtbEoouRlFlrADUgAAN3KDwM3KZBOtnahTCrhlNmxLZGtv7FBmq/veyn/ckJtKLb6J1puSSOehbynqlTZiFUXY6AfieQH4SU19lUn1K2PNfZPnbQz7YTBJTHsDxJ1J8/w3TJlrK0srs146SWeej64ekEVVG5QAPISI7RrZ6rt9YgeC+yP4b+cmN/lIKhuL89ZDSc7pMnq+FFIrBgzYvVn1eJjqZxOJZxSDlEpocpqFfeLPvCgm1lsSVPdHoQcmISkorLNdSs2/1i9WeHpYZsTglNM0FLPTzM4qU11ZgWJIcC57wLb7EafM7ODichNS6KxKRIEysyHR/YlbGV1w9BQXa5uTZVQWzOx5C43XJuJjptbqAog1sY/EJRUeDNUJ9co9JOuOZYZCyW2OSPdLOrTFYKicR2iV6S27QorI1MEgZipJugvqb6b7WkKE65xFFXUowDKwKsDqCpFiD4jTznK3SHZf5Liq+G1PZVGUE7ynvIT35GWWWwSWUV1Tb4Z8Nm18lVGvpex8G0P338pLMVQV1KNuIse7vHmJCmFxJph6uZEbmqn1UGZmr42zXZp6V5TiyM1tk1g4RUaoWYKuQZixY2AyjUGS/o51U46uQcQBhaXHPleqRyWmDYeLHTkZZV8R2dqv8AZMlX/Cdan+mdHIbi48o9pJK2G59iOrTrliPRYbA2RSwlCnh6IISmLC+8kklmY8WJJJPMzJREeERERABERABERABERAChmn+tXEZtoIn9lh1I8a1V7/Kis2+00t1lf8zq/wBxh/vrRXWP8GQzo1m5GAWep5Wep51noSoEguW2nLT0JEnMi+3cLkqZvovqPtb2H4+Zj2iksuIpq45SkY6dIdVFILsrC/WVn/fqu34zm+bk2d0pbDdGRXo/paQOHHHJU7UoGI7lYMPETWo7Zk39I2B0we2AxZ5Yet5fm2nL2Gos7BFF2PDd4kngJWphtoon5W71xTxF1aoajfnAwsyub+0CCd8+G08W1EdkujsAah4gHVaYPDSxPee6Sti5NJEaWoptmUenhKWlatmbiEJsO72dfU+komN2cdPbHee0/wDaQ+Tbq56CJtJmzYynRym3ZWzVnFgSyqSBl1367t0h7svOTLPe2uoopV2bTdS+GcOBvS9z5Hf5GZHoT03Gy/yl+yNV6yItNb2UPTZ7lzvtZ9wFz3b5ddPurWpsqmMXQxWdAwUhwEqAsbDKL2qC+8DUb7EXtG6VdawGIyglGXtktoCDpUA+E7jORg6nlvKOuauTSWGbU6uetmpisQuEx1JUqVSRSqUwVUm1wjoxNibWBB4gW4yG9bA/+2xX/av49hTnwXpTRqbUw2Lq4fsqWH9orSGYsyKclgObBfnMR0g2q2KxNbEuMpqvmy3vlWwVVvxsqqPEcN0stknEqpi93JjybX8DJlhaeWmi8kUeYUCRrZWCNVx8KkFj8wvfflyksaZGskuImvpIvmRaYxLo681YeoInQPRyvnwuHf4qNJvWmpmgq+4nuP3TfHRBMuBwineMPRH/AI1jXhr4kKeI9xMvERNMzBERABERABERABERAChmmetGkV2kWO58PSI/Yesrel1/em5iJBus/o69ekleiparQzewPeqUntnVRxYFUYDjlI4ynUQ31uKL9PYoWKTNWqZ9AZbUKqt7pvYkEcQRvBB1U9x1lwJ5uUHF4Z6GMk1lFZ88RQV1KsLg/LvB4GfSJxNp5RJpPsjOL2LUW+T217rBvAjj5ek9YPauIo0a+FyZqOIH5ylURiMw92ogFiriy2I09kXkklbx2GulHtCc9FCRitl1MTUpU6Fd2NGicyIy5btw05cdeQkP6TUWXE1M30jmB5g7v67psSfDEYWnVFnRXHeAbeBGok69e1ZvkuOiFmiTr2x77NWgT2CykHUEag6gg8COU2ZhdnUafuU1XvA19TeXLqCLEAjkRf74w/E454iULwx45kawxWNqVLGrUepbcXctbna50kq6F7PdA1VgQHACg8Rvvblw85nF2dRBzClTvzyLv9JdSnUa9WQ2xRbp9D7Oe6TMZidiUm1UlL/Dqp8ju8rT50uj9MG7Ozd2ig+mvzmXlYn7zZjGRz2Fec4PFKmqjKoAA3Abp6iCQNTw4ncBxvKeZMtWEj4YqlnAphgpqkUgzEAKahy3JO4AEt4LOg9nVKeRVpMrKqhQVYMLAWG48hOWNs40VmsPcXRb8ebEfd3eMssOxptmpk02G5qbFGH7SWM29IvZQw+2Y2r/ABZ8dI6/BlZzz0a61cdhiFrn8qpcnsKqj6tUD2vBwfETcnRXphhMet8PU9sC70nGWqnip3j6wuO+PRkpdCEoOPZIolFMrJERERABERACl4giIACZgulnSOngqPaOMzsctKmDY1Hte1+CgaluAB8JnHM0R0u2wcXjKtW/5umWo0RyRGs7+LuGN+KqnKUX3KqG4u09LtntMZtKs+JrNiK5Bqtb2k9gKBuRLa2F95JJ4meAjjcwP2hr6rb+GKtQIpdtygk+UxuD25mcK1PKGNgc17E7r+dhpMX8W3MuzcXs68R6Mp2jD3k/dOb5Gx+U9U6gO47t44jxB1ExmM20EqlMt1GjEbwe4cbcZkcqOA28EXVhofIjWQnXhJyWMlkZpvEXk+sT5AsN/tDnuYeI3EeFvCfWUSjgmnkx+1cQygZbEArmBuLhrgLcbt1/MSuG2pSIt7ncRYDuBGku69BWVlI94anjpuPlIzXQoxVtCPmOY7o/RCu2G19olCCbeXySgVFOoI9RPmcWl8oOY/CvtHztuHebSP4XAGpuUW4sRp5fF5TP4TCrTWyjfqTxJ5n+tJVbVVX55ZySaeEz0mYm59kfCNSftHd5D1n1iIrJ5BLAgwTvPLW/KYDbm1wi+PuruzfWfkvdx4y2miVrwgeEnJ8JdmQxW0VAuCAPjbd+yPpfd4yypVkrAnN2g3G97eh0HpIXi8U1Rizm5+7w5STdHaOSiWP0jmt3DQepmq9NGqGV2T8M1cL9RsUE44eW+/2RYuLEjkSPQkSkkC4ZbAFFPkDrx4d5nxrbOQjQZT3bvTdDeiVvgN2N0Gn6dGFn0w1d6brUpuyOhuroSrKeYI/oylakVOVhr8iOY7p8wZJcdGDODi3GS5N39W3WWcQ64TGZRWOlOsLBaxAvlZRotS262jW4aA7SBnIFzvBII1BBsVI1BBG4g2IM6R6tOlP5fhFdyO2pHs6wHFwAQ47mWzdxuOEarnuE7IbWS+JSJaVFYiIAIiIAYzpJjexwuIrDfSo1ag8URmHzE5zxlc0KKBfesqgnXcurHnu+c331jPbZeN/6eoPVcv4zn/pKvsp9oj/L/tEtVzOCfr/of0fEJyRjam027NqbsWzMtieBDAkE8v5d8tBzG8ag8jwgiVkVhdEm23yVqVCzMxABZi2m72jf8ZmOjmLOY0juPtL4jVh5j5gzDStNypDKbFTcHkRukJxU4uLJVzcJZJvAlvgMYtVcw0O5l4qeXhyMuJjyi4vDNaMlJZQnl0B3gG264Bt4X3T3Eim10dwUiViGQPgaB4VHHmrfxAwKLf2rfup/6z7y3xdUquh1JCjuvvPkAT5S2MpSaRxQy8Ixe1cQqgszMypzY+0/BQu6w8N/hITjcS1Ry7HU/Ich3TK7aqNVqijSVmy6BVBYluOg1PLymMOAqCp2TIyv8LKVPmDqJv0QUI89mZ4hdus9hX0n95fzhH12PgDVcD6I1Y93KTLKLgDQL/LQeQ19Jb7Pwgo08o1J3n4mOlh3S6RbDv3k8yYvdZul6Hq/CPDvdqkpfE+ZenyR6lGIGp0ErMZtituQbt5+dh8rymMcs09dqo6al2P9PqfDaWJFSwUaA+9xPcBwEtAIlZd5YPA6i6V9jsn2yk2B1I7TNLaJo39nEUmBH16Xtof3TU9ZAJLuqSjm2thvqCq/pSZf9YllXxCtq/tOkLxKRHRI9xEGcOiJQSsAIx1lf8sxf9y3yIvNFdIqd6V/hYHyN1P8Q9J0F0xwhrYHFUl3vQqqPtdm2X52miKiirSIG6omh8RcfhM7XPbKEvU0dCt0JxIeJWeQf9/HjPU6zgiInAPrhMQ1NsyHXlwI5GTDYbtizloU2Zx7y/D3sxsoXkbi9uchM2x1WdI8KuHXCMy0q2dj7XsitmYkEMdCwFlynX2RaJ+INxpdkY7mv5z6FkLpQ4R98D0Krvc1XSlyA/Ok95sVAHdqfDj8MT0PxakhRTqAbir5Sf2HGh/a85sWJ5P/ANW7dyl9Mfxliun3k05UUqxR1KuN6sCrDyP37pSbcx+BpVlyVUV14ZhqDzU71PeLTXvSTo+cMQyktRY2DH3kbgjHiOTeR1tfS0+trv4XD+X7DFWoy8SMLM/sToeMVTWtVqOi69mtPLci5UuxZTa5BsBw1PATBU7ArmDFbjMFNmK3GYKeBtebY2S1I0aZoACkVGQAFRl8DqOM7rdRPT1qVfbffy/n7hfbKLSjwYfB7OweyqDOq5QLZ6ls1Wo7GwBYDeSd2i68JrnpFth8VW7aoAoUZUUWORCb2J3sxO/0Gk2P062ilLCVUaxesjU6a82YWJP1VBzE9w4kTUyrrcm59APAS/wmLnF32Zcm+38vQ0vA9LGTdm3LXTfX/Si6m505Dl3nvn0tKSs1z1cIbUfOvUyqWsWtwG8+Ej9WsXZmKldfdO8C2n4yRyO4pqz1SWpEKotoNwB0N+MuqWUzz39QKbhFJv6Jf7yeJWUiSweTE2R1EYLPj6tXhSoW/aquLfKm011SpszKiqWZiFVVF2ZjoFUcTOjerLoodn4XJUsa9U9pVI3A2sqA8QosL8SSZfTHnJRdJYwS/LE9RGRYREQAoJWIgB4cTn3GYE4etWwx/U1GQf3ZOakf8N08xOgzNW9a+y8lali1Hs1AKFU8nF2oseV7ul+eQRTWVudbx2uRvRW7LVnz4NRbcwuSqTb2Xuw8fpD1185j5L8fhBVQrex3qeRG4+HAyJ1aZUlWFiNCD/W7v4xSizfD1Q5fXslnyZ5iIlpQUgi+hlZSSTA3p1Z0WXZ1Eu7MamZxmYnKpYhFW+4BQuneZ7p9LVG0n2e6W0U06gN7saYqFWHDS9iOWsivRPrBw+HwK0ayuatAZERR+lW5KnNuS17G/da95CqPSCoMcMeyhqna9oVuQu7LkB4ALZQe4TzkfC53X3Stj3nb9fJnM8JI6FmF6ZgHBV/sgj7WdSvzA9Zr/a3WhWq9muGoGmc6FrtnapZgezXKBYMbA8TewteSbpdia4wdCniMva1nBqZAQi5L1BTFybkHIL8crGZ9fhl1FlcrMJt9Z545Jxlulgh5ko6KbYxL1qGGzqKSI17J7TJTTKqs1yNCy7gL23yLz74HF1KNQVaTZXW4uQGBDbwVO8aD0mpZHfBxePPGeecdmlfXvj6mR6y6dsVTa++iNL7rVH3cr3HoJE5f7dxdWrU7as+e4C7goQAkgADct2Pfc3O8WsI/pYbKYxznCPTeD8aZRzys5+5WJSVEvNUpPniELIyg2JFgeUklPovVOHOI+iJgCJLDjyUKyq9SjF58mYHBbDcXz1NOAGvmbzK7C6K18ViaeHpst2JLNYkU6Y95yNOYAF9SRLuhReo606aF6jmyIu9j+AG8k6AXm7+gvRRcDR9ohq9SxquN1xuRPqLc25kk8Y1VuseX0eQ8Yp0ejrVVazP69fU+fQ7oBhcB7aA1KxFjXqWzWO8IBpTHcN/EmS0CViOHlhERABERABERABMdtzZVPE0KmHqD2ai2uN6nerryZWAYHmBMjKMIAc818PUpVHoVharSbK3AHfldfqsvtDxI4GWe0NnpVGujDcw3j+Ym4+nXRAYtRVpEJiaYsrHRai7+yqEcOIb6J5gkHUxDKzU3VqdRDZ6bizIeF+YNtGGhGomJqaJUz3w6NzS6iN0NkuyK4vZVVL+zmX4l19V3j5yxk5Bnxr4Wm/vord5Av675GOs/MvsSlpPyshkCSltiUD9Ajwdh+MJsWgPoE/aZj+Ms97q9Sr3SZFl10GvcN/pMhhtj1XtcZBzbf5KNfW0k1Ggq+6oX7IA+6e5VLW/lX3LYaRf5MstnbOSiyVVGepTdHUt8SMGAA3Le1vOS7pZt+niRTSkrZEbOWdShLZWQKFOugZiToDpa+pkeiJ2NWSU58tdfqXe7w3JryEREgXFCJZ1cIR7mo+E7x4H8D6y9lLy2FkodFldsq5boPBimcDRrqfraf7HynsS/q1VUe0QBu158rcT3bz3yYdD+rwVmGIxlEJTt7FAjI7k/TrAWKjkm/ieAmjp07fLHqN2eP+xj+JFN+nBEx0kqrS7DP7J0C8T3AbzL3YfQvG4ogikaKH9ZXBXTmtL3288o75ujZuwcLh/0GHpUu9EVT5kC5mQCR+OnX+XJi3f1Ba8qiKhn9WR3ol0QoYIEoC9VhZ6z2zMPhUAWRe4edzrJIBAErL0kuEYU5ynJyk8sRETpEREQAREQAREQASkrEAPJEwXSXorh8ao7UFaighKyG1RL8AbWZfqsCJn5QzjSfDBPHKNJ7c6G43DEns/yimP1lEEsB9ehqwP2c3lI7TxCsSAdRvXcw7mU6r5zowiaY6+9oJ2mHw6qnaWNZ3sM4GqU0zDUAnOTrrlEQu0NcuVwaFOvsXD5I/mjNIbTxtVd1Rx3Xv8AxXlwm2K4+kp8VH4WiL0T8mh5auPmiVXi8jA27V4hD5MP9Uvtj4yvia9LD00TPVcILlrDiWPcFDE+EitFN8Il73WZnNF5edNOj1fZ1FatWvQcu4RKapUBJtdjctoAAT6DjIWdt1jwQfsk/jOvQ2Ls4tbW+iUZovIk+1a5+nb7KgfhLarWdvedj4sfu3Tq0T82cesXkiYrXBbIt3f4EBd+XuICeI4STbI6CY6vq6rhU+Kr7VQjuoqf4mHhNfdDdvtgMXTxCkhActVRuaix9sEcSPeHeonUtIgi41B3HmDuj1GiqXL5Eb9bZ0uCN9HOg+FwhFQA1aw/XVbMw+wAAtMfZAPMmScCVtKx9JJYQg228sRETpwREQAREQAREQAREQAREQAREQAREQAoZzT1qYo1Nq4q+5ClNe5UpIf4mc+c6WM5s61sC1LamIuNKuSsp5qyKp/zI4ldvwllXxESAi0rETGylpNupyvSTaiGqQM1KqtMk2HasU0B5lQ9pCpQiShLa8nJRysE264tsHEbRamD7GFUUlHDOwD1T6lV/YkItDuSSzMzEm5LEkkniWOpPjPRnZyy8nIRwsFLRaViQJFCt9J1B1f4k1Nm4N2NycPSBPMqoU/dOXi1tTwnUPV/gKlDZ2Eo1RldKKhl4qTqQe8Xt5RijzF7/IkMREYKBERABERABERABERABERABERABERABERAChmkOvz/AIrC/wBxV/jSIkLPhJ1/EjVwlYiJMdEREAPNXd6ffPTcYidfSOeZSIicOl3sT/isN/1FH+OnOs13xEbq6FLuz3ERLSoREQAREQAREQAREQA//9k=",
        },
        {
          id: 4,
          name: "Nastya",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYkU7IeRR9vThosQLHJrMrbDykis_nkma5wA&usqp=CAU",
        },
        {
          id: 5,
          name: "Oleg",
          image:
            "https://medportal.org/files/images/hrdt%D0%B5%D0%BD%D0%BE7u7nmi8.jpg",
        },
        {
          id: 6,
          name: "Kolya",
          image:
            "https://avatars.mds.yandex.net/get-pdb/879561/f817b993-2883-49ef-aa56-9fed499e04e4/s1200",
        },
      ],
    },
    sideBar: {
      namesUsers: [
        { id: 1, name: "Kolya " },
        { id: 2, name: "Misha " },
        { id: 3, name: "Sveta " },
      ],
    },
  },
  _callSubscriber() {
    console.log(1);
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);

    this._callSubscriber(this._state);
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    store._callSubscriber = observer;
  },
};

export default store;
window.store = store;
