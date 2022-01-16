import { groupBy } from "ts-group-by";

const data = [
    { agency: "Agency A", patient: "Carol baskin", gender: "F" },
    { agency: "Agency A", patient: "Carol baskin", gender: "F" },
    { agency: "Agency A", patient: "Esther Friedman", gender: "M" },
    { agency: "Agency A", patient: "Zaritskaia Raia", gender: "M" },
    { agency: "Agency B", patient: "Judy Gottesman", gender: "F" },
];

const grouped = groupBy(data, "agency", "gender");

console.log(grouped);