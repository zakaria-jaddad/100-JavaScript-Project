export default function fixDescription(prevDescription) {
  if (prevDescription.length < 20) return prevDescription;

  let newDesciption = prevDescription.split(" ");

  return newDesciption.splice(0, 25).join(" ") + "...";
}
