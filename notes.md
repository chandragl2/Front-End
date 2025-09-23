# Catatan DOM Selection

## Daftar Method DOM Selection

| Method                   | Contoh                                      | Fungsi                                                                                                |
| ------------------------ | ------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| getElementById()         | `document.getElementById('display')`        | Mengembalikan satu elemen yang memiliki nilai id `"display"`.                                         |
| getElementsByName()      | `document.getElementsByName('button')`      | Mengembalikan banyak elemen (HTMLCollection) yang memiliki attribute `name` dengan nilai `"button"`.  |
| getElementsByClassName() | `document.getElementsByClassName('button')` | Mengembalikan banyak elemen (HTMLCollection) yang memiliki attribute `class` dengan nilai `"button"`. |
| getElementsByTagName()   | `document.getElementsByTagName('div')`      | Mengembalikan banyak elemen (HTMLCollection) yang merupakan `<div>` element.                          |
| querySelector()          | `document.querySelector('.button')`         | Mengembalikan elemen pertama (node) yang menerapkan class `"button"`.                                 |
| querySelectorAll()       | `document.querySelectorAll('.button')`      | Mengembalikan banyak node dalam bentuk NodeList yang menerapkan class `"button"`.                     |

---

> **Catatan:**  
> Pada methods di atas, ada yang mengembalikan nilai HTML elemen tunggal dan ada juga yang mengembalikan koleksi elemen.

1. Membuat Elemen HTML
   Contohnya, jika kita ingin membuat sebuah elemen HTML dengan tag <p>, sintaksnya adalah sebagai berikut:
   const newElement = document.createElement('p');
