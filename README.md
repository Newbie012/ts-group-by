# ts-group-by

This package allows you to group an array by one or more levels while maintaining type safety.

### How to install

```bash
npm install ts-group-by
```

### Basic usage:

```typescript
import { groupBy } from "ts-group-by";

const data = [
    { agency: "Agency A", patient: "Carol baskin", gender: "F" },
    { agency: "Agency A", patient: "Carol baskin", gender: "F" },
    { agency: "Agency A", patient: "Esther Friedman", gender: "M" },
    { agency: "Agency A", patient: "Zaritskaia Raia", gender: "M" },
    { agency: "Agency B", patient: "Judy Gottesman", gender: "F" },
];

const groupedByAgency = groupBy(data, "agency");
// : Map<string, { agency: string; patient: string; gender: string; }[]>
// = Map {
//     'Agency A' => [
//         { agency: 'Agency A', patient: 'Carol baskin', gender: 'F' },
//         { agency: 'Agency A', patient: 'Carol baskin', gender: 'F' },
//         { agency: 'Agency A', patient: 'Esther Friedman', gender: 'M' },
//         { agency: 'Agency A', patient: 'Zaritskaia Raia', gender: 'M' }
//      ],
//     'Agency B' => [
//         { agency: 'Agency B', patient: 'Judy Gottesman', gender: 'F' }
//     ]
// }
```

### Group by two levels:

```typescript
const groupedByAgencyAndGender = groupBy(data, "agency", "gender");
// : Map<string, Map<string, { agency: string; patient: string; gender: string; }[]>>
// = Map {
//     'Agency A' => Map {
//         'F' => [
//             { agency: 'Agency A', patient: 'Carol baskin', gender: 'F' },
//             { agency: 'Agency A', patient: 'Carol baskin', gender: 'F' }
//         ],
//         'M' => [
//             { agency: 'Agency A', patient: 'Esther Friedman', gender: 'M' },
//             { agency: 'Agency A', patient: 'Zaritskaia Raia', gender: 'M' }
//         ]
//     }
//     'Agency B' => Map {
//         'F' => [
//             { agency: 'Agency B', patient: 'Judy Gottesman', gender: 'F' }
//         ]
//     }
// }
```