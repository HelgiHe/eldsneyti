export default function markerBackground(company) {
  switch (company) {
    case 'Atlantsolía':
      return '#03adef';
    case 'Costco Iceland':
      return '#326699';
    case 'Dælan':
    case 'N1':
      return '#df042b';
    case 'Orkan X':
    case 'Orkan':
      return '#ec028c';
    case 'ÓB':
      return '#ffe202';
    case 'Olís':
      return '#00963e';
    default:
      return '#fff';
  }
}
