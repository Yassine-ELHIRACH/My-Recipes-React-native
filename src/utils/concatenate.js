export default function concatenate(array = [])
{
  let result;

  array.forEach((item, index) => index === 0 ? result = item : result += item)

  return result;
}