export const oll = [
  { name: 1, alg: ["R U2 R' R' F R F' U2 R' F R F'"], group: 'Dot', prob: 2 },
  {
    name: 2,
    alg: [
      "r U r' U2 r U2 R' U2 R U' r'",
      "y' F R U R' U' F' f R U R' U' f'",
      "y' F R U R' U' S R U R' U' f'"
    ],
    group: 'Dot',
    prob: 4
  },
  {
    name: 3,
    alg: [
      "r' R2 U R' U r U2 r' U M'",
      "y F U R U' R' F' U F R U R' U' F'",
      "y' f R U R' U' f' U' F R U R' U' F'"
    ],
    group: 'Dot',
    prob: 4
  },
  {
    name: 4,
    alg: [
      "M U' r U2 r' U' R U' R' M'",
      "y F U R U' R' F' U' F R U R' U' F'",
      "y' f R U R' U' f' U F R U R' U' F'"
    ],
    group: 'Dot',
    prob: 4
  },
  {
    name: 5,
    alg: ["l' U2 L U L' U l", "y2 r' U2 R U R' U r"],
    group: 'Square Shape',
    prob: 4
  },
  { name: 6, alg: ["r U2 R' U' R U' r'"], group: 'Square Shape', prob: 4 },
  {
    name: 7,
    alg: ["r U R' U R U2 r'"],
    group: 'Small Lightning Bolt',
    prob: 4
  },
  {
    name: 8,
    alg: [
      "l' U' L U' L' U2 l",
      "R U2 R' U2 R' F R F'",
      "y2 r' U' R U' R' U2 r"
    ],
    group: 'Small Lightning Bolt',
    prob: 4
  },
  {
    name: 9,
    alg: ["R U R' U' R' F R2 U R' U' F'"],
    group: 'Fish Shape',
    prob: 4
  },
  {
    name: 10,
    alg: [
      "R U R' U R' F R F' R U2 R'",
      "y2 r U R' U R U' R' U' r' R (U R U' R')"
    ],
    group: 'Fish Shape',
    prob: 4
  },
  {
    name: 11,
    alg: ["r U R' U R' F R F' R U2 r'", "y2 r' R2 U R' U R U2 R' U M'"],
    group: 'Small Lightning Bolt',
    prob: 4
  },
  {
    name: 12,
    alg: ["M' R' U' R U' R' U2 R U' R r'"],
    group: 'Small Lightning Bolt',
    prob: 4
  },
  {
    name: 13,
    alg: ["F U R U' R2 F' R U R U' R'", "r U' r' U' r U r' y' R' U R"],
    group: 'Knight Move Shape',
    prob: 4
  },
  {
    name: 14,
    alg: ["R' F R U R' F' R F U' F'"],
    group: 'Knight Move Shape',
    prob: 4
  },
  {
    name: 15,
    alg: ["l' U' l L' U' L U l' U l", "y2 r' U' r R' U' R U r' U r"],
    group: 'Knight Move Shape',
    prob: 4
  },
  {
    name: 16,
    alg: ["r U r' R U R' U' r U' r'"],
    group: 'Knight Move Shape',
    prob: 4
  },
  {
    name: 17,
    alg: [
      "F R' F' R2 r' U R U' R' U' M'",
      "y2 R U R' U R' F R F' U2 R' F R F'"
    ],
    group: 'Dot',
    prob: 4
  },
  {
    name: 18,
    alg: [
      "r U R' U R U2 r' r' U' R U' R' U2 r",
      "y R U2 R' R' F R F' U2 M' (U R U' r')"
    ],
    group: 'Dot',
    prob: 4
  },
  { name: 19, alg: ["r' R U R U R' U' M' R' F R F'"], group: 'Dot', prob: 4 },
  {
    name: 20,
    alg: ["r U R' U' M2 U R U' R' U' M'", "r' R U (R U R' U') M2 U R U' r'"],
    group: 'Dot',
    prob: 1
  },
  {
    name: 21,
    alg: ["R U2 R' U' R U R' U' R U' R'", "y R U R' U R U' R' U R U2 R'"],
    group: 'Cross',
    prob: 2
  },
  { name: 22, alg: ["R U2 (R2 U' R2 U' R2) U2 R"], group: 'Cross', prob: 4 },
  {
    name: 23,
    alg: ["R2 D' R U2 R' D R U2 R", "y2 R2 D R' U2 R D' R' U2 R'"],
    group: 'Cross',
    prob: 4
  },
  {
    name: 24,
    alg: ["r U R' U' r' F R F'", "y R U R D R' U' R D' R2"],
    group: 'Cross',
    prob: 4
  },
  {
    name: 25,
    alg: ["F' r U R' U' r' F R", "y' R' F R B' R' F' R B"],
    group: 'Cross',
    prob: 4
  },
  {
    name: 26,
    alg: ["(R U2 R') U' R U' R'", "y' R' U' R U' R' U2 R"],
    group: 'Cross',
    prob: 4
  },
  {
    name: 27,
    alg: ["R U R' U R U2 R'", "y' R' U2 (R U R' U) R"],
    group: 'Cross',
    prob: 4
  },
  {
    name: 28,
    alg: ["r U R' U' r' R U R U' R'"],
    group: 'Corners Oriented',
    prob: 4
  },
  {
    name: 29,
    alg: ["R U R' U' R U' R' F' U' F R U R'"],
    group: 'Awkward Shape',
    prob: 4
  },
  {
    name: 30,
    alg: ["F R' F R2 U' R' U' R U R' F2", "F U (R U2 R' U') R U2 R' U' F'"],
    group: 'Awkward Shape',
    prob: 4
  },
  { name: 31, alg: ["R' U' F U R U' R' F' R"], group: 'P Shape', prob: 4 },
  {
    name: 32,
    alg: ["L U F' U' L' U L F L'", "y2 S R U R' U' R F R f'"],
    group: 'P Shape',
    prob: 4
  },
  { name: 33, alg: ["R U R' U' R' F R F'"], group: 'T Shape', prob: 4 },
  {
    name: 34,
    alg: ["R U R2 U' R' F R U R U' F'", "R U R' U' B' R' F R F' B"],
    group: 'C Shape',
    prob: 4
  },
  {
    name: 35,
    alg: ["R U2 R' R' F R F' R U2 R'"],
    group: 'Fish Shape',
    prob: 4
  },
  {
    name: 36,
    alg: ["L' U' L U' L' U L U L F' L' F", "y2 R' U' R U' R' U R U R B' R' B"],
    group: 'W Shape',
    prob: 4
  },
  {
    name: 37,
    alg: ["F R' F' R U R U' R'", "F R U' R' U' R U R' F'"],
    group: 'Fish Shape',
    prob: 4
  },
  {
    name: 38,
    alg: ["R U R' U R U' R' U' R' F R F'"],
    group: 'W Shape',
    prob: 4
  },
  {
    name: 39,
    alg: ["L F' L' U' L U F U' L'", "y2 R B' R' U' R U B U' R'"],
    group: 'Big Lightning Bolt',
    prob: 4
  },
  {
    name: 40,
    alg: ["R' F R U R' U' F' U R"],
    group: 'Big Lightning Bolt',
    prob: 4
  },
  {
    name: 41,
    alg: ["R U R' U R U2 R' F R U R' U' F'"],
    group: 'Awkward Shape',
    prob: 4
  },
  {
    name: 42,
    alg: ["R' U' R U' R' U2 R F R U R' U' F'"],
    group: 'Awkward Shape',
    prob: 4
  },
  {
    name: 43,
    alg: ["F' U' L' U L F", "R' U' F R' F' R U R"],
    group: 'P Shape',
    prob: 4
  },
  {
    name: 44,
    alg: ["F U R U' R' F'", "y2 f R U R' U' f'"],
    group: 'P Shape',
    prob: 4
  },
  { name: 45, alg: ["F R U R' U' F'"], group: 'T Shape', prob: 4 },
  { name: 46, alg: ["R' U' R' F R F' U R"], group: 'C Shape', prob: 4 },
  {
    name: 47,
    alg: [
      "R' U' R' F R F' R' F R F' U R",
      "F' L' U' L U L' U' L U F",
      "y' F U R U' R' F' R U R' U R U2 R'"
    ],
    group: 'Small L Shape',
    prob: 4
  },
  {
    name: 48,
    alg: ["F R U R' U' R U R' U' F'"],
    group: 'Small L Shape',
    prob: 4
  },
  {
    name: 49,
    alg: ["r U' r2 U r2 U r2 U' r"],
    group: 'Small L Shape',
    prob: 4
  },
  {
    name: 50,
    alg: ["r' U r2 U' r2 U' r2 U r'"],
    group: 'Small L Shape',
    prob: 4
  },
  {
    name: 51,
    alg: ["F U R U' R' U R U' R' F'", "y2 f R U R' U' R U R' U' f'"],
    group: 'I Shape',
    prob: 4
  },
  {
    name: 52,
    alg: [
      "R U R' U R U' B U' B' R'",
      "R' F' U' F U' (R U R' U) R",
      "R U R' U R U' y R U' R' F'"
    ],
    group: 'I Shape',
    prob: 4
  },
  {
    name: 53,
    alg: [
      "l' U2 L U L' U' L U L' U l",
      "y2 r' U2 (R U R' U') R U R' U r",
      "y r' U' R U' R' U R U' R' U2 r"
    ],
    group: 'Small L Shape',
    prob: 4
  },
  {
    name: 54,
    alg: ["(r U2 R' U') R U R' U' R U' r'", "y r U R' U R U' R' U R U2 r'"],
    group: 'Small L Shape',
    prob: 4
  },
  {
    name: 55,
    alg: [
      "R' F R U R U' R2 F' R2 U' R' U R U R'",
      "y R U2 R2 U' R U' R' U2 F R F'"
    ],
    group: 'I Shape',
    prob: 2
  },
  {
    name: 56,
    alg: [
      "(r' U' r) U' R' U R U' R' U R r' U r",
      "(r U r') U R U' R' U R U' R' (r U' r')",
      "(r U r') U R U' R' U R U' M' U' r'"
    ],
    group: 'I Shape',
    prob: 2
  },
  {
    name: 57,
    alg: ["R U R' U' M' U R U' r'"],
    group: 'Corners Oriented',
    prob: 2
  }
];

