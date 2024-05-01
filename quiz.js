document.addEventListener('DOMContentLoaded', function() {
    let score = 0;
  
    let answer1 = prompt("Pergunta 1: Quem é amplamente creditado como o inventor da bicicleta moderna?");
    if (answer1 && (answer1.toLowerCase() === 'karl drais' || answer1.toLowerCase() === 'drais')) {
      score++;
    }
  
    let answer2 = prompt("Pergunta 2: Qual é o nome do evento de ciclismo mais famoso e prestigiado do mundo?");
    if (answer2 && answer2.toLowerCase() === 'tour de france') {
      score++;
    }
  
    let answer3 = prompt("Pergunta 3: Qual é o componente da bicicleta que transmite energia do ciclista para as rodas?");
    if (answer3 && answer3.toLowerCase() === 'pedal') {
      score++;
    }
  
    let answer4 = prompt("Pergunta 4: Onde foi lançada a bicicleta de compartilhamento de bicicletas 'Vélib' em 2007?");
    if (answer4 && (answer4.toLowerCase() === 'paris' || answer4.toLowerCase() === 'paris, frança')) {
      score++;
    }
  
    let answer5 = prompt("Pergunta 5: Em que ano foi inventada a primeira bicicleta?");
    if (answer5 && answer5 === '1817') {
      score++;
    }
  
    let answer6 = prompt("Pergunta 6: Qual é o termo usado para descrever o ato de andar de bicicleta sem usar as mãos?");
    if (answer6 && answer6.toLowerCase() === 'andar de mãos livres') {
      score++;
    }
  
    let answer7 = prompt("Pergunta 7: Qual é o nome da competição de ciclismo de longa distância realizada na França anualmente desde 1903?");
    if (answer7 && answer7.toLowerCase() === 'tour de france') {
      score++;
    }
  
    let answer8 = prompt("Pergunta 8: Qual é o nome da bicicleta projetada para ser usada em estradas pavimentadas?");
    if (answer8 && answer8.toLowerCase() === 'bicicleta de estrada') {
      score++;
    }
  
    let answer9 = prompt("Pergunta 9: Qual é o termo para uma bicicleta com suspensão projetada para absorver impactos em terrenos acidentados?");
    if (answer9 && answer9.toLowerCase() === 'bicicleta de montanha') {
      score++;
    }
  
    let answer10 = prompt("Pergunta 10: Em que cidade a bicicleta de compartilhamento de bicicletas 'Citi Bike' foi lançada pela primeira vez em 2013?");
    if (answer10 && (answer10.toLowerCase() === 'nova iorque' || answer10.toLowerCase() === 'new york')) {
      score++;
    }
    
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "<h2>Resultado do Quiz</h2>";
    resultsDiv.innerHTML += "Parabéns <p>Você acertou " + score + " de 10 perguntas.</p>";
  });
  