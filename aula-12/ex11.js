var idade = 15;

console.log(`Você tem ${idade} anos`);

if (idade >= 16 && idade < 18){
    console.log('Voto optativo');
}else if(idade > 18 && idade < 65){
    console.log('voto Obrigatorio');
}else if(idade < 16) {
    console.log('voto insento')
}else{
    console.log('voto optativo');
}