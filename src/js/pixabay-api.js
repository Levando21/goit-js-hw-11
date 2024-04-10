export default function fetchData() {
  return fetch(
    'https://pixabay.com/api/?key=33885109-a6cb8296a367a3cf09d2759c8&q=big-nature-japan&image_type=photo&pretty=true'
  ).then(response => response.json());
}
