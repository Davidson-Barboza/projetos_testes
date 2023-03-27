var idade = 60
if (idade < 16){
    console.log('Não vota')
} else {
    if(idade >= 16 && idade < 18 || idade >= 60 ){
        console.log('Voto opicional')
    } else {
        console.log('Vota')
    }
}
