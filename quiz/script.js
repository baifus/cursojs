let perguntas = [
    {
    titulo: 'O Brasil foi campeão da Copa do Mundo quantas vezes?',
    alternativas: ['6','5','4','2002'] ,
    correta: 1
},
{
    titulo: 'Qual o apelido do Ronaldo Nazário de Lima?',
    alternativas: ['Ronaldinho Gaúcho','Ronaldo Fenômeno','Profeta','Ronaldinho Fenômeno'] ,
    correta: 1
},
{
    titulo: 'Quantas vezes o Palmeiras foi campeão mundial?',
    alternativas: ['2','0','1','51'] ,
    correta: 1
},
{
    titulo: `'Qual clube é conhecido como 'O mais querido'? `,
    alternativas: ['Flamengo','Palmeiras','Barcelona','Corinthians'] ,
    correta: 0
}
]
let app = {
 start: function(){
    this.Atualpos = 0
    this.totalPontos = 0
    // refatorei o código
    let alts = document.querySelectorAll('.alternativa');
    alts.forEach((element,index)=>{
        element.addEventListener('click',()=>{
       this.ChecaResposta(index);
        })
    })
    this.atualizaPontos();
    app.mostraquestao(perguntas[this.Atualpos]);
} ,
    
    mostraquestao: function(q){
        this.Qatual = q;
    //mostrando o titulo
    let tittleDiv = document.getElementById('titulo');
    tittleDiv.textContent = q.titulo;
    //mostrando as alternativas
    let alts = document.querySelectorAll('.alternativa');
    alts.forEach(function(element,index){
        element.textContent = q.alternativas[index];
        })
    },
    proximaperg: function(){
        this.Atualpos++;
        if(this.Atualpos == perguntas.length){
            this.Atualpos = 0;
        }
    },
     ChecaResposta: function(user){
            if(this.Qatual.correta == user){
                console.log('correta')
                this.totalPontos++;
                this.mostraresposta()
            } else {
                console.log('errada')
                this.mostraresposta()
            }
            this.atualizaPontos();
            this.proximaperg();
            this.mostraquestao(perguntas[this.Atualpos]);

        }, 
        atualizaPontos: function(){
            let scoreDiv = document.getElementById('pontos');
            scoreDiv.textContent = `Sua pontuação é ${this.totalPontos}`
        },
        mostraresposta: function(correto){
            let resultDiv = document.getElementById("result");
            let result = ''
            // formatar como a mensagem será exibida
            if(correto == true){
                result = 'Resposta Correta'
            } else {
                //obtendo questão atual
                let pergunta = perguntas[this.Atualpos];
                // obtendo o índice da resposta correta 
                let cindice = pergunta.correta
                // obtendo o txt
                let ctexto = pergunta.alternativas[cindice]
                result = `Incorreto! Resposta Correta ${ctexto}`


            }
            resultDiv.textContent = result

        }
       
        
}
 app.start()
