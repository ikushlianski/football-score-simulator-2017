import { capitalize, initial, last } from 'lodash';

const replacements = {
  a: 'o',
  b: 'p',
  e: 'i',
  i: 'e',
  m: 'l',
  n: 'm',
  o: 'a',
  t: 'd',
} as { [key: string]: string };

export function getUnlicensedPlayerName(name: string): string {
  const nameParts = name.split(' ');
  const lastNamePart = last(nameParts);
  const firstNameParts = initial(nameParts);

  if (!lastNamePart) return withoutLastLetter(name);

  const letterToReplace = getLetterToReplace(lastNamePart);

  if (!letterToReplace) return withoutLastLetter(name);

  const newLetter = replacements[letterToReplace];

  if (!newLetter) return withoutLastLetter(name);

  const replacedLastNamePart = capitalize(
    lastNamePart.replace(letterToReplace, newLetter),
  );

  const finalReplacedName = firstNameParts
    .join(' ')
    .concat(' ', replacedLastNamePart)
    .trim();

  if (finalReplacedName === name) return withoutLastLetter(name);

  return finalReplacedName;
}

function getLetterToReplace(name: string): string | undefined {
  return name
    .split('')
    .find((letter) => letter.toLocaleLowerCase() in replacements);
}

function withoutLastLetter(name: string) {
  return name.substring(0, name.length - 1);
}
