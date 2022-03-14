export function MapJSXComponents(array) {
  return array.map((item, index) => <li key={index}>{item}</li>);
}
