export function getResourceTypeByElement(element: HTMLElement) {
  if (element.classList.contains("films")) {
    return "films";
  } else if (element.classList.contains("series")) {
    return "series"
  } else if (element.classList.contains("cartoons")) {
    return "cartoons";
  }

  return "unknown";
}
