function join(arr, separator) {
  if (arr.length == 0)
    return '';
  else 
    return arr.reduce((joined, current) => joined + separator + current);

}
