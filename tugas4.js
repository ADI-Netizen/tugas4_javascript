var a = 180, b = 160, c = 170
var tertinggi = "", tengah = "", pendek = ""

if (a > b) {
    if (a > c) {
        if (b > c) {
            tertinggi = a;
            tengah = b;
            pendek = c;
        } else {
            tertinggi = a;
            tengah = c;
            pendek = b;
        }
    }
    else {
        tertinggi = c;
        tengah = a;
        pendek = b;
    }
} else {
    if (b > c) {
        if (a > c) {
            tertinggi = b;
            tengah = a;
            pendek = c;
        } else {
            tertinggi = b;
            tengah = c;
            pendek = a;
        }
    } else {
        tertinggi = c;
        tengah = b;
        pendek = a;
    }
}

console.log("Tertinggi", tertinggi)
console.log("Medium", tengah)
console.log("Terpendek", pendek)