function verbCorrect(pronoun, verb) { //прыгать, любить, страдать, я, ты, они, он, она, мы, вы
  // const firstConjugation = {
  //   person1: {
  //     singular: 'ю',
  //     plural: 'ем',
  //   },
  //   person2: {
  //     singular: 'ешь',
  //     plural: 'ете',
  //   },
  //   person3: {
  //     singular: 'ет',
  //     plural: 'ут',
  //   }
  // };

  // const firstConjugationEndings = ['ать', 'оть', 'уть', 'еть', 'ть', 'ять'];

  // switch(pronoun) {
  //   case 'я': {
  //     return pronoun + ' ' + verb.replace('ть', firstConjugation.person1.singular)
  //   }
  //   case 'ты': {
  //     return pronoun + ' ' + verb.replace('ть', firstConjugation.person2.singular)
  //   }
  //   case pronoun === 'он' || pronoun === 'она' || pronoun === 'оно': {
  //     return pronoun + ' ' + verb.replace('ть', firstConjugation.person3.singular)
  //   }
  // }

























  const incomeVerbEnd = 'ть';
  const verbEndings = ['ю', 'ешь', 'ет', 'ют', 'ем', 'ете'];

  if (verb.includes('ова')) {
    verb = verb.replace('ова', 'у');
  }

  if (pronoun == 'я') {
    return pronoun + ' ' + verb.replace('ть', verbEndings[0]);
  } else if (pronoun == 'ты') {
    return pronoun + ' ' + verb.replace('ть', verbEndings[1]);
  }
  else if (pronoun == 'он' || pronoun ==  'она' || pronoun ==  'оно') {
    return pronoun + ' ' +  verb.replace(incomeVerbEnd, verbEndings[2]);
  } else if (pronoun == 'они') {
    return pronoun + ' ' +  verb.replace(incomeVerbEnd, verbEndings[3]);
  } else if (pronoun == 'мы') {
    return pronoun + ' ' +  verb.replace(incomeVerbEnd, verbEndings[4]);
  } else if (pronoun == 'вы') {
    return pronoun + ' ' +  verb.replace(incomeVerbEnd, verbEndings[5]);
  }

}

console.log(verbCorrect('я', 'думать'));
console.log(verbCorrect('оно', 'стрелять'));
// console.log(verbCorrect('мы', 'превозмогать'));
// console.log(verbCorrect('оно', 'любить'));
// console.log(verbCorrect('они', 'хотеть'));
console.log(verbCorrect('ты', 'критиковать'));
console.log(verbCorrect('ты', 'бегать'));
// console.log(verbCorrect('вы', 'бить'));