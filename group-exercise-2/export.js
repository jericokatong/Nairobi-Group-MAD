let nama = "Jeff";

let orang = {
  nama: "Klif",
  umur: 32,
  alamat: "Jl. Wiratama",
};

//export default membuat variabel, object, function menjadi data utama. Hanya boleh ada satu export default di setiap file tetapi export default dan export bisa digunakan bersamaan
export default function salam(user) {
  console.log(`Hai ${user}`);
}

//Mengekspor variabel nama object orang serta rename dengan menggunakan "as"
export { nama as name, orang as people };