export const pll = [
  {
    name: 'H',
    alg: ['M2 U M2 U2 M2 U M2', "M2 U' M2 U2 M2 U' M2"],
    group: 'Edges Only',
    prob: 1,
    arrows: [
      {
        s1: { face: 0, n: 1 },
        s2: { face: 0, n: 7 }
      },
      {
        s1: { face: 0, n: 7 },
        s2: { face: 0, n: 1 }
      },
      {
        s1: { face: 0, n: 3 },
        s2: { face: 0, n: 5 }
      },
      {
        s1: { face: 0, n: 5 },
        s2: { face: 0, n: 3 }
      }
    ]
  },
  {
    name: 'Z',
    alg: [
      "M' U M2 U M2 U M' U2 M2",
      "y M' U' M2 U' M2 U' M' U2 M2",
      "y M2 U M2 U M' U2 M2 U2 M'",
      "M2 U' M2 U' M' U2 M2 U2 M'"
    ],
    group: 'Edges Only',
    prob: 2,
    arrows: [
      {
        s1: { face: 0, n: 3 },
        s2: { face: 0, n: 7 }
      },
      {
        s1: { face: 0, n: 7 },
        s2: { face: 0, n: 3 }
      },
      {
        s1: { face: 0, n: 1 },
        s2: { face: 0, n: 5 }
      },
      {
        s1: { face: 0, n: 5 },
        s2: { face: 0, n: 1 }
      }
    ]
  },
  {
    name: 'Ua',
    alg: [
      "M2 U M U2 M' U M2",
      "R U' R U R U R U' R' U' R2",
      "y2 R2 U' R' U' R U R U R U' R"
    ],
    group: 'Edges Only',
    prob: 4,
    arrows: [
      {
        s1: { face: 0, n: 5 },
        s2: { face: 0, n: 3 }
      },
      {
        s1: { face: 0, n: 7 },
        s2: { face: 0, n: 5 }
      },
      {
        s1: { face: 0, n: 3 },
        s2: { face: 0, n: 7 }
      }
    ]
  },
  {
    name: 'Ub',
    alg: [
      "M2 U' M U2 M' U' M2",
      "R2 U (R U R' U') R' U' R' U R'",
      "y2 R' U R' U' R' U' (R' U R U) R2",
      "y2 R' U R' U' R3 U' (R' U R U) R2"
    ],
    group: 'Edges Only',
    prob: 4,
    arrows: [
      {
        s1: { face: 0, n: 3 },
        s2: { face: 0, n: 5 }
      },
      {
        s1: { face: 0, n: 5 },
        s2: { face: 0, n: 7 }
      },
      {
        s1: { face: 0, n: 7 },
        s2: { face: 0, n: 3 }
      }
    ]
  },
  {
    name: 'Aa',
    alg: [
      "x L2 D2 L' U' L D2 L' U L'",
      "y' x' L' U L' D2 L U' L' D2 L2",
      "y x R' U R' D2 R U' R' D2 R2",
      "y2 x' R2 D2 R' U' R D2 R' U R'"
    ],
    group: 'Adjacent Corner Swap',
    prob: 4,
    arrows: [
      {
        s1: { face: 0, n: 2 },
        s2: { face: 0, n: 6 }
      },
      {
        s1: { face: 0, n: 6 },
        s2: { face: 0, n: 0 }
      },
      {
        s1: { face: 0, n: 0 },
        s2: { face: 0, n: 2 }
      }
    ]
  },
  {
    name: 'Ab',
    alg: [
      "x' L2 D2 L U L' D2 L U' L",
      "y x L U' L D2 L' U L D2 L2",
      "y2 x R2 D2 R U R' D2 R U' R",
      "y' x' R U' R D2 R' U R D2 R2"
    ],
    group: 'Adjacent Corner Swap',
    prob: 4,
    arrows: [
      {
        s1: { face: 0, n: 8 },
        s2: { face: 0, n: 0 }
      },
      {
        s1: { face: 0, n: 0 },
        s2: { face: 0, n: 6 }
      },
      {
        s1: { face: 0, n: 6 },
        s2: { face: 0, n: 8 }
      }
    ]
  },
  {
    name: 'E',
    alg: [
      "x' L' U L D' L' U' L D L' U' L D' L' U L D",
      "x' R U' R' D R U R' D' R U R' D R U' R' D'"
    ],
    group: 'Diagonal Corner Swap',
    prob: 2,
    arrows: [
      {
        s1: { face: 0, n: 0 },
        s2: { face: 0, n: 6 }
      },
      {
        s1: { face: 0, n: 6 },
        s2: { face: 0, n: 0 }
      },
      {
        s1: { face: 0, n: 2 },
        s2: { face: 0, n: 8 }
      },
      {
        s1: { face: 0, n: 8 },
        s2: { face: 0, n: 2 }
      }
    ]
  },
  {
    name: 'F',
    alg: ["R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R"],
    group: 'Adjacent Corner Swap',
    prob: 4,
    arrows: [
      {
        s1: { face: 0, n: 1 },
        s2: { face: 0, n: 7 }
      },
      {
        s1: { face: 0, n: 7 },
        s2: { face: 0, n: 1 }
      },
      {
        s1: { face: 0, n: 2 },
        s2: { face: 0, n: 8 }
      },
      {
        s1: { face: 0, n: 8 },
        s2: { face: 0, n: 2 }
      }
    ]
  },
  {
    name: 'Ja',
    alg: [
      "x R2 F R F' R U2 r' U r U2",
      "y2 L' U' L F L' U' L U L F' L2 U L",
      "y' R' U L' U2 R U' R' U2 R L"
    ],
    group: 'Adjacent Corner Swap',
    prob: 4,
    arrows: [
      {
        s1: { face: 0, n: 1 },
        s2: { face: 0, n: 5 }
      },
      {
        s1: { face: 0, n: 5 },
        s2: { face: 0, n: 1 }
      },
      {
        s1: { face: 0, n: 2 },
        s2: { face: 0, n: 8 }
      },
      {
        s1: { face: 0, n: 8 },
        s2: { face: 0, n: 2 }
      }
    ]
  },
  {
    name: 'Jb',
    alg: ["R U R' F' R U R' U' R' F R2 U' R'"],
    group: 'Adjacent Corner Swap',
    prob: 4,
    arrows: [
      {
        s1: { face: 0, n: 5 },
        s2: { face: 0, n: 7 }
      },
      {
        s1: { face: 0, n: 7 },
        s2: { face: 0, n: 5 }
      },
      {
        s1: { face: 0, n: 2 },
        s2: { face: 0, n: 8 }
      },
      {
        s1: { face: 0, n: 8 },
        s2: { face: 0, n: 2 }
      }
    ]
  },
  {
    name: 'Ra',
    alg: [
      "R U' R' U' R U R D R' U' R D' R' U2 R'",
      "R U R' F' R U2 R' U2 R' F R U R U2 R'",
      "y' L U2 L' U2 L F' L' U' L U L F L2"
    ],
    group: 'Adjacent Corner Swap',
    prob: 4,
    arrows: [
      {
        s1: { face: 0, n: 1 },
        s2: { face: 0, n: 3 }
      },
      {
        s1: { face: 0, n: 3 },
        s2: { face: 0, n: 1 }
      },
      {
        s1: { face: 0, n: 2 },
        s2: { face: 0, n: 8 }
      },
      {
        s1: { face: 0, n: 8 },
        s2: { face: 0, n: 2 }
      }
    ]
  },
  {
    name: 'Rb',
    alg: [
      "R2 F R U R U' R' F' R U2 R' U2 R",
      "y' R' U2 R U2 R' F R U R' U' R' F' R2",
      "R' U2 R' D' R U' R' D R U R U' R' U' R"
    ],
    group: 'Adjacent Corner Swap',
    prob: 4,
    arrows: [
      {
        s1: { face: 0, n: 3 },
        s2: { face: 0, n: 7 }
      },
      {
        s1: { face: 0, n: 7 },
        s2: { face: 0, n: 3 }
      },
      {
        s1: { face: 0, n: 2 },
        s2: { face: 0, n: 8 }
      },
      {
        s1: { face: 0, n: 8 },
        s2: { face: 0, n: 2 }
      }
    ]
  },
  {
    name: 'T',
    alg: ["R U R' U' R' F R2 U' R' U' (R U R') F'"],
    group: 'Adjacent Corner Swap',
    prob: 4,
    arrows: [
      {
        s1: { face: 0, n: 3 },
        s2: { face: 0, n: 5 }
      },
      {
        s1: { face: 0, n: 5 },
        s2: { face: 0, n: 3 }
      },
      {
        s1: { face: 0, n: 2 },
        s2: { face: 0, n: 8 }
      },
      {
        s1: { face: 0, n: 8 },
        s2: { face: 0, n: 2 }
      }
    ]
  },
  {
    name: 'Y',
    alg: [
      "F R U' R' U' R U R' F' R U R' U' R' F R F'",
      "F R' F R2 U' R' U' R U R' F' R U R' U' F'"
    ],
    group: 'Diagonal Corner Swap',
    prob: 4,
    arrows: [
      {
        s1: { face: 0, n: 1 },
        s2: { face: 0, n: 3 }
      },
      {
        s1: { face: 0, n: 3 },
        s2: { face: 0, n: 1 }
      },
      {
        s1: { face: 0, n: 0 },
        s2: { face: 0, n: 8 }
      },
      {
        s1: { face: 0, n: 8 },
        s2: { face: 0, n: 0 }
      }
    ]
  },
  {
    name: 'V',
    alg: [
      "R' U R' U' y R' F' R2 U' R' U R' F R F",
      "R' U R' U' R D' R' D R' U D' R2 U' R2 D R2",
      "z D' R2 D R2 U R' D' R U' R U R' D R U' z'",
      "R U2 R' D R U' R U' R U R2 D R' U' R D2",
      "x' R' F R F' U R U2 R' U' R U' R' U2 R U R' U'"
    ],
    group: 'Diagonal Corner Swap',
    prob: 4,
    arrows: [
      {
        s1: { face: 0, n: 1 },
        s2: { face: 0, n: 5 }
      },
      {
        s1: { face: 0, n: 5 },
        s2: { face: 0, n: 1 }
      },
      {
        s1: { face: 0, n: 0 },
        s2: { face: 0, n: 8 }
      },
      {
        s1: { face: 0, n: 8 },
        s2: { face: 0, n: 0 }
      }
    ]
  },
  {
    name: 'Na',
    alg: [
      "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'",
      "z U R' D R2 U' R D' U R' D R2 U' R D'"
    ],
    group: 'Diagonal Corner Swap',
    prob: 1,
    arrows: [
      {
        s1: { face: 0, n: 3 },
        s2: { face: 0, n: 5 }
      },
      {
        s1: { face: 0, n: 5 },
        s2: { face: 0, n: 3 }
      },
      {
        s1: { face: 0, n: 2 },
        s2: { face: 0, n: 6 }
      },
      {
        s1: { face: 0, n: 6 },
        s2: { face: 0, n: 2 }
      }
    ]
  },
  {
    name: 'Nb',
    alg: [
      "R' (U R U' R') F' U' F R U R' F R' F' R U' R",
      "z D' R U' R2 D R' U D' R U' R2 D R' U"
    ],
    group: 'Diagonal Corner Swap',
    prob: 1,
    arrows: [
      {
        s1: { face: 0, n: 3 },
        s2: { face: 0, n: 5 }
      },
      {
        s1: { face: 0, n: 5 },
        s2: { face: 0, n: 3 }
      },
      {
        s1: { face: 0, n: 0 },
        s2: { face: 0, n: 8 }
      },
      {
        s1: { face: 0, n: 8 },
        s2: { face: 0, n: 0 }
      }
    ]
  },
  {
    name: 'Ga',
    alg: [
      "R2 U R' U R' U' R U' R2 (U' D) R' U R D'",
      "R2 u R' U R' U' R u' R2 y' R' U R"
    ],
    group: 'Adjacent Corner Swap',
    prob: 4,
    arrows: []
  },
  {
    name: 'Gb',
    alg: [
      "R' U' R (U D') R2 U R' U R U' R U' R2 D",
      "y F' U' F R2 u R' U R U' R u' R2"
    ],
    group: 'Adjacent Corner Swap',
    prob: 4,
    arrows: []
  },
  {
    name: 'Gc',
    alg: [
      "R2 U' R U' R U R' U R2 (U D') R U' R' D",
      "y2 R2 F2 R U2 R U2 R' F R U R' U' R' F R2",
      "R2 u' R U' R U R' u R2 y R U' R'"
    ],
    group: 'Adjacent Corner Swap',
    prob: 4,
    arrows: []
  },
  {
    name: 'Gd',
    alg: [
      "R U R' (U' D) R2 U' R U' R' U R' U R2 D'",
      "R U R' y' R2 u' R U' R' U R' u R2"
    ],
    group: 'Adjacent Corner Swap',
    prob: 4,
    arrows: []
  }
];

export default {
  oll,
  pll
};
